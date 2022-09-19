import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

const filterList = [
  { info: "bitcoin", keywords: ['asf','0fs','600','naruto'] },
  { info: "ethereum", keywords: ['asf','0fs','600','sasuke'] },
  { info: "cardano" , keywords: ['asf','0fs','600','sakura']}
];

function Sidebar() {
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
