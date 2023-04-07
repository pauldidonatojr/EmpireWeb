import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Overlay(props) {
  
  const { handleClose5 } = props;

  const [open, setOpen] = React.useState(true);
  const handleCloseOverlay = () => {
    handleClose5();
  };
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{ textAlign: "center", color: "black" }}>
          Set Filter from here !
        </h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Custom Overlay
        </p>
        <div className="searchFieldsDiv">
          <Grid className="griditem">
            <TextField id="memberID" label="Member ID" variant="outlined" />
          </Grid>
          <Grid className="griditem">
            <TextField
              id="admissionID"
              label="Admission ID"
              variant="outlined"
            />
          </Grid>

          <Grid className="griditem">
            <TextField id="name" label="Name" variant="outlined" />
          </Grid>

          <Grid className="griditem">
            <TextField id="phone" label="Phone Number" variant="outlined" />
          </Grid>
        </div>
        <Button
          className="searchButton"
          variant="outlined"
         
        >
          Search
        </Button>
      </div>
    </Backdrop>
  );
}
export default Overlay;
const Wrapper = styled.section`
  
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 70%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
`;
