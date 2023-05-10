import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
//
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
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
//
const Link = require("react-router-dom").Link;

function EVVException() {
  const navigate = useNavigate();
  const { signOut } = React.useContext(AuthContext);
 const [ViewSelected, setViewSelected] = useState(1);

const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};
function GoBackButtonPressed(){
  navigate(-1);
}
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
  const [isOverlayOpen5, setIsOverlayOpen5] = useState(false);
  const [isOverlayOpen6, setIsOverlayOpen6] = useState(false);

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
      case 6:
        setIsOverlayOpen6(true);
        setOpen6(!open6);
        break;
      default:
        break;
    }

  };
  //
//
const ByCareGivePressed = () => {
  setViewSelected(1);
};

const ByReasonPressed = () => {
  setViewSelected(2);
};
const ByDetailReportPressed = () => {
  setViewSelected(3);
};
const ByStatisticsPressed = () => {
  setViewSelected(4);
};
const ByProviderPressed = () => {
  setViewSelected(5);
};
const ByAggregationPressed = () => {
  setViewSelected(6);
};
  //
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
  const handleCloseOverlay6 = () => {
    setIsOverlayOpen6(false);
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
  //
const [open6, setOpen6] = React.useState(false);
const handleClose6 = () => {
  setOpen6(false);
};

//
  //CallMaintance Search Overlay
  function Overlay() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
     
    >
      <div className="overlay">
      <CloseIcon className="crossIcon" onClick={handleClose} />
      <h1 style={{textAlign:"center" ,color:"black"}}>Set Filter from here !</h1>
      <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Exception By CareGiver</p>
      <div className="searchFieldsDiv">
     
      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}} >MCO (s)</InputLabel>
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
          label="To Date DD/YY/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
      <TextField
          id="outlined-basic"
          label="CareGiver"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel  style={{backgroundColor:"#f2f2f2",color:"grey"}}>Types Of Service</InputLabel>
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
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
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
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Discipline (s)</InputLabel>
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
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Team (s)</InputLabel>
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
      <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay}>
        Search
      </Button>
    </div>
    </Backdrop>
    );
  }
  
//MissedIn
function Overlay2() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open2}
   
  >
    <div className="overlay2">
    <CloseIcon className="crossIcon" onClick={handleClose2} />
    <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Exception By Reason</p>
    <div className="searchFieldsDiv">
  
      
    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO (s)</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Type Of Service</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Reason</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Team(s)</InputLabel>
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
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay2}>
      Search
    </Button>
  </div>
  </Backdrop>
  );
}

//Missed Out
function Overlay3() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open3}
   
  >
    <div className="overlay3">
    <CloseIcon className="crossIcon" onClick={handleClose3} />
    <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Exception By Detail Report</p>
    <div className="searchFieldsDiv">
 
      
    <Grid className="griditem">
      <TextField
       
        id="outlined-basic"
        label="From Date DD/YY/YYYY"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    <TextField
        id="outlined-basic"
        label="To Date DD/YY/YYYY"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO (s)</InputLabel>
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
        label="Invoice From Date DD/MM/YYYY"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Invoice To Date DD/MM/YYYY"
        variant="outlined"
      />
    </Grid>
  

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Include Type</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Admission ID</InputLabel>
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
        label="CareGiver"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem2" style={{marginLeft:"1%"}}>
    
    <Box>
  <FormControl fullWidth>
  
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Timesheet</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Type Of Service</InputLabel>
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
        label="Batch Number"
        variant="outlined"
      />
    </Grid>

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Exception Code</InputLabel>
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
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay3}>
      Search
    </Button>
  </div>
  </Backdrop>
  );
}
//Missed Call Overlay
function Overlay4() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open4}
   
  >
    <div className="overlay4">
    <CloseIcon className="crossIcon" onClick={handleClose4} />
    <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Exception Statistics</p>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Reason (s)</InputLabel>
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
    <Grid className="griditem2" style={{marginLeft:"1%"}}>
    
    <Box>
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Type Of Service</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO(s)</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Team</InputLabel>
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
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay4}>
      Search
    </Button>
  </div>
  </Backdrop>
  );
}
//Visit Log
function Overlay5() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open5}
   
  >
    <div className="overlay5">
    <CloseIcon className="crossIcon" onClick={handleClose5} />
    <h1 style={{ textAlign:"center",color:"black"}}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Exception Summary By Provider</p>
    <div className="searchFieldsDiv">

      
    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO(s)</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Type Of Service</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Team(s)</InputLabel>
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
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay5}>
      Search
    </Button>
  </div>
  </Backdrop>
  );
}
//Rejected Calls
function Overlay6() {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open6}
   
  >
    <div className="overlay6">
    <CloseIcon className="crossIcon" onClick={handleClose6} />
    <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>State Aggregation Report</p>
    <div className="searchFieldsDiv">
 
      
    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Report Section</InputLabel>
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
        label="Visit To Date DD/MM/YYYY"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO (s)</InputLabel>
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
        label="Last Export From Date DD/MM/YYYY"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    <TextField
        id="outlined-basic"
        label="Last Export To Date DD/MM/YYYY"
        variant="outlined"
      />
    </Grid>
      
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Member"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    
    <TextField
        id="outlined-basic"
        label="Medical ID Number"
        variant="outlined"
      />
      
    </Grid>
    <Grid className="griditem">
    
    <TextField
        id="outlined-basic"
        label="CareGiver"
        variant="outlined"
      />
      
    </Grid>

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Producure Code (s)</InputLabel>
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
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Record Status (s)</InputLabel>
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
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay6}>
      Search
    </Button>
  </div>
  </Backdrop>
  );
}


  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return ByCareGiverView();

      case 2:
        return ByReasonView();
      case 3:
        return ByDetailView();
      case 4:
        return ByStatisticsView();
      case 5:
        return ByProviderView();
      case 6:
        return ByAggregationView();

      default:
        break;
    }
  }
  
  const jsonData = [
    {
      id: 1,
      name: "Wanda ",
      address: "SW14SW",
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


  const ByAggregationView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows7}
        columns={columns7}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>   
    );
  };
    //// // ByAggregationView
    const columns7 = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'ReportSection', headerName: 'Report Section', width: 150 },
      { field: 'VisitDate', headerName: 'Visit Date', width: 150 },
      { field: 'mco', headerName: 'MCO', width: 150 },
      { field: 'LastExportDate', headerName: 'Last Export Date', width: 150 },
      { field: 'Member', headerName: 'Member', width: 150 },
      { field: 'MedicalID', headerName: 'Medical ID', width: 150 },
      { field: 'CareGiver', headerName: 'CareGiver', width: 150 },
      { field: 'ProcedureCode', headerName: 'Procedure Code', width: 150 },
      { field: 'RecordStatus', headerName: 'Record Status', width: 150 },
      
    
    ];
    
    const rows7 = [
      {id:1,ReportSection:"4578",VisitDate:"Jenifer",mco:"Member",LastExportDate:"Member",Member:"Member",MedicalID:"AS4587",CareGiver:"Danny",ProcedureCode:"87D54D",RecordStatus:"Active"},
      {id:2,ReportSection:"4578",VisitDate:"Jenifer",mco:"Member",LastExportDate:"Member",Member:"Member",MedicalID:"AS4587",CareGiver:"Danny",ProcedureCode:"87D54D",RecordStatus:"Active"},
      {id:3,ReportSection:"4578",VisitDate:"Jenifer",mco:"Member",LastExportDate:"Member",Member:"Member",MedicalID:"AS4587",CareGiver:"Danny",ProcedureCode:"87D54D",RecordStatus:"Active"},
      {id:4,ReportSection:"4578",VisitDate:"Jenifer",mco:"Member",LastExportDate:"Member",Member:"Member",MedicalID:"AS4587",CareGiver:"Danny",ProcedureCode:"87D54D",RecordStatus:"Active"},
      {id:5,ReportSection:"4578",VisitDate:"Jenifer",mco:"Member",LastExportDate:"Member",Member:"Member",MedicalID:"AS4587",CareGiver:"Danny",ProcedureCode:"87D54D",RecordStatus:"Active"},
    ];

  
  const ByProviderView = () => {
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
   //// // ByProviderView
   const columns5 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'TypeOfService', headerName: 'Type Of Service', width: 150 },
    { field: 'Cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'team', headerName: 'Team(s)', width: 150 },
    
  
  ];
  
  const rows5 = [
    {id:1,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",team:"Member"},
    {id:2,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",team:"Member"},
    {id:3,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",team:"Member"},
    {id:4,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",team:"Member"},
    
   
  ];
  
  const ByStatisticsView = () => {
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
   //// // ByStatisticsView
   const columns6 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'TypeOfService', headerName: 'Type Of Service', width: 150 },
    { field: 'Cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'reason', headerName: 'Reason', width: 150 },
    { field: 'team', headerName: 'Team(s)', width: 150 },
    
  
  ];
  
  const rows6 = [
    {id:1,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",reason:"Delay",team:"Member"},
    {id:2,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",reason:"Delay",team:"Member"},
    {id:3,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",reason:"Delay",team:"Member"},
    {id:4,mco:"4578",date:"Jenifer",TypeOfService:"Member",Cordinator:"Member",reason:"Delay",team:"Member"},
    
    
   
  ];
  
  const ByDetailView = () => {
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
  //// // ByDetailView
  const columns4 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'InvoiceDate', headerName: 'Invoice Date', width: 100 },
    { field: 'IncludeType', headerName: 'Include Type', width: 100 },
    { field: 'AdmissionID', headerName: 'Admission ID', width: 100 },
    { field: 'CareGiver', headerName: 'CareGiver', width: 100 },
    { field: 'Timesheet', headerName: 'Timesheet', width: 100 },
    { field: 'TypeOfService', headerName: 'Type Of Service', width: 120 },
    { field: 'BatchNumber', headerName: 'Batch Number', width: 120 },
    { field: 'Cordinator', headerName: 'Cordinator', width: 120 },
    { field: 'ExceptionCode', headerName: 'Exception Code', width: 120 },
    
  
  ];
  
  const rows4 = [
    {id:1,mco:"4578",date:"Jenifer",InvoiceDate:"Awston",IncludeType:"Awston",AdmissionID:"Awston",CareGiver:"Active",Timesheet:"Member"
    ,TypeOfService:"Member",BatchNumber:"Member",Cordinator:"Member",ExceptionCode:"Member"},
    {id:2,mco:"4578",date:"Jenifer",InvoiceDate:"Awston",IncludeType:"Awston",AdmissionID:"Awston",CareGiver:"Active",Timesheet:"Member"
    ,TypeOfService:"Member",BatchNumber:"Member",Cordinator:"Member",ExceptionCode:"Member"},
    {id:3,mco:"4578",date:"Jenifer",InvoiceDate:"Awston",IncludeType:"Awston",AdmissionID:"Awston",CareGiver:"Active",Timesheet:"Member"
    ,TypeOfService:"Member",BatchNumber:"Member",Cordinator:"Member",ExceptionCode:"Member"},
    {id:4,mco:"4578",date:"Jenifer",InvoiceDate:"Awston",IncludeType:"Awston",AdmissionID:"Awston",CareGiver:"Active",Timesheet:"Member"
    ,TypeOfService:"Member",BatchNumber:"Member",Cordinator:"Member",ExceptionCode:"Member"},
   
  ];
  
  const ByCareGiverView = () => {
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
 

  //// // ByCareGiverView
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'CareGiver', headerName: 'Care Giver', width: 150 },
    { field: 'TypeOfService', headerName: 'Type Of Service', width: 150 },
    { field: 'Cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'Status', headerName: 'Status', width: 150 },
    { field: 'Team', headerName: 'Team(s)', width: 150 },
    
  
  ];
  
  const rows2 = [
    {id:1,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",Status:"Active",Team:"Member"},
    {id:2,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",Status:"Active",Team:"Member"},
    {id:3,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",Status:"Active",Team:"Member"},
    {id:4,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",Status:"Active",Team:"Member"},
    {id:5,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",Status:"Active",Team:"Member"},
   
    
  ];
  const ByReasonView = () => {
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
  //// // ByReasonView
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'TypeOfService', headerName: 'Type Of Service', width: 150 },
    { field: 'Cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'reason', headerName: 'Reason', width: 150 },
    { field: 'Team', headerName: 'Team(s)', width: 150 },
    
  
  ];
  
  const rows3 = [
    {id:1,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",reason:"Active",Team:"Member"},
    {id:2,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",reason:"Active",Team:"Member"},
    {id:3,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",reason:"Active",Team:"Member"},
    {id:4,mco:"4578",date:"Jenifer",CareGiver:"Awston",TypeOfService:"Awston",Cordinator:"Awston",reason:"Active",Team:"Member"},
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
        <UserName />
        <hr
          className="line"
          style={{ width: "50%", fontSize: "10px", opacity: "0.2" }}
        />

        <h3 onClick={() => {ByCareGivePressed();}} style={{ color: "#F2B90F",textAlign:"center" }}>Exception By CareGiver</h3>
        <h3  onClick={ByReasonPressed} style={{ color: "#F2B90F",textAlign:"center" }}>Exception By Reason</h3>
        <h3 onClick={ByDetailReportPressed} style={{ color: "#F2B90F",textAlign:"center" }}>Exception By Detail Report</h3>
        <h3 onClick={ByStatisticsPressed} style={{ color: "#F2B90F",textAlign:"center" }}>Exception Statistics</h3>
        <h3 onClick={ByProviderPressed} style={{ color: "#F2B90F",textAlign:"center" }}>Exception Summary By Provider</h3>
        <h3 onClick={ByAggregationPressed} style={{ color: "#F2B90F",textAlign:"center" }}>State Aggregation Report</h3>
        
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
        <LogoutIcon onClick={signOut} className="LogoutIcon"></LogoutIcon>
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
                ByCareGivePressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Exception By CareGiver
              </p>
            </Button>
            <Button onClick={ByReasonPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Exception By Reason
              </p>
            </Button>

            <Button onClick={ByDetailReportPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Exception By Detail Report
              </p>
            </Button>
            <Button onClick={ByStatisticsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Exception Statistics
              </p>
            </Button>
            <Button onClick={ByProviderPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                 Exception Summary By Provider
              </p>
            </Button>
            <Button onClick={ByAggregationPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
               State Aggregation Report
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
          {isOverlayOpen6 && <Overlay6 />}
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
export default EVVException;

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
    background-color: #0b2b40;
    color: white;
    border-radius: 10px;
    width: 100%;
  }
  .ListText {
    width: 100px;
    text-align: center;
  }
  .ListItem:hover .ListText {
    color: black;
    font-weight: bold;
    background-color: white;
  }
  //

  .table {
    border-collapse: collapse;
    padding:1%;
    width:100%;
    background-color: #0b2b40;
  }
  
  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size:17px;
    color:white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color:white;
    font-size:16px;
    
  }

  //
  .item1 {
    
   
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align:center;
    margin:0.5%;
  }
  //List Items

  // overlay css end
  .overlay {
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
  }
  .overlay2{
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
  .overlay3{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
    }
    .overlay4{
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
      .overlay5{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        height: 65%;
        z-index: 1000;
        background-color: white;
        padding: 1%;
        }
        .overlay6{
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 75%;
          height: 65%;
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
    width:30%;
    background-color:#f26e22;
    color:white;
    font-weight:bold;
  }
  .searchButton:hover {
    background-color:#2E0F59;
    color:white;
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
    height: 645px;
    width: 70%;
    margin-left: 2%;
    margin-top: 3%;
    background-color:#F2F2F2;
    padding: 1.7%;
  }
  .columnName {
    display: flex;
    flex-direction: row;
    height: 5.8%;
    border-radius: 15px;
    padding:1%;
  }
  .colume1 {
    font-size: 15px;
    color: grey;
    font-weight: bold;
    text-align:center;
    margin:0.5%;
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
    height: 700px;
    background-color:#564873;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-left: 2%;
    padding-bottom: 10px;
    overflow-y: auto;
    /* For Chrome, Safari, and Opera */

  }

    .TaskBar::-webkit-scrollbar {
    width: 10px;
    }

    .TaskBar::-webkit-scrollbar-track {
    background-color: #564873;
    }

    .TaskBar::-webkit-scrollbar-thumb {
    background-color: #8e9fb1;
    border-radius: 5px;
    
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
  .Header:hover {
    cursor: pointer;
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
    .overlay2 {
      width: 75%;
      height: 80%;
      overflow:auto;
      }
      .overlay4 {
        width: 75%;
        height: 80%;
        overflow:auto;
        }
        .overlay5 {
          width: 75%;
          height: 80%;
          overflow:auto;
          }
          .overlay6 {
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
