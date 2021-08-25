import axios from "axios";
import setAuthToken from "../utils/utils";
import * as types from "./types";

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    dispatch({
      type: types.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_USER_FAILURE,
      paylaod: error?.response,
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/auth/login", formData, config);
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: types.LOGIN_USER_FAILURE,
      payload: err?.response,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post("/api/auth/logout");
    dispatch({
      type: types.LOGOUT_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: types.LOGOUT_USER_FAILURE,
    });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/auth/register", formData, config);
    dispatch({
      type: types.REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: types.REGISTER_USER_FAILURE,
      payload: err?.response,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/users/me");
    dispatch({
      type: types.LOAD_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: types.LOAD_USER_FAILURE,
    });
  }
};
