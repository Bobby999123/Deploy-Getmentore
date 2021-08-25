import React, { useState } from "react";
import "./login.css";
import Header from "../header/Header";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/userActions";


function Login({ loginUser, isAuthorized }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  if (isAuthorized) {



    return <Redirect to="/project" />;

  }

  return (
    <div className="login">
      <Header />
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GetMentore</h3>
          <span className="loginDesc">Lets Crack Tech company now</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              onChange={onChange}
              value={formData.email}
              placeholder="Email"
              className="loginInput"
              required
            ></input>
            <input
              name="password"
              type="password"
              onChange={onChange}
              value={formData.password}
              placeholder="Password"
              className="loginInput"
              required
            ></input>
            <button className="loginButton" type="submit">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to="/register">New Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthorized: !!state.user.user,
});

export default connect(mapStateToProps, { loginUser })(Login);
