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
import { DataGrid } from '@mui/x-data-grid';
import Footer from "../../Footer";

import { useNavigate } from "react-router-dom";
//

import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'
import UserName from "../../UserName";
//

function Visit() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //

  const [ViewSelected, setViewSelected] = useState(4);

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
      case 2:
        setIsOverlayOpen(true);
        setOpen(!open);
        break;
    
      case 4:
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

//
//
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
          Batch Search
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
                  <InputLabel>Claim Type</InputLabel>
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
          Re Submit Claims
        </p>
        <div className="searchFieldsDiv2">
        
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
                label="Batch Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
          
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay2}>
          Search
        </Button>
      </div>
      </Backdrop>
    );
  }


  const BatchSearchPressed = () => {
    setViewSelected(2);
  };

  const SubmitPressed = () => {
    setViewSelected(4);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return BatchSearchView();
      case 4:
        return SubmitView();

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
  const SubmitView = () => {
    return (
      <div>
        <h2 style={{textAlign:"center",color:"grey",fontWeight:"bold"}}>Resubmit claims E-submission Batch</h2>
   <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <h3 style={{color:"grey"}}>MCO : <span style={{color:"blue"}}>KEYSTONE FIRST CHC</span></h3>
    <h3 style={{color:"grey"}}>Batch Number : <span style={{color:"blue"}}>CLMKXJ456454654546</span></h3>
    <h3 style={{color:"grey"}}>Batch Date : <span style={{color:"blue"}}>21-Jul-2023</span></h3>
      <Button variant="outlined" style={{backgroundColor:"#2E0F59",padding:20,fontWeight:"bold",color:"#F2B90F",height:"45px"}}>
        ADD CLAIMS
      </Button>
   </div>
   <hr></hr>
   <h2 style={{textAlign:"center",color:"grey",fontWeight:"bold"}}>Resubmit Claim Search</h2>
  
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Grid className="datadisplaydropdown">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Daily Reason Code</InputLabel>
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
            <Grid className="datadisplaydropdown">
              <TextField
                id="outlined-basic"
                label="Visit Other Than"
                variant="outlined"
              />
            </Grid>
    </div>

     <div style={{ height: "320px", width: '100%' }}>
      <DataGrid
        rows={rows2}
        columns={columns2}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    </div>
    );
  };
  // // SubmitView
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'batchNumber', 
      headerName: 'Batch Number', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/BatchDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    {
      field: 'MemberName',
      headerName: 'Member Name',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'VisitDate', headerName: 'Visit Date', width: 250 },

    {
      field: 'InvoiceNo',
      headerName: 'Invoice No',
      width: 130,
      renderCell: (params) => (
        <Link to="/InvoiceDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },

    { field: 'ServiceCode', headerName: 'Service Code', width: 250 },
    { 
      field: 'CaregiverName', 
      headerName: 'Caregiver Name', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },

    { field: 'ScheduleVisit', headerName: 'Schedule Visit', width: 250 },
    { field: 'VisitHours', headerName: 'Visit Hours', width: 250 },
    { field: 'BilledHours', headerName: 'Billed Hours', width: 250 },
    { field: 'BilledUnits', headerName: 'Billed Units', width: 250 },
    { field: 'BillType', headerName: 'Bill Type', width: 250 },

    { field: 'BilledAmount', headerName: 'Billed Amount', width: 250 },
    { field: 'ST', headerName: 'ST', width: 250 },
    { field: 'TRN', headerName: 'TRN', width: 250 },
   
  ];
  
  const rows2 = [
    {id:1,batchNumber:"4578",MemberName:"Jenifer",VisitDate:"Awston",
    InvoiceNo:"4578",ServiceCode:"Jenifer",CaregiverName:"Awston",
    ScheduleVisit:"4578",VisitHours:"Jenifer",BilledHours:"Awston",
    BilledUnits:"4578",BillType:"Jenifer",BilledAmount:"Awston",
    ST:"4578",TRN:"Jenifer"},
    {id:2,batchNumber:"4578",MemberName:"Jenifer",VisitDate:"Awston",
    InvoiceNo:"4578",ServiceCode:"Jenifer",CaregiverName:"Awston",
    ScheduleVisit:"4578",VisitHours:"Jenifer",BilledHours:"Awston",
    BilledUnits:"4578",BillType:"Jenifer",BilledAmount:"Awston",
    ST:"4578",TRN:"Jenifer"},
    {id:3,batchNumber:"4578",MemberName:"Jenifer",VisitDate:"Awston",
    InvoiceNo:"4578",ServiceCode:"Jenifer",CaregiverName:"Awston",
    ScheduleVisit:"4578",VisitHours:"Jenifer",BilledHours:"Awston",
    BilledUnits:"4578",BillType:"Jenifer",BilledAmount:"Awston",
    ST:"4578",TRN:"Jenifer"},
    {id:4,batchNumber:"4578",MemberName:"Jenifer",VisitDate:"Awston",
    InvoiceNo:"4578",ServiceCode:"Jenifer",CaregiverName:"Awston",
    ScheduleVisit:"4578",VisitHours:"Jenifer",BilledHours:"Awston",
    BilledUnits:"4578",BillType:"Jenifer",BilledAmount:"Awston",
    ST:"4578",TRN:"Jenifer"},
   
    
    
  ];
  const BatchSearchView = () => {
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
  // BatchSearchView
  const columns4 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'batchNumber', 
      headerName: 'Batch Number', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/BatchDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'mco', headerName: 'MCO', width: 175 },
    { field: 'claimType', headerName: 'Claim Type', width: 175 },
    {
      field: 'MemberNo',
      headerName: 'Member #',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'ClaimNo', headerName: 'Claim #', width: 175 },
    { field: 'ClaimAmount', headerName: 'Claim Amount', width: 175 },
    { field: 'CreatedDate', headerName: 'Created Date', width: 175 },
    { field: 'ExportDate', headerName: 'Last Exported Date', width: 175 },
    { field: 'ExportedBy', headerName: 'Last Exported By', width: 175 },
    { field: 'Export', headerName: 'Export', width: 175 },
    { field: 'detail', headerName: 'Detail', width: 175 },
    { field: 'summary', headerName: 'Summary', width: 175 },
   

   
  ];
  
  const rows4 = [
    {id:1,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:2,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:3,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:4,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:5,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:6,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:7,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:8,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:9,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    {id:10,batchNumber:"4578",mco:"Jenifer",claimType:"Awston",MemberNo:"02548965478",ClaimNo:"Active",
    ClaimAmount:"Awston",CreatedDate:"02548965478",ExportDate:"Active",ExportedBy:"Awston",Export:"02548965478",detail:"Active",summary:"Active"},
    
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

        <h3 onClick={() => {
                SubmitPressed();
              }}  style={{ color: "#F2B90F" }}>Re Submit Claims</h3>
        <h3 onClick={BatchSearchPressed} style={{ color: "#F2B90F" }}>Batch Search</h3>
       
       
      </div>
    </Box>
    </div>
  );
  //
  const { signOut } = React.useContext(AuthContext);
  function GoBackButtonPressed(){
    navigate("/Billing");

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
                SubmitPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
               Re Submit Claims
              </p>
            </Button>
            <Button onClick={BatchSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Batch Search
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
      <div className="GoBackButtonHolder">
      <Button className="GoBackButton" variant="outlined" onClick={GoBackButtonPressed} >Go Back</Button>
      </div>

     <Footer/>
    </Wrapper>
  );
}
export default Visit;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  .GoBackButtonHolder{
    display:flex;
    justify-content:center;
    margin-top:0;
    margin-bottom:3%;
  }
  .datadisplaydropdown{
    width:25%;
    margin:1%;
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
    .searchFieldsDiv2 {
      grid-template-columns: repeat(1, 1fr); /* create 3 equal columns */
    }
    .overlay {
    width: 75%;
    height: 85%;
    overflow:auto;
    }
    .overlay2 {
      width: 75%;
      height: 70%;
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
