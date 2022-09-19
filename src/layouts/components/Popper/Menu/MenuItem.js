import Button from "~/components/Button"

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({item, onClick}) {

    return ( 
    <div className={cx('menu-item')}>
        <Button to = {item.to} onClick={onClick}   menuItem leftIcon = {item.icon} > {item.key} </Button>
    </div> 
    );
    
}

export default MenuItem;