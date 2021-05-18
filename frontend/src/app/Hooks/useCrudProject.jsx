import { useCallback, useMemo, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  addProject as addProjectAction,
  fetchProjects as fetchProjectsAction,
  editProject as editProjectAction,
} from "../store/projects/actions";

const useCrudProject = (project) => {
  const [startDate, setStartDate] = useState(project?.start_date ?? moment());
  const [endDate, setEndDate] = useState(moment(project?.end_date) ?? moment());
  const [title, setTitle] = useState(project?.title ?? "");
  const [author, setAuthor] = useState(project?.author ?? "");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const datesAreInvalid = useMemo(() => {
    return moment(startDate).isAfter(moment(endDate));
  }, [startDate, endDate]);

  const handleAddProject = useCallback(() => {
    if (datesAreInvalid) {
      setErrorMessage("Start Date must be before End Date.");
      return false;
    }
    setErrorMessage("");
    dispatch(async (dispatch) => {
      await dispatch(addProjectAction(title, author, startDate, endDate));
      await dispatch(fetchProjectsAction());
    });
    return true;
  }, [datesAreInvalid, dispatch, author, endDate, startDate, title]);

  const handleEditProject = useCallback(
    (id) => {
      dispatch(async (dispatch) => {
        await dispatch(
          editProjectAction(id, title, author, startDate, endDate)
        );
        await dispatch(fetchProjectsAction());
      });
    },
    [author, dispatch, endDate, startDate, title]
  );

  const handleStartDateChange = useCallback((date) => {
    setStartDate(date.format());
  }, []);

  const handleEndDateChange = useCallback((date) => {
    setEndDate(date.format());
  }, []);

  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const handleAuthorChange = useCallback((event) => {
    setAuthor(event.target.value);
  }, []);

  return {
    title,
    author,
    startDate,
    endDate,
    handleTitleChange,
    handleAuthorChange,
    handleStartDateChange,
    handleEndDateChange,
    handleAddProject,
    handleEditProject,
    errorMessage,
  };
};

export default useCrudProject;
