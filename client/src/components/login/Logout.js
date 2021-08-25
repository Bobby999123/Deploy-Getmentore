import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";

const Logout = ({ logoutUser }) => {
  useEffect(() => {
    logoutUser();
  }, []);


  return <Redirect to="/"></Redirect>;

};

export default connect(null, { logoutUser })(Logout);
