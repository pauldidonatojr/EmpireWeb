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
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';

import { Link } from 'react-router-dom';
//

import Backdrop from '@mui/material/Backdrop';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import {AuthContext} from '../../components/context'

import { useNavigate } from "react-router-dom";
import UserName from "../../UserName";
//

function Visit() {
  const { signOut } = React.useContext(AuthContext);
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [ViewSelected, setViewSelected] = useState(2);

  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 2:
        setViewSelected(22);
        break;
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
   //
const handleClose = () => {
  setViewSelected(2);
};

 const handleClose2 = () => {
  setViewSelected(3);
 };

 const handleClose3 = () => {
  setViewSelected(4);
};



  function Overlay() {
    return (
     
      <div className="">
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{  textAlign: "center",color:"black" }}>Set Filter from here !</h1>
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
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Office</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                   
                  </Select>
                </FormControl>
              </Box>
            </Grid>
         
        </div>
        <Button className="searchButton" onClick={handleClose}>
          Search
        </Button>
      </div>
    );
  }
  function Overlay2() {
    return (
     
      <div className="">
        <CloseIcon className="crossIcon" onClick={handleClose2} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
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
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Export Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Yes</MenuItem>
                    <MenuItem value={30}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid className="griditem2">
              <Box>
                <FormControl fullWidth>
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Billing Hold</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Yes</MenuItem>
                    <MenuItem value={30}>No</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
        
        </div>
        <Button className="searchButton" onClick={handleClose2}>
          Search
        </Button>
      </div>
  
    );
  }
  //
  function Overlay3() {
    return (
    
      <div className="">
        <CloseIcon className="crossIcon" onClick={handleClose3} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
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
                  <InputLabel style={{backgroundColor:"#f2f2f2",color:"grey"}}>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Pending</MenuItem>
                    <MenuItem value={30}>In Review</MenuItem>
                    <MenuItem value={20}>Approved</MenuItem>
                    <MenuItem value={30}>Bailed</MenuItem>
                    <MenuItem value={30}>Partial Refund</MenuItem>
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
         
        </div>
        <Button className="searchButton" onClick={handleClose3}>
          Search
        </Button>
      </div>
    );
  }
  //

  const VisitSearchPressed = () => {
    setViewSelected(2);
  };
  const VisitQuickSearchPressed = () => {
    setViewSelected(3);
  };

  const ByBatchPressed = () => {
    setViewSelected(4);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return ByInvoiceView();
        case 22:
        return Overlay();

      case 3:
        return ByVisitView();
        case 33:
        return Overlay2();
      case 4:
        return ByBatchView();
        case 44:
        return Overlay3();

      default:
        break;
    }
  }
 

  //
  const ByBatchView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows1}
        columns={columns1}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
  //
  // ByBatchView
  const columns1 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { 
      field: 'batchNumber', 
      headerName: 'Batch Number', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/BatchDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'ProviderName', headerName: 'Provider Name', width: 110 },
    { field: 'BatchDate', headerName: 'Batch Date', width: 110 },
    {
      field: 'Invoice',
      headerName: 'Invoice #',
      width: 130,
      renderCell: (params) => (
        <Link to="/InvoiceDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'aRExportDate', headerName: 'AR Export Date', width: 155 },
    { field: 'billingExportToDate', headerName: 'Billing Export  Date', width: 155 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'totalHours', headerName: 'Total Hours', width: 125 },
    //
    { field: 'TotalAmount', headerName: 'Total Amount', width: 155 },
    { field: 'providerExport', headerName: 'Provider Export', width: 120 },
    { field: 'mco', headerName: 'MCO', width: 125 },
  ];
  
  const rows1 = [
    {id:1,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:2,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:3,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:4,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:5,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:6,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:7,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:8,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:9,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},
    {id:10,batchNumber:"4578",ProviderName:"Jenifer",BatchDate:"Awston",Invoice:"02548965478",aRExportDate:"Active",billingExportToDate:"Adam Fernandez",status:"Delta",
    totalHours:"Delta",TotalAmount:"value",providerExport:"value",mco:"value"},

   
  ];
  const ByInvoiceView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    );
  };
  // ByInvoiceView
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'invoiceNumber',
      headerName: 'Invoice Number',
      width: 130,
      renderCell: (params) => (
        <Link to="/InvoiceDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { 
      field: 'batchNumber', 
      headerName: 'Batch Number', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/BatchDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'visitfrom', headerName: 'Visit From', width: 110 },
    { field: 'visitTo', headerName: 'Visit To', width: 110 },
   {
      field: 'admissionId',
      headerName: 'Admission ID',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    {
      field: 'memberName',
      headerName: 'Member Name',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },

    { field: 'address', headerName: 'address', width: 120 },
    { field: 'totalHours', headerName: 'Total Hours', width: 120 },
    { field: 'TotalAmount', headerName: 'Total Amount', width: 155 },
    { field: 'mco', headerName: 'MCO', width: 155 },
    { field: 'office', headerName: 'Office', width: 125 },
    { field: 'ReBilled', headerName: 'Re-Billed', width: 120 },
   
  ];
  
  const rows3 = [
    {id:1,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:2,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:3,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:4,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:5,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:6,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:7,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:8,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    {id:9,invoiceNumber:"4578",batchNumber:"Jenifer",visitfrom:"Awston",admissionId:"02548965478",memberName:"Active",address:"Adam Fernandez",totalHours:"Delta",
    TotalAmount:"Delta",mco:"value",office:"value",ReBilled:"value"},
    
    

   
  ];
  const ByVisitView = () => {
    return (
      <div>
      <div style={{ height: "550px", width: '100%' }}>
      <DataGrid
        rows={rows4}
        columns={columns4}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection={false}
      />
    </div>
    </div>
    );
  };
   // ByVisitView
   const columns4 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'Invoice', headerName: 'Invoice #', width: 120 },
    {
      field: 'Invoice',
      headerName: 'Invoice #',
      width: 130,
      renderCell: (params) => (
        <Link to="/InvoiceDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    
    { 
      field: 'BatchNumber', 
      headerName: 'Batch Number', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/BatchDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'VisitDate', headerName: 'Visit Date', width: 125 },
    {
      field: 'AdmissionID',
      headerName: 'Admission ID',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
   
    {
      field: 'MemberName',
      headerName: 'Member Name',
      width: 130,
      renderCell: (params) => (
        <Link to="/MemberDetails" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { 
      field: 'CaregiverName', 
      headerName: 'Caregiver Name', 
      width: 120, 
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ from: "occupation" }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'Visit', headerName: 'Visit', width: 125 },
    { field: 'VisitHrs', headerName: 'Visit Hrs', width: 125 },

    { field: 'VisitRate', headerName: 'Visit Rate', width: 125 },
    { field: 'TTHrs', headerName: 'TT Hrs', width: 125 },
    { field: 'TTRate', headerName: 'TT Rate', width: 125 },
    { field: 'OTHrs', headerName: 'OT Hrs', width: 125 },

    { field: 'CTRate', headerName: 'OT Rate', width: 125 },
    { field: 'Amount', headerName: 'Amount', width: 125 },
    { field: 'MCO', headerName: 'MCO', width: 125 },
    { field: 'ExportStatus', headerName: 'Export Status', width: 125 },

    { field: 'TRN', headerName: 'TRN', width: 125 },
    { field: 'BillingHold', headerName: 'Billing Hold', width: 125 },
    { field: 'claimStatus', headerName: 'Claim Status', width: 125 },
   
  ];
  
  const rows4 = [
    {id:1,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
    {id:2,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:3,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:4,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:5,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:6,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:7,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:8,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
    {id:9,Invoice:"4578",BatchNumber:"Jenifer",VisitDate:"Awston",AdmissionID:"02548965478",MemberName:"Active",CaregiverName:"Adam Fernandez",Visit:"Delta",VisitHrs:"Delta"
    ,VisitRate:"Delta",TTHrs:"Delta",TTRate:"Delta",OTHrs:"Delta",CTRate:"Delta",Amount:"Delta",MCO:"Delta",ExportStatus:"Delta",TRN:"Delta",BillingHold:"Delta",claimStatus:"Delta"},
     
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

      <h3  onClick={ByBatchPressed} style={{ color: "#F2B90F" }}>By Batch</h3>
      <h3 onClick={VisitSearchPressed} style={{ color: "#F2B90F" }}>By Invoice</h3>
      <h3  onClick={VisitQuickSearchPressed}  style={{ color: "#F2B90F" }}>By Visit</h3>
    </div>
  </Box>
  </div>
);
//
function GoBackButtonPressed(){
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
            <Button
              className="navigationButton"
              onClick={() => {
                ByBatchPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                By Batch
              </p>
            </Button>
            <Button onClick={VisitSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                By Invoice
              </p>
            </Button>

            <Button
              onClick={VisitQuickSearchPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                By Visit
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay" style={{overflow:"auto"}}>
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
       
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
export default Visit;

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
  .overlay2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 62%;
    z-index: 1000;
    background-color: white;
    overflow-y: auto;
    padding: 50px;
  }
  .crossIcon {
    margin-left: 2%;
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
    align-items: center;
    justify-content: center;
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
