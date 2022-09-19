import Tippy from "@tippyjs/react/headless";
import { useState, useEffect, useRef } from "react";
import {useDebounce} from "~/hooks";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as WrapperPopper } from "../Popper";
import Suggestion from "../Popper/Suggestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search({}) {
  const [visible, setVisible] = useState(false);
  const showTippy = () => setVisible(true);
  const hideTippy = () => setVisible(false);

  const [typing, setTyping] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef();

  const debounceTyping = useDebounce(typing,500)

  useEffect(() => {
    if (!typing.trim()) {
      setSuggestions([])
      return
    }
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceTyping)}&type=less`)
      .then((res) => res.json())
      .then((posts) => {
        setSuggestions(posts.data)
      })
  }, [debounceTyping]);

  return (
    <div className={cx("wrapper")}>
      <Tippy
        offset={[0, 0]}
        interactive
        placement="bottom-start"
        visible={visible}
        onClickOutside={hideTippy}
        render={(attrs) => (
          <div className={cx("suggestion")} tabIndex="-1" {...attrs}>
            <WrapperPopper>
              {suggestions.map((suggestion) => (
                <Suggestion key={suggestion.id} data={suggestion} />
              ))}
            </WrapperPopper>
          </div>
        )}
      >
        <div className={cx("search-container")}>
          <input
            ref={searchRef}
            className={cx("search")}
            value={typing}
            placeholder="Type to search"
            spellCheck="false"
            onClick={showTippy}
            onChange={(e) => {
              setTyping(e.target.value);
            }}
          />
          {!!typing && (
            <button
              className={cx("clear")}
              onClick={() => {
                setVisible(false);
                setTyping("");
                searchRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          )}
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
