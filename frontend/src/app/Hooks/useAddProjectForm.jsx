import { useState, useCallback } from "react";

const useAddProjectForm = () => {
  const [openAddProjectForm, setOpenAddProjectForm] = useState(false);
  const [openEditProjectForm, setOpenEditProjectForm] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);

  const openAddForm = useCallback(() => {
    setOpenAddProjectForm(true);
  }, []);

  const closeAddForm = useCallback(() => {
    setOpenAddProjectForm(false);
  }, []);

  const openEditForm = useCallback(() => {
    setOpenEditProjectForm(true);
  }, []);

  const closeEditForm = useCallback(() => {
    setOpenEditProjectForm(false);
    setProjectToEdit(null);
  }, []);

  return {
    openAddProjectForm,
    openAddForm,
    closeAddForm,
    openEditProjectForm,
    openEditForm,
    closeEditForm,
    projectToEdit,
    setProjectToEdit,
  };
};

export default useAddProjectForm;
