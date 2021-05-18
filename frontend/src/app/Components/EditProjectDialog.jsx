import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useCrudProject from "../Hooks/useCrudProject";
import { Box } from "@material-ui/core";

const EditProjectDialog = ({ open = false, onClose, project }) => {
  const {
    title,
    author,
    startDate,
    endDate,
    handleAuthorChange,
    handleStartDateChange,
    handleEndDateChange,
    handleTitleChange,
    handleEditProject,
  } = useCrudProject(project);

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Project</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="author"
          label="Author"
          type="text"
          value={author}
          onChange={handleAuthorChange}
          fullWidth
          required
        />
        <Box component="div">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="startDate"
              label="Start Date"
              format="DD/MM/yyyy"
              value={startDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              required
            />
            <KeyboardDatePicker
              margin="normal"
              id="endDate"
              label="End Date"
              format="DD/MM/yyyy"
              value={endDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              required
            />
          </MuiPickersUtilsProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleEditProject(project.id);
            onClose();
          }}
          color="primary"
        >
          Edit Project
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProjectDialog;
