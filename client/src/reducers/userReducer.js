import * as types from "../actions/types";
import setAuthToken from "../utils/utils";

const initialState = {
  loading: true,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_SUCCESS:
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: payload,
      };

    case types.GET_USER_FAILURE:
    case types.LOAD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        user: null,
      };

    case types.LOGIN_USER_SUCCESS:
    case types.REGISTER_USER_SUCCESS:
      // add token to localstorage, set token in global header for all axios reqs
      localStorage.setItem("token", payload.token);
      setAuthToken(payload.token);
      return {
        ...state,
        loading: false,
        error: null,
        user: payload.user,
      };

    case types.LOGIN_USER_FAILURE:
    case types.REGISTER_USER_FAILURE:
      // remove token from localstorage and global header
      localStorage.removeItem("token");
      setAuthToken();
      return {
        ...state,
        loading: false,
        error: payload,
        user: null,
      };

    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
