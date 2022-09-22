import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes  from "prop-types";

import styles from "./Suggestion.module.scss";

const cx = classNames.bind(styles);

function Suggestion({data}) {
    const full_name = data.full_name
    return ( 
        <div className={cx('wrapper')}>
            <Link to = {`/@${data.id}`}> {full_name} </Link>
        </div>
     );
}

Suggestion.propTypes = {
    data: PropTypes.object
}

export default Suggestion;