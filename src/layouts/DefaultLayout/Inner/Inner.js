import classNames from "classnames/bind";
import styles from "./Inner.module.scss";
import PropTypes from "prop-types";
import Search from "~/layouts/components/Search";


const cx = classNames.bind(styles);

function Inner({children, search}) {
  
  const list = children
  
  return (
    
     <div className={cx('wrapper')}>
        <div className={cx('search-default')} 
            >
             {!!search ?
             <Search/> :
             <></>
            }
        </div>
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

Inner.propTypes = {
  children: PropTypes.array,
  search: PropTypes.bool
}

export default Inner;
