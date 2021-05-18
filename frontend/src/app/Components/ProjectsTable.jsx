import React, { useMemo } from "react";
import styled from "styled-components";
import {
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const projectProperties = [
  "Id",
  "Title",
  "Author",
  "Start Date",
  "End Date",
  "Actions",
];

const ProjectsTable = ({ projects, isLoading, handleDelete, handleEdit }) => {
  const body = useMemo(() => {
    return (
      projects &&
      projects.map((project) => (
        <TableRow key={project.id}>
          {Object.values(project).map((val, index) => {
            return index === 0 ? (
              <TableCell key={index} component="th" scope="row">
                {val}
              </TableCell>
            ) : (
              <TableCell key={index} align="right">
                {val}
              </TableCell>
            );
          })}
          <TableCell align="right">
            <ButtonMarginRight
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(project.id)}
            >
              Delete
            </ButtonMarginRight>
            <Button onClick={() => handleEdit(project)}>Edit</Button>
          </TableCell>
        </TableRow>
      ))
    );
  }, [projects, handleDelete, handleEdit]);

  const tableHead = useMemo(() => {
    return projectProperties.map((property, index) => (
      <TableCell key={property} align={index !== 0 ? "right" : "inherit"}>
        {property}
      </TableCell>
    ));
  }, []);

  return (
    <>
      {isLoading ? <LinearProgress /> : <LoaderSpace />}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>{tableHead}</TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </>
  );
};

const ButtonMarginRight = styled(Button)`
  &&& {
    margin-right: 10px;
  }
`;

const LoaderSpace = styled.div`
  height: 10px;
  width: 100%;
`;

export default React.memo(ProjectsTable);
