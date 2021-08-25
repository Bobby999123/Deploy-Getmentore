import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Header({ user }) {
  const renderPublicLinks = () => (
    <ul>
      <Link to="/">
        <li>
          <span className="active">Home</span>
        </li>
      </Link>

      <Link to="/project">
        <li>
          <span>Projects</span>
        </li>
      </Link>

      <Link to="/contact">
        <li>
          <span>Contact</span>
        </li>
      </Link>

      <Link to="/Login">
        <li>
          <span>Login</span>
        </li>
      </Link>


      <Link to="/Register">
        <li>
          <span>Register</span>
        </li>
      </Link>

    </ul>
  );

  const renderPrivateLinks = () => {
    return (
      <ul>
        <Link to="/">
          <li>
            <span className="active">Home</span>
          </li>
        </Link>

        <Link to="/project">
          <li>
            <span>Projects</span>
          </li>
        </Link>

        <Link to="/contact">
          <li>
            <span>Contact</span>
          </li>
        </Link>

        <Link to="/Logout">
          <li>
            <span>Logout</span>
          </li>
        </Link>
      </ul>
    );
  };

  return (
    <div className="header">
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/">GetMentore</Link>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            {user.loading
              ? null
              : user.user
                ? renderPrivateLinks()
                : renderPublicLinks()}


            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
