import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
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
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'

import Backdrop from '@mui/material/Backdrop';
import UserName from "../../UserName";
//
const Link = require("react-router-dom").Link;

function Billing() {
  const { signOut } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [ViewSelected, setViewSelected] = useState(1);

  //

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);

  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 1:
        setViewSelected(11)
        break;
      case 2:
        setViewSelected(22)
        break;

      case 4:
        setViewSelected(44)
        break;
      default:
        break;
    }
  };
  //
  //
  const PreBillingReviewPressed = () => {
    setViewSelected(1);
  };

  const BillingReviewPressed = () => {
    setViewSelected(2);
  };
  const InvoiceSearchPressed = () => {
    //Navigate to Invoice Search Page
    navigate("/InvoiceSearch");

  };
  const NewInvoiceBatchPressed = () => {
    setViewSelected(4);
  };
  const ElectronicBillingPressed = () => {
    //Navigate to Electronic Billing
    navigate("/ElectronicBilling");
  };

  
 const handleClose = () => {
setViewSelected(1);
 };
 
 //
  //
const handleClose2 = () => {
  setViewSelected(2);
};

//
 //
 const handleClose4 = () => {
  setViewSelected(4);
 };
 
 //
  //CallMaintance Search Overlay
  function Overlay() {
    return (
     
      <div className="">
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Pre Billing Review
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
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Member Team</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Unassigned</MenuItem>
                    <MenuItem value={30}>Default</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>AmeriHealth Caritas of PA</MenuItem>
                    <MenuItem value={30}>KEYSTONE FIRST CHC</MenuItem>
                    <MenuItem value={30}>UPMC Health Plan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Default</MenuItem>
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
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Problem</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Unbalanced Visit</MenuItem>
                    <MenuItem value={20}>Missed Viist</MenuItem>
                    <MenuItem value={30}>With Temp Caregiver</MenuItem>
                    <MenuItem value={20}>CareGiver Compliance</MenuItem>
                    <MenuItem value={30}>POC Compliance</MenuItem>
                    <MenuItem value={20}>Overlapping Shifts</MenuItem>
                    <MenuItem value={30}>OT/TT Not Approval</MenuItem>
                    <MenuItem value={20}>Restricted Caregiver</MenuItem>
                    <MenuItem value={30}>Timesheet Not Approved</MenuItem>
                    <MenuItem value={20}>Authorization</MenuItem>
                    <MenuItem value={30}>Office Missing</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          
        </div>
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleClose}
        >
          Search
        </Button>
      </div>
    );
  }

  //MissedIn
  function Overlay2() {
    return (
     
      <div className="">
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
          Billing Review
        </p>
        <div className="searchFieldsDiv">
         
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>By Group</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>MCO</MenuItem>
                    <MenuItem value={20}>Hold Reason</MenuItem>
                    <MenuItem value={30}>Cordinator</MenuItem>
                    <MenuItem value={30}>Member</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Select All</MenuItem>
                    <MenuItem value={20}>AmeriHealth Caritas of PA</MenuItem>
                    <MenuItem value={30}>Centene PA Health Wellness</MenuItem>
                    <MenuItem value={20}>KEYSTONE FIRST CHC</MenuItem>
                    <MenuItem value={30}>UPMC Health Plan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Member Team</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Select All</MenuItem>
                    <MenuItem value={20}>Unassigned</MenuItem>
                    <MenuItem value={30}>Default</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Cordinator</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Select All</MenuItem>
                    <MenuItem value={20}>Default</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Hold Reason</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Select All</MenuItem>
                    <MenuItem value={20}>Missing Patient Name</MenuItem>
                    <MenuItem value={30}>
Missing Patient Address</MenuItem>
                    <MenuItem value={10}>
Missing Patient City</MenuItem>
                    <MenuItem value={20}>Missing Patient State</MenuItem>
                    <MenuItem value={30}>
Missing Patient Zip Code</MenuItem>
                    <MenuItem value={10}>
Missing Patient Date of Birth</MenuItem>
                    <MenuItem value={20}>
Missing Patient Gender</MenuItem>
                    <MenuItem value={30}>Missing Patient MR Number</MenuItem>
                    <MenuItem value={10}>
Missing Primary Diagnosis</MenuItem>
                    <MenuItem value={20}>
Missing Authorization Number</MenuItem>
                    <MenuItem value={30}>
Pending billing of additional shifts on same day</MenuItem>
                    <MenuItem value={10}>Visits on same day/service code must be billed on same invoice</MenuItem>
                    <MenuItem value={20}>
Visit should not be placed on Manual Hold</MenuItem>
                    <MenuItem value={30}>
Billing by Export Code Greater than 24 hours</MenuItem>
                    <MenuItem value={10}>Missing Admission Id</MenuItem>
                  
                  </Select>
                </FormControl>
              </Box>
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

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Visit From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Visit To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Display Zero Results</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
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
                label="Invoice From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Invoice Till Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Service Code"
                variant="outlined"
              />
            </Grid>
          
        </div>
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleClose2}
        >
          Search
        </Button>
      </div>
    );
  }

  //Missed Call Overlay
  function Overlay4() {
    return (
      
      <div className="">
        <CloseIcon className="crossIcon" onClick={handleClose4} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          New Invoice Batch
        </p>
        <div className="searchFieldsDiv">
      
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                     <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>AmeriHealth Caritas of PA</MenuItem>
                    <MenuItem value={30}>Centene PA Health Wellness</MenuItem>
                    <MenuItem value={20}>KEYSTONE FIRST CHC</MenuItem>
                    <MenuItem value={30}>UPMC Health Plan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Service Giver</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                   
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Discipline</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    
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
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Member Team</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Unassigned</MenuItem>
                    <MenuItem value={30}>Default</MenuItem>
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
         
        </div>
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleClose4}
        >
          Search
        </Button>
      </div>
    );
  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return PreBillingReviewView();
        case 11:
        return Overlay();
      case 2:
        return BillingReviewView();
        case 22:
        return Overlay2();
      case 4:
        return NewInvoiceBatchView();
        case 44:
        return Overlay4();
      

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

 

  const NewInvoiceBatchView = () => {
    return (
      <div>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <h1 style={{color:"grey"}}>Date :<span style={{color:"blue"}}>11 Jul2023 </span></h1>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <h1 style={{color:"grey"}}>Batch Number :<span style={{color:"blue"}}> 02031953204 </span></h1>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <h1 style={{color:"grey"}}>Total :<span style={{color:"blue"}}>10 </span></h1>
      <h1 style={{color:"grey"}}>Amount :<span style={{color:"blue"}}>$ 120.36 </span></h1>
    </div>
    <hr></hr>
    <h3 style={{color:"grey",fontWeight:"bold",textAlign:"center"}}>Billable Visits</h3>
      <div style={{ height: "450px", width: '100%' }}>
       
      <DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[15]}
        
        checkboxSelection={false}
      />
    </div>
    </div>
    );
  };
  // NewInvoiceBatchView
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'date', headerName: 'Date', width: 100 },
    { 
      field: 'careGiver', 
      headerName: 'Caregiver', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    
    { 
      field: 'admission', 
      headerName: 'Admission ID', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },


    { 
      field: 'PatientName', 
      headerName: 'Patient Name', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    
    { field: 'Visit', headerName: 'Visit', width: 130 },
    { field: 'VisitHrs', headerName: 'Visit Hrs', width: 130 },
    { field: 'VisitRate', headerName: 'Visit Rate', width: 150 },
    { field: 'TTHrs', headerName: 'TT Hrs', width: 130 },
    { field: 'TTRate', headerName: 'TT Rate', width: 130 },
    { field: 'Amount', headerName: 'Amount', width: 150 },
    { field: 'ServiceCategory', headerName: 'Service Category', width: 130 },
    { field: 'Discipline', headerName: 'Discipline', width: 130 },
   
  ];
  
  const rows3 = [
    {id:1,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    {id:2,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    
    {id:3,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    
    {id:4,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    
    {id:5,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    
    {id:6,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    
    {id:7,date:"4578",careGiver:"Jenifer",admission:"Awston",PatientName:"02548965478",Visit:"Active",VisitHrs:"Adam Fernandez",VisitRate:"Delta",TTHrs:"Active",TTRate:"Adam Fernandez",Amount:"Delta",ServiceCategory:"Delta",Discipline:"Active"},
    
    
    
    
    
  ];

  const PreBillingReviewView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
  // PreBillingReviewView
  const columns = [
   
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'date', headerName: 'Date', width: 100 },

    {
      field: 'AdmissionId',
      headerName: 'Admission ID',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    {
      field: 'memberName',
      headerName: 'Member Name',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { 
      field: 'careGiverCode', 
      headerName: 'CareGiver Code', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { 
      field: 'careGiverName', 
      headerName: 'CareGiver Name', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'cordinator', headerName: 'Cordinator', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'scheduleDate', headerName: 'Scheduled Time', width: 120 },
    { field: 'visitTime', headerName: 'Visit Time', width: 120 },
    { field: 'problem', headerName: 'Problem', width: 100 },
    
  ];
  
  const rows = [
    {id:1,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:2,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:3,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:4,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:5,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:6,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:7,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:8,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:9,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},
    {id:10,date:"4578",AdmissionId:"Jenifer",memberName:"Awston",careGiverCode:"02548965478",careGiverName:"Active",cordinator:"Adam Fernandez",mco:"Delta",scheduleDate:"Homecare",visitTime:"51s",problem:"51s"},

    
  ];
  const BillingReviewView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows2}
        columns={columns2}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
  // BillingReviewView
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'byGroupMco', headerName: 'By Group(MCO)', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'memberTeam', headerName: 'Member Team', width: 150 },
    { field: 'cordinator', headerName: 'Cordinator', width: 100 },
    { field: 'holdReason', headerName: 'Hold Reason', width: 100 },
    { field: 'memberFirstName', headerName: 'Member First Name', width: 150 },
    { field: 'memberLastName', headerName: 'Member Last Name', width: 150 },
    { field: 'visitFromDate', headerName: 'Visit From Date', width: 130 },
    { field: 'visitToDate', headerName: 'Visit To Date', width: 130 },
    { field: 'batchNumber', headerName: 'Batch Number', width: 130 },
    { field: 'invoiceNumber', headerName: 'Invoice Number', width: 130 },
    { field: 'invoiceFromDate', headerName: 'Invoice From Date', width: 130 },
    { field: 'invoiceToDate', headerName: 'Invoice To Date', width: 130 },
    { field: 'serviceCode', headerName: 'Service Code', width: 130 },
    
  ];
  
  const rows2 = [
    {id:1,byGroupMco:"4578",mco:"Awston",memberTeam:"02548965478",cordinator:"Active",
    holdReason:"Adam Fernandez",memberFirstName:"Delta",memberLastName:"Homecare",visitFromDate:"51s",visitToDate:"51s",batchNumber:"13255",invoiceNumber:"123487",
    invoiceFromDate:"10 Jul 2023",invoiceToDate:"10 Jul 2025",serviceCode:"125AS"},
    {id:2,byGroupMco:"4578",mco:"Awston",memberTeam:"02548965478",cordinator:"Active",
    holdReason:"Adam Fernandez",memberFirstName:"Delta",memberLastName:"Homecare",visitFromDate:"51s",visitToDate:"51s",batchNumber:"13255",invoiceNumber:"123487",
    invoiceFromDate:"10 Jul 2023",invoiceToDate:"10 Jul 2025",serviceCode:"125AS"},
    {id:3,byGroupMco:"4578",mco:"Awston",memberTeam:"02548965478",cordinator:"Active",
    holdReason:"Adam Fernandez",memberFirstName:"Delta",memberLastName:"Homecare",visitFromDate:"51s",visitToDate:"51s",batchNumber:"13255",invoiceNumber:"123487",
    invoiceFromDate:"10 Jul 2023",invoiceToDate:"10 Jul 2025",serviceCode:"125AS"},
    
    
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

        <h3 onClick={PreBillingReviewPressed}  style={{ color: "#F2B90F" }}>Pre Billing Review</h3>
        <h3 onClick={BillingReviewPressed}  style={{ color: "#F2B90F" }}>Billing Review</h3>
        <h3 onClick={InvoiceSearchPressed}  style={{ color: "#F2B90F" }}>Invoice Search</h3>
        <h3 onClick={NewInvoiceBatchPressed}  style={{ color: "#F2B90F" }}>New Invoice Batch</h3>
        <h3 onClick={ElectronicBillingPressed}  style={{ color: "#F2B90F" }}>ElectronicBilling</h3>
       
      </div>
    </Box>
    </div>
  );
  //
  function GoBackButtonPressed(){
    navigate(-1);
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
        
        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
        <LogoutIcon  onClick={signOut} className="LogoutIcon"></LogoutIcon>
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
                PreBillingReviewPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Pre Billing Review
              </p>
            </Button>
            <Button onClick={BillingReviewPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Billing Review
              </p>
            </Button>

            <Button onClick={InvoiceSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Invoice Search
              </p>
            </Button>
            <Button
              onClick={NewInvoiceBatchPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                New Invoice Batch
              </p>
            </Button>
            <Button
              onClick={ElectronicBillingPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Electronic Billing
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay" style={{overflow:"auto"}}>
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen4 && <Overlay4 />}
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
export default Billing;

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
  .table {
    border-collapse: collapse;
    padding: 1%;
    width: 100%;
    background-color: #0b2b40;
  }

  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size: 17px;
    color: white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color: white;
    font-size: 16px;
  }

  //
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
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
  .overlay2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
    z-index: 1000;
    background-color: white;
    overflow-y: auto;
    padding: 50px;
  }
  .overlay3 {
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
  .overlay4 {
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
  .overlay5 {
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
  .overlay6 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 55%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .crossIcon {
    margin-left: 2%;
    margin-top: 2%;
    color:black;
  }
  .crossIcon:hover {
    cursor:pointer;
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
      margin-left:2%;
    }
    .griditem{
      width:100%;
      margin-left:15%;
      
      
    }
    .griditem2{
      width:65%;
      margin-left:15%;
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
      .overlay4{
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
