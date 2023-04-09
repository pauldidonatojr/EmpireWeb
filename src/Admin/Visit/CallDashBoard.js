import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
//
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {AuthContext} from '../../components/context'
import Backdrop from '@mui/material/Backdrop';
//
const Link = require("react-router-dom").Link;

function CallDashBoard() {
  const navigate = useNavigate();
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);

  
//

const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};

function GoBackButtonPressed(){
  navigate("/Visit");

}
//
  
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
const CallMaintancePressed = () => {
  setViewSelected(1);
};

const MissedInPressed = () => {
  setViewSelected(2);
};
const MissedOutPressed = () => {
  setViewSelected(3);
};
const MissedCallPressed = () => {
  setViewSelected(4);
};
const VisitLogPressed = () => {
  setViewSelected(5);
};
const RejectedCallsPressed = () => {
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
      <h1 style={{ textAlign:"center",color:"black"}}>Set Filter from here !</h1>
      <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Call Maintaince</p>
      <div className="searchFieldsDiv">
      
        
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Care Giver First Name"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
      <TextField
          id="outlined-basic"
          label="Care Giver Last Name"
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
          label="Assigment ID"
          variant="outlined"
        />
        
      </Grid>

      <Grid className="griditem">
      
      <TextField
         
          id="outlined-basic"
          label="Admission ID"
          variant="outlined"
        />
        
      </Grid>
      <Grid className="griditem">
      
      <TextField
         
          id="outlined-basic"
          label="Member First Name"
          variant="outlined"
        />
        
      </Grid>
      <Grid className="griditem">
      
      <TextField
         
          id="outlined-basic"
          label="Member Last Name"
          variant="outlined"
        />
        
      </Grid>
        

      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel >Cordinator</InputLabel>
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
      <InputLabel >Status</InputLabel>
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
      <InputLabel >Member Team</InputLabel>
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
      <InputLabel >Member Location</InputLabel>
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
      <InputLabel >Member Branch</InputLabel>
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
      
      <TextField
         
          id="outlined-basic"
          label="From Date dd/mm/yyyy"
          variant="outlined"
        />
        
      </Grid>
      <Grid className="griditem2">
      
      <TextField
         
          id="outlined-basic"
          label="Till Date dd/mm/yyyy"
          variant="outlined"
        />
        
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
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Missed In</p>
    <div className="searchFieldsDiv">
    
      
    <Grid  className="griditem">
      <TextField
       
        id="outlined-basic"
        label="CareGiver Name"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    <TextField
        id="outlined-basic"
        label="Admission ID"
        variant="outlined"
      />
    </Grid>
      
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Member Name"
        variant="outlined"
      />
    </Grid>
      

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCO</InputLabel>
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
    <InputLabel >Cordinator</InputLabel>
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
    <InputLabel >Team Member</InputLabel>
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
        label="Assigment ID"
        variant="outlined"
      />
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
    <h1 style={{ textAlign:"center",color:"black"}}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Missed Out</p>
    <div className="searchFieldsDiv">
    
      
    <Grid className="griditem">
      <TextField
       
        id="outlined-basic"
        label="CareGiver Name"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    <TextField
        id="outlined-basic"
        label="Admission ID"
        variant="outlined"
      />
    </Grid>
      
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Member Name"
        variant="outlined"
      />
    </Grid>
  

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCO</InputLabel>
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
    <InputLabel >Cordinator</InputLabel>
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
    <InputLabel >Team Member</InputLabel>
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
        label="Assigment ID"
        variant="outlined"
      />
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
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Missed Call</p>
    <div className="searchFieldsDiv">
  
      
    <Grid className="griditem">
      <TextField
       
        id="outlined-basic"
        label="Care Giver Name"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    <TextField
        id="outlined-basic"
        label="Admission ID"
        variant="outlined"
      />
    </Grid>
      
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Member Name"
        variant="outlined"
      />
    </Grid>

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCO</InputLabel>
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
    <InputLabel >Cordinator</InputLabel>
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
    <InputLabel >Team Member</InputLabel>
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
        label="Assigment ID"
        variant="outlined"
      />
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
    <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Visit Log</p>
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
        label="Care Giver Code"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    
    <TextField
        id="outlined-basic"
        label="Care Giver Name"
        variant="outlined"
      />
      
    </Grid>
    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >Team Member</InputLabel>
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
        label="Assigment ID"
        variant="outlined"
      />
      
    </Grid>
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Admission ID"
        variant="outlined"
      />
      
    </Grid>
      

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >Cordinator</InputLabel>
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
        label="From Date dd/mm/yyyy"
        variant="outlined"
      />
      
    </Grid>
    
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Till Date dd/mm/yyyy"
        variant="outlined"
      />
      
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
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Rejected Calls</p>
    <div className="searchFieldsDiv">
   
      
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
        label="Care Giver Name"
        variant="outlined"
      />
    </Grid>
      
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Assigment ID"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    
    <TextField
        id="outlined-basic"
        label="Admission ID"
        variant="outlined"
      />
      
    </Grid>

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >Team Member</InputLabel>
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
        label="From Date dd/mm/yy"
        variant="outlined"
      />
    </Grid>
    <Grid className="griditem">
    
    <TextField
       
        id="outlined-basic"
        label="Till Date dd/mm/yy"
        variant="outlined"
      />
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
        return CallMaintanceView();

      case 2:
        return MissedInView();
      case 3:
        return MissedOutView();
      case 4:
        return MissedCallView();
      case 5:
        return VisitLogView();
      case 6:
        return RejectedCallsView();

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


  const RejectedCallsView = () => {
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
  //rejecyed call View columns and demo data
  const columns6 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'careGiverCode', headerName: 'CareGiver Code', width: 150 },
    { field: 'careGiverName', headerName: 'CareGiver Name', width: 150 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 135 },
    { field: 'admissionID', headerName: 'Admission ID', width: 135 },
    { field: 'teamMember', headerName: 'Team Member', width: 135 },
    { field: 'fromDate', headerName: 'From Date', width: 135 },
    { field: 'tillDate', headerName: 'Till Date', width: 135 },
   
  ];
  //demo data to display
  const rows6 = [
    {id:1,careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",teamMember:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:2,careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",teamMember:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:3,careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",teamMember:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:4,careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",teamMember:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
   
   
  ];
  //

  
  const VisitLogView = () => {
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
  //Visit Log View columns and demo data
  const columns5 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First Name', width: 100 }, 
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'careGiverCode', headerName: 'CareGiver Code', width: 130 },
    { field: 'careGiverName', headerName: 'CareGiver Name', width: 130 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 100 },
    { field: 'admissionID', headerName: 'Admission ID', width: 100 },
    { field: 'cordinator', headerName: 'Cordinator', width: 100 },
    { field: 'fromDate', headerName: 'From Date', width: 100 },
    { field: 'tillDate', headerName: 'Till Date', width: 150 },
   
  ];
  //demo data to display
  const rows5 = [
    {id:1,firstName:"Justin",lastName:"Alo",careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",cordinator:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:2,firstName:"Justin",lastName:"Alo",careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",cordinator:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:3,firstName:"Justin",lastName:"Alo",careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",cordinator:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:4,firstName:"Justin",lastName:"Alo",careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",cordinator:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
    {id:5,firstName:"Justin",lastName:"Alo",careGiverCode:"02457894561",careGiverName:"XOXO",assigmentID:"XZXZ",admissionID:"1123456",cordinator:"Active",fromDate:"10 jul 2020",tillDate:"10 jul 2021"},
   
   
  ];
  //
  
  const MissedCallView = () => {
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
  //MissedCallView columns and demo data
  const columns4 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'careGiverName', headerName: 'Care Giver Name', width: 150 }, 
    { field: 'admissionID', headerName: 'Admission ID', width: 150 },
    { field: 'memberName', headerName: 'Member Name', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'teamMember', headerName: 'Team Member', width: 150 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 150 },
    
  ];
  //demo data to display
  const rows4 = [
    {id:1,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:2,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:3,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:4,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:5,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:6,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
   
  ];
  //
  
  const MissedOutView = () => {
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
  //MissedOutView columns and demo data
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'careGiverName', headerName: 'Care Giver Name', width: 150 }, 
    { field: 'admissionID', headerName: 'Admission ID', width: 150 },
    { field: 'memberName', headerName: 'Member Name', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'teamMember', headerName: 'Team Member', width: 150 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 150 },
    
  ];
  //demo data to display
  const rows3 = [
    {id:1,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:2,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:3,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:4,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:5,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:6,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
   
  ];
  //
  
  const CallMaintanceView = () => {
    return (

      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
     
    );
  };
  
  //call maintance columns and demo data
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First Name', width: 100 }, 
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'caregiverCode', headerName: 'CareGiver Code', width: 120 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 100 },
    { field: 'admissionID', headerName: 'Admission ID', width: 100 },
    { field: 'memberFirstName', headerName: 'Member First Name', width: 140 },
    { field: 'cordinator', headerName: 'Cordinator', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'memberTeam', headerName: 'Member Team', width: 120 },
    { field: 'memberLocation', headerName: 'Member Location', width: 125 },
    { field: 'memberBranch', headerName: 'Member Branch', width: 120 },
    { field: 'fromDate', headerName: 'From Date', width: 100 },
    { field: 'tillDate', headerName: 'Till Date', width: 100 },
    
  ];
  //demo data to display
  const rows = [
    {id:1,firstName:"Justin",lastName:"Alo",caregiverCode:"02457894561",assigmentID:"XOXO",admissionID:"XZXZ",memberFirstName:"1123456",cordinator:"Active",status:"Homecare",memberTeam:"51s",
    memberLocation:"China",memberBranch:"Depot",fromDate:"10 Jul 2020",tillDate:"10 Jul 2021"},
    {id:2,firstName:"Justin",lastName:"Alo",caregiverCode:"02457894561",assigmentID:"XOXO",admissionID:"XZXZ",memberFirstName:"1123456",cordinator:"Active",status:"Homecare",memberTeam:"51s",
    memberLocation:"China",memberBranch:"Depot",fromDate:"10 Jul 2020",tillDate:"10 Jul 2021"},
    {id:3,firstName:"Justin",lastName:"Alo",caregiverCode:"02457894561",assigmentID:"XOXO",admissionID:"XZXZ",memberFirstName:"1123456",cordinator:"Active",status:"Homecare",memberTeam:"51s",
    memberLocation:"China",memberBranch:"Depot",fromDate:"10 Jul 2020",tillDate:"10 Jul 2021"},
    {id:4,firstName:"Justin",lastName:"Alo",caregiverCode:"02457894561",assigmentID:"XOXO",admissionID:"XZXZ",memberFirstName:"1123456",cordinator:"Active",status:"Homecare",memberTeam:"51s",
    memberLocation:"China",memberBranch:"Depot",fromDate:"10 Jul 2020",tillDate:"10 Jul 2021"},
    {id:5,firstName:"Justin",lastName:"Alo",caregiverCode:"02457894561",assigmentID:"XOXO",admissionID:"XZXZ",memberFirstName:"1123456",cordinator:"Active",status:"Homecare",memberTeam:"51s",
    memberLocation:"China",memberBranch:"Depot",fromDate:"10 Jul 2020",tillDate:"10 Jul 2021"},
    
  ];
  //
  const MissedInView = () => {
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
    ///
    );
  };
  //MissedInView columns and demo data
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'careGiverName', headerName: 'Care Giver Name', width: 150 }, 
    { field: 'admissionID', headerName: 'Admission ID', width: 150 },
    { field: 'memberName', headerName: 'Member Name', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'cordinator', headerName: 'Cordinator', width: 150 },
    { field: 'teamMember', headerName: 'Team Member', width: 150 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 150 },
    
  ];
  //demo data to display
  const rows2 = [
    {id:1,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:2,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:3,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:4,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:5,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
    {id:6,careGiverName:"Justin",admissionID:"Alo",memberName:"02457894561",mco:"XOXO",cordinator:"XZXZ",teamMember:"1123456",assigmentID:"Active"},
   
  ];
  //
//
const [state, setState] = React.useState({
  left: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    
  >
    
    <div style={{backgroundColor:"#2E0F59",display:"flex",flexDirection:"column",alignItems:"center",height:"680px"}}>
    
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
          <hr className="line" style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />
        
     
     <h3    onClick={() => {
                CallMaintancePressed();
              }}  style={{color:"#F2B90F"}}>Call Maintance</h3>
     <h3  onClick={MissedInPressed}  style={{color:"#F2B90F"}}>Missed In</h3>
     <h3  onClick={MissedOutPressed}  style={{color:"#F2B90F"}}>Missed Out</h3>
     <h3  onClick={MissedCallPressed}  style={{color:"#F2B90F"}}>Missed Call</h3>
     <h3  onClick={VisitLogPressed}  style={{color:"#F2B90F"}}>Visit Log</h3>
     <h3  onClick={RejectedCallsPressed}  style={{color:"#F2B90F"}}>Rejected Calls</h3>
     
   
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
    onClick={toggleDrawer('left', true)}
     anchor={'left'}
     open={state['left']}
     onClose={toggleDrawer('left', false)}>
      
    </MenuIcon>
        <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() =>navigate("/AdminHome")}/>
        
        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
        <LogoutIcon className="LogoutIcon" onClick={signOut}></LogoutIcon>
      </div>
      <div style={{display:"none"}}>
{['left'].map((anchor) => (
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
          <div className="UserInfo">
            <Avatar
              className="avatar"
              alt={"Hector"}
              src="/static/images/avatar/1.jpg"
            />
            <p
              style={{
                fontSize: "22px",
                marginTop: "8%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Hector Martinez
            </p>
          </div>
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
                CallMaintancePressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Call Maintaince
              </p>
            </Button>
            <Button onClick={MissedInPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Missed In
              </p>
            </Button>

            <Button onClick={MissedOutPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Missed Out
              </p>
            </Button>
            <Button onClick={MissedCallPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Missed Call
              </p>
            </Button>
            <Button onClick={VisitLogPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visit Log
              </p>
            </Button>
            <Button onClick={RejectedCallsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Rejected Calls
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
export default CallDashBoard;

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
    height: 60%;
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
    margin-right:55%;
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
  .griditem{
    width:100%;
  }
  .griditem2{
    width:68%;
  }
  .menuIcon{
    display:none;
  }
  .LogoutIcon{
    display:none;
  }
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
      height: 75%;
      overflow:auto;
      }
      .overlay3{
        width: 75%;
        height: 80%;
        overflow:auto;
       
      }
      .overlay4{
        width: 75%;
        height: 80%;
        overflow:auto;
       
      }
      .overlay5{
        width: 75%;
        height: 80%;
        overflow:auto;
        
      }
      .overlay6{
        width: 75%;
        height: 80%;
        overflow:auto;
        
      }
    .searchButton {
      margin-top: 5%;
      margin-bottom: 2%;
    }
    .input{
      margin-left:20%;
    }
    
    .Signup{
      margin-left:25%;
      
    }
`;
