import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Footer from "../Footer";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {AuthContext} from '../components/context'
import Backdrop from '@mui/material/Backdrop';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

import { useNavigate } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';


function Homepage() {
  

  
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  

  const handleClickIcon = () => {
    setIsOverlayOpen(true);
    setOpen(!open);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

 
  //
const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};
//

  function Overlay() {
    return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
       
      >
      <div className="overlay">
        <CloseIcon className="crossIcon"  onClick={handleClose} />
        <h1 style={{ color:"black",textAlign:"center" }}>Set Filter from here !</h1>
        <div className="searchFieldsDiv">
        <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Expected Time Out"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Expected Time In"
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

   //
const [open2, setOpen2] = React.useState(false);
const handleClose2 = () => {
  setOpen2(false);
};
//
const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
const handleCloseRequestForm = () => {
  setIsRequestFormOpen(false);
};

const toggleRequestForm = () => {
setIsRequestFormOpen(true);
setOpen2(!open2);
}

  function RequestForm() {
    return (

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
        >
      <div className="overlay2">
        <CloseIcon className="crossIcon"  onClick={handleClose2} />
        <h1 style={{ color:"black",textAlign:"center" }}>Submit Assistance Request</h1>
        <div className="searchFieldsDiv">
        <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Expected Time Out"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Expected Time In"
          variant="outlined"
        />
      </Grid>
        
        </div>
        <Button className="searchButton" onClick={handleCloseRequestForm}>
          Submit Request
        </Button>
      </div>
      </Backdrop>
    );
  }

  const TodaySchedulePressed = () => {
    setViewSelected(1);
  };
  const HistoryPressed = () => {
    setViewSelected(2);
  };


  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return TodayScheduleView();

      case 2:
        return HistoryView();
      default:
        break;
    }
  }
  
  const TodayScheduleView = () => {
    return (
      <div style={{ height: "100%", width: '100%',display:"flex",flexDirection:"column",alignItems :"center" }}>
        <p style={{textAlign:"center",color:"grey",fontWeight:"bold",marginBottom:0}}> Care Giver</p>
     <h1 style={{textAlign:"center",fontSize:"30px",marginTop:0}}>{"Jenifer Lauren"}</h1>
     <div className="ClockinOutDiv">
      {/* Get the Value of Clock In and Out Time from API and replace with {"07 : 30 AM"} */}
     <h1 style={{color:"grey"}}>Clock In Time : <span style={{color:"black"}}>07 : 30 AM</span></h1>
     <h1 style={{color:"grey"}}>Clock Out Time : <span style={{color:"black"}}>07 : 30 AM</span></h1>
     
     </div>
     <h1 style={{color:"grey"}}>Tasks For Today</h1>
     <DataGrid className="datagrid"
        rows={rows}
        columns={columns}
      />
    </div>
      
    );
  };
  //HistoryView
  const columns = [
    { field: 'id', headerName: 'ID', width: 100},
    { field: 'task', headerName: 'Task', width: 500},
   
   
  ];
  
  const rows = [
    {id:1,task:"Upper Tooting 262 A"},
    {id:1,task:"Upper Tooting 262 A"},
    {id:1,task:"Upper Tooting 262 A"},
    {id:1,task:"Upper Tooting 262 A"},
    {id:1,task:"Upper Tooting 262 A"},
    {id:1,task:"Upper Tooting 262 A"},
    {id:1,task:"Upper Tooting 262 A"},
   
    
  ];
   
  const HistoryView = () => {
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
   //HistoryView
   const columns2 = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'clockOut', headerName: 'Expected Clock Out', width: 200 },
    { field: 'clockIn', headerName: 'Expected Clock In', width: 200 },
   
  ];
  
  const rows2 = [
    {id:1,name:"Nelson",address:"Upper Tooting 262 A",clockOut:"01:05 AM",clockIn:"01:05 AM"},
   
    
  ];

  

  const navigate = useNavigate();

  
  

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      backgroundColor: "red" }}
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
          height: "100hv",
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

        <h3  onClick={TodaySchedulePressed} style={{ color: "#F2B90F" }}>Today's Scheduled Visits</h3>
        <h3  onClick={HistoryPressed} style={{ color: "#F2B90F" }}>Visit's History</h3>
      
      
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
        <img className="headerImage" src="./EmpireHomeCareLogo.png" />
       
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
      <div className="AssistanceHolder" onClick={toggleRequestForm}>
        <AddHomeWorkIcon className="AssistanceIcon" />
        <p className="iconText" >Request Assistance</p>
      </div>
      {console.log("Request is"+isRequestFormOpen)}
      {isRequestFormOpen && <RequestForm />}

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
          <hr style={{width:"50%",fontSize:"10px",opacity:"0.2"}}/>
          <div className="buttonHolder">
            <Button
              className="navigationButton"
              onClick={() => {
                TodaySchedulePressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Today's Scheduled Visit
              </p>
            </Button>
            <Button onClick={HistoryPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visit History
              </p>
            </Button>
          
          
          </div>

          <div className="NeedHelpDiv">
            <p className="needHelpText">Need Help ?</p>
            <a className="NeedHelpTele" href="tel:+1234567890">
              Call us now
            </a>
          </div>
        </Card>

        <Card className="dataDisplay">
        
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {RenderViews()}
        </Card>
      </div>

      <Footer/>
    </Wrapper>
  );
}
export default Homepage;

const Wrapper = styled.section`
height: 100%;
width: 100%;

.ClockinOutDiv{
  display:flex;
  justify-content:space-between;
  width:75%;
}
.datagrid{
  width:75%;
}

.AssistanceHolder{
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:;
  border-radius:300px;
  padding: 10px 0;
  width:50%;
  padding-top: 30px;
  padding-left: 100px;
  //
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  //
}

.AssistanceIcon{
  color:#F2B90F;
  margin-bottom:0;
  font-size:45px;
  margin-left:7.5%;
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: 24,
}
.AssistanceIcon:hover {
  cursor: pointer;
}
.iconText{
    margin-top:0;
    font-size:20px;
    font-weight:bold;
    color:#2E0F59;
    
}
.iconText:hover {
  cursor: pointer;
}
.CardHolder{
    display:flex;
    flex-direction:row;
}
.ListItem{
    margin-top:1%;
    margin-left:2%;
    background-color:#0B2B40;
    color:white;
    border-radius:10px;
    width: 95%;
}
.ListText{
    width:300px;
    text-align:center;
 
}
.ListItem:hover .ListText{
  color:black;
  font-weight:bold;
}

// overlay css end
.overlay{
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

.overlay2{
  position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50%;
height: 85%;
z-index: 1000;
background-color: white;
padding: 1%;
}
.crossIcon{
    margin-left:95%;
    margin-top:2%;
    color:black;
}
.searchFieldsDiv{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* create 3 equal columns */
  grid-gap: 10px; /* add some space between the columns */
  margin-top: 2.5%;
  width: 85%;
  margin-left: 12%;
}
.Field{
    width:50%;
    margin:2%;
}
.searchButton{
  margin-left: 35%;
  margin-top: 5%;
  width:30%;
  height:08%;
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

.NeedHelpDiv{
    margin-left:35%;
    margin-top:30%;
}
.needHelpText{
    color:white;
}
.NeedHelpTele{
    color:white;
    text-decoration: none
}

//need help end

//data display card
.dataDisplay{
    height:595px;
    width:70%;
    margin-left:2%;
    margin-top:0%;
    background-color:#F2F2F2;
    padding:1.7%;
}
.columnName{
    display:flex;
    flex-direction:row;
    height:5.8%;
    border-radius:15px;
    
}
.colume1{
    margin-left:12%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume2{
    margin-left:19%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume3{
    margin-left:17.5%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume4{
    margin-left:17%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume5{
    margin-left:20%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume6{
    margin-left:45%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.searchIcon{
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
.TaskBar{

    width:20%;
    height:650px;
    background-color:#564873;
    margin-top:0%;
    margin-bottom:10%;
    margin-left:2%;
}

.UserInfo{
    display:flex;
    flex-direction:row;
    margin-top:5%;
    margin-left:10%;
}
.avatar{
    margin:2%;
    margin-top:5%;
}
.buttonHolder{
    display:flex;
    flex-direction:column;

}
.navigationButton{
    margin:2%;
}

//UserInfo Ending


//Footer CSS Files end
.footer{
  width:100%;
}

//Header CSS FILES
.Header{
display:flex;
flex-direction:row;
margin-left:5.9%;
margin-top:0.5%;
width:93%;
background-color:white;
}

.headerImage:hover{
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
.button{
background-color:white;
border-width:0;
margin-left:5.0%;
margin-top:0.5%;
width:08%;
height:50px; 
cursor: pointer;
transition: box-shadow 0.2s ease-in-out;
border-radius:10px;
}
.button:hover{
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.LogOutbutton{
background-color:#F26E22;
color:white;
width:10%;
height:150%;
margin-top:1%;
margin-left:15%;
padding:0.5%;
border-radius:10px;
}
.LogOutbutton:hover{
color:black;
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
    
//
.AssistanceHolder{
  padding-top: 10px;
  padding-left: 30px;
  
}
.AssistanceIcon{
  margin-left:30%;
  
}
//
.datagrid{
  width:100%;
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
  }
  .SystemNotification{
    padding:5px;
    height:10%;
    font-size:13.5px;
    
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
    
    margin-top:10%;
    
  }
  .LogoutIcon{
    font-size:40px;
    color:grey;
    margin-left:20%;
    display:inline;
    margin-top:10%;

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
    margin-left:auto;
    grid-template-columns: repeat(1, 1fr); /* create 3 equal columns */
  }
  .overlay {
  width: 75%;
  height: 70%;
  overflow:auto;
  }
  .overlay2 {
    width: 75%;
    height: 70%;
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
