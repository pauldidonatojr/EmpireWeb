import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'
import UserName from "../../UserName";
const Link = require("react-router-dom").Link;

function CallDashBoard() {
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);
  const navigate = useNavigate();
const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};

//
function GoBackButtonPressed(){
  navigate(-1);

}
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
  const [isOverlayOpen5, setIsOverlayOpen5] = useState(false);

  const handleClickIcon = () => {
    
    switch (ViewSelected) {
      case 1:
       setViewSelected(11);
        break;
      case 2:
        setViewSelected(22);
        break;
      case 3:
        setViewSelected(33);
        break;
      case 4:
        setViewSelected(44);
        break;
      case 5:
        setViewSelected(55);
        break;
     
      default:
        break;
    }

  };
  //
//
const ImportedPressed = () => {
  setViewSelected(1);
};

const PendingPressed = () => {
  setViewSelected(2);
};
const FailedImportPressed = () => {
  setViewSelected(3);
};
const ImportFilesPressed = () => {
  setViewSelected(4);
};
const ReprocessingPressed = () => {
  setViewSelected(5);
};


const handleClose = () => {
  setViewSelected(1);
};

const handleClose2 = () => {
  setViewSelected(2);
};

const handleClose3 = () => {
  setViewSelected(3);
};

const handleClose4 = () => {
  setViewSelected(4);
};

const handleClose5 = () => {
  setViewSelected(5);
};

//

  //CallMaintance Search Overlay
  function Overlay() {
    return (
      
      <div className="">
      <CloseIcon className="crossIcon" onClick={handleClose} />
      <h1 style={{ textAlign:"center" ,color:"black" }}>Set Filter from here !</h1>
      <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Imported Files</p>
      <div className="searchFieldsDiv">
     
      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Interface</InputLabel>
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
          label="Import From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
      <TextField
          id="outlined-basic"
          label="Import To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
         
 
      </div>
      <Button className="searchButton" variant="outlined" onClick={handleClose}>
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
    <h1 style={{ textAlign:"center" ,color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Pending Files</p>
    <div className="searchFieldsDiv">

      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Interface</InputLabel>
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
          label="Import From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
      <TextField
          id="outlined-basic"
          label="Import To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
         

      </div>
    <Button className="searchButton" variant="outlined" onClick={handleClose2}>
      Search
    </Button>
  </div>
  );
}

//Missed Out
function Overlay3() {
  return (
    
    <div className="">
    <CloseIcon className="crossIcon" onClick={handleClose3} />
    <h1 style={{ textAlign:"center",color:"black"  }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Failed To Import</p>
    <div className="searchFieldsDiv">
    
      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Interface</InputLabel>
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
          label="Import From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
      <TextField
          id="outlined-basic"
          label="Import To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
         
 
      </div>
    <Button className="searchButton" variant="outlined" onClick={handleClose3}>
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
    <h1 style={{ textAlign:"center",color:"black"  }}>Import Files from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Import Files</p>
    <div className="searchFieldsDiv">

      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Interface</InputLabel>
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
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Usage</InputLabel>
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
    <Button className="searchButton" variant="outlined" onClick={handleClose4}>
      Search
    </Button>
  </div>
  );
}
//Visit Log
function Overlay5() {
  return (
    
    <div className="">
    <CloseIcon className="crossIcon" onClick={handleClose5} />
    <h1 style={{ textAlign:"center" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Re Processing</p>
    <div className="searchFieldsDiv">
    
      <Grid className="griditem2">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Interface</InputLabel>
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
          label="Import From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
      <TextField
          id="outlined-basic"
          label="Import To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
         
 
      </div>
    <Button className="searchButton" variant="outlined" onClick={handleClose5}>
      Search
    </Button>
  </div>
  );
}


  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return ImportedView();
        case 11:
        return Overlay();

      case 2:
        return PendingView();
        case 22:
        return Overlay2();
      case 3:
        return FailedImportView();
        case 33:
          return Overlay3();
      case 4:
        return ImportFileView();
        case 44:
          return Overlay4();
        case 5:

        return ReProcessingView();
case 55:
        return Overlay5();
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


  

  
  const ReProcessingView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows5}
        columns={columns5}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
   //ReProcessingView
   const columns5 = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'Interface', headerName: 'Interface', width: 300 },
    { field: 'ImportDate', headerName: 'Import Date', width: 300 },
   
  ];
  
  const rows5 = [
    {id:1,Interface:"Re Processing",ImportDate:"10 Jan 2023"},
   
    
  ];
  
  const ImportFileView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows4}
        columns={columns4}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
   //ImportFileView
   const columns4 = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'Interface', headerName: 'Interface', width: 300 },
    { field: 'ImportDate', headerName: 'Import Date', width: 300 },
    { field: 'usage', headerName: 'Usage', width: 300 },
   
  ];
  
  const rows4 = [
    {id:1,Interface:"Import",ImportDate:"10 Jan 2023",usage:"Prove"},
   
    
  ];
  
  const FailedImportView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
    //FailedImportView
    const columns3 = [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'Interface', headerName: 'Interface', width: 300 },
      { field: 'ImportDate', headerName: 'Import Date', width: 300 },
     
    ];
    
    const rows3 = [
      {id:1,Interface:"Failed",ImportDate:"10 Jan 2023"},
     
      
    ];
  
  const ImportedView = () => {
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
  //ImportedView
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'Interface', headerName: 'Interface', width: 300 },
    { field: 'ImportDate', headerName: 'Import Date', width: 300 },
   
  ];
  
  const rows = [
    {id:1,Interface:"Imported",ImportDate:"10 Jan 2023"},
   
    
  ];
  const PendingView = () => {
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
//PendingView
const columns2 = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'Interface', headerName: 'Interface', width: 300 },
  { field: 'ImportDate', headerName: 'Import Date', width: 300 },
 
];

const rows2 = [
  {id:1,Interface:"Pending",ImportDate:"20 Jul 2020"},
 
  
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

      <h3 onClick={ImportedPressed} style={{ color: "#F2B90F" }}>Imported Files</h3>
      <h3 onClick={PendingPressed} style={{ color: "#F2B90F" }}>Pending Files</h3>
      <h3 onClick={FailedImportPressed} style={{ color: "#F2B90F" }}>Failed To Import</h3>
      <h3 onClick={ImportFilesPressed} style={{ color: "#F2B90F" }}>Import Files</h3>
      <h3 onClick={ReprocessingPressed} style={{ color: "#F2B90F" }}>Re Precessing</h3>
    
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
        <LogoutIcon className="LogoutIcon"  onClick={signOut}></LogoutIcon>
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
                ImportedPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Imported Files
              </p>
            </Button>
            <Button onClick={PendingPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Pending Files
              </p>
            </Button>

            <Button onClick={FailedImportPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Failed To Import
              </p>
            </Button>
            <Button onClick={ImportFilesPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Import Files
              </p>
            </Button>
            <Button onClick={ReprocessingPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Re Processing
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
  height: 50%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
  }
 
  .crossIcon {
    margin-left: 2%;
    color:black;
    margin-top: 2%;
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
      margin-left:2%;
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
`;
