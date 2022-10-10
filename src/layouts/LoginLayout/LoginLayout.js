import Header from "~/layouts/components/Header";
import styles from "./LoginLayout.module.scss";
import Button from "~/components/Button";

import { useDebounce,Validator } from "~/hooks";
import classNames from "classnames/bind";
import { useState, useEffect,useRef } from "react";
import config from "~/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function LoginLayout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [eye, setEye] = useState(faEye);

  const userRef = useRef()
  const passwordRef = useRef()


  const handleContentPassword = () => {
    if (password) {
      if (passwordType === 'password') {
        setPasswordType('text')
        setEye(faEyeSlash)
      } else {
        setPasswordType('password')
        setEye(faEye)
      }
    }
  }

  const setPointerEnd = (e) => {
    let temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <form method="get" className={cx("form-login")} onSubmit={handleSubmit}>
          <h1 className={cx("form-heading")}>Form Log in</h1>
          <div className={cx("form-group")}>
            <FontAwesomeIcon icon={faUser}  onClick = {  () => { userRef.current.focus()} } />
            <input
              required
              type="text"
              className={cx("form-input")}
              placeholder="Username/Email"
              ref={userRef}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={(e)=>setPointerEnd(e)}
              onBlur={(e) => {
                Validator.isRequired(e);
              }}
            />
          </div>
          <div className={cx("form-group")}>
            <FontAwesomeIcon  icon={faKey} onClick={() => {passwordRef.current.focus()}}  />
            <input
            required  
              ref={passwordRef}
              type={passwordType}
              className={cx("form-input")}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={(e)=>setPointerEnd(e)}
              onBlur={(e) => {
                Validator.isRequired(e);
              }}
            />
            <FontAwesomeIcon className={cx("eye")} icon={eye} onClick={handleContentPassword}/>
          </div>
          <div className={cx("btn-login")}>
            <Button loginBtn type={'submit'}> Log in </Button>
          </div>
          <div className={cx("form-group")}>
            <Button to={config.routes.register}> Register </Button>
            <Button to={config.routes.forgotPwd}> Forgot password </Button>
          </div>
          <div className={cx("media-btn")}>
            <Button googleBtn> GOOGLE </Button>
            <Button facebookBtn> Facebook </Button>
          </div>
              
        </form>
      </div>
    </div>
  );
}

export default LoginLayout;
