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
import { useNavigate } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

import Backdrop from '@mui/material/Backdrop';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Footer from "../Footer";
import { DataGrid } from '@mui/x-data-grid';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../components/context'
import { addCareGiver, getCareGiver } from "../API/careGiverAPI";
import { createCareGiverLogin } from "../API/authCareGiverAPI";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ToastContainer, toast } from 'react-toastify';
import OverlayCustom from "./Overlay";
import 'react-toastify/dist/ReactToastify.css';
import UserName from "../UserName";
const Link = require("react-router-dom").Link;


function CareGiver() {

  // const data2 = localStorage.getItem("Members");
  // console.log("data2: ", JSON.parse(data2));

  const notify = () => toast("Data Fetching for Care Givers!");
  const notifyAdd = () => toast("Care Giver Added Sucessfuly!");
  const showToastMessage = () => {
    toast.error('Some Important Fields Are Missing Please Enter Data!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  // Set Alert
  const [alertState, setAlertState] = useState(false);



  const [memberData, setMemberData] = useState([])
  var [row, setRow] = useState([]);
  var [initRow, setInitRow] = useState([]);
  const { signOut } = React.useContext(AuthContext);

  // SearchFilter
  const [filterName, setFilterName] = useState(null);
  const [filterPhoneNumber, setFilterPhoneNumber] = useState(null);
  const [filterCareGiverCode, setFilterCareGiverCode] = useState(null);
  const [filterAltCareGiverCode, setFilterAltCareGiverCode] = useState(null);
  const [filterSSN, setFilterSSN] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const [filterProvider, setFilterProvider] = useState(null);
  const [filterDiscipline, setFilterDiscipline] = useState(null);



  // 



  // 
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [initials, setInitials] = useState(null);
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState(null);
  const [status, setStatus] = useState(null);
  const [careGiverCode, setCareGiverCode] = useState(null);
  const [ssn, setSSN] = useState(null);
  const [mobileID, setMobileID] = useState(null);
  const [mobileDeviceID, setMobileDeviceID] = useState(null);
  const [primaryMemberTeam, setPrimaryMemberTeam] = useState(null);
  const [NPINumber, setNPINumber] = useState(null);
  const [rehire, setRehire] = useState(null);
  const [rehireDate, setRehireDate] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);

  const [addressStreet1, setAddressStreet1] = useState(null);
  const [addressStreet2, setAddressStreet2] = useState(null);
  const [addressCity, setAddressCity] = useState(null);
  const [addressZip, setAddressZip] = useState(null);
  const [addressPhone, setAddressPhone] = useState(null);
  const [addressPhone2, setAddressPhone2] = useState(null);
  const [addressHomePhone, setAddressHomePhone] = useState(null);
  const [addressState, setAddressState] = useState(null);

  const [emergencyContact1Name, setEmergencyContact1Name] = useState(null);
  const [emergencyContact1Relation, setEmergencyContact1Relation] = useState(null);
  const [emergencyContact1Address, setEmergencyContact1Address] = useState(null);
  const [emergencyContact1Phone1, setEmergencyContact1Phone1] = useState(null);
  const [emergencyContact1Phone2, setEmergencyContact1Phone2] = useState(null);

  const [emergencyContact2Name, setEmergencyContact2Name] = useState(null);
  const [emergencyContact2Relation, setEmergencyContact2Relation] = useState(null);
  const [emergencyContact2Address, setEmergencyContact2Address] = useState(null);
  const [emergencyContact2Phone1, setEmergencyContact2Phone1] = useState(null);
  const [emergencyContact2Phone2, setEmergencyContact2Phone2] = useState(null);

  // 

  const navigate = useNavigate();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClickIcon = () => {
    
    setViewSelected(22);
    setRow(initRow);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  function GoBackButtonPressed() {
    navigate(-1);
  }
  //
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}

      >

        <div style={{ backgroundColor: "#2E0F59", display: "flex", flexDirection: "column", alignItems: "center", height: "680px" }}>

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
          <hr className="line" style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />

          <h3 onClick={() => {
            NewCareGiverPressed();
          }} style={{ color: "#F2B90F" }}>New Care Givers</h3>
          <h3 onClick={SearchCareGiverPressed} style={{ color: "#F2B90F" }}>Search CareGiver</h3>

        </div>



      </Box>
    </div>
  );
  //


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
  //Sylvia Acevedo
  //David Alicea
  //215-842-8107
  //159-68-5232
  function populateData() {
    for (var key in row) {
      if (row[key].name == filterName && filterName != null) {
        var myArray = row;
        myArray = myArray.filter(function (obj) {
          return obj.name == row[key].name;
        });
        setRow(myArray)
      }


      if (row[key].phone == filterPhoneNumber && filterPhoneNumber != null) {
        var myArray = row;
        myArray = myArray.filter(function (obj) {
          return obj.phone == row[key].phone;
        });
        setRow(myArray)
      }

      // if(row[key].CoCode == filterCareGiverCode && filterCareGiverCode != null){
      //   var myArray = row;
      //   myArray = myArray.filter(function( obj ) {
      //     return obj.CoCode !== row[key].CoCode;
      //   });
      //   setRow(myArray)
      // }

      if (row[key].SSN == filterSSN && filterSSN != null) {
        var myArray = row;
        myArray = myArray.filter(function (obj) {
          return obj.SSN == row[key].SSN;
        });
        setRow(myArray)
      }
    }
  }

  const handleFilterStatus = (event) => {
    setAge(event.target.value);
    setFilterDiscipline(event.target.value);
    console.log(filterDiscipline)
  };
  //
  const handleClose = () => {
    setViewSelected(2);
  };

  //
  function Overlay() {

    return (

     
        <div className="">
          <CloseIcon className="crossIcon" onClick={handleClose} />
          <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
          <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Search Care Giver</p>
          <div className="searchFieldsDiv">
            {/* //==================================================================================================== */}

            <Grid className="griditem">
              <TextField

                id="filterName"
                label="Name"
                variant="outlined"

              />
            </Grid>

            <Grid className="griditem">

              <TextField

                id="filterPhone"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">

              <TextField
                id="filterCareGiverCode"
                label="Care Giver Code"
                variant="outlined"
              />

            </Grid>

            <Grid className="griditem">

              <TextField

                id="filterSSN"
                label="SSN"
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
                    onChange={handleFilterStatus}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Inactive</MenuItem>
                    <MenuItem value={10}>Active</MenuItem>
                    <MenuItem value={20}>Hold</MenuItem>
                    <MenuItem value={10}>On Leave</MenuItem>
                    <MenuItem value={20}>Terminated</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            {/* <Grid className="griditem2">

            <Box>
              <FormControl fullWidth>
                <InputLabel >Provider</InputLabel>
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
                <InputLabel >Discipline</InputLabel>
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
          </Grid> */}


          </div>
          <Button className="searchButton" variant="outlined" onClick={() => {
            handleCloseOverlay();

            setFilterName(document.getElementById('filterName').value);
            setFilterPhoneNumber(document.getElementById('filterPhone').value);
            //setFilterCareGiverCode(document.getElementById('filterCareGiverCode').value);
            //setFilterAltCareGiverCode(document.getElementById('filterAltCareGiverCode').value);
            setFilterSSN(document.getElementById('filterSSN').value);
            populateData();
          }}>
            Search
          </Button>
        </div>
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
      case 22:
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

  
  function validateEmail(email) {
    const emailRegex = /^[a-z][a-zA-Z0-9_.-]*@[a-zA-Z0-9-]+\.[a-z]{2,}$/;
    // Check if the email matches the regex pattern
    if (!emailRegex.test(email)) {
      setInvalidEmail(true);
      return false;
    }
    // Check if the email ends with ".com"
    if (!email.endsWith(".com")) {
      setInvalidEmail(true);
      return false;
    }
    // Check if the first letter of the email is lowercase
    if (email.charAt(0) !== email.charAt(0).toLowerCase()) {
      return false;
    }
    setUserEmail(email)
    setInvalidEmail(false);
    return true;
  }

  const [Invalidmail, setInvalidEmail] = React.useState(false);
  const [selectedRehireDate, setSelectedRehireDate] = useState(null);
  const NewCareGiverView = () => {
    return (
      <div className="Holder"  >

        <div className="rowFieldsHolder">
          <h1 className="Heading" >Account Credentials</h1>
          <TextField className="input" label="Username" variant="outlined" onChange={(evt) => { setUsername(evt.target.value) }} />
          <TextField className="input" label="Password" variant="outlined" type="password" onChange={(evt) => { setPassword(evt.target.value) }} />
          <TextField className="input" label="Email" variant="outlined" onChange={(evt) => { validateEmail(evt.target.value)}} />
          {Invalidmail && <h5 style={{color:"red"}}>Email Not Valid, Please Check</h5>}
        </div>

        <div className="rowFieldsHolder">
          <h1 className="Heading" >Demographics</h1>
          <TextField className="input" label="First Name" variant="outlined" onChange={(evt) => { setFirstName(evt.target.value) }} />
          <TextField className="input" label="Middle Name" variant="outlined" onChange={(evt) => { setMiddleName(evt.target.value) }} />
          <TextField className="input" label="Last Name" variant="outlined" onChange={(evt) => { setLastName(evt.target.value) }} />
          <TextField className="input" label="Middle Intials" variant="outlined" onChange={(evt) => { setInitials(evt.target.value) }} />
          <TextField className="input" label="Gender" variant="outlined" onChange={(evt) => { setGender(evt.target.value) }} />
        <TextField className="input" label="Alt Caregiver Code" variant="outlined" onChange={(evt) => { setCareGiverCode(evt.target.value) }} />
          <TextField className="input" label="SSN" variant="outlined" onChange={(evt) => { setSSN(evt.target.value) }} />
          <TextField className="input" label="Mobile ID" variant="outlined" onChange={(evt) => { setMobileID(evt.target.value) }} />
          <TextField className="input" label="Primary Member Team" variant="outlined" onChange={(evt) => { setPrimaryMemberTeam(evt.target.value) }} />
          <TextField className="input" label="NPI Number" variant="outlined" onChange={(evt) => { setNPINumber(evt.target.value) }} />
         
         <div className="SelectListHolder" >
          <div style={{width:220,margin:"0.5%",marginTop:15}}>
                                <FormControl fullWidth>
                                    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Rehire ?</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Status"
                                        
                                    >
                                        <MenuItem value={10}>No</MenuItem>
                                        <MenuItem value={20}>Yes</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
        <div style={{width:220,margin:"0.5%",marginTop:5.5}}>
          <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="Rehire Date"
                                        value={selectedRehireDate}
                                        onChange={(newValue) => {
                                            setSelectedRehireDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            </div>
          
        
                            <div style={{width:220,margin:"0.5%",marginTop:15}}>
                                <FormControl fullWidth>
                                    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Employmemt Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Status"
                                        
                                    >
                                        <MenuItem value={10}>Demo</MenuItem>
                                        <MenuItem value={20}>Demo</MenuItem>
                                        <MenuItem value={30}>Demo</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{width:220,margin:"0.5%",marginTop:5.5}}>
          <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="DOB"
                                        value={selectedRehireDate}
                                        onChange={(newValue) => {
                                            setSelectedRehireDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            </div>
                            <div style={{width:220,margin:"0.5%",marginTop:15}}>
                                <FormControl fullWidth>
                                    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Status"
                                        
                                    >
                                        <MenuItem value={10}>No</MenuItem>
                                        <MenuItem value={20}>Yes</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        
          </div>
         
          <div className="GenderDiv" >
                                <FormControl fullWidth>
                                    <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Gender"
                                        
                                    >
                                        <MenuItem value={10}>Male</MenuItem>
                                        <MenuItem value={20}>Female</MenuItem>
                                        <MenuItem value={20}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
        </div>


        <div className="rowFieldsHolder">
          <h1 className="Heading">Address</h1>
          <TextField className="input" label="Street 1" variant="outlined" onChange={(evt) => { setAddressStreet1(evt.target.value) }} />
          <TextField className="input" label="Street 2" variant="outlined" onChange={(evt) => { setAddressStreet2(evt.target.value) }} />
          <TextField className="input" label="City" variant="outlined" onChange={(evt) => { setAddressCity(evt.target.value) }} />
          <TextField className="input" label="Zip" variant="outlined" onChange={(evt) => { setAddressZip(evt.target.value) }} />
          <TextField className="input" label="State" variant="outlined" onChange={(evt) => { setAddressState(evt.target.value) }} />
          <TextField className="input" label="Phone" variant="outlined" onChange={(evt) => { setAddressPhone(evt.target.value) }} />
          <TextField className="input" label="Phone 2" variant="outlined" onChange={(evt) => { setAddressPhone2(evt.target.value) }} />
          <TextField className="input" label="Home Phone" variant="outlined" onChange={(evt) => { setAddressHomePhone(evt.target.value) }} />
        </div>
        
        
        
        <div className="rowFieldsHolder">
          <h1 className="Heading">Emergency Contact 1</h1>
          <TextField className="input" label="Name" variant="outlined" onChange={(evt) => { setEmergencyContact1Name(evt.target.value) }} />
          <TextField className="input" label="Relationship" variant="outlined" onChange={(evt) => { setEmergencyContact1Relation(evt.target.value) }} />
          <TextField className="input" label="Address" variant="outlined" onChange={(evt) => { setEmergencyContact1Address(evt.target.value) }} />
          <TextField className="input" label="Phone 1" variant="outlined" onChange={(evt) => { setEmergencyContact1Phone1(evt.target.value) }} />
          <TextField className="input" label="Phone 2" variant="outlined" onChange={(evt) => { setEmergencyContact1Phone2(evt.target.value) }} />
        </div>
        
        

        <div className="rowFieldsHolder">
          <h1 className="Heading">Emergency Contact 2</h1>
          <TextField className="input" label="Name" variant="outlined" onChange={(evt) => { setEmergencyContact2Name(evt.target.value) }} />
          <TextField className="input" label="Relationship" variant="outlined" onChange={(evt) => { setEmergencyContact2Relation(evt.target.value) }} />
          <TextField className="input" label="Address" variant="outlined" onChange={(evt) => { setEmergencyContact2Address(evt.target.value) }} />
          <TextField className="input" label="Phone 1" variant="outlined" onChange={(evt) => { setEmergencyContact2Phone1(evt.target.value) }} />
          <TextField className="input" label="Phone 2" variant="outlined" onChange={(evt) => { setEmergencyContact2Phone2(evt.target.value) }} />
        </div>
        <Button className="Signup" variant="contained"
          onClick={
            function () {
              var state = 0;
              if (firstName != null &&
                lastName != null &&
                gender != null &&
                dob != null &&
                status != null &&
                careGiverCode != null &&
                ssn != null &&
                mobileID != null &&
                addressStreet1 != null &&
                addressCity != null &&
                addressZip != null &&
                addressPhone != null &&
                addressState != null &&
                emergencyContact1Name != null &&
                emergencyContact1Relation != null &&
                emergencyContact1Address != null &&
                emergencyContact1Phone1 != null &&
                emergencyContact2Name != null &&
                emergencyContact2Relation != null &&
                emergencyContact2Address != null &&
                emergencyContact2Phone1 != null) {
                addCareGiver(
                  firstName,
                  middleName,
                  lastName,
                  initials,
                  gender,
                  dob,
                  status,
                  careGiverCode,
                  ssn,
                  mobileID,
                  mobileDeviceID,
                  primaryMemberTeam,
                  NPINumber,
                  rehire,
                  rehireDate,
                  employmentType,
                  addressStreet1,
                  addressStreet2,
                  addressCity,
                  addressZip,
                  addressPhone,
                  addressState,
                  addressHomePhone,
                  addressPhone2,
                  emergencyContact1Name,
                  emergencyContact1Relation,
                  emergencyContact1Address,
                  emergencyContact1Phone1,
                  emergencyContact1Phone2,
                  emergencyContact2Name,
                  emergencyContact2Relation,
                  emergencyContact2Address,
                  emergencyContact2Phone1,
                  emergencyContact2Phone2,
                ).then(res => {
                  if (res.data.result == "success") {
                    state = 1;
                  }
                });

                createCareGiverLogin(
                  userEmail,
                  username,
                  password
                ).then(res => {

                  if (res.data.result == "success") {
                    state = 2;
                    notifyAdd();
                  }
                });

                if (state == 2) {
                  setAlertState(true);
                }
              }
              else {
                showToastMessage();
              }
            }
          }
        >Create Care Giver</Button>
      </div >
    );
  };

  
  const [open5, setOpen5] = React.useState(false);
  const handleClose5 = () => {
    setOpen5(false);
    console.log("I am in handle close")
  };
  const SearchCareGiverView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection={false}
          
        />
      </div>

    )
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ selectedMemberName: params.value }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'AideCode', headerName: 'Care Giver Code', width: 150 },
    { field: 'AltCaregiverCode', headerName: 'Alt Caregiver Code', width: 150 },
    { field: 'SSN', headerName: 'SSN', width: 150 },
    { field: 'DOB', headerName: 'Date of Birth', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'Status', headerName: 'Status', width: 100 },
    { field: 'Discipline', headerName: 'Discipline', width: 100 },

  ];


  function populateRows() {
    var arr = [];
    for (var key in memberData) {
      var obj = {
        id: memberData[key].id,
        name: memberData[key].FirstName + ' ' + memberData[key].LastName,
        city: memberData[key].City,
        phone: memberData[key].Phone,
        AideCode: memberData[key].AideCode,
        Ethnicity: memberData[key].Ethnicity,
        SSN: memberData[key].SSN,
        Status: memberData[key].Status,
        EmployeeID: memberData[key].EmployeeID,
        Discipline: memberData[key].Discipline,
        DOB: memberData[key].DateofBirth,
      }
      arr.push(obj);
    }
    setRow(arr);
    setInitRow(arr);
    // console.log(row);
  }


  useEffect(() => {
    notify();
    getCareGiver().then(res => {
      setMemberData(res.data);
    })
  }, [])

  useEffect(() => {
    populateRows();
  }, [memberData]);


  return (
    <Wrapper>

      <ToastContainer />
      {open5 && <OverlayCustom handleClose5={handleClose5} />}
      {alertState &&
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      }

      <div className="Header">
        <MenuIcon
          className="menuIcon"
          onClick={toggleDrawer('left', true)}
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}>

        </MenuIcon>
        <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() => navigate("/AdminHome")} />

        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
        <LogoutIcon onClick={signOut} className="LogoutIcon"></LogoutIcon>
      </div>
      <div style={{ display: "none" }}>
        {['left'].map((anchor) => (
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
          <UserName />
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
                New Care Giver
              </p>
            </Button>
            <Button onClick={SearchCareGiverPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Search Care Giver
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

.CardHolder{
    display:flex;
    flex-direction:row;
}
.SelectListHolder{
  display:flex;
  flex-direction:row;
  align-items:center;
  align-content:center;
}
.GenderDiv {

  width:220px;
  margin:0.5%;
  margin-top:15px;

}

.GoBackButtonHolder{
    display:flex;
    justify-content:center;
    margin-top:20px;
    margin-bottom:3%;
  }
  .GoBackButton{
    background-color: #f26e22;
    color: white;
    width: 10%;
    height: 50px;
    border-radius: 10px;
    justify-content:center;
    width: 200px;
  }


//
.griditem{
  width:100%;
}
.griditem2{
  width:68%;
}
.Heading{
  text-align:center;
  color:#14140F;

}
.input{
  margin:2%;
  font-weight:bold;
}
.rowFieldsHolder{
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.menuIcon{
  display:none;
}
.Signup{
  margin-left:42%;
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
  height: 70%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
  }
  .crossIcon {
    margin-left: 0%;
    margin-top: 2%;
    color:black;
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
.LogoutIcon{
  display:none;
}
.headerImage {
  width: 7%;
  height: 1%;
  border-radius: 15px;
  margin-right:55%;
}
//Header CSS FILES ENDING
@media only screen and (max-width: 600px) {
    
  .TaskBar {
    display:none;
   
  }
  .SelectListHolder{
    flex-direction: column;
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
  }
  .input{
    /* margin-left:20%; */
  }
  
  .Signup{
    margin-left:25%;
    
  }
  .GenderDiv{
    margin-left:22.5%;
  }

  
}

`;
