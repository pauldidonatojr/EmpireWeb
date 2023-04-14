import React, { useEffect, useState } from "react";
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
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from '../../components/context'
import { getCoordinators, addCoordinator } from "../../API/coordinatorAPI";
import { useNavigate } from "react-router-dom";
import OverlayCustom from "../Overlay";

import Backdrop from '@mui/material/Backdrop';


function CareGiver() {

  function GoBackButtonPressed(){
    navigate("/Admin");

  }

  const [coordNumber, setCoordNumber] = useState(null);
  const [coordName, setCoordName] = useState(null);
  const [coordStatus, setCoordStatus] = useState(null);

  const [filterCoordNumber, setFilterCoordNumber] = useState(null);
  const [filterCoordName, setFilterCoordName] = useState(null);
  const [filterCoordStatus, setFilterCoordStatus] = useState(null);

  const [memberData, setMemberData] = useState([])
  const [row, setRow] = useState([]);
  var [initRow, setInitRow] = useState([]);
  const { signOut } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    setFilterCoordStatus(event.target.value);
  };
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClickIcon = () => {
    setIsOverlayOpen(true);
    setRow(initRow);
    setOpen(!open);
    setCoordStatus(null);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };


  function RenderSearchIcon() {
    switch (ViewSelected) {
      case 1:
        return null;
      case 2:
        return <SearchIcon className="searchIcon" onClick={handleClickIcon} />;

      default:
        break;
    }
  }


  const handleFilterStatusChange = (event) => {
    setAge(event.target.value);
    setFilterCoordStatus(event.target.value);
  };

  //
const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};

////
  function Overlay() {

    return (
<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
     
    >
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{ textAlign: "center",color:"black"}}>Set Filter from here !</h1>
        <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Search New Cordinator</p>
        <div className="searchFieldsDiv">


          <Grid className="griditem">
            <TextField

              id="name"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid className="griditem">
            <TextField
              id="number"
              label="Number"
              variant="outlined"
            />
          </Grid>




          <Grid className="griditem2">

            <Box >
              <FormControl fullWidth>
                <InputLabel >Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={handleFilterStatusChange}
                >
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>


        </div>
        <Button className="searchButton" variant="outlined" onClick={() => {
          handleCloseOverlay();
          setFilterCoordName(document.getElementById('name').value);
          setFilterCoordNumber(document.getElementById('number').value);
          populateData();
        }}>
          Search
        </Button>
      </div>
      </Backdrop>

    );
  }

  function populateData() {
    for (var key in row) {
      if(row[key].name == filterCoordName && filterCoordName != null){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.name == row[key].name;
        });
        setRow(myArray)
      }
      
      
      if(row[key].co_id == filterCoordNumber && filterCoordNumber != null){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.Phone == row[key].co_id;
        });
        setRow(myArray)
      }

      if(filterCoordStatus == 10){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.status == "Active";
        });
        setRow(myArray)
      }

      if(filterCoordStatus == 20){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.status == "Inactive";
        });
        setRow(myArray)
      }

      
    }
  }



  const NewCordinatorPressed = () => {
    setViewSelected(1);
  };
  const SearchCordinatorPressed = () => {
    setViewSelected(2);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return NewCordinatorView();

      case 2:
        return SearchCordinatorView();

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

  const handleChangeAddStatus = (event) => {
    setAge(event.target.value);
      if(event.target.value == 10){
          setCoordStatus('Active');
    }
    if(event.target.value == 20){
      setCoordStatus('Inactive');
  } 
  };

  const NewCordinatorView = () => {
    return (
      <div className="Holder"  >
        <div className="InputHolder">
          <h1 className="Heading" >Add New Cordinator</h1>
          <TextField className="input" label="Cordinator Number" variant="outlined" onChange={(username) => { setCoordNumber(username.target.value) }}/>
          <TextField className="input" label="Cordinator Name" variant="outlined" onChange={(username) => { setCoordName(username.target.value)}}/>

          <FormControl className="FromControl" >
            <InputLabel >Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Status"
              onChange={handleChangeAddStatus} 
            >
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>Inactive</MenuItem>
            </Select>
          </FormControl>

        </div>


        <Button className="Signup" variant="contained"
        onClick={()=>{
          addCoordinator(coordName, coordNumber, coordStatus).then(res => {
            if (res.data.result == "success") {
              //state = 1;
            }
          });
        }}
        >Add</Button>
      </div>
    );
  };
  const handleRowClick= (params) => {
    const rowId = params.row.id;
    console.log("Member Clicked"+rowId+"Open 5 is"+open5);
    
    setOpen5(true);
    
    
  };
  const [open5, setOpen5] = React.useState(false);
  const handleClose5 = () => {
    setOpen5(false);
    console.log("I am in handle close")
  };
  const SearchCordinatorView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={row}
          columns={columns2}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection
          onRowClick={handleRowClick}
        />
      </div>

    )
  };
  //SearchCareGiverView
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Number', headerName: 'Number', width: 200 },
    { field: 'CordinatorName', headerName: 'Cordinator Name', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'Edit', headerName: 'Edit', width: 200 },

  ];


  function populateRows() {
    var arr = [];
    for (var key in memberData) {
      var obj = {
        id: memberData[key].co_id,
        name: memberData[key].name,
        status: memberData[key].status,
      }
      arr.push(obj);
    }
    setRow(arr);
    setInitRow(arr);
  }


  useEffect(() => {
    getCoordinators().then(res => {
      setMemberData(res.data);
    })
  }, [])

  useEffect(() => {
    populateRows();
  }, [memberData]);



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
    <div style={{
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

          <h3 onClick={NewCordinatorPressed} style={{ color: "#F2B90F" }}>New Cordinator</h3>
          <h3 onClick={SearchCordinatorPressed} style={{ color: "#F2B90F" }}>Search Cordinator</h3>

        </div>
      </Box>
    </div>
  );
  //

  return (
    <Wrapper>
       {open5 && <OverlayCustom  handleClose5={handleClose5}/>}
      <div className="Header">
        <MenuIcon
          className="menuIcon"
          onClick={toggleDrawer("left", true)}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        ></MenuIcon>
        <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() => navigate("/AdminHome")} />

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
          <hr style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />
          <div className="buttonHolder">
            <Button
              className="navigationButton"
              onClick={() => {
                NewCordinatorPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                New Cordinator
              </p>
            </Button>
            <Button onClick={SearchCordinatorPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Search Cordinator
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
      <Footer />
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
.CardHolder{
    display:flex;
    flex-direction:row;
}
//
//
.FromControl{
  margin-top:2%;
  width:30%;
}
.Heading{
  text-align:center;
  color:#14140F;

}
.input{
  margin:2%;
  font-weight:bold;
  width:30%;

}
.Signup{
  margin-left:42%;
  margin-top:2%;
  width:180px;
  height:50px;
  margin-bottom:2%;
  background-color:#F26E22;
  color:white;
}
.Holder{
  height:100%;
  width:100%;
  overflow: auto;
  background-color: #f2f2f2;
  border-radius: 10px;
}
.InputHolder{
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:10%;
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
  
  
  .Signup{
    margin-left:25%;
    
  }
  .FromControl{
    width:60%;
  }
  .input{
    width:60%;
    margin-left:0;
  }
}

`;
