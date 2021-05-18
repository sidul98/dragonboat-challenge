import { useState } from "react";

const useAddProjectForm = () => {
  const [openAddProjectForm, setOpenAddProjectForm] = useState(false);
  const [openEditProjectForm, setOpenEditProjectForm] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);

  const openAddForm = () => {
    setOpenAddProjectForm(true);
  };

  const closeAddForm = () => {
    setOpenAddProjectForm(false);
  };

  const openEditForm = () => {
    setOpenEditProjectForm(true);
  };

  const closeEditForm = () => {
    setOpenEditProjectForm(false);
    setProjectToEdit(null);
  };

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
