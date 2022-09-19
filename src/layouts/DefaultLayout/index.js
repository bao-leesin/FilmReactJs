import Header from "~/layouts/components/Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import styles from "./DefaultLayout.module.scss";
import Search from "~/layouts/components/Search";

import classNames from "classnames/bind";
import {useState,useContext,useEffect } from 'react';


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const list = [
    { image: "https://vcdn-ngoisao.vnecdn.net/2022/02/08/cat1-6063-1644307822.jpg", tag: "bitcoin", name: "zoomBit" },
    { image: "https://kenh14cdn.com/2016/meo3-1471521215699.jpg", tag: "ethereum", name: "zoomMerge" },
    { image: "https://afamilycdn.com/150157425591193600/2020/5/12/screenshot16-copy-15892840396681802708250.jpg", tag: "cardano", name: "Vasil is Comming" },
  ];
  
  const [searchInner, setSearchInner] = useState(true);
  const [searchHeader, setSearchHeader] = useState(false);

  useEffect(() => {
    console.log('use');
    const hideSearchValue = 150
    window.addEventListener('scroll', () =>{
    setSearchHeader(window.scrollY >= hideSearchValue)
    setSearchInner(window.scrollY < hideSearchValue)        
  }) }, []);

  return (  
    <div className={cx('wrapper')}>
      <Header search = {searchHeader}/>
     <div className={cx('container')}>
        <div className={cx('intro')}>
          <h1>CASINO</h1>
          <h2>Dân chơi không sợ mưa rơi</h2>
        </div>
        <div className={cx("main")}>
          <Sidebar/>
          <div className={cx('inner')}> 
            <div className={cx('search-default')} 
            >
             {!!searchInner ?
             <Search/> :
             <></>
            }
              </div>
            <Inner>
            {list}
          </Inner>
          </div>
          
        </div>
     </div>
    </div>
  );
}

export default DefaultLayout;
