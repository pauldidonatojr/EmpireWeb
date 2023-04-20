import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { List, ListItem, ListItemText } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
const Link = require("react-router-dom").Link;
import {AuthContext} from '../components/context'
import UserName from "../UserName";

function CallDashBoard() {
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClickIcon = () => {
    setIsOverlayOpen(true);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const ColumnDiv = () => {
    return (
      <div className="columnName">
        <p className="colume1">Name</p>
        <p className="colume2">Address</p>
        <p className="colume3">Clock In</p>
        <p className="colume4">Clock Out</p>
      </div>
    );
  };
  const PatientViewColumDiv =() =>{
    return(
        <div className="columnName">
        <p className="colume5">Name</p>
        <p className="colume6">Address</p>
      </div>
    )
  }
  function renderColumeName() {
    switch (ViewSelected) {
      case 1:
        return <ColumnDiv />;
      case 2:
        return <ColumnDiv />;
      case 3:
        return <ColumnDiv />;
      case 4:
        return (
          <PatientViewColumDiv/>
        );
      default:
        break;
    }
  }

  function Overlay() {
    return (
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{ marginLeft: "30%" }}>Set Filter from here !</h1>
        <div className="searchFieldsDiv">
          <TextField
            className="Field"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            className="Field"
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
          <TextField
            className="Field"
            id="outlined-basic"
            label="Expected Time Out"
            variant="outlined"
          />
          <TextField
            className="Field"
            id="outlined-basic"
            label="Expected Time In"
            variant="outlined"
          />
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay}>
          Search
        </Button>
      </div>
    );
  }

  const TodaySchedulePressed = () => {
    setViewSelected(1);
  };
  const unScheduledPressed = () => {
    setViewSelected(2);
  };
  const AllVisitsPressed = () => {
    setViewSelected(3);
  };
  const PatientListPressed = () => {
    setViewSelected(4);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return TodayScheduleView();

      case 2:
        return UnScheduleView();

      case 3:
        return VisitView();

      case 4:
        return PatientView();
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
      date:"03/12/2023",
    },
    {
      id: 2,
      name: "Wanda De Martinez",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
    {
      id: 3,
      name: "Hector",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
    {
      id: 4,
      name: "Adam",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
  ];
  const jsonData2 = [
    {
      id: 1,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
    {
      id: 2,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
    {
      id: 3,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
  ];
  //
  const TodayScheduleView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
            button
            component={Link}
            to={`/visitdetails/${item.id}`}
          >
            <ListItemText
              primary={<p style={{ fontSize: "25px" }}>{item.name}</p>}
              className="ListText"
            />
            <ListItemText
              primary={<p style={{ fontSize: "20px" }}>{item.address}</p>}
              className="ListText"
            />
            <ListItemText
              primary={
                <p style={{ fontSize: "20px" }}>{item.expectedClockOn}</p>
              }
              className="ListText"
            />
            <ListItemText
              primary={
                <p style={{ fontSize: "20px" }}>{item.expectedClockOut}</p>
              }
              className="ListText"
            />
          </ListItem>
        ))}
      </List>
    );
  };
  const UnScheduleView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
            button
            component={Link}
            to={`/visitdetails/${item.id}`}
          >
            <ListItemText
              primary={<p style={{ fontSize: "25px" }}>{item.name}</p>}
              className="ListText"
            />
            <ListItemText
              primary={<p style={{ fontSize: "20px" }}>{item.address}</p>}
              className="ListText"
            />
            <ListItemText
              primary={
                <p style={{ fontSize: "20px" }}>{item.expectedClockOn}</p>
              }
              className="ListText"
            />
            <ListItemText
              primary={
                <p style={{ fontSize: "20px" }}>{item.expectedClockOut}</p>
              }
              className="ListText"
            />
          </ListItem>
        ))}
      </List>
    );
  };
  const VisitView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
            button
            component={Link}
            to={`/visitdetails/${item.id}`}
          >
            <ListItemText
              primary={<p style={{ fontSize: "25px" }}>{item.name}</p>}
              className="ListText"
            />
            <ListItemText
              primary={<p style={{ fontSize: "20px" }}>{item.address}</p>}
              className="ListText"
            />
            <ListItemText
              primary={
                <p style={{ fontSize: "20px" }}>{item.expectedClockOn}</p>
              }
              className="ListText"
            />
            <ListItemText
              primary={
                <p style={{ fontSize: "20px" }}>{item.expectedClockOut}</p>
              }
              className="ListText"
            />
          </ListItem>
        ))}
      </List>
    );
  };
  const PatientView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData2.map((item) => (
          <ListItem className="ListItem"
          key={item.id}
          button
          component={Link}
          to={`/patientdetails/${item.id}`}>
            <ListItemText  className="ListText" primary={<p style={{ fontSize:  "25px" }}>{item.name}</p> } />
            <ListItemText  className="ListText" primary={<p style={{ fontSize: "20px" }}>{item.address}</p> } />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Wrapper>
      <div className="Header">
        <img className="headerImage" src="./EmpireHomeCareLogo.png" />
        <button className="button">Page 1</button>
        <button className="button">Page 2</button>
        <button className="button"> Page 3</button>
        <button className="button"> Page 4</button>
        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
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
                Call Maintaince
              </p>
            </Button>
            <Button onClick={unScheduledPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Missed In
              </p>
            </Button>

            
            <Button onClick={unScheduledPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Missed Out
              </p>
            </Button>
            <Button onClick={unScheduledPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Missed Call
              </p>
            </Button>
            <Button onClick={unScheduledPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
               Visit Log
              </p>
            </Button>
            <Button onClick={unScheduledPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Rejected Calls
              </p>
            </Button>
          </div>

          
        </Card>

        <Card className="dataDisplay">
          {renderColumeName()}
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {RenderViews()}
        </Card>
      </div>

      <div className="footer">
        <div className="LogoHolder">
          <img src="/LogoBK.png"></img>
        </div>
        <div className="company">
          <h6 style={{ color: "grey" }}>COMPANY</h6>
          <h5 style={{ color: "white" }}>About Us</h5>
          <h5 style={{ color: "white" }}>Contact Us</h5>
          <h5 style={{ color: "white" }}>Careers</h5>
          <h5 style={{ color: "white" }}>Press</h5>
        </div>
        <div className="socials">
          <h6 style={{ color: "grey" }}>SOCIAL MEDIA</h6>
          <h5 style={{ color: "white" }}>
            <FacebookIcon fontSize="small" />
            Facebook
          </h5>
          <h5 style={{ color: "white" }}>
            <TwitterIcon fontSize="small" />
            Twitter
          </h5>
          <h5 style={{ color: "white" }}>
            <LinkedInIcon fontSize="small" />
            Linkdin
          </h5>
        </div>
      </div>
    </Wrapper>
  );
}
export default CallDashBoard;

const Wrapper = styled.section`
height: 100%;
width: 100%;

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
    margin-left:09%;
    width: 40%;
    height: 70%;
    z-index:1000;
    background-color:white;
    padding:1%;
}
.crossIcon{
    margin-left:95%;
    margin-top:2%;
}
.searchFieldsDiv{
    justify-content:center;
    align-item:center;
    display:flex;
    flex-direction:column;
    margin-left:30%;
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
    position:absolute;
    z-index:999;
    padding:1%;
    font-size:50px;
    color:white;
    margin-left:65%;
    cursor:pointer;
    background-color:grey;
    border-radius:500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

//data display card end


//UserInfo(TaskBar)
.TaskBar{

    width:20%;
    height:650px;
    background-color:#2A558C;
    margin-top:3%;
    margin-bottom:10%;
    margin-left:2%;
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

//Footer CSS Files
.footer{
 display:flex;
 flex-direction:row;
 bottom:0;
 width:100%;
 height:250px;
 background-color:#0A2740;
 margin-top:0%;
}
.company{
 margin-left:50%;
 margin-top:2%;
}
.socials{
 margin-left:5%;
 margin-top:2%;
}
.LogoHolder{
    margin-top:3%;
    margin-left:15%;
}
//Footer CSS Files end

//Header CSS FILES
.Header{
display:flex;
flex-direction:row;
margin-left:5.9%;
margin-top:0.5%;
width:93%;
background-color:white;
}
.headerImage{
  width:7%;
  height:1%;
  border-radius:15px;
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


`;
