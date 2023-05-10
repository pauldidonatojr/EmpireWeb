import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
//
import Box from "@mui/material/Box";
import Backdrop from '@mui/material/Backdrop';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Footer from "../../Footer";
import { DataGrid } from "@mui/x-data-grid";
//
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'
import UserName from "../../UserName";
//
const Link = require("react-router-dom").Link;

function Action() {
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();
  function PendingQueuePressed() {
    navigate("/PendingQueuePlacement");
  }

  //

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //
  const handleClickIcon = () => {
    
    setViewSelected(11)
  };
 
  const handleClose = () => {
    setViewSelected(1)
  };

  
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
          Communication Message Center
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
                <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Message Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Sent</MenuItem>
                  <MenuItem value={30}>Recieved</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid className="griditem2">
            <Box>
              <FormControl fullWidth>
                <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Open</MenuItem>
                  <MenuItem value={30}>Closed</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid className="griditem2">
            <Box>
              <FormControl fullWidth>
                <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Reason</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Authorization Edit (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={30}>Authorization Edit (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={10}>Authorization Edit (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={20}>Authorization Edit (UPMC Health Plan)</MenuItem>
                  <MenuItem value={30}>Calendar Note (UPMC Health Plan)</MenuItem>
                  <MenuItem value={10}>Calendar Note (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={20}>
Calendar Note (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={30}>Ceased to breathe (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={10}>Change in Condition (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={20}>
Change in Condition (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={30}>Change in Condition (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={10}>
Change in Condition (UPMC Health Plan)</MenuItem>
                  <MenuItem value={20}>
Change in Service (UPMC Health Plan)</MenuItem>
                  <MenuItem value={30}>
Change in Service (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={10}>Change in Service (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={20}>Change in Service (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={30}>
Change of Schedule (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={20}>
Change of Schedule (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={30}>Change of Schedule (UPMC Health Plan)</MenuItem>

                  <MenuItem value={20}>
Communication (UPMC Health Plan)</MenuItem>
                  <MenuItem value={30}>Communication (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={20}>Communication (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={30}>
COVID-19 (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={20}>COVID-19 (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={30}>COVID-19 (UPMC Health Plan)</MenuItem>
                  <MenuItem value={20}>COVID-19 (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={30}>
Delete Authorization (UPMC Health Plan)</MenuItem>
                  <MenuItem value={20}>Delete Authorization (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={30}>Delete Authorization (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={20}>Delete Authorization (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={30}>
Discharge Request (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={20}>
Eligibility Issue (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={30}>EVV - Network (UPMC Health Plan)</MenuItem>
                  <MenuItem value={20}>
EVV Questions (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={30}>Guardrails (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={20}>Hospital and Other Admissions (Centene PA Health Wellness)</MenuItem>
                  <MenuItem value={30}>Hospitalization (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={30}>
Hospitalization (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={30}>Hospitalization (UPMC Health Plan)</MenuItem>
                  <MenuItem value={30}>MCO Transfer (Centene PA Health Wellness)</MenuItem>

                  <MenuItem value={30}>Member Condition Update (KEYSTONE FIRST CHC)</MenuItem>
                  <MenuItem value={30}>Member Condition Update (AmeriHealth Caritas of PA)</MenuItem>
                  <MenuItem value={30}>Member Condition Update (UPMC Health Plan)</MenuItem>
                   <MenuItem value={30}>Member not Found (Centene PA Health Wellness)</MenuItem> 
                   <MenuItem value={30}>Participant Address/Phone/EVV Updates (Centene PA Health Wellness)
</MenuItem>
                   <MenuItem value={30}>Start of Care Date Requested (Centene PA Health Wellness)</MenuItem>
                   <MenuItem value={30}>
Vacation / Out of Area (KEYSTONE FIRST CHC)</MenuItem>
                   <MenuItem value={30}>
Vacation / Out of Area (AmeriHealth Caritas of PA)</MenuItem>
                   <MenuItem value={30}>Vacation/ Out of Area (UPMC Health Plan)</MenuItem>
                   <MenuItem value={30}>Other (AmeriHealth Caritas of PA)</MenuItem>
                   <MenuItem value={30}>
Other (KEYSTONE FIRST CHC)</MenuItem>
                   
                   

                  

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
              label="Till Date DD//MM/YYYY"
              variant="outlined"
            />
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
  function CommunicationMessageCenterPressed() {
    setViewSelected(1);
  }
  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return CommunicationMessageCenterView();
        case 11:
        return Overlay();
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

  const CommunicationMessageCenterView = () => {
    return (
      <div style={{ height: "100%", width: "100%" }}>
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
  // CommunicationMessageCenterView
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "mco", headerName: "MCO", width: 150 },
    
    { field: "CreatedDate", headerName: "Created Date", width: 150 },
    { field: "reason", headerName: "Reason", width: 150 },
    { field: "Note", headerName: "Note", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
  
  ];
  //demo data to display
  const rows = [
    {
      id: 1,
      mco: "Justin",
      messageType: "Alo",
      status: "02457894561",
      reason: "XOXO",
      fromDate: "XZXZ",
      tillDate: "1123456",
    },

    {
      id: 2,
      mco: "Justin",
      messageType: "Alo",
      status: "02457894561",
      reason: "XOXO",
      fromDate: "XZXZ",
      tillDate: "1123456",
    },

    {
      id: 3,
      mco: "Justin",
      messageType: "Alo",
      status: "02457894561",
      reason: "XOXO",
      fromDate: "XZXZ",
      tillDate: "1123456",
    },

    {
      id: 4,
      mco: "Justin",
      messageType: "Alo",
      status: "02457894561",
      reason: "XOXO",
      fromDate: "XZXZ",
      tillDate: "1123456",
    },

    {
      id: 5,
      mco: "Justin",
      messageType: "Alo",
      status: "02457894561",
      reason: "XOXO",
      fromDate: "XZXZ",
      tillDate: "1123456",
    },
  ];
  //
  //
  function GoBackButtonPressed(){
    navigate(-1);
  }
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

        <h3  onClick={() => {
                PendingQueuePressed();
              }} style={{ color: "#F2B90F" }}>Pending Queue Placement</h3>
        <h3  onClick={CommunicationMessageCenterPressed} style={{ color: "#F2B90F", textAlign: "center" }}>
          Communication Message Center
        </h3>
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
        <img className="headerImage" src="./EmpireHomeCareLogo.png"  onClick={() =>navigate("/AdminHome")}/>

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
              onClick={() => {
                PendingQueuePressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Pending Placement Queue
              </p>
            </Button>
            <Button
              onClick={CommunicationMessageCenterPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Communication Message Center
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
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
export default Action;

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
.CardHolder{
    display:flex;
    flex-direction:row;
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
// overlay css end
.overlay{
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
.crossIcon{
    margin-left:2%;
    margin-top:2%;
    color:black;
}
.searchFieldsDiv{
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
.Field{
    width:50%;
    margin:2%;
}
.searchButton{
    margin-left:40%;
    margin-top:5%;
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
    height:600px;
    width:70%;
    margin-left:2%;
    margin-top:3%;
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
    margin-top:3%;
    margin-bottom:2%;
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


//Header CSS FILES
.Header{
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
