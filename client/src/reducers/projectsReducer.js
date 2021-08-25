import * as types from "../actions/types";

const initialState = {
  loading: true,
  error: null,
  projects: [],
  project: null,
};

const projectsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        error: null,
        loading: false,
      };
    case types.LOAD_PROJECTS_FAILURE:
      return {
        ...state,
        projects: null,
        error: payload,
        loading: false,
      };
    case types.LOAD_PROJECT_SUCCESS:
      return {
        ...state,
        project: payload,
        error: null,
        loading: false,
      };
    case types.LOAD_PROJECT_FAILURE:
      return {
        ...state,
        project: null,
        error: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default projectsReducer;
