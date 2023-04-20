import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Footer from "../../Footer";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Backdrop from '@mui/material/Backdrop';
import { AuthContext } from '../../components/context'
import { resetPassword } from "../../API/resetPasswordApi";
import UserName from "../../UserName";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Report() {

  function GoBackButtonPressed() {
    navigate(-1);

  }
  const [email, setEmail] = useState(null);
  const [currPassword, setCurrPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  const { signOut } = React.useContext(AuthContext);
  const [ViewSelected, setViewSelected] = useState(1);
  const navigate = useNavigate();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
  const [isOverlayOpen5, setIsOverlayOpen5] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Add A New Patient 


  const [patientFirstName, setPatientFirstName] = useState(null);
  const [patientLastName, setPatientLastName] = useState(null);
  const [patientUsername, setPatientUsername] = useState(null);
  const [patientEmail, setPatientEmail] = useState(null);
  const [patientPassword, setPatientPassword] = useState(null);



  // 



  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 1:
        setIsOverlayOpen(true);
        break;
      case 2:
        setIsOverlayOpen2(true);
        setOpen2(!open2);
        break;

      case 4:
        setIsOverlayOpen4(true);
        setOpen4(!open4);
        break;

      default:
        break;
    }
  };
  function RenderSearchIcon() {
    switch (ViewSelected) {

      case 2:
        return <SearchIcon className="searchIcon" onClick={handleClickIcon} />;
      case 4:
        return <SearchIcon className="searchIcon" onClick={handleClickIcon} />;

      default:
        break;
    }
  }
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
  };

  function Overlay() {
    return (
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{ textAlign: "center" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Change Password
        </p>
        <div>

          <h3 style={{ textAlign: "center", color: "grey" }}>This page does not include any searchable content</h3>
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay}>
          Okay
        </Button>
      </div>
    );
  }
  //
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };

  //
  //
  const [open4, setOpen4] = React.useState(false);
  const handleClose4 = () => {
    setOpen4(false);
  };

  //
  function Overlay2() {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}

      >
        <div className="overlay2">
          <CloseIcon className="crossIcon" onClick={handleClose2} />
          <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#042940",
              textAlign: "center",
            }}
          >
            Reference Table Management
          </p>
          <div className="searchFieldsDiv1">

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Reference Table</InputLabel>
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
          <Button className="searchButton" onClick={handleCloseOverlay3}>
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }
  function Overlay4() {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open4}

      >
        <div className="overlay2">
          <CloseIcon className="crossIcon" onClick={handleClose4} />
          <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#042940",
              textAlign: "center",
            }}
          >
            Rate Management
          </p>
          <div className="searchFieldsDiv1">

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


          </div>
          <Button className="searchButton" onClick={handleCloseOverlay4}>
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }


  const UserManagementPressed = () => {
    //Navigate to User Managemnt
    navigate("/UserManagement");
  };

  const ChangePasswordPressed = () => {
    setViewSelected(1);
  };
  const CordinatorSetupPressed = () => {
    //Navigate to CordinatorSetUp
    navigate("/CordinatorSetup");
  };
  const ReferenceTableManagementPressed = () => {
    setViewSelected(2);
  };
  const ProviderProfilePressed = () => {
    setViewSelected(3);
  };
  const RateManagementPressed = () => {
    setViewSelected(4);
  };
  const AddNewPatientPressed = () => {
    setViewSelected(5);
  };
  const FileProcessingPressed = () => {
    //Navigate to File Processing
    navigate("/FileProcessing");
  };
  const EdiImportPressed = () => {
    //Navigate to EDI Imports
    navigate("/EDIImports");

  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return ChangePasswordView();

      case 2:
        return ReferenceTableView();

      case 3:
        return ProviderProfileView();

      case 4:
        return RateManagementView();
      case 5:
        return AddPatientView();
      default:
        break;
    }
  }

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
  const ChangePasswordView = () => {
    return (
      <div className="Holder"  >
        <div className="InputHolder">
          <h1 className="Heading" >Change Password</h1>
          <TextField className="input" label="Email" variant="outlined" onChange={(username) => { setEmail(username.target.value) }} />
          <TextField className="input" label="Current Password" variant="outlined" onChange={(username) => { setCurrPassword(username.target.value) }} />
          <TextField className="input" label="New Password" variant="outlined" />
          <TextField className="input" label="Repeat New Password" variant="outlined" onChange={(username) => { setNewPassword(username.target.value) }} />

        </div>


        <Button className="Signup" variant="contained"
          onClick={
            function () {
              var state = 0;
              resetPassword(email, currPassword, newPassword).then(res => {
                if (res.data.result == "success") {
                }
              }
              )
            }
          }

        >Apply Changes</Button>
      </div>
    );
  };


  const AddPatientView = () => {
    return (
      <div className="Holder"  >
        <div className="InputHolder">
          <h1 className="Heading" >ADD A NEW PATIENT</h1>
          <TextField className="input" label="First Name" variant="outlined" onChange={(evt) => { setPatientFirstName(evt.target.value) }} />
          <TextField className="input" label="Last Name" variant="outlined" onChange={(evt) => { setPatientLastName(evt.target.value) }} />

          <TextField className="input" label="Email" variant="outlined" onChange={(evt) => { setPatientEmail(evt.target.value) }} />
          <TextField className="input" label="Username" variant="outlined" onChange={(evt) => { setPatientUsername(evt.target.value) }} />

            <div style={{marginBottom: '20px'}}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            </div>

        </div>


        <Button className="Signup" variant="contained"
          onClick={
            function () {
              var state = 0;
              resetPassword(email, currPassword, newPassword).then(res => {
                if (res.data.result == "success") {
                }
              }
              )
            }
          }

        >Apply Changes</Button>
      </div>
    );
  };

  const ReferenceTableView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={rows5}
          columns={columns5}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
      </div>
    );
  };
  //ReferenceTableView
  const columns5 = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'TableReference', headerName: 'TableReference', width: 300 },


  ];

  const rows5 = [
    { id: 1, TableReference: "Re Processing" },


  ];
  const ProviderProfileView = () => {
    return (
      <div className="Holder"  >
        <div >
          <h1 className="Heading" >General</h1>
          <TextField className="input1" label="Vendor Name" variant="outlined" />
          <TextField className="input1" label="Vendor Intials" variant="outlined" />
          <TextField className="input1" label="Password Expiry (Days)" variant="outlined" />
          <TextField className="input1" label="Service Zip Code" variant="outlined" />
          <TextField className="input1" label="Mobile Offline Sync Period" variant="outlined" />
          <FormControl className="dropdown" >
            <InputLabel >Select Language</InputLabel>
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
            <InputLabel >Cordinator</InputLabel>
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
          <div className="checkitem">
            <FormControlLabel control={<Checkbox defaultChecked />} label="Automatic Visit Creation Bases on EVV Confirmation" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Mobile GPS Visit Verfication" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Allow Single Clock In/Out for Consective Shift (Mobile App)" />
          </div>


        </div>
        <div>
          <h1 className="Heading">Call Exception Notification</h1>

          <div className="checkbox">
            <FormGroup className="FormGroup" >
              <FormControlLabel control={<Checkbox defaultChecked />} label="Weekday" />
            </FormGroup>
            <div className="checkboxContent" >
              <TextField className="input1" label="From" variant="outlined" />
              <TextField className="input1" label="To" variant="outlined" />
              <TextField className="input1" label="Frequency(min)" variant="outlined" />
            </div>
          </div>
          <div className="checkbox">
            <FormGroup className="FormGroup" >
              <FormControlLabel control={<Checkbox defaultChecked />} label="Saturday" />
            </FormGroup>
            <div className="checkboxContent">
              <TextField className="input1" label="From" variant="outlined" />
              <TextField className="input1" label="To" variant="outlined" />
              <TextField className="input1" label="Frequency(min)" variant="outlined" />
            </div>
          </div>
          <div className="checkbox">
            <FormGroup className="FormGroup" >
              <FormControlLabel control={<Checkbox defaultChecked />} label="Sunday" />
            </FormGroup>
            <div className="checkboxContent">
              <TextField className="input1" label="From" variant="outlined" />
              <TextField className="input1" label="To" variant="outlined" />
              <TextField className="input1" label="Frequency(min)" variant="outlined" />
            </div>
          </div>

          <TextField className="input1" label="Alert Email" variant="outlined" />


        </div>
        <div>
          <h1 className="Heading">Address</h1>
          <TextField className="input1" label="Street 1" variant="outlined" />
          <TextField className="input1" label="Street 2" variant="outlined" />
          <TextField className="input1" label="City" variant="outlined" />
          <TextField className="input1" label="State" variant="outlined" />
          <TextField className="input1" label="Zip Code" variant="outlined" />
          <TextField className="input1" label="Home Phone" variant="outlined" />
          <TextField className="input1" label="Phone 1" variant="outlined" />
          <TextField className="input1" label="Phone 2" variant="outlined" />
          <TextField className="input1" label="Evening Phone" variant="outlined" />
          <TextField className="input1" label="Weekend Phone" variant="outlined" />

          <TextField className="input1" label="Audit Call In (%)" variant="outlined" />
          <TextField className="input1" label="Audit Call Out (%)" variant="outlined" />

        </div>

        <Button className="Signup" variant="contained">Sign Up</Button>
      </div>
    );
  };

  const RateManagementView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
      </div>
    );
  };
  //RateManagementView
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'ServiceCode', headerName: 'Service Code', width: 300 },
    { field: 'Category', headerName: 'Category', width: 300 },

    { field: 'ServiceType', headerName: 'Service Type', width: 300 },
    { field: 'FromDate', headerName: 'From Date', width: 300 },
    { field: 'ToDate', headerName: 'To Date', width: 300 },
    { field: 'Rate', headerName: 'Rate', width: 300 },

    { field: 'RateType', headerName: 'Rate Type', width: 300 },
    { field: 'Status', headerName: 'Status', width: 300 },



  ];

  const rows = [
    { id: 1, TableReference: "Re Processing" },


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

          <h3 onClick={UserManagementPressed} style={{ color: "#F2B90F", textAlign: "center" }}>User Management</h3>
          <h3 onClick={ChangePasswordPressed} style={{ color: "#F2B90F", textAlign: "center" }}>Change Password</h3>
          <h3 onClick={AddNewPatientPressed} style={{ color: "#F2B90F", textAlign: "center" }}>Add A New Patient</h3>
          <h3 onClick={CordinatorSetupPressed} style={{ color: "#F2B90F", textAlign: "center" }}>Cordinator Setup</h3>
          <h3 onClick={ReferenceTableManagementPressed} style={{ color: "#F2B90F", textAlign: "center" }}>Reference Table Management</h3>
          <h3 onClick={ProviderProfilePressed} style={{ color: "#F2B90F", textAlign: "center" }}>Provider Profile</h3>
          <h3 onClick={RateManagementPressed} style={{ color: "#F2B90F", textAlign: "center" }}>Rate Management</h3>
          <h3 onClick={FileProcessingPressed} style={{ color: "#F2B90F", textAlign: "center" }}>File Processing</h3>
          <h3 onClick={EdiImportPressed} style={{ color: "#F2B90F", textAlign: "center" }}>EDI Import</h3>

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
                UserManagementPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                User Management
              </p>
            </Button>

            <Button onClick={ChangePasswordPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Change Password
              </p>
            </Button>
            {/* To add new Patient */}
            <Button onClick={AddNewPatientPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Add a new Patient
              </p>
            </Button>
            {/*  */}


            <Button onClick={CordinatorSetupPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Cordinator Setup
              </p>
            </Button>

            <Button onClick={ReferenceTableManagementPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Reference Table Management
              </p>
            </Button>

            <Button onClick={ProviderProfilePressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Provider Profile
              </p>
            </Button>

            <Button onClick={RateManagementPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Rate Management
              </p>
            </Button>

            <Button onClick={FileProcessingPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                File Processing
              </p>
            </Button>
            <Button onClick={EdiImportPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                EDI Import
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          {RenderSearchIcon()}
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen4 && <Overlay4 />}
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
export default Report;

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
  .dropdown{
    margin-top:2%;
    margin-left:2%;
    width:20.5%;
  }
  .checkitem{
    
    display: flex;
    align-items: center;
  }
.Heading{
  text-align:center;
  color:#14140F;

}
.FormGroup{
  margin-left:40%;
}
.checkboxContent{
  margin-left:15%;
}
.input{
  margin:2%;
  font-weight:bold;
  width:30%;

}
.input1{
  margin:2%;
    font-weight:bold;}
.Signup{
  margin-left:42%;
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

.InputHolder{
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:10%;
}
//
  .ListItem {
    margin-top: 1%;
    margin-left: 2%;
    background-color: #0b2b40;
    color: white;
    border-radius: 10px;
    width: 95%;
  }
  .ListText {
    width: 300px;
    text-align: center;
  }
  .ListItem:hover .ListText {
    color: black;
    font-weight: bold;
  }

  // overlay css end
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .overlay2{  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 44%;
    z-index: 1000;
    background-color: white;
    overflow-y: auto;
    padding: 50px;
  }
  .overlay3{  
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
  
  .crossIcon {
    margin-left: 95%;
    color:black;
    margin-top: 2%;
  }
  .searchFieldsDiv {
    display: flex;
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
  }
  .searchFieldsDiv1 {
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
    width: 30%;
    background-color: #f26e22;
    color: white;
    font-weight: bold;
  }
  .searchButton:hover {
    background-color: #2e0f59;
    color: white;
  }
  .Field {
    width: 50%;
    margin: 2%;
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
    height: 722px;
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
  }
  .colume1 {
    margin-left: 12%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
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
    height: 780px;
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
    margin-top: 2%;
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
   
    .searchFieldsDiv1 {
      grid-template-columns: repeat(1, 1fr); /* create 3 equal columns */
    }
    .overlay {
    width: 75%;
    height: 100%;
    overflow:auto;
    }
    .overlay2 {
      width: 75%;
      height: 50%;
      overflow:auto;
      }
    .searchButton {
      margin-top: 5%;
      margin-bottom: 2%;
      margin-left:35%;
    }
    .input{
      width:60%;
    }
    .input1{
      margin-left:17%;
    }
    
    .Signup{
      margin-left:25%;
      
    }
    .FormGroup{
      margin-left:35%;
    }
    .checkboxContent{
      margin-left:0%;
    }
    .dropdown{
      width:62%;
      margin-left:16%;
    }
  }
  

`
