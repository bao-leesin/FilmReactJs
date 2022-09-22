import Button from "~/components/Button"
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({item, onClick}) {
    return ( 
    <div className={cx('menu-item')}>
        <Button to = {item.to} onClick={onClick}  menuItem leftIcon = {item.icon} > {item.key} </Button>
    </div> 
    );   
}

MenuItem.propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.object
}

export default MenuItem;