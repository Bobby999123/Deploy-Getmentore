import axios from "axios";

// set up and global header in axios requests if token is provided
// remove token from global header if no token is provided

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
