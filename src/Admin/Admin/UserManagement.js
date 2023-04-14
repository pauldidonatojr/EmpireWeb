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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context';

import Backdrop from '@mui/material/Backdrop';
 

import { useNavigate } from "react-router-dom";

import { DataGrid } from '@mui/x-data-grid';


function CareGiver() {
  const navigate = useNavigate();
  function GoBackButtonPressed(){
    navigate("/Admin");

  }
 
  const { signOut } = React.useContext(AuthContext);

  const [checked1, setChecked1] = useState(false);
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClickIcon = () => {
    setIsOverlayOpen(true);
    setOpen(!open);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };


  function RenderSearchIcon(){
    switch (ViewSelected) {
      case 1:
        return null;
      case 2:
        return<SearchIcon className="searchIcon" onClick={handleClickIcon} />;
      
      default:
        break;
    }
  }
 ////
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
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
        <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Search New User</p>
        <div className="searchFieldsDiv">
   
          
        <Grid className="griditem">
          <TextField
           
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid className="griditem">
        <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
        </Grid>
          
        <Grid className="griditem">
        
        <TextField
           
            id="outlined-basic"
            label="Login Name"
            variant="outlined"
          />
        </Grid>
       

        <Grid className="griditem2">
        
        <Box >
      <FormControl fullWidth>
        <InputLabel >Member Team</InputLabel>
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
        <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay}>
          Search
        </Button>
      </div>
      </Backdrop>
      
    );
  }

  const NewCareGiverPressed = () => {
    setViewSelected(1);
  };
  const SearchCareGiverPressed = () => {
    setViewSelected(2);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return NewCareGiverView();

      case 2:
        return SearchCareGiverView();

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

  const NewCareGiverView = () => {
    return (
      <div className="Holder"  >
      <div > 
          <h1 className="Heading" >Demographics</h1>
          <TextField className="input" label="First Name" variant="outlined" />
          <TextField className="input" label="Last Name" variant="outlined" />
          <TextField className="input" label="Login Name" variant="outlined" />
          <TextField className="input" label="Email" variant="outlined" />
          
      <FormControl className="dropdown">
        <InputLabel >Role</InputLabel>
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
      <FormControl className="dropdown" >
        <InputLabel >Default Module Tab</InputLabel>
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
      <FormControl className="dropdown" >
        <InputLabel >Status</InputLabel>
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
    
          
         
      </div>
      <div>
      <h1 className="Heading">IP Restriction</h1>
     
      <div className="checkbox">
      <FormGroup className="FromGroup" >
      <FormControlLabel control={<Checkbox defaultChecked />} label="IP Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Monday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Tuesday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Wednesday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Thursday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Friday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Saturday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
    <div className="checkbox">
      <FormGroup className="FromGroup">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Sunday - Hourly Restricted" />
    </FormGroup>
       <div className="checkboxItems">
        <TextField className="input" label="IP1" variant="outlined" />
        <TextField className="input" label="IP2" variant="outlined" />
        <TextField className="input" label="IP3" variant="outlined" />
        </div>
    </div>
                
      </div>
     
      <Button className="Signup" variant="contained">Add New User</Button>
   </div>
  
    );
  };
  const SearchCareGiverView = () => {
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
      
    )
  };
  //SearchCareGiverView
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'LoginName', headerName: 'Login Name', width: 200 },
    { field: 'FirstName', headerName: 'First Name', width: 200 },
    { field: 'LastName', headerName: 'Last Name', width: 200 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'RoleName', headerName: 'Role Name', width: 200 },
    { field: 'MemberTeam', headerName: 'Member Team', width: 200 },
    { field: 'Status', headerName: 'Status', width: 200 },
    { field: 'Edit', headerName: 'Edit', width: 200 },
   
  ];
  
  const rows2 = [
    {id:1,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
    {id:2,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
    {id:3,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
    {id:4,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
    {id:5,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
    {id:6,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
    {id:7,LoginName:"4578",FirstName:"Jenifer",LastName:"Awston",Email:"Awston",
    RoleName:"Jenifer",MemberTeam:"Awston",Status:"Awston",Edit:"Edit"},
   
    
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

      <h3  onClick={NewCareGiverPressed} style={{ color: "#F2B90F" }}>New User</h3>
      <h3  onClick={SearchCareGiverPressed} style={{ color: "#F2B90F" }}>Search User</h3>
      
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
                NewCareGiverPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                New User
              </p>
            </Button>
            <Button onClick={SearchCareGiverPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Search User
              </p>
            </Button>
           
          </div>

          
        </Card>

        <Card className="dataDisplay">
          
          {RenderSearchIcon()}
          {isOverlayOpen && <Overlay />}
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
export default CareGiver;

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
.FromGroup{
  margin-left:40%;
}
.dropdown{
  margin-top:2%;
  margin-left:3.5%;
  width:20.5%;
}
.checkbox{
  
  margin-top:0.5%;
}
.Heading{
  text-align:center;
  color:#14140F;

}
.input{
  margin:2%;
  font-weight:bold;
}
.Signup{
  margin-left:42%;
  margin-top:1%;
  width:180px;
  height:50px;
  margin-bottom:2%;
  background-color:#F26E22;
color:white;
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
}
.Holder{
  height:100%;
  width:100%;
  overflow: auto;
  background-color: #f2f2f2;
  border-radius: 10px;
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
  font-size:20px;
  color:white;
}
.td {
  border: 1px solid #aaaaaa;
  text-align: center;
  color:white;
  font-size:17px;
  
}
.checkboxItems{
  margin-left:15%;
}

//
.ListItem{
    margin-top:1%;
    
    background-color:#0B2B40;
    color:white;
    border-radius:10px;
    width: 100%;
}
.ListText{
    width:250px;
}
.colume1 {
    
  font-size: 15px;
  color: grey;
  font-weight: bold;
  text-align:center;
  margin:0.5%;
}
.item1 {
    
  font-size: 15px;
  color: white;
  font-weight: bold;
  text-align:center;
  margin:0.5%;
}

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
    width:95%;
    display:flex;
    flex-direction:row;
    height:5.8%;
    border-radius:15px;
    padding:2.4%;
    
}
.colume{
    text-align:center;
    margin-left:2%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
    width:250px;
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
  .dropdown{
    width:61%;
    margin-left:20%;
  }
  .FromGroup{
    margin-left:20%;
  }
  .checkboxItems{
    margin-left:0%;
  }
}

`;
