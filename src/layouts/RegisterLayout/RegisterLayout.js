import Header from "~/layouts/components/Header";
import styles from "./RegisterLayout.module.scss";
import Button from "~/components/Button";
import classNames from "classnames/bind";

import { useDebounce, Validator } from "~/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faEyeSlash,faKey,faMailBulk,faUser,} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import config from "~/config";
const cx = classNames.bind(styles);

function RegisterLayout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [eye, setEye] = useState(faEye);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();


  const handleTogglePassword = (e) => {
    if (password) {
      if (passwordType === "password") {
        setPasswordType("text");
        setEye(faEyeSlash);
      } else {
        setPasswordType("password");
        setEye(faEye);
      }
    }
  };


  const setPointerEnd = (e) => {
    let temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <form
          method="get"
          className={cx("form-register")}
          onSubmit={(e) => {
            handleSubmit();
          }}
        >
          <h1 className={cx("form-heading")}>Form register</h1>
          <div className={cx("form-group")}>
            <FontAwesomeIcon
              icon={faUser}
              onClick={() => {
                usernameRef.current.focus();
              }}
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
              onFocus={(e) => {
                setPointerEnd(e);
              }}
              onBlur={(e) => {
                Validator.isRequired(e.currentTarget, username);
              }}
            />
          </div>
          <div className={cx("form-group")}>
            <FontAwesomeIcon
              icon={faKey}
              onClick={() => {
                passwordRef.current.focus();
              }}
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
              onFocus={(e) => setPointerEnd(e)}
              onBlur={(e) => {
                Validator.isRequired(e.currentTarget, password);
              }}
            />
            <FontAwesomeIcon
              className={cx("eye")}
              icon={eye}
              onClick={handleTogglePassword}
            />
          </div>
          <div className={cx("form-group")}>
            <FontAwesomeIcon
              icon={faMailBulk}
              onClick={() => {
                emailRef.current.focus();
              }}
            />
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
              onFocus={setPointerEnd}
              onBlur={(e) => {
                Validator.isRequired(e.currentTarget, email)
                Validator.isEmail(e.currentTarget, email)
              }}
            />
          </div>
          <div className={cx("btn-login")}>
            <Button type={"submit"} loginBtn>
              Register
            </Button>
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

export default RegisterLayout;
