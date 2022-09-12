import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const List = ({ id, onGetIsEdited }) => {
  const updateHandler = () => {
    onGetIsEdited(true);
  };
  return (
    <>
      {id && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "2rem",
          }}
        >
          <h1>{id}</h1>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={updateHandler}>Edit</Button>
            <Button color="secondary">Delete</Button>
          </ButtonGroup>
        </div>
      )}
    </>
  );
};

export default List;
