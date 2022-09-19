import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { useEffect } from "react";

import { Wrapper as WrapperPopper } from "./../../Popper";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Extend from "./Extend";

const cx = classNames.bind(styles);
const defaultFn = () =>{}

function Menu({ children, items = [] , onChange = defaultFn}) {

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {
    //call api lay ra du lieu suggestions
  }, []);


  const [menu,setMenu] = useState([{item: items}])

  const current = menu[menu.length - 1]

  const renderItem = () => {
    return current.item.map( (item,index) => { 
    const haveExtension = !!item.extension
      
      return <MenuItem key={index} item={item} onClick = {() => {
        if(haveExtension){
          setMenu(prev => [...prev, item.extension])
        }
        else{
          onChange(item)
        }
      }}/>

    })
  };

  return (
    <Tippy
      offset={[0,4]}
      placement="bottom-start"
      interactive
      visible={visible}
      onClickOutside={hide}
      render={(attrs) => (
        <div className={cx('suggestion')} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            { menu.length > 1 && 
            (<Extend 
            title={current.title} 
            onBack={ () => 
            {setMenu( prev =>  prev.slice(0,prev.length - 1)) }
            }/>
            )}
            {renderItem()}
          </WrapperPopper>
        </div>
      )}
      onHide={() => {setMenu( prev =>  prev.slice(0,1))}}
    >
      <button className={cx("more-btn")} onClick={visible ? hide : show}>
        {children}
      </button>
    </Tippy>
  );
}

export default Menu;
