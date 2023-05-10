import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
//

import Backdrop from '@mui/material/Backdrop';
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Footer from "../../Footer";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'
import UserName from "../../UserName";


function PendingQueuePlacement() {
  const navigate = useNavigate();
  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(3);

  function GoBackButtonPressed(){
    navigate(-1);
  }
const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
 

  const handleClickIcon = () => {
    
    switch (ViewSelected) {
      
      case 3:
        setViewSelected(33);
        break;
      case 4:
        setViewSelected(44);
        break;
      
      default:
        break;
    }

  };

const ClaimFilesPressed = () => {
  setViewSelected(3);
};
const RemitancePressed = () => {
  setViewSelected(4);
};


  const handleClose3 = () => {
    setViewSelected(3);
  };

const handleClose4 = () => {
  setViewSelected(4);
};

////

function Overlay3() {
  return (
   
    <div className="">
    <CloseIcon className="crossIcon" onClick={handleClose3} />
    <h1 style={{ textAlign:"center" ,color:"black"}}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Claim Files</p>
    <div className="searchFieldsDiv">
    

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>File Type</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
      <MenuItem value={10}>All</MenuItem>
      <MenuItem value={20}>837 Claim File</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid>
    <Grid className="griditem2">
    
    <Box >
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

    <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Processed From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Processed To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Batch Invoice"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="File Name"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}} >Status</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
      <MenuItem value={10}>All</MenuItem>
      <MenuItem value={20}>Accepted (A)</MenuItem>
      <MenuItem value={30}>Rejected (R)</MenuItem>
      <MenuItem value={30}>Partially Accepted (PA)</MenuItem>
      <MenuItem value={30}>Accepted with Errors (E)</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid>
   

    </div>
    <Button className="searchButton" variant="outlined" onClick={handleClose3}>
      Search
    </Button>
  </div>
  );
}
function Overlay4() {
  return (
   
    <div className="">
    <CloseIcon className="crossIcon" onClick={handleClose4} />
    <h1 style={{ textAlign:"center",color:"black" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Remitances</p>
    <div className="searchFieldsDiv">
  

    <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>MCO</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
     <MenuItem value={20}>AmeriHealth Caritas of PA</MenuItem>
                  <MenuItem value={30}>Centene PA Health Wellness</MenuItem>
                  <MenuItem value={20}>KEYSTONE FIRST CHC</MenuItem>
                  <MenuItem value={30}>UPMC Health Plan</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid>

    <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Processed From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Processed To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="Batch Invoice"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem">
        <TextField
         
          id="outlined-basic"
          label="File Name"
          variant="outlined"
        />
      </Grid>
      <Grid className="griditem2">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Status</InputLabel>
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



  function RenderViews() {
    switch (ViewSelected) {
      
      case 3:
        return ClaimView();
        case 33:
        return Overlay3();
      case 4:
        return RemitanceView();
        case 44:
          return Overlay4();
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


  
  
  const RemitanceView = () => {
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
   //RemitanceView
   const columns2 = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'MCO', headerName: 'MCO', width: 150 },
    { field: 'CheckNumber', headerName: 'Check Number', width: 150 },
    { field: 'CheckDate', headerName: 'Check Date', width: 150 },
    { field: 'Billed', headerName: 'Billed', width: 150 },
    { field: 'Paid', headerName: 'Paid', width: 150 },
    { field: 'Adjustment', headerName: 'Adjustment', width: 150 },

    { field: 'MemberResp', headerName: 'Member Resp', width: 150 },
    { field: 'PLB', headerName: 'PLB', width: 150 },
    { field: 'FileName', headerName: 'File Name', width: 150 },
    { field: 'ProcessedDate', headerName: 'Processed Date', width: 150 },
    { field: 'Exported', headerName: 'Exported', width: 150 },
    // I am pushed
   
  ];
  
  const rows2 = [
    {id:1,FileType:"Final",mco:"Farhan",ProcessedDate:"10 Jul 2023",BatchInvoice:"555445",FileName:"Awston",status:"InActive"},
    {id:2,FileType:"Final",mco:"Farhan",ProcessedDate:"10 Jul 2023",BatchInvoice:"555445",FileName:"Awston",status:"InActive"},
    {id:3,FileType:"Final",mco:"Farhan",ProcessedDate:"10 Jul 2023",BatchInvoice:"555445",FileName:"Awston",status:"InActive"},
    {id:4,FileType:"Final",mco:"Farhan",ProcessedDate:"10 Jul 2023",BatchInvoice:"555445",FileName:"Awston",status:"InActive"},
    
    
  
  ];
  
  const ClaimView = () => {
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
  //ClaimView
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'FileType', headerName: 'File Type', width: 150 },
    { field: 'FileClaim', headerName: 'Claim File', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 150 },
    { field: 'BatchInvoice', headerName: 'Invoice Batch', width: 150 },
    { field: 'ClaimNumber', headerName: 'Claim Number', width: 150 },
    { field: 'MemberNo', headerName: 'Member #', width: 150 },
    { field: 'ClaimNo', headerName: 'Claim #', width: 150 },
    { field: 'ClaimAmount', headerName: 'Claim Amount', width: 150 },
   
    { field: 'FileName', headerName: 'File Name', width: 150 },
    { field: 'ProcessedDate', headerName: 'Processed Date', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'Action', headerName: 'Action', width: 150 },
   
  ];
  
  const rows = [
    {id:1,FileType:"4578",mco:"Jenifer",ProcessedDate:"Awston",BatchInvoice:"Awston",FileName:"Awston",status:"Awston"},
    {id:2,FileType:"4578",mco:"Jenifer",ProcessedDate:"Awston",BatchInvoice:"Awston",FileName:"Awston",status:"Awston"},
    {id:3,FileType:"4578",mco:"Jenifer",ProcessedDate:"Awston",BatchInvoice:"Awston",FileName:"Awston",status:"Awston"},
    {id:4,FileType:"4578",mco:"Jenifer",ProcessedDate:"Awston",BatchInvoice:"Awston",FileName:"Awston",status:"Awston"},
  
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
  
          <h3 onClick={ClaimFilesPressed} style={{ color: "#F2B90F" }}>Claim Files</h3>
          <h3 onClick={RemitancePressed} style={{ color: "#F2B90F" }}>Remitances</h3>
        
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
         

            <Button onClick={ClaimFilesPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Claim Files
              </p>
            </Button>
            <Button onClick={RemitancePressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Remitances
              </p>
            </Button>
           
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen3 && <Overlay3 />}
          {isOverlayOpen4 && <Overlay4 />}
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
export default PendingQueuePlacement;

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
  height: 65%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
  }
 
  .crossIcon {
    margin-left: 2%;
    color:black;
    margin-top: 2%;
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
  }
`;
