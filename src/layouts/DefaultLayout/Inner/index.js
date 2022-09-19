import classNames from "classnames/bind";
import styles from "./Inner.module.scss";


const cx = classNames.bind(styles);

function Inner(children) {
  
  const list = children.children
  
  return (
    
     <div className={cx('wrapper')}>
        <div className={cx("guild-list")}>
          {list.map((item, index) => (
              <a href="https://www.facebook.com/" className={cx("item")} key={index}>
               <div className={cx('item-img')}><img src={item.image} alt='nope'></img></div>
               <div className={cx('item-content')}>
                 <h3> {item.tag}</h3>
                 <p>{item.name}</p>
              </div>
              </a>
          ))}
        </div>
     </div>
    
  );
}

export default Inner;
