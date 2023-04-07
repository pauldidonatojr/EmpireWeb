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
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'

import Backdrop from '@mui/material/Backdrop';

function Billing() {
  const { signOut } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //

  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
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
      
      default:
        break;
    }
  };
//
const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  ////
const [open2, setOpen2] = React.useState(false);
const handleClose2 = () => {
  setOpen2(false);
};

//
  function Overlay() {
    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
     
    >
      <div className="overlay">
        <CloseIcon style={{color:"black"}} className="crossIcon" onClick={handleClose} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Bank Detail Report
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
                label="Batch Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Payment Status</InputLabel>
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
                  <InputLabel>Team(s)</InputLabel>
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
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Billing
        </p>
        <div className="searchFieldsDiv">
       
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Visit From Date DD/YY/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Visit To Date DD/YY/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Contract</InputLabel>
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
                label="Invoice From Date DD/YY/YYYY"
                variant="outlined"
              />
            </Grid>
            
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Invoice To Date DD/YY/YYYY"
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
                label="Batch From Date DD/YY/YYYY"
                variant="outlined"
              />
            </Grid>
            
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch To Date DD/YY/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch From Date DD/YY/YYYY"
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
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Care Giver"
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

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Group By</InputLabel>
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
                  <InputLabel>Member Team(s)</InputLabel>
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
                  <InputLabel>Service Code(s)</InputLabel>
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
                  <InputLabel>Team(s)</InputLabel>
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
  

  const BankDetailReportPressed = () => {
    setViewSelected(1);
  };
  const BillingPressed = () => {
    setViewSelected(2);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return BankDetailReportView();

      case 2:
        return BillingView();
     

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

  const BankDetailReportView = () => {
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
  // // BankDetailReportView
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'mco', headerName: 'MCO', width: 150 },
    { field: 'BatchNumber', headerName: 'Batch Number', width: 150 },
    { field: 'BatchDate', headerName: 'Batch Date', width: 150 },
    { field: 'PaymentStatus', headerName: 'Payment Status', width: 150 },
    { field: 'team', headerName: 'Team(s)', width: 150 },
  
  ];
  
  const rows2 = [
    {id:1,mco:"4578",BatchNumber:"Jenifer",BatchDate:"Awston",PaymentStatus:"Awston",team:"Awston"},
    {id:2,mco:"4578",BatchNumber:"Jenifer",BatchDate:"Awston",PaymentStatus:"Awston",team:"Awston"},
    {id:3,mco:"4578",BatchNumber:"Jenifer",BatchDate:"Awston",PaymentStatus:"Awston",team:"Awston"},
    {id:4,mco:"4578",BatchNumber:"Jenifer",BatchDate:"Awston",PaymentStatus:"Awston",team:"Awston"},
    {id:5,mco:"4578",BatchNumber:"Jenifer",BatchDate:"Awston",PaymentStatus:"Awston",team:"Awston"},
    
  ];
  const BillingView = () => {
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
   // // BillingView
   const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'VisitDate', headerName: 'Visit Date', width: 100 },
    { field: 'contract', headerName: 'Contract', width: 100 },
    { field: 'InvoiceDate', headerName: 'Invoice Date', width: 100 },
    { field: 'InvoiceNumber', headerName: 'Invoice Number', width: 100 },
    { field: 'BatchDate', headerName: 'Batch Date', width: 100 },
    { field: 'BatchNumber', headerName: 'Batch Number', width: 100 },
    { field: 'CareGiver', headerName: 'Care Giver', width: 100 },
    { field: 'Member', headerName: 'Member', width: 100 },
    { field: 'GroupBy', headerName: 'Group By', width: 100 },
    { field: 'MemberTeam', headerName: 'Member Team', width: 100 },
    { field: 'ServiceCode', headerName: 'Service Code', width: 100 },
    { field: 'team', headerName: 'Team(s)', width: 100 },
  ];
  
  const rows = [
    {id:1,VisitDate:"4578",contract:"Jenifer",InvoiceDate:"Awston",InvoiceNumber:"Awston",BatchDate:"Awston",BatchNumber:"Awston",CareGiver:"Awston"
    ,Member:"Awston",GroupBy:"Awston",MemberTeam:"Awston",ServiceCode:"Awston",team:"Awston"},
    {id:2,VisitDate:"4578",contract:"Jenifer",InvoiceDate:"Awston",InvoiceNumber:"Awston",BatchDate:"Awston",BatchNumber:"Awston",CareGiver:"Awston"
    ,Member:"Awston",GroupBy:"Awston",MemberTeam:"Awston",ServiceCode:"Awston",team:"Awston"},
    {id:3,VisitDate:"4578",contract:"Jenifer",InvoiceDate:"Awston",InvoiceNumber:"Awston",BatchDate:"Awston",BatchNumber:"Awston",CareGiver:"Awston"
    ,Member:"Awston",GroupBy:"Awston",MemberTeam:"Awston",ServiceCode:"Awston",team:"Awston"},
    
    
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

      <h3 onClick={BillingPressed} style={{ color: "#F2B90F" }}>Billing</h3>
      <h3 onClick={BankDetailReportPressed} style={{ color: "#F2B90F" }}>Bank Detail Report</h3>
     
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
        <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() =>navigate("/AdminHome")} />
       
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
            <Button onClick={BankDetailReportPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Bank Detail Report
              </p>
            </Button>

         
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
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
    height: 55%;
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
    height: 85%;
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
