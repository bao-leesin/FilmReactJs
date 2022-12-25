import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import PropTypes from "prop-types";
import * as showService from "../../../apiServices/showService"
import { useState } from "react";
const cx = classNames.bind(styles);


function Sidebar() {

  
  const [filmTop, setFilmTop] = useState([]);
  const [genre, setGenre] = useState([]);

  const showGenre = async () => {
    const data =  await showService.showGenres()
    const genres= data.map(value  => {
      return value.tenTheLoai
    })
    console.log(genres);
    setGenre(genres)
  }
  showGenre()
  const filterList = [
    { info: "Top", keywords: ['View,New,Rating'] },
    { info: "Genre", keywords: [genre] },
    { info: "cardano" , keywords: []}
  ];

  return (
    <aside className={cx("wrapper")}>
      <div className={cx("filters")}>
        {filterList.map((filter, index) => (
          <div key={index} className={cx("filter")}>
            <h2 className={cx("info")}>{filter.info}</h2>
            <ul className={cx("keywords")}>
            {filter.keywords.map( (keyword,index) =>
              (<li key={index} className={cx('keyword')} >
                <span>{keyword}</span>
              </li>)
              )}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
