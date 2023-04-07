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
        setIsOverlayOpen(true);
        setOpen(!open);
        break;
      case 2:
        setIsOverlayOpen2(true);
        setOpen2(!open2);
        break;

      case 4:
        setIsOverlayOpen4(true);
        setOpen4(!open4);
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

  //
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
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
 const [open4, setOpen4] = React.useState(false);
 const handleClose4 = () => {
   setOpen4(false);
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
                  <InputLabel>Member Team</InputLabel>
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
                  <InputLabel>Problem</InputLabel>
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
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleCloseOverlay}
        >
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
                  <InputLabel>By Group (MCO)</InputLabel>
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
                  <InputLabel>Member Team</InputLabel>
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
                  <InputLabel>Hold Reason</InputLabel>
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
                  <InputLabel>Display Zero Results</InputLabel>
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
          onClick={handleCloseOverlay2}
        >
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
                  <InputLabel>Service Giver</InputLabel>
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
                  <InputLabel>Member Team</InputLabel>
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
         
        </div>
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleCloseOverlay4}
        >
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return PreBillingReviewView();
      case 2:
        return BillingReviewView();
      case 4:
        return NewInvoiceBatchView();
      

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
  // NewInvoiceBatchView
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'serviceGiverCode', headerName: 'Service Giver Code', width: 150 },
    { field: 'discipline', headerName: 'Discipline', width: 150 },
    { field: 'fromDate', headerName: 'From Date', width: 130 },
    { field: 'toDate', headerName: 'To Date', width: 130 },
    { field: 'memberTeam', headerName: 'Member Team', width: 150 },
    { field: 'member', headerName: 'Member', width: 130 },
   
  ];
  
  const rows3 = [
    {id:1,mco:"4578",serviceGiverCode:"Jenifer",discipline:"Awston",fromDate:"02548965478",toDate:"Active",memberTeam:"Adam Fernandez",member:"Delta"},
    
    {id:2,mco:"4578",serviceGiverCode:"Jenifer",discipline:"Awston",fromDate:"02548965478",toDate:"Active",memberTeam:"Adam Fernandez",member:"Delta"},
    
    {id:3,mco:"4578",serviceGiverCode:"Jenifer",discipline:"Awston",fromDate:"02548965478",toDate:"Active",memberTeam:"Adam Fernandez",member:"Delta"},
    
  ];

  const PreBillingReviewView = () => {
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
  // PreBillingReviewView
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'AdmissionId', headerName: 'Admission ID', width: 100 },
    { field: 'careGiverCode', headerName: 'CareGiver Code', width: 150 },
    { field: 'careGiverName', headerName: 'CareGiver Name', width: 150 },
    { field: 'memberTeam', headerName: 'Member Team', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'cordinator', headerName: 'Cordinator', width: 100 },
    { field: 'fromDate', headerName: 'From Date', width: 100 },
    { field: 'toDate', headerName: 'To Date', width: 100 },
    { field: 'problem', headerName: 'Problem', width: 100 },
    
  ];
  
  const rows = [
    {id:1,AdmissionId:"4578",careGiverCode:"Jenifer",careGiverName:"Awston",memberTeam:"02548965478",mco:"Active",cordinator:"Adam Fernandez",fromDate:"Delta",toDate:"Homecare",problem:"51s"},
    {id:2,AdmissionId:"4578",careGiverCode:"Jenifer",careGiverName:"Awston",memberTeam:"02548965478",mco:"Active",cordinator:"Adam Fernandez",fromDate:"Delta",toDate:"Homecare",problem:"51s"},
    {id:3,AdmissionId:"4578",careGiverCode:"Jenifer",careGiverName:"Awston",memberTeam:"02548965478",mco:"Active",cordinator:"Adam Fernandez",fromDate:"Delta",toDate:"Homecare",problem:"51s"},
    {id:4,AdmissionId:"4578",careGiverCode:"Jenifer",careGiverName:"Awston",memberTeam:"02548965478",mco:"Active",cordinator:"Adam Fernandez",fromDate:"Delta",toDate:"Homecare",problem:"51s"},
    {id:5,AdmissionId:"4578",careGiverCode:"Jenifer",careGiverName:"Awston",memberTeam:"02548965478",mco:"Active",cordinator:"Adam Fernandez",fromDate:"Delta",toDate:"Homecare",problem:"51s"},
    
  ];
  const BillingReviewView = () => {
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

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen4 && <Overlay4 />}
          {RenderViews()}
        </Card>
      </div>

     <Footer/>
    </Wrapper>
  );
}
export default Billing;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

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
    padding: 1%;
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
    margin-bottom: 10%;
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
