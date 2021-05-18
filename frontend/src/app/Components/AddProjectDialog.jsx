import React from "react";
import styled from "styled-components";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Typography } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import useCrudProject from "../Hooks/useCrudProject";

const AddProjectDialog = ({ open = false, onClose }) => {
  const {
    startDate,
    endDate,
    handleAuthorChange,
    handleStartDateChange,
    handleEndDateChange,
    handleTitleChange,
    handleAddProject,
    errorMessage,
  } = useCrudProject();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add New Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Here you can add your own project!
        </DialogContentText>
        <form>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            onBlur={handleTitleChange}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="author"
            label="Author"
            type="text"
            onBlur={handleAuthorChange}
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
        </form>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (handleAddProject()) {
              onClose();
            }
          }}
          color="primary"
        >
          Add Project
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ErrorMessage = styled(Typography)`
  color: red;
`;

export default AddProjectDialog;
