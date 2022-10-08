import Header from "~/layouts/components/Header";
import styles from "./RegisterLayout.module.scss";
import Button from "~/components/Button";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faKey, faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect ,useRef} from "react";
import  config  from "~/config";
const cx = classNames.bind(styles);

function RegisterLayout() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [eye, setEye] = useState(faEye);

  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  const handleContentPassword =  (e) => {
  
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
        <form method="get" className={cx("form-register")}>
          <h1 className={cx("form-heading")}>Form register</h1>
          <div className={cx("form-group")}>
          <FontAwesomeIcon icon={faUser}  onClick = {  () => { usernameRef.current.focus()} } 
          />
            <input
              required
              type="text"
              className={cx("form-input")}
              placeholder="Username"
              value={username}
              ref={usernameRef}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
            />
          </div>
          <div className={cx("form-group")}>
          <FontAwesomeIcon  icon={faKey} onClick={() => {passwordRef.current.focus()}}  
          />
          
            <input
              required
              type={passwordType}
              className={cx("form-input")}
              placeholder="Password"
              value={password}
              ref={passwordRef}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
            />
          <FontAwesomeIcon 
          className={cx("eye")} 
          icon={eye} 
          onClick={handleContentPassword}/>
          </div>
          <div className={cx("form-group")}>
            <FontAwesomeIcon icon={faMailBulk} onClick={() => {emailRef.current.focus()}}   />
            <input
              required={true}
              type="email"
              className={cx("form-input")}
              placeholder="Email"
              value={email}
              ref={emailRef}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={(e) => {
                var temp_value = e.target.value
                e.target.value = ''
                e.target.value = temp_value}}
            />
          </div>
          <div className={cx('btn-login')}><Button loginBtn to={config.routes.home}> Register</Button></div>
         <div className={cx('media-btn')}>
            <Button googleBtn> GOOGLE </Button>
            <Button facebookBtn> Facebook </Button>
         </div>
      
        </form>
      </div>
    </div>
  );
}

export default RegisterLayout;
