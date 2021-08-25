import React, { useEffect } from "react";
// import './App.css';
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import "./assets/img/logo.png";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import Home from "./components/Home";
// import About from "./About";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Register from "./components/register/Register";
import Mentors from "./components/Mentors";
import Event from "./components/Event";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ProjectInput from "./components/ProjectInput";
import setAuthToken from "./utils/utils";
import store from "./store";
import { loadUser } from "./actions/userActions";

// this avoids bugs caused by profile getting loaded before user
// useEffect of child comes before useEffect of parent
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
store.dispatch(loadUser());

const App = () => {
  // set global auth header and user, when app renders first
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/project">
          <Projects />
        </Route>
        <Route exact path="/projectInput">
          <ProjectInput />
        </Route>
        <Route exact path="/mentors">
          <Mentors />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/event">
          <Event />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* <Route path="/profile/:username">
          <Profile />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
