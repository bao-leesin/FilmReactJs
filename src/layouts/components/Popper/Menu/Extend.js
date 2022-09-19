import {  faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Extend ({title, onBack}) {
    return (  
        <header className={cx('header')}>  
            <button className={cx('back-btn')} onClick = {onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('title')}> {title}  </h4>
        </header>

    );
}

//Tư duy bây giờ là dùng mảng, ví dụ:

// [   {tên chức năng, [mảng chưa thành phần cấp dưới]}   ]



export default Extend ;