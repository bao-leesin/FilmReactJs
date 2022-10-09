import Tippy from "@tippyjs/react/headless";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import { useDebounce } from "~/hooks";
import styles from "./Search.module.scss";
import { Wrapper as WrapperPopper } from "../Popper";
import Suggestion from "../Popper/Suggestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import * as searchService from "~/apiServices/searchService";

const cx = classNames.bind(styles);

function Search({}) {
  const [visible, setVisible] = useState(false);
  const showTippy = () => setVisible(true);
  const hideTippy = () => setVisible(false);

  const [typing, setTyping] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef();

  const debounceTyping = useDebounce(typing, 1000);

  useEffect(() => {
    if (!typing.trim()) {
      setSuggestions([]);
      return;
    }    

    const fetchSearchSuggestion = async () => {
      const res = await searchService.searchSuggestionService(debounceTyping)
      setSuggestions(res);
    }

    fetchSearchSuggestion();

  }, [debounceTyping]);

  const handleSearchTypingError = (e) => {
    const searchTyping = e.target.value
    if (!searchTyping.startsWith(' ') ) {
      setTyping(searchTyping);
    } 
  }

  return (
    <div className={cx("wrapper")}>
      <Tippy
        offset={[0, 0]}
        interactive
        placement="bottom-start"
        visible={visible}
        onClickOutside={hideTippy}
        render={ (attrs) => !!typing && (
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
            onChange={handleSearchTypingError}
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
