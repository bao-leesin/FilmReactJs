import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

// Xem lại vid #3 để custom lại button
const cx = classNames.bind(styles);

function Button({loginBtn,leftIcon,rightIcon,disabled,menuItem,
    to,href,children,onClick,...passProps}) {

    let Comp = 'button'
    //to là link nội bộ
    //href là link ngoài

    const _props = {
        onClick,
        ...passProps,
    };

  
    if (disabled) {
          // Lọc sự kiện chứa On ở đầu, rồi cho đi bụi luôn
       Object.keys(_props).forEach (key =>{
            if (key.startsWith('On') && typeof _props[key] === 'function') {
                delete _props[key]
            }
       })
    }
    else if (to) {
        _props.to = to
        Comp = Link
    }
    else if (href){
        _props.href = href
        Comp = 'a'
    }

    const wrapper =cx('wrapper',
    {loginBtn,
    disabled,
    menuItem
    })

    
//css tiếp cái menuItem với icon
   
    return ( 
        <Comp  className={wrapper} {..._props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon} </span>}
            <span className={cx('title')} > {children} </span>
            {rightIcon && <span className={cx('icon')}> {rightIcon} </span>}
        </Comp>
     );
}

export default Button;