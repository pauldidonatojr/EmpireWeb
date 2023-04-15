import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { List, ListItem, ListItemText } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';
//

import Backdrop from '@mui/material/Backdrop';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'
import UserName from "../../UserName";
//


function Report() {
  function GoBackButtonPressed(){
    navigate("/AdminHome");

  }
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);
  const navigate = useNavigate();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
  const [isOverlayOpen5, setIsOverlayOpen5] = useState(false);
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 1:
        setIsOverlayOpen(true);
        setOpen(!open);
        break;
      case 2:
        setIsOverlayOpen2(true);
        setOpen2(!open2);
        break;
      case 3:
        setIsOverlayOpen3(true);
        setOpen3(!open3);
        break;
      case 4:
        setIsOverlayOpen4(true);
        setOpen4(!open4);
        break;
      case 5:
        setIsOverlayOpen5(true);
        setOpen5(!open5);
        break;
      default:
        break;
    }
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
  };
  const handleCloseOverlay5 = () => {
    setIsOverlayOpen5(false);
  };
//
const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};

//
//
const [open2, setOpen2] = React.useState(false);
const handleClose2 = () => {
  setOpen2(false);
};

//
//
const [open3, setOpen3] = React.useState(false);
const handleClose3 = () => {
  setOpen3(false);
};

//
//
const [open4, setOpen4] = React.useState(false);
const handleClose4 = () => {
  setOpen4(false);
};

//
//
const [open5, setOpen5] = React.useState(false);
const handleClose5 = () => {
  setOpen5(false);
};

//
  function Overlay() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
     
    >
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{ textAlign: "center",color:"black"}}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          List Of Care Giver
        </p>
        <div className="searchFieldsDiv">
      
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="CareGiver Code"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Discipline</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Restrictions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Hire Date From DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Hire Date To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Team</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Hired Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Last Work Date From DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Last Work Date To DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Location</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Branch</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>


            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Application From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Application To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Demographics</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Employment</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Address </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Restrictions</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Compliance</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Payroll</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Care Giver Notification</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
         
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }
  function Overlay2() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open2}
     
    >
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleClose2} />
        <h1 style={{ textAlign: "center",color:"black"}}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Compliance
        </p>
        <div className="searchFieldsDiv">
        
        <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Provider</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Teams(s)</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
         
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay2}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }
  function Overlay3() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open3}
     
    >
      <div className="overlay3">
        <CloseIcon className="crossIcon" onClick={handleClose3} />
        <h1 style={{  textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Other Reports
        </p>
        <div className="searchFieldsDiv">
     
        <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>MCO</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Member"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Linked Notes From</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Linked Notes To</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Reason</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Notes Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay3}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }
  function Overlay4() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open4}
     
    >
      <div className="overlay3">
        <CloseIcon className="crossIcon" onClick={handleClose4} />
        <h1 style={{ textAlign: "center",color:"black"}}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Members
        </p>
        <div className="searchFieldsDiv">
       
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Care Giver Code"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Alt Care Giver Code"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="SSN"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Provider</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Discipline</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
         
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay4}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }
  function Overlay5() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open5}
     
    >
      <div className="overlay3">
        <CloseIcon className="crossIcon" onClick={handleClose5} />
        <h1 style={{ textAlign: "center",color:"black"}}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Visits
        </p>
        <div className="searchFieldsDiv">
        
           
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Cordinator</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
           
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>MCO</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Visit Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Discipline</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Team (s)</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Check Marks</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay5}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }

  const BillingPressed = () => {
    //Navigate to Billing Report
    navigate("/BillingReport");
  };

  const CareGiverPressed = () => {
    setViewSelected(1);
  };
  const CompliancePressed = () => {
    setViewSelected(2);
  };
  const EVVExceptionPressed = () => {
    //Navigate To EVV Exception
    navigate("/EVVException");
  };
  const OtherReportsPressed = () => {
    setViewSelected(3);
  };
  const MembersPressed = () => {
    setViewSelected(4);
  };
  const VisitsPressed = () => {
    setViewSelected(5);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return CareGiverView();

      case 2:
        return ComplianceView();

      case 3:
        return OtherReportsView();

      case 4:
        return MembersView();
      case 5:
        return VisitsView();
      default:
        break;
    }
  }
  //
  const jsonData = [
    {
      id: 1,
      name: "Wanda De Martinez",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date: "03/12/2023",
    },
    {
      id: 2,
      name: "Wanda De Martinez",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date: "03/12/2023",
    },
    {
      id: 3,
      name: "Hector",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date: "03/12/2023",
    },
    {
      id: 4,
      name: "Adam",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date: "03/12/2023",
    },
  ];
  const jsonData2 = [
    {
      id: 1,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
    {
      id: 2,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
    {
      id: 3,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
  ];
  //
  const CareGiverView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows2}
        columns={columns2}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
   // CareGiverView
   const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'careGiverCode', headerName: 'CareGiver Code', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 100 },
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'discipline', headerName: 'Discipline', width: 100 },
    { field: 'type', headerName: 'Type', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'restrictions', headerName: 'Restrictions', width: 100 },
    { field: 'hireFrom', headerName: 'Hire Date', width: 100 },
    { field: 'team', headerName: 'Team', width: 100 },
    { field: 'lastWorkDate', headerName: 'Last Work Date', width: 100 },
    { field: 'location', headerName: 'Location', width: 100 },
    { field: 'branch', headerName: 'Branch', width: 100 },
    { field: 'applicationDate', headerName: 'Application Date', width: 100 },
    { field: 'employeeDemo', headerName: 'CareGiver Demo', width: 100 },
    { field: 'careGiverEmployment', headerName: 'CareGiver Employment', width: 100 },
    { field: 'careGiverAddress', headerName: 'CareGiver Address', width: 100 },
    { field: 'careGiverRestriction', headerName: 'CareGiver Restriction', width: 100 },
    { field: 'CareGiverPayroll', headerName: 'CareGiver Compliance', width: 100 },
    { field: 'CareGiverNotification', headerName: 'CareGiver Notification', width: 100 },
  ];
  
  const rows2 = [
    {id:1,careGiverCode:"4578",firstName:"Jenifer",lastName:"Awston",discipline:"Awston",type:"Awston",status:"Awston",restrictions:"Awston",hireFrom:"Awston"
    ,team:"Awston",lastWorkDate:"Awston",location:"Awston",branch:"Awston",applicationDate:"Awston",employeeDemo:"Awston",careGiverEmployment:"Awston",careGiverAddress:"Awston",careGiverRestriction:"Awston"
    ,CareGiverPayroll:"Awston",CareGiverNotification:"Awston"},
    {id:2,careGiverCode:"4578",firstName:"Jenifer",lastName:"Awston",discipline:"Awston",type:"Awston",status:"Awston",restrictions:"Awston",hireFrom:"Awston"
    ,team:"Awston",lastWorkDate:"Awston",location:"Awston",branch:"Awston",applicationDate:"Awston",employeeDemo:"Awston",careGiverEmployment:"Awston",careGiverAddress:"Awston",careGiverRestriction:"Awston"
    ,CareGiverPayroll:"Awston",CareGiverNotification:"Awston"},
    {id:3,careGiverCode:"4578",firstName:"Jenifer",lastName:"Awston",discipline:"Awston",type:"Awston",status:"Awston",restrictions:"Awston",hireFrom:"Awston"
    ,team:"Awston",lastWorkDate:"Awston",location:"Awston",branch:"Awston",applicationDate:"Awston",employeeDemo:"Awston",careGiverEmployment:"Awston",careGiverAddress:"Awston",careGiverRestriction:"Awston"
    ,CareGiverPayroll:"Awston",CareGiverNotification:"Awston"},
    
    
    
  ];
  const ComplianceView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
  // // ComplianceView
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'provider', headerName: 'Provider', width: 250 },
    { field: 'date', headerName: 'Date', width: 250 },
    { field: 'team', headerName: 'Team(s)', width: 250 },
   
  ];
  
  const rows3 = [
    {id:1,provider:"4578",date:"Jenifer",team:"Awston"},
    {id:2,provider:"4578",date:"Jenifer",team:"Awston"},
    {id:3,provider:"4578",date:"Jenifer",team:"Awston"},
    {id:4,provider:"4578",date:"Jenifer",team:"Awston"},
    
  ];
  const OtherReportsView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows4}
        columns={columns4}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
   // // OtherReportsView
   const columns4 = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 150 },
    { field: 'member', headerName: 'Member', width: 150 },
    { field: 'LinkedNoteDate', headerName: 'Linked Note Date', width: 150 },
    { field: 'reason', headerName: 'Reason', width: 150 },
    { field: 'NotesType', headerName: 'Notes Type', width: 150 },
  
  ];
  
  const rows4 = [
    {id:1,date:"4578",mco:"Jenifer",member:"Awston",LinkedNoteDate:"Awston",reason:"Awston",NotesType:"Awston"},
    {id:2,date:"4578",mco:"Jenifer",member:"Awston",LinkedNoteDate:"Awston",reason:"Awston",NotesType:"Awston"},
    {id:3,date:"4578",mco:"Jenifer",member:"Awston",LinkedNoteDate:"Awston",reason:"Awston",NotesType:"Awston"},
    {id:4,date:"4578",mco:"Jenifer",member:"Awston",LinkedNoteDate:"Awston",reason:"Awston",NotesType:"Awston"},
  
  ];
  const MembersView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows5}
        columns={columns5}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
   // // MembersView
   const columns5 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'FirstName', headerName: 'First Name', width: 100 },
    { field: 'LastName', headerName: 'Last Name', width: 100 },
    { field: 'CareGiverCode', headerName: 'CareGiver Code', width:150 },
    { field: 'AltCareGiverCode', headerName: 'Alt CareGiver Code', width: 150 },
    { field: 'ssn', headerName: 'SSN', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'provider', headerName: 'Provider', width: 100 },
    { field: 'discipline', headerName: 'Discipline', width: 100 },
  
  ];
  
  const rows5 = [
    {id:1,FirstName:"4578",LastName:"Jenifer",CareGiverCode:"Awston",AltCareGiverCode:"Awston",ssn:"Awston",status:"Awston",provider:"Alpha",discipline:"Bravo"},
    {id:2,FirstName:"4578",LastName:"Jenifer",CareGiverCode:"Awston",AltCareGiverCode:"Awston",ssn:"Awston",status:"Awston",provider:"Alpha",discipline:"Bravo"},
    {id:3,FirstName:"4578",LastName:"Jenifer",CareGiverCode:"Awston",AltCareGiverCode:"Awston",ssn:"Awston",status:"Awston",provider:"Alpha",discipline:"Bravo"},
    {id:4,FirstName:"4578",LastName:"Jenifer",CareGiverCode:"Awston",AltCareGiverCode:"Awston",ssn:"Awston",status:"Awston",provider:"Alpha",discipline:"Bravo"},
    
  ];
  const VisitsView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows6}
        columns={columns6}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
  // // VisitsView
  const columns6 = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'Date', headerName: 'Date', width: 120 },
    { field: 'cordinator', headerName: 'Cordinator', width: 120 },
    { field: 'mco', headerName: 'MCO', width:150 },
    { field: 'VisitType', headerName: 'Visit Type', width: 120 },
    { field: 'Discipline', headerName: 'Discipline', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'team', headerName: 'Team(s)', width: 120 }, 
  ];
  
  const rows6 = [
    {id:1,Date:"4578",cordinator:"Jenifer",mco:"Awston",VisitType:"Awston",Discipline:"Awston",status:"Awston",team:"Alpha"},
    {id:2,Date:"4578",cordinator:"Jenifer",mco:"Awston",VisitType:"Awston",Discipline:"Awston",status:"Awston",team:"Alpha"},
    {id:3,Date:"4578",cordinator:"Jenifer",mco:"Awston",VisitType:"Awston",Discipline:"Awston",status:"Awston",team:"Alpha"},
    {id:4,Date:"4578",cordinator:"Jenifer",mco:"Awston",VisitType:"Awston",Discipline:"Awston",status:"Awston",team:"Alpha"},
   
    
  ];

    //
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div  style={{
        height: "100vh",
        backgroundColor: "#2E0F59",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            backgroundColor: "#2E0F59",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "680px",
          }}
        >
          <p
            className="Files"
            style={{
              fontSize: "20px",
              color: "#F2B90F",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr
            className="line"
            style={{ width: "50%", fontSize: "10px", opacity: "0.2" }}
          />
  
          <h3 onClick={BillingPressed}  style={{ color: "#F2B90F" }}>Billing</h3>
          <h3 onClick={CareGiverPressed}  style={{ color: "#F2B90F" }}>Care Giver</h3>
          <h3 onClick={CompliancePressed}  style={{ color: "#F2B90F" }}>Compliance</h3>
          <h3 onClick={EVVExceptionPressed}  style={{ color: "#F2B90F" }}>EVV Exception</h3>
          <h3 onClick={OtherReportsPressed}  style={{ color: "#F2B90F" }}>Other Reports</h3>
          <h3 onClick={MembersPressed}  style={{ color: "#F2B90F" }}>Members</h3>
          <h3 onClick={VisitsPressed}  style={{ color: "#F2B90F" }}>Visits</h3>
         
        </div>
      </Box>
      </div>
    );
    //
  return (
    <Wrapper>
      <div className="Header">
      <MenuIcon
          className="menuIcon"
          onClick={toggleDrawer("left", true)}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        ></MenuIcon>
        <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() =>navigate("/AdminHome")}/>
       
        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
        <LogoutIcon className="LogoutIcon" onClick={signOut}></LogoutIcon>
      </div>
      <div style={{ display: "none" }}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <div className="CardHolder">
        <Card className="TaskBar">
          <UserName/>
          <hr />
          <p
            style={{
              marginLeft: "45%",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />
          <div className="buttonHolder">
            <Button
              className="navigationButton"
              onClick={() => {
                BillingPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Billing
              </p>
            </Button>

            <Button onClick={CareGiverPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Care Giver
              </p>
            </Button>
            <Button onClick={CompliancePressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Compliance
              </p>
            </Button>

            <Button onClick={EVVExceptionPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                EVV Exception
              </p>
            </Button>

            <Button onClick={OtherReportsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Other Reports
              </p>
            </Button>

            <Button onClick={MembersPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Members
              </p>
            </Button>

            <Button onClick={VisitsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visits
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen3 && <Overlay3 />}
          {isOverlayOpen4 && <Overlay4 />}
          {isOverlayOpen5 && <Overlay5 />}
          {RenderViews()}
        </Card>
      </div>
      <div className="GoBackButtonHolder">
      <Button className="GoBackButton" variant="outlined" onClick={GoBackButtonPressed} >Go Back</Button>
      </div>

      <Footer/>
    </Wrapper>
  );
}
export default Report;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  .GoBackButtonHolder{
    display:flex;
    justify-content:center;
    margin-top:0;
    margin-bottom:3%;
  }
  .GoBackButton{
    background-color: #f26e22;
    color: white;
    width: 10%;
    height: 150%;
    padding: 0.5%;
    border-radius: 10px;
    margin-top:0;
    jusfity-content:center;
  }
  .GoBackButton:hover {
    color: black;
  }
  .CardHolder {
    display: flex;
    flex-direction: row;
  }
  .ListItem {
    margin-top: 1%;
    margin-left: 2%;
    background-color: #0b2b40;
    color: white;
    border-radius: 10px;
    width: 95%;
  }
  .ListText {
    width: 300px;
    text-align: center;
  }
  .ListItem:hover .ListText {
    color: black;
    font-weight: bold;
  }

  // overlay css end
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 95%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
    overflow:auto;
  }
  .overlay2{  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 50%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .overlay3{  
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 60%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  
  .crossIcon {
    margin-left: 95%;
    margin-top: 2%;
    color:black;
  }
  .searchFieldsDiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* create 3 equal columns */
    grid-gap: 10px; /* add some space between the columns */
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
  }
  .searchButton {
    margin-left: 35%;
    margin-top: 5%;
    width: 30%;
    background-color: #f26e22;
    color: white;
    font-weight: bold;
  }
  .searchButton:hover {
    background-color: #2e0f59;
    color: white;
  }
  .Field {
    width: 50%;
    margin: 2%;
  }
  

  //overlay css end

  //need help div start

  .NeedHelpDiv {
    margin-left: 35%;
    margin-top: 30%;
  }
  .needHelpText {
    color: white;
  }
  .NeedHelpTele {
    color: white;
    text-decoration: none;
  }

  //need help end

  //data display card
  .dataDisplay {
    height: 670px;
    width: 70%;
    margin-left: 2%;
    margin-top: 3%;
    background-color: #f2f2f2;
    padding: 1.7%;
  }
 
  .searchIcon {
    position: absolute;
    z-index: 999;
    padding: 1%;
    font-size: 25px;
    color: white;
    margin-left: 69.2%;
    cursor: pointer;
    background-color: grey;
    border-radius: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }

  //data display card end

  //UserInfo(TaskBar)
  .TaskBar {
    width: 20%;
    height: 725px;
    background-color:#564873;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-left: 2%;
  }

  .UserInfo {
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 10%;
  }
  .avatar {
    margin: 2%;
    margin-top: 5%;
  }
  .buttonHolder {
    display: flex;
    flex-direction: column;
  }
  .navigationButton {
    margin: 2%;
  }

  //UserInfo Ending


  //Header CSS FILES
  .Header {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    margin-top: 0.5%;
    width: 100%;
    background-color: white;
  }
  .headerImage {
    width: 7%;
    height: 1%;
    border-radius: 15px;
  }
  .headerImage:hover {
    animation: wave 1s infinite;
  }
  @keyframes wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .button {
    background-color: white;
    border-width: 0;
    margin-left: 5%;
    margin-top: 0.5%;
    width: 08%;
    height: 50px;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    border-radius: 10px;
  }
  .button:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
  .LogOutbutton {
    background-color: #f26e22;
    color: white;
    width: 10%;
    height: 150%;
    margin-top: 1%;
    margin-left: 15%;
    padding: 0.5%;
    border-radius: 10px;
  }
  .LogOutbutton:hover {
    color: black;
  }
  //Header CSS FILES ENDING
  .LogoutIcon{
    display:none;
  }
  .menuIcon{
    display:none;
  }
  .headerImage {
    width: 7%;
    height: 1%;
    border-radius: 15px;
    margin-right:55%;
  }
  .griditem{
    width:100%;
  }
  .griditem2{
    width:68%;
  }
  //Header CSS FILES ENDING
  @media only screen and (max-width: 600px) {
    .GoBackButtonHolder{
      margin-top:2%;
    }
    .GoBackButton{
      width:30%;
      height:50px;
    }
      
    .TaskBar {
      display:none;
     
    }
    .UserInfo{
      display:none;
    }
    .hr{
      display:none;
    }
    .Files{
      display:none;
    }
    .CardHolder {
      flex-direction: column;
      margin-top: 0%;
    }
    .buttonHolder {
      flex-direction: row;
    }
    .dataDisplay {
      height: 668px;
      width: 97%;
      margin-top: 0%;
      margin-left:0%;
    }
    .line{
      display:none;
    }
    .LinkNotification{
      padding:5px;
      height:10%;
      font-size:14px;
      shadowColor: "#000",
  shadowOffset: {
  width: 0,
  height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,
  
  elevation: 14,
    }
    .SystemNotification{
      padding:5px;
      height:10%;
      font-size:13.5px;
      shadowColor: "#000",
  shadowOffset: {
  width: 0,
  height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,
  
  elevation: 14,
      
    }
    .LogOutbutton {
      width: 20%;
      height: 50%;
      display:none;
    
    }
    .headerImage {
      width: 30%;
      height: 15%;
      margin-bottom:2%;
      border-radius: 15px;
      margin-right:0;
    }
    .menuIcon{
      margin-right:20%;
      font-size:50px;
      display:inline;
      color:white;
      background-color:grey;
      border-radius:10px;
      
    }
    .LogoutIcon{
      font-size:40px;
      color:grey;
      margin-left:20%;
      display:inline;
  
    }
    .searchIcon {
      margin-left: 90.2%;
     
    }
    
    .crossIcon{
      margin-left:90%;
    }
    .griditem{
      width:100%;
    }
    .griditem2{
      width:92%;
    }
   
    .searchFieldsDiv {
      grid-template-columns: repeat(1, 1fr); /* create 3 equal columns */
    }
    .overlay {
    width: 75%;
    height: 80%;
    overflow:auto;
    }
    .overlay2{
      width: 75%;
      height: 80%;
      overflow:auto;
      }
      .overlay3{
        width: 75%;
      height: 80%;
      overflow:auto;
      }
    .searchButton {
      margin-top: 5%;
      margin-bottom: 2%;
      margin-left:35%;
    }
    .input{
      margin-left:20%;
    }
    
    .Signup{
      margin-left:25%;
      
    }
  }
`;
