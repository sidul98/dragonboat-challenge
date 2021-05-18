import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject as deleteProjectAction,
  fetchProjects as fetchProjectsAction,
} from "../../store/projects/actions";
import Typography from "@material-ui/core/Typography";
import { Button, Paper } from "@material-ui/core";
import ProjectsTable from "../../Components/ProjectsTable";
import AddProjectDialog from "../../Components/AddProjectDialog";
import EditProjectDialog from "../../Components/EditProjectDialog";
import useAddProjectForm from "../../Hooks/useAddProjectForm";

const Component = ({ projects }) => {
  const dispatch = useDispatch();
  const {
    openAddProjectForm,
    openAddForm,
    closeAddForm,
    openEditForm,
    closeEditForm,
    openEditProjectForm,
    projectToEdit,
    setProjectToEdit,
  } = useAddProjectForm();

  const isLoading = useSelector((state) => state.projects.isLoading);

  const handleDelete = useCallback(
    (id) => {
      dispatch(async (dispatch) => {
        await dispatch(deleteProjectAction(id));
        await dispatch(fetchProjectsAction());
      });
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (project) => {
      setProjectToEdit(project);
      openEditForm();
    },
    [openEditForm, setProjectToEdit]
  );

  const dialogs = useMemo(() => {
    return (
      <>
        {openAddProjectForm && (
          <AddProjectDialog onClose={closeAddForm} open={openAddProjectForm} />
        )}
        {projectToEdit && (
          <EditProjectDialog
            onClose={closeEditForm}
            open={openEditProjectForm}
            project={projectToEdit}
          />
        )}
      </>
    );
  }, [
    closeAddForm,
    openAddProjectForm,
    projectToEdit,
    closeEditForm,
    openEditProjectForm,
  ]);

  return (
    <PaperPadding elevation={3}>
      <Title variant="h4">Projects List</Title>
      <ProjectsTable
        headers={projects}
        projects={projects}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        isLoading={isLoading}
      />
      <Button onClick={openAddForm}>Add Project</Button>
      {dialogs}
    </PaperPadding>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

const PaperPadding = styled(Paper)`
  padding: 30px;
`;

export default Component;
