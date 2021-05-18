import axios from "axios";

import * as constants from "./types";

export const fetchProjects = () => {
  return async (dispatch) =>
    dispatch({
      type: constants.FETCH_PROJECTS,
      payload: await axios.get("/projects").then((data) => data.data),
    });
};

export const fetchProject = (id) => {
  return async (dispatch) =>
    dispatch({
      type: constants.FETCH_PROJECT,
      payload: await axios.get(`/projects/${id}`).then((data) => data.data),
    });
};

export const addProject = (title, author, startDate, endDate) => {
  return async (dispatch) => {
    dispatch({
      type: constants.ADD_PROJECT,
      payload: await axios
        .post(`/projects`, {
          title: title,
          author: author,
          start_date: startDate,
          end_date: endDate,
        })
        .then((data) => data.data),
    });
  };
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    dispatch({ type: constants.REMOVE_PROJECT_PENDING });
    try {
      const payload = await axios
        .delete(`/projects/${id}`)
        .then((data) => data.data);
      dispatch({
        type: constants.REMOVE_PROJECT,
        payload,
      });
    } catch (err) {
      dispatch({
        type: constants.REMOVE_PROJECT_REJECTED,
      });
    }
  };
};

export const editProject = (id, title, author, startDate, endDate) => {
  return async (dispatch) => {
    dispatch({ type: constants.EDIT_PROJECT_PENDING });
    try {
      const payload = await axios
        .put(`/projects/${id}`, {
          id,
          title,
          author,
          start_date: startDate,
          end_date: endDate,
        })
        .then((data) => data.data);
      dispatch({
        type: constants.EDIT_PROJECT,
        payload,
      });
    } catch (err) {
      dispatch({
        type: constants.EDIT_PROJECT_REJECTED,
      });
    }
  };
};
