import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Footer from "../Footer";
import { DataGrid } from "@mui/x-data-grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Backdrop from "@mui/material/Backdrop";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import UserName from "../UserName";

function InvoiceDetails() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [ViewSelected, setViewSelected] = useState(2);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };

  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 2:
        setIsOverlayOpen(true);
        setOpen(!open);
        break;
      case 3:
        setIsOverlayOpen2(true);
        setOpen2(!open2);
        break;
      case 4:
        setIsOverlayOpen3(true);
        setOpen3(!open3);
        break;
      default:
        break;
    }
  };
  //
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  //
  //
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };

  //
  //
  const [open3, setOpen3] = React.useState(false);
  const handleClose3 = () => {
    setOpen3(false);
  };

  //

  function Overlay() {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="overlay">
          <CloseIcon className="crossIcon" onClick={handleClose} />
          <h1 style={{ textAlign: "center", color: "black" }}>
            Set Filter from here !
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#042940",
              textAlign: "center",
            }}
          >
            By Invoice
          </p>
          <div className="searchFieldsDiv">
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
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Member Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Admission ID"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="From Date MM/DD/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="To Date MM/DD/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch Number"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Office</InputLabel>
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
          <Button className="searchButton" onClick={handleCloseOverlay}>
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }
  function Overlay2() {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
      >
        <div className="overlay2">
          <CloseIcon className="crossIcon" onClick={handleClose2} />
          <h1 style={{ textAlign: "center", color: "black" }}>
            Set Filter from here !
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#042940",
              textAlign: "center",
            }}
          >
            By Visit
          </p>
          <div className="searchFieldsDiv">
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Member Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Admission ID"
                variant="outlined"
              />
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
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

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
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Export Status</InputLabel>
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
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Billing Hold</InputLabel>
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
          <Button className="searchButton" onClick={handleCloseOverlay2}>
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }
  //
  function Overlay3() {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open3}
      >
        <div className="overlay2">
          <CloseIcon className="crossIcon" onClick={handleClose3} />
          <h1 style={{ textAlign: "center", color: "black" }}>
            Set Filter from here !
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#042940",
              textAlign: "center",
            }}
          >
            By Batch
          </p>
          <div className="searchFieldsDiv">
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Batch Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
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
                label="From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="AR Export From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="AR Export To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Billing Export From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Billing Export To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
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
          <Button className="searchButton" onClick={handleCloseOverlay3}>
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }
  //

  const VisitHistoryPressed = () => {
    setViewSelected(3);
  };
 

  const CareGiverInfoPressed = () => {
    setViewSelected(2);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return InvoiceInfoView();
      case 3:
        return VisitsView();

      default:
        break;
    }
  }
  const VisitsView = () => {
    return (
        <div>
            <div style={{display:"flex",justifyContent:"right"}}>
          <Button  className="EditButton" variant="outlined">
          Print Invioce
        </Button>
        <Button  className="EditButton" variant="outlined">
          Print Duty Sheet
        </Button>
        </div>
        <div style={{ height: "450px", width: "100%" }}>
           
        <DataGrid
          rows={rows3}
          columns={columns3}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
      </div>
        </div>
      
    );
  };
  //MissedOutView columns and demo data
  const columns3 = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "VisitDate", headerName: "Visit Date", width: 150 },
    { field: "AdmissionID", headerName: "Admission ID", width: 150 },
    { field: "MemberName", headerName: "Member Name", width: 150 },
    { field: "ProviderName", headerName: "Provider Name", width: 100 },
    { field: "CaregiverIN", headerName: "Caregiver IN", width: 150 },
    { field: "Visit", headerName: "Visit", width: 150 },

    { field: "VisitHrs", headerName: "Visit Hrs", width: 150 },
    { field: "VisitRate", headerName: "Visit Rate", width: 100 },
    { field: "TTHours", headerName: "TT Hours", width: 150 },
    { field: "TTRate", headerName: "TT Rate", width: 150 },

    { field: "OTHours", headerName: "OT Hours", width: 150 },
    { field: "OTRate", headerName: "OT Rate", width: 100 },
    { field: "Amount", headerName: "Amount", width: 150 },
    { field: "ClaimStatus", headerName: "Claim Status", width: 150 },

    { field: "BillingDXCode", headerName: "Billing DX Code", width: 100 },
    { field: "ExportStatus", headerName: "Export Status", width: 150 },
    { field: "EBillingManualHold", headerName: "E-Billing Manual Hold", width: 180 },

  ];
  //demo data to display
  const rows3 = [
    {
      id: 1,
      VisitDate: "Justin",
      AdmissionID: "Alo",
      MemberName: "02457894561",
      ProviderName: "XOXO",
      CaregiverIN: "XZXZ",
      Visit: "1123456",
      VisitHrs: "Justin",
      VisitRate: "Alo",
      TTHours: "02457894561",
      TTRate: "XOXO",

      OTHours: "1123456",
      OTRate: "Justin",
      Amount: "Alo",
      ClaimStatus: "02457894561",
      BillingDXCode: "XOXO",

      ExportStatus: "02457894561",
      EBillingManualHold: "XOXO",
     
    },
    
   
  ];
  
  

  

  const InvoiceInfoView = () => {
    return (
      <div style={{overflow:"auto",width:"100%",height:"100%"}}>
        <h1 style={{ color: "grey", textAlign: "center" }}>
          {" "}
         Invoice Information
        </h1>
        <div className="datafieldHolder">
        <h2 className="infodisplay2">
           Invoice Number: <span style={{ color: "#564873" }}>110245</span>
          </h2>
          <h2 className="infodisplay2">
           Admission id :{" "}
            <span style={{ color: "#564873" }}>21 Jul 2023</span>{" "}
          </h2> 

          <h2 className="infodisplay2">
           Member Name :{" "}
            <span style={{ color: "#564873" }}>John</span>{" "}
          </h2> 
          
          </div>
          <div className="datafieldHolder">
        <h2 className="infodisplay2">
           Address: <span style={{ color: "#564873" }}>11</span>
          </h2>
          <h2 className="infodisplay2">
           Total Hours:{" "}
            <span style={{ color: "#564873" }}>26</span>{" "}
          </h2>
          <h2 className="infodisplay2">
           Total Amount :{" "}
            <span style={{ color: "#564873" }}>$ 559.23</span>{" "}
          </h2>
          
          </div>
          <div className="datafieldHolder">
        <h2 className="infodisplay2">
           Batch Date: <span style={{ color: "#564873" }}>1-Jan-2023</span>
          </h2>
          <h2 className="infodisplay2">
           Batch Number :{" "}
            <span style={{ color: "#564873" }}>22</span>{" "}
          </h2>
          <h2 className="infodisplay2">
           Office :{" "}
            <span style={{ color: "#564873" }}>26</span>{" "}
          </h2>
          
          </div>
          <div className="datafieldHolder">
        <h2 className="infodisplay2">
          NPI: <span style={{ color: "#564873" }}>Empire HomeCare</span>
          </h2>
          <h2 className="infodisplay2">
           Office Address :{" "}
            <span style={{ color: "#564873" }}>Billed</span>{" "}
          </h2>
          <h2 className="infodisplay2">
           Secondary Identifier :{" "}
            <span style={{ color: "#564873" }}>Export</span>{" "}
          </h2>
          
          </div>

       
          
      </div>
    );
  };

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
    <div
      style={{
        height: "100vh",
        backgroundColor: "#2E0F59",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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

          <h3 onClick={CareGiverInfoPressed} style={{ color: "#F2B90F" }}>
            Batch Details
          </h3>

          <h3 onClick={VisitHistoryPressed} style={{ color: "#F2B90F" }}>
            Invoice
          </h3>
        </div>
      </Box>
    </div>
  );
  //
  function GoBackButtonPressed() {
    navigate(-1);
  }
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
        <img
          className="headerImage"
          src="./EmpireHomeCareLogo.png"
          onClick={() => navigate("/AdminHome")}
        />

        <Button className="LogOutbutton" variant="outlined">
          Log Out
        </Button>
        <LogoutIcon className="LogoutIcon"></LogoutIcon>
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
                CareGiverInfoPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Batch Details
              </p>
            </Button>

            <Button
              className="navigationButton"
              onClick={() => {
                VisitHistoryPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Invoices
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen3 && <Overlay3 />}
          {RenderViews()}
        </Card>
      </div>
      <div className="GoBackButtonHolder">
        <Button
          className="GoBackButton"
          variant="outlined"
          onClick={GoBackButtonPressed}
        >
          Go Back
        </Button>
      </div>

      <Footer />
    </Wrapper>
  );
}
export default InvoiceDetails;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .EditButton{
    background-color: #564873;
   
    font-weight:bold;
    width:15%;
    color:white;
    margin:1%;
  }
  .EditButton:hover {
    color:black;
  }
.infodisplay{

    color: grey;
    margin: 1%; 
    text-align: center;
    width:33.33%

}
.infodisplay2{
    color: grey;
    margin: 1%; 
    text-align: center;
    width:50%
}
  .datafieldHolder{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  
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
    padding: 1%;
    width: 100%;
    background-color: #0b2b40;
  }

  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color: white;
    font-size: 16px;
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
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
  }

  // overlay css end
  .overlay {
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
  .overlayTime{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 85%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
    overflow:auto;
  }
  .overlay2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 62%;
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
  .searchFieldsDiv2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* create 3 equal columns */
    grid-gap: 10px; /* add some space between the columns */
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
  }
  .Field {
    width: 50%;
    margin: 2%;
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
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
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
    height: 600px;
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
    padding: 1%;
  }
  .colume1 {
    font-size: 15px;
    color: grey;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
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
    height: 650px;
    background-color: #564873;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-left: 2%;
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
    align-items: center;
    justify-content: center;
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
    .overlay2 {
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
