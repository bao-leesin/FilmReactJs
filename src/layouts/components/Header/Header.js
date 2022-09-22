import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Button from "../../../components/Button";
import Menu from "../Popper/Menu/Menu";
import { MenuIcon } from "../../../components/Icons";
import Image from "~/components/Images";
import Search from "~/layouts/components/Search";
import images from "~/assets/images";
import config from "~/config";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faLanguage, faQuestionCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const loginId = true

const cx = classNames.bind(styles);
const item_menu_beforeLogin = [
  {
    icon: <FontAwesomeIcon icon={faLanguage}/>,
    key: 'English',
    extension: {
      title: 'Language',
      item:[ {key:'English'},{key:'Tiếng Việt'}]
    }
  },

  {
    icon: <FontAwesomeIcon icon={faQuestionCircle}/>,
    key: 'Feedback and Help'
  },
]

const handleMenu = menuItem => {
}

const item_menu_after_login =[
  {
    icon: <FontAwesomeIcon  icon={faGear}/>,
    key: 'Setting',
  },
  ...item_menu_beforeLogin,
  {
    icon: <FontAwesomeIcon  icon={faRightFromBracket}/>,
    key: 'Log out',
  }

]

function Header({search}) {

  return (
<header className={cx('header')}>
      <div className={cx("wrapper")} >
        <Link to={config.routes.home}><img src={images.logo} alt="anh khong ra" className={cx("logo")} />  </Link>
         <div className={cx("search-space")}>
       { !!search ? 
          (<Search/> ):
        (<>
        </>)  
         }
         </div>
        <div className={cx("navbar")}>
          <div className={cx("active-navbar")}>
            <Link to="">Home</Link>
            <Link to="">Knowledge</Link>
            <Link to="">Auction</Link>
          </div>

        <div className={cx('actions')}>
            {loginId ?
            (<div className={cx('header-actions')}>
                <Button to={config.routes.guide} guideBtn> Join Guild </Button>
                <Button to={config.routes.guide} guideBtn> Create Guild </Button>
            </div>)
            :
            (
            <Button to="/home" loginBtn>
              Log in
            </Button>
          ) }
            <Menu
            items = {loginId ?
              item_menu_after_login :
              item_menu_beforeLogin}
              onChange={handleMenu}
            >
             {  loginId ?
             (<div className={cx('avatar-user')}>
              <Image
              src="https://media3.giphy.com/media/dXckBa1HDG86RqUh19/giphy.gif"
              fallback="https://img.freepik.com/free-vector/red-prohibited-sign_1284-42862.jpg?w=2000"
              />
              </div>) :
               (<MenuIcon/>)
              }
            </Menu>
        </div>
        </div>
      </div>
    </header>
  );

  Header.propTypes = {
    search: PropTypes.bool
  }
}  
export default Header;
