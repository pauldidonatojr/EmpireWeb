import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../components/context'

import { DataGrid } from '@mui/x-data-grid';
import Footer from "../Footer";

import Box from "@mui/material/Box";
const Link = require("react-router-dom").Link;
//HELLO I HAVE BEEN PUSHED
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

const PatientDetails =()=>{
  const { signOut } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [ViewSelected, setViewSelected] = useState(2);

  const PatientInfoPressed = () => {
    setViewSelected(1);
  };

  const VisitsPressed = () => {
    setViewSelected(2);
  };
  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return PatientInfoView();

      case 2:
        return VisitView();

      default:
        break;
    }
  }


  const PatientInfoView=()=>{
    return (
      <div className="PatientViewHolder" >

        <Card className="contactCard">
          <p style={{textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>Contact Information</p>

          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <PhoneIcon style={{fontSize:"30px",color:"whitesmoke",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <LocationOnIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"6%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px",textAlign:"center"}}>262 A Upper Tooting Road, SW10DS</p>
          </div>
        </Card>

        <Card className="EmergencyCard">
          <p style={{textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>Emergency Contact</p>

          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
         
        </Card>
      </div>
    )
  }

  const handleRowClick = (params) => {
    const rowId = params.row.id;
    // Navigate to the /visitdetails/:id URL using the navigate function and the rowId as a URL parameter
    navigate(`/visitdetails/${rowId}`);
  };
  const VisitView =()=> {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows2}
        columns={columns2}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
        onRowClick={handleRowClick}
      />
    </div>
    )
  }
   //UnScheduleView
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

        <h3 onClick={PatientInfoPressed} style={{ color: "#F2B90F" }}>Patient Info</h3>
        <h3 onClick={VisitsPressed} style={{ color: "#F2B90F" }}>Visits</h3>
       
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
        <img className="headerImage" src="/EmpireHomeCareLogo.png" 
        onClick={() =>navigate("/CareGiverHome")}/>
       
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
          <hr style={{width:"50%",fontSize:"10px",opacity:"0.2"}}/>
          <div className="buttonHolder">
            <Button
              className="navigationButton"
              onClick={() => {
                PatientInfoPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Patient Info
              </p>
            </Button>
            <Button onClick={VisitsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visits
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
      
          {RenderViews()}</Card>
      </div>
 <Footer/>
        </Wrapper>
    )
}
export default PatientDetails;
const Wrapper = styled.section`
height: 100%;
width: 100%;

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
//
//patient view start
.PatientViewHolder{
  display:flex;
  flex-direction:row;
}
.contactCard{
    
  background-color:#564873;
  border-radius:15px;
  padding:2%;
  width:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.phoneNumber{
  display:flex;
  flex-direction:row;
}
.EmergencyCard{
  
  margin-left:2%;
  background-color:#564873;
  border-radius:15px;
  padding:2%;
  width:50%;
  display:flex;
  align-items:center;
  flex-direction:column;

}

// patient view end

.CardHolder{
  display:flex;
  flex-direction:row;
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

//UserInfo(TaskBar)
.TaskBar{

    width:20%;
    height:655px;
    background-color:#564873;
    margin-top:3%;
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


//need help div start

.NeedHelpDiv{
    margin-left:35%;
    margin-top:70%;
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
//data display card end

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
    .PatientViewHolder{
      
      flex-direction:column;
    }
    .contactCard{
      width:95%;  
      margin-left:0; 
    }
    .EmergencyCard{
      width:95%;
      margin-left:0;  
      margin-top:1%;
    }
    .ListHolder{
     
      flex-direction:column;
    }
    .PlanofCareList{
      margin-left:0%;
      width:98%;
    }
    .OtherList{
      margin-left:0%;
      width:98%;
      
    }
  }
`