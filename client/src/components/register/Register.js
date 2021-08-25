import React, { useState } from "react";
import "./register.css";
import Header from "../header/Header";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";

function Register({ registerUser, isAuthorized }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const onChange = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      return console.log("Passwords must match");
    }
    registerUser(formData);
  };

  if (isAuthorized) {

    return <Redirect to="/project" />;

  }

  console.log(formData);

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
              placeholder="Username"
              className="loginInput"
              name="username"
              onChange={onChange}
              value={formData.username}
            ></input>

            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              name="email"
              onChange={onChange}
              value={formData.email}
            ></input>
            <input

              type="password"
              placeholder="Password"
              className="loginInput"
              name="password"
              onChange={onChange}
              value={formData.password}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
              name="password2"
              onChange={onChange}
              value={formData.password2}
            ></input>
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">
              <Link to="/login">Log into Account</Link>
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

export default connect(mapStateToProps, { registerUser })(Register);
