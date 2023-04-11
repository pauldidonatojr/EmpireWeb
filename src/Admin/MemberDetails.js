import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Footer from "../Footer";
import { DataGrid } from '@mui/x-data-grid';
//

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// navigation
import Backdrop from '@mui/material/Backdrop';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";
//

function MemberDetails() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [ViewSelected, setViewSelected] = useState(2);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };

  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 2:
        setIsOverlayOpen(true);
        setOpen(!open);
        break;
      case 3:
        setIsOverlayOpen2(true);
        setOpen2(!open2);
        break;
      case 4:
        setIsOverlayOpen3(true);
        setOpen3(!open3);
        break;
      default:
        break;
    }
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

  function Overlay() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
     
    >
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{  textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          By Invoice
        </p>
        <div className="searchFieldsDiv">
          
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
                label="Member Name"
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
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="From Date MM/DD/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="To Date MM/DD/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch Number"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Office</InputLabel>
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
      </ Backdrop>
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
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          By Visit
        </p>
        <div className="searchFieldsDiv">
          
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Member Name"
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
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Export Status</InputLabel>
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
                  <InputLabel>Billing Hold</InputLabel>
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
  //
  function Overlay3() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open3}
     
    >
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleClose3} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          By Batch
        </p>
        <div className="searchFieldsDiv">
          
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch Number"
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
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="AR Export From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="AR Export To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Billing Export From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Billing Export To Date DD/MM/YYYY"
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
         
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay3}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }
  //

  const LastAuthPressed = () => {
    setViewSelected(3);
  };
  const CalenderPressed = () => {
    setViewSelected(4);
  };

  const MemberInfoPressed = () => {
    setViewSelected(2);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return MemberInfoView();

      
      case 4:
        return CalenderView();

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

  //
  const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    start: new Date('2023-04-11T10:00:00'),
    end: new Date('2023-04-11T12:00:00'),
    title: 'Event 1',
    description: 'This is event 1',
    location: 'New York',
    organizer: 'John Doe'
  },
  {
    start: new Date('2023-04-13T14:00:00'),
    end: new Date('2023-04-13T16:00:00'),
    title: 'Event 2',
    description: 'This is event 2',
   
  }
];


 
const [TimeOverlay, setIsTimeOverlay] = useState(false);
function handleEventClick(event) {
  setIsTimeOverlay(true);
  setOpenTime(true);

}


//
const [opentime, setOpenTime] = React.useState(false);
const handleCloseTime = () => {
  setIsTimeOverlay(false);
  setOpenTime(false);
};

//
const [NavigationState,setNavigationState] = React.useState(0);
function SchedulePressed (){
  setNavigationState(1);
}
function VisitInfoPressed(){
  setNavigationState(2);
}
function BillInfoPreseed(){
  setNavigationState(3);
}
function renderOverlayViews (){
  switch (NavigationState) {
    case 1:
      
      return ScheduleView();
    case 2:
      return VisitInfoView();
    case 3:
      return BillingView();

    default:
      break;
  }
}
const ScheduleView =()=> {
  return (
    <div>
      <h2 style={{textAlign:"center",color:"#564873"}}>Schedule</h2>
    <div style={{display:"flex",flexDirection:"row"}}>
      <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>Schedule Time</h1>
     <TextField
                 style={{margin:"5%"}}
                id="outlined-basic"
                label="0600"
                variant="outlined"
              />
              <h5 style={{color:"black",marginTop:"10%"}}>-</h5>
     <TextField
     style={{margin:"5%"}}
                id="outlined-basic"
                label="1400"
                variant="outlined"
              />
     </div>
     <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>Care Giver Code</h1>
     <TextField
                 style={{margin:"5%"}}
                id="outlined-basic"
                label="0600"
                variant="outlined"
              />
             
     </div>

    </div>
    
    <div style={{display:"flex",flexDirection:"row"}}>
      <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>POC</h1>
     <TextField
                 style={{margin:"2%"}}
                id="outlined-basic"
                label="3758456-11/09/21"
                variant="outlined"
              />
             
     </div>
     <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>Admission ID: <span>115524</span></h1>
    
     </div>
     <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>Service Code</h1>
     <TextField
                 style={{margin:"2%"}}
                id="outlined-basic"
                label="3758456-11/09/21"
                variant="outlined"
              />
             
     </div>

    </div>
  
   
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>H</h1>
     <TextField
                 style={{margin:"2%"}}
                id="outlined-basic"
                label="0600"
                variant="outlined"
              />
              <h1 style={{color:"grey",textAlign:"center"}}>M:</h1>
     <TextField
     style={{margin:"2%"}}
                id="outlined-basic"
                label="1400"
                variant="outlined"
              />
     </div>
    
    </div>
    <h1 style={{color:"grey",textAlign:"center"}}>Bill Type: <span>Hourly</span></h1>
    <div style={{display:"flex",justifyContent:"center",marginTop:"2%"}}>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Save</Button>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Close</Button>
    </div>
   
    </div>
  )
}
//


//
const VisitInfoView =()=> {
  return (
    <div style={{width:"100%"}}>
      <h2 style={{textAlign:"center",color:"#564873"}}>Visit Schedule</h2>
     <h1 style={{color:"grey",textAlign:"center"}}>Scheduled Time : <span style={{color:"black"}}> 0600 : 1400</span></h1>
      <div style={{display:"flex",flexDirection:"row"}}>
      <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>Visit Start Time</h1>
     <TextField
                 style={{margin:"5%"}}
                id="outlined-basic"
                label="0600"
                variant="outlined"
              />
              <h5 style={{color:"black",marginTop:"10%"}}>-</h5>
     <TextField
     style={{margin:"5%"}}
                id="outlined-basic"
                label="1400"
                variant="outlined"
              />
     </div>
     <div style={{width:"50%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
     <h1 style={{color:"grey",textAlign:"center"}}>Visit End Time</h1>
     <TextField
                 style={{margin:"5%"}}
                id="outlined-basic"
                label="0600"
                variant="outlined"
              />
              <h5 style={{color:"black",marginTop:"10%"}}>-</h5>
     <TextField
     style={{margin:"5%"}}
                id="outlined-basic"
                label="1400"
                variant="outlined"
              />
     </div>

    </div>
    
    <div>
    <FormGroup>
      <FormControlLabel style={{color:"grey",fontSize:"50px"}} control={<Checkbox defaultChecked />}  label="Missed Visit" />
    </FormGroup>
    </div>
    <table style={{color:"black",width:"100%"}}>
  <tr style={{backgroundColor:"#564873",color:"white"}}>
    <th>Reason</th>
    <th>Action Taken</th>
    <th>Note</th>
    <th>User</th>
    <th>Date/Time</th>
  </tr>
  <tr>
    <td style={{textAlign:"center"}}>Other</td>
    <td style={{textAlign:"center"}}>Supervised approved change</td>
    <td style={{textAlign:"center"}}>Notes</td>
    <td style={{textAlign:"center"}}>Hector</td>
    <td style={{textAlign:"center"}}>2023-04-06</td>
  </tr>
</table>
<div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
              <Box style={{width:"25%",margin:"2%"}}>
                <FormControl fullWidth>
                  <InputLabel>Action Status</InputLabel>
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
              <Box style={{width:"25%",margin:"2%"}}>
                <FormControl fullWidth>
                  <InputLabel>Action Taken</InputLabel>
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
         
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
              <TextField
     style={{margin:"1%",width:"75%"}}
                id="outlined-basic"
                label="New Note"
                variant="outlined"
              />
              </div>
              <div style={{display:"flex",justifyContent:"center",marginTop:"2%"}}>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Save</Button>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Close</Button>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Print</Button>
    </div>
    <hr></hr>

    <h2 style={{textAlign:"center",color:"#564873"}}>Audit</h2>
    <div style={{display:"flex"}}>
    
      <h1 style={{color:"grey"}}>Vertified By :</h1>
      <FormControlLabel style={{color:"grey",fontSize:"50px",marginLeft:"3%"}} control={<Checkbox defaultChecked />}  label="Member" />
      <FormControlLabel style={{color:"grey",fontSize:"50px",marginLeft:"3%"}} control={<Checkbox defaultChecked />}  label="Care Giver" />
      <FormControlLabel style={{color:"grey",fontSize:"50px",marginLeft:"3%"}} control={<Checkbox defaultChecked />}  label="Family Member" />
      <FormControlLabel style={{color:"grey",fontSize:"50px",marginLeft:"3%"}} control={<Checkbox defaultChecked />}  label="Other" />
   
    </div>
    <div>
      
    <TextField
     style={{margin:"1%",width:"30%"}}
                id="outlined-basic"
                label="Date Verified"
                variant="outlined"
              />
               <TextField
     style={{margin:"1%",width:"30%"}}
                id="outlined-basic"
                label="Time Verfied"
                variant="outlined"
              />
               <TextField
     style={{margin:"1%",width:"30%"}}
                id="outlined-basic"
                label="Supervisor"
                variant="outlined"
              />
    </div>
    <hr></hr>
    <div>

    </div>
    <h2 style={{textAlign:"center",color:"#564873"}}>Daily Sheet</h2>
<FormControlLabel style={{color:"grey",fontSize:"50px",marginLeft:"3%"}} control={<Checkbox defaultChecked />}  label="Timesheet Required" />
<h4 style={{color:"#564873"}}>POC Duties</h4>
<div style={{ height:"45%", width: '100%',marginTop:"2%" }}>
      <DataGrid
        rows={rows15}
        columns={columns15}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
              <TextField
     style={{margin:"1%",width:"75%"}}
                id="outlined-basic"
                label="Care Giver New Note"
                variant="outlined"
              />
              </div>
              <div style={{display:"flex",justifyContent:"center",marginTop:"2%"}}>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Save</Button>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Close</Button>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Print</Button>
    </div>
    </div>
  )
}
const columns15 = [
  { field: 'id', headerName: 'Duty Number', width: 250 },
  { field: 'fromDate', headerName: 'Category', width: 200 }, 
  { field: 'toDate', headerName: 'Duty', width:400  },
 

  
];
//demo data to display
const rows15 = [
  {id:1,fromDate:"Justin",toDate:"Assist with Home"},
  {id:2,fromDate:"Justin",toDate:"Assist with Home"},
  {id:3,fromDate:"Justin",toDate:"Assist with Home"},
  {id:4,fromDate:"Justin",toDate:"Assist with Home"},
  {id:5,fromDate:"Justin",toDate:"Assist with Home"},
  {id:6,fromDate:"Justin",toDate:"Assist with Home"},
 
  
  
];
const BillingView =()=> {
  return (
    <div style={{width:"100%"}}>/
     <h2 style={{textAlign:"center",color:"#564873"}}>Primary Bill To</h2>
    
     <table style={{color:"black",width:"100%"}}>
  <tr style={{backgroundColor:"#564873",color:"white"}}>
    <th>Primary Bill To</th>
    <th>Service Code</th>
    <th>Bill Type</th>
    <th>Service Hours</th>
    <th>TT Hours</th>
  </tr>
  <tr>
    <td style={{textAlign:"center"}}>KEYSTONE FIRST CHC</td>
    <td style={{textAlign:"center"}}>W7125</td>
    <td style={{textAlign:"center"}}>Hourly</td>
    <td style={{textAlign:"center"}}>08:00</td>
    <td style={{textAlign:"center"}}>32.00</td>
  </tr>
</table>
//
<table style={{color:"black",width:"100%"}}>
  <tr style={{backgroundColor:"#564873",color:"white"}}>
    <th>OT Hours</th>
    <th>Billable Hours</th>
    <th>Billable rate</th>
    <th>Total</th>
    <th>Billed</th>
  </tr>
  <tr>
    <td style={{textAlign:"center"}}>0800</td>
    <td style={{textAlign:"center"}}>32.00</td>
    <td style={{textAlign:"center"}}>$ 21.52</td>
    <td style={{textAlign:"center"}}>$ 171.52</td>
    <td style={{textAlign:"center"}}>Y</td>
  </tr>
</table>
<table style={{color:"black",width:"100%"}}>
  <tr style={{backgroundColor:"#564873",color:"white"}}>
    <th>Invoice Number</th>
    <th>Invoice Creation Date</th>
    <th>Billing Hold</th>
    <th>TRN Number</th>
    <th>E-Billing Batch #</th>
    <th>Secondary Billing</th>
  </tr>
  <tr>
    <td style={{textAlign:"center"}}>54SD45</td>
    <td style={{textAlign:"center"}}>21-4-2023</td>
    <td style={{textAlign:"center"}}>4564555</td>
    <td style={{textAlign:"center"}}>5488SSS</td>
    <td style={{textAlign:"center"}}>656SS</td>
    <td style={{textAlign:"center"}}>656SS</td>
  </tr>
</table>
     <div style={{display:"flex",justifyContent:"center",marginTop:"2%"}}>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Save</Button>
      <Button style={{fontWeight:"font",margin:"1%",width:"15%",backgroundColor:"#564873",color:"white"}}>Close</Button>
     </div>

    </div>

  )
}
  function OverlayTime() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={opentime}
     
    >
      <div className="overlayTime">
        <CloseIcon className="crossIcon" onClick={handleCloseTime} />
        <h1 style={{  textAlign: "center",color:"black" }}>Non Skilled Visit</h1>
        <div style={{border: '3px solid #564873',backgroundColor:"#564873",borderRadius:"10px"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginLeft:"5%",}}>
      
      <h2 style={{color:"white"}}>Member Name : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white"}}>Visit Date : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white",textAlign:"center"}}>Member Phone # : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      </div>

      <div style={{display:"flex",justifyContent:"space-between",marginLeft:"1%"}}>
      <h2 style={{color:"white"}}>Admission ID : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white",textAlign:"center"}}>Assigment ID : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white",textAlign:"center"}}>Cordinator : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      </div>
      </div>
      <hr/>

      <div style={{display:"flex",alignContent:"center",marginLeft:"7%",justifyContent:"space-between",width:"85%",textAlign:"center"}}>
      <Button onClick={SchedulePressed}>Schedule</Button>
      <Button onClick={VisitInfoPressed}>Visit Info</Button>
      <Button onClick={BillInfoPreseed}>Bill Info</Button>
      </div>
      <hr/>
      <div style={{width:"100%",height:"100%",display:"flex"}}>
        {console.log("Navigation State : " + NavigationState)}
      
      {renderOverlayViews()}
     
      </div>
      </div>
      </ Backdrop>
    );
  }
//

function myCustomFormat(date, event) {
  return (
    <div >
      <div>{date.getDate()}</div>
      <Button onClick={() => handleEventClick(event)}>{event.title}</Button>
      <div>{event.description}</div>
     
    </div>
  );
}

console.log(myCustomFormat);
const CalenderView = () => {
  return (
    <div style={{ height: "100%", width: '100%' }}>
      <Calendar
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        formats={{ dayFormat: myCustomFormat }}
        showMultiDayTimes={false}
        views={['month']}
        style={{ height: "100%" }}
        onSelectEvent={handleEventClick} // pass the function as a prop
      />
    </div>
  );
};
  
  const MemberInfoView = () => {
    return (
      <div className="DateFieldHolder" style={{overflow:"auto",height: "100%", width: '100%' }}>
<div style={{border: '3px solid #564873',backgroundColor:"#564873",borderRadius:"10px"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginLeft:"5%",}}>
      <h2 style={{color:"white"}}>Name : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white"}}>Nurse : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white"}}>Frequency : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      </div>

      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h2 style={{color:"white",textAlign:"center"}}>MCO Cordinator : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white",textAlign:"center"}}>MCO Name : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white",textAlign:"center"}}>Admission ID : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      </div>
      
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <h2 style={{color:"white",margin:"2%",textAlign:"center"}}>Member ID : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      <h2 style={{color:"white",margin:"2%",textAlign:"center"}}>DOB : <span style={{color:"#F2A007"}}>{"ROSADO MARTIZA"}</span></h2>
      </div>
      </div>
      <h1 style={{color:"#564873",textAlign:"center"}}>Last 3 Authorization</h1>
      <div style={{ height:"45%", width: '100%',marginTop:"2%" }}>
      <DataGrid
        rows={rows10}
        columns={columns10}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    </div>
    );
  };
  const columns10 = [
    { field: 'id', headerName: 'Auth. #', width: 100 },
    { field: 'fromDate', headerName: 'From Date', width: 100 }, 
    { field: 'toDate', headerName: 'To Date', width: 120 },
    { field: 'serviceType', headerName: 'Service Type', width: 120 },
    { field: 'serviceCode', headerName: 'Service Code', width: 120 },
    { field: 'authType', headerName: 'Authorization Type', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 120 },
    { field: 'serviceCat', headerName: 'Service Category', width: 120 },
    { field: 'notes', headerName: 'Notes', width: 100 },
    { field: 'visit', headerName: 'Visit / Invoice', width: 100 },
    
  ];
  //demo data to display
  const rows10 = [
    {id:1,fromDate:"Justin",toDate:"Alo",serviceType:"02457894561",serviceCode:"XOXO",
    authType:"XZXZ",mco:"1123456",serviceCat:"1123456",notes:"Active",visit:"Homecare"},
    {id:2,fromDate:"Justin",toDate:"Alo",serviceType:"02457894561",serviceCode:"XOXO",
    authType:"XZXZ",mco:"1123456",serviceCat:"1123456",notes:"Active",visit:"Homecare"},
    {id:3,fromDate:"Justin",toDate:"Alo",serviceType:"02457894561",serviceCode:"XOXO",
    authType:"XZXZ",mco:"1123456",serviceCat:"1123456",notes:"Active",visit:"Homecare"},
    
    
  ];
 
  
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

      <h3  onClick={MemberInfoPressed} style={{ color: "#F2B90F" }}>Member Info</h3>
    
      <h3  onClick={CalenderPressed}  style={{ color: "#F2B90F" }}>Calender</h3>
    </div>
  </Box>
  </div>
);
//
function GoBackButtonPressed(){
  navigate("/AdminHome");

}
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
       
        <Button className="LogOutbutton" variant="outlined" >
          Log Out
        </Button>
        <LogoutIcon className="LogoutIcon" ></LogoutIcon>
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
                MemberInfoPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Member Info
              </p>
            </Button>
         

            <Button
              onClick={CalenderPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Calender
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen3 && <Overlay3 />}
          {TimeOverlay && <OverlayTime />}
          {RenderViews()}
        </Card>
      </div>
      <div className="GoBackButtonHolder">
      <Button className="GoBackButton" variant="outlined" onClick={GoBackButtonPressed} >Go Back</Button>
      </div>

      <Footer />
    </Wrapper>
  );
}
export default MemberDetails;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  .DateFieldHolder {
    
   
    
  }
  
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
  //

  .table {
    border-collapse: collapse;
    padding: 1%;
    width: 100%;
    background-color: #0b2b40;
  }

  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color: white;
    font-size: 16px;
  }

  //
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
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
  }

  // overlay css end
  .overlay {
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
  .overlayTime{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 85%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
    overflow:auto;
  }
  .overlay2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 62%;
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
  .searchFieldsDiv2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* create 3 equal columns */
    grid-gap: 10px; /* add some space between the columns */
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
  }
  .Field {
    width: 50%;
    margin: 2%;
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
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
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
    height: 600px;
    width: 70%;
    margin-left: 2%;
    margin-top: 3%;
    background-color: #f2f2f2;
    padding: 1.7%;
  }
  .columnName {
    display: flex;
    flex-direction: row;
    height: 5.8%;
    border-radius: 15px;
    padding: 1%;
  }
  .colume1 {
    font-size: 15px;
    color: grey;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
  }
  .colume2 {
    margin-left: 19%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume3 {
    margin-left: 17.5%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume4 {
    margin-left: 17%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume5 {
    margin-left: 20%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume6 {
    margin-left: 45%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
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
    height: 650px;
    background-color: #564873;
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
    align-items: center;
    justify-content: center;
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
    .overlay2 {
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
