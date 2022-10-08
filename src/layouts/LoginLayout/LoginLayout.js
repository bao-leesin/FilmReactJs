import Header from "~/layouts/components/Header";
import styles from "./LoginLayout.module.scss";
import Button from "~/components/Button";

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

  useEffect(() => {

  }, []);

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

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <form method="get" className={cx("form-login")}>
          <h1 className={cx("form-heading")}>Form Log in</h1>
          <div className={cx("form-group")}>
            <FontAwesomeIcon icon={faUser}  onClick = {  () => { userRef.current.focus()} } />
            <input
              required
              type="text"
              className={cx("form-input")}
              placeholder="Username"
              ref={userRef}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
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
              onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
            />
            <FontAwesomeIcon className={cx("eye")} icon={eye} onClick={handleContentPassword}/>
          </div>
          <div className={cx("btn-login")}>
            <Button loginBtn to={config.routes.home}> Log in </Button>
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
