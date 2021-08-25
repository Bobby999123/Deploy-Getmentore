import * as types from "./types";
import axios from "axios";

export const loadProjects = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/projects");
    dispatch({
      type: types.LOAD_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: types.LOAD_PROJECTS_FAILURE,
      payload: err?.response,
    });
  }
};

export const loadProject = (projectId) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/projects/" + projectId);
    dispatch({
      type: types.LOAD_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: types.LOAD_PROJECT_FAILURE,
      payload: err?.response,
    });
  }
};
