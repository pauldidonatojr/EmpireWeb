import React, { useEffect, useState } from "react";
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
import { AuthContext } from "../../components/context";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
//

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// navigation
import Backdrop from '@mui/material/Backdrop';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
//


function MemberDetails() {
    const [selectedDate, setSelectedDate] = useState(null);
    const { signOut } = React.useContext(AuthContext);
    const location = useLocation()
    const { selectedMemberID } = location.state;
    const [profileAddressTableRows, setProfileAddressTableRows] = useState([]);
    const [callMember, setCallMember] = useState(false)

    const [age, setAge] = React.useState("");

    const navigate = useNavigate();
    const handleChange = (event) => {
        event.stopPropagation();
        // event.preventDefault();
        setAge(event.target.value);

    };

    const membersDataString = localStorage.getItem("Members");
    var membersData = JSON.parse(membersDataString);
    const [member, setMember] = useState(null);

    useEffect(() => {
        for (var key in membersData) {
            if (membersData[key].MemberID == selectedMemberID) {
                var myArray = membersData[key];
                setMember(myArray)

                //For Profile Tab Address Section
                var arr = [];
                var obj = {
                    id: myArray.MemberID,
                    address1: myArray.Address1,
                    address2: myArray.Address2,
                    city: myArray.City,
                    state: myArray.State,
                    country: myArray.Country,
                    zip: myArray.ZipCode,
                    crossStreet: myArray.CrossStreet,
                    primaryAddress: "",
                    notes: '',
                }
                arr.push(obj);
                setProfileAddressTableRows(arr);
            }
        }
    }, []);


    const [ViewSelected, setViewSelected] = useState(2);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
    const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);


    //Last 3 Auth Auth-Type
    const [authTypeOpen, setAuthTypeOpen] = useState(false);
    const handleClickAuthType = () => {
        setAuthTypeOpen(true);
    }

    const handleClickAuthTypeClose = () => {
        setAuthTypeOpen(false);
    }


    //POC 
    const [pocTypeOpen, setPocAuthTypeOpen] = useState(false);
    const pocClickType = () => {
        setPocAuthTypeOpen(true);
    }

    const pocClickTypeClose = () => {
        setPocAuthTypeOpen(false);
    }


    //Visit Claim Status

    const [visitClaimStatusOpen, setVisitClaimStatusOpen] = useState(false);
    const visitClaimStatusClickOpen = () => {
        setVisitClaimStatusOpen(true);
    }

    const visitClaimStatusClickClose = () => {
        setVisitClaimStatusOpen(false);
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
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}

            >
                <div className="overlay">
                    <CloseIcon className="crossIcon" onClick={handleClose} />
                    <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
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
            </ Backdrop>
        );
    }
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
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open3}

            >
                <div className="overlay2">
                    <CloseIcon className="crossIcon" onClick={handleClose3} />
                    <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
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

    //
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Do something with the selected file
    };

    const columnsDiagnosisCode = [
        { field: 'id', headerName: 'Code', width: 100 },
        { field: 'firstName', headerName: 'Description', width: 300 },
        { field: 'lastName', headerName: 'Admit', width: 200 },
        { field: 'lastName', headerName: 'Primary', width: 200 },
        {
            field: 'actions',
            headerName: 'ADD',
            sortable: false,
            width: 400,
            renderCell: (params) => (
                <Button variant="contained">
                    Delete
                </Button>
            ),
        },
    ];

    const rowsDiagnosisCode = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ];


    function Overlay4() {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={authTypeOpen}

            >
                <div className="overlay2">
                    <CloseIcon className="crossIcon" onClick={handleClickAuthTypeClose} />


                    <h1 style={{ textAlign: "center", color: "black" }}>Authorization</h1>

                    <div className="searchFieldsDiv">

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
                                label="Service Category"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Service Type"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Authorization Number"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Service Code"
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

                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Service Code Type"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Authorization Type"
                                variant="outlined"
                            />
                        </Grid>


                    </div>


                    <h1 style={{ textAlign: "center", color: "black" }}>Hours</h1>

                    <div className="searchFieldsDiv">

                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Hours Per Auth Period"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Additional Rules"
                                variant="outlined"
                            />
                        </Grid>
                    </div>



                    <h1 style={{ textAlign: "center", color: "black" }}>Checkout Dates</h1>

                    <div className="searchFieldsDiv">

                        <TextField
                            type="file"
                            label="Upload Document"
                            onChange={handleFileUpload}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />
                        <Typography variant="caption" color="textSecondary">
                            Note: File must be 1000 KB in size or smaller.
                        </Typography>




                    </div>


                    <div className="searchFieldsDivTable">
                        <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
                            <DataGrid
                                rows={rowsDiagnosisCode}
                                columns={columnsDiagnosisCode}
                                pageSize={5} />
                        </div>

                    </div>


                    <div className="searchFieldsDivNotes">
                        <TextField
                            id="notes"
                            label="Notes"
                            multiline
                            rows={10}
                            fullWidth
                            variant="outlined"
                            placeholder="Enter notes here"
                        />
                    </div>

                </div>



            </Backdrop >
        );
    }

    const columnsPOCNEW = [
        {
            field: 'id',
            headerName: 'POC #',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Button variant="contained" onClick={() => pocClickType()}>
                    {params.value}
                </Button>
            ),
        },
        { field: 'fromDate', headerName: 'POC Start Date', width: 150 },
        { field: 'toDate', headerName: 'POC End Date', width: 150 },
        { field: 'serviceType', headerName: 'Created By', width: 150 },
        { field: 'serviceCode', headerName: 'Created Date', width: 150 },


        {
            field: 'authType',
            headerName: 'Authorization Type',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Button variant="contained">
                    Print
                </Button>
            ),
        },

    ];

    const rowsPOCNEW = [
        {
            id: 1, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },
        {
            id: 2, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },
        {
            id: 3, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },


    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



    const [selectedValues, setSelectedValues] = useState([]);



    const columnsPOCEntry = [
        { field: 'id', headerName: 'Category', width: 150 },
        { field: 'task', headerName: 'Task #', width: 100 },
        { field: 'duty', headerName: 'Duty', width: 100 },
        {
            field: 'asNeeded',
            headerName: 'As Needed',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Checkbox {...label} defaultChecked />
            ),
        },
        {
            field: 'timesAWeek',
            headerName: 'Times A Week (Min - Max)',
            sortable: false,
            width: 500,
            renderCell: (params) => (
                <div>
                    <TextField id="filled-basic" label="MIN Time" variant="filled" style={{ padding: '10px' }} /><TextField id="filled-basic" label="MAX Time" variant="filled" style={{ padding: '10px' }} />
                </div>
            ),
        },
        {
            field: 'instruction',
            headerName: 'Instruction',
            sortable: false,
            width: 500,
            renderCell: (params) => (
                <TextField
                    fullWidth
                    variant="standard"
                    InputProps={{
                        style: {
                            padding: '8px',
                            boxSizing: 'border-box',
                        },
                    }}
                />
            ),
        },
        {
            field: 'daysAWeek',
            headerName: 'Days A Week',
            sortable: false,
            width: 500,
            renderCell: () => (
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>M</div>
                        <Checkbox {...label} defaultChecked />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>T</div>
                        <Checkbox {...label} defaultChecked />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>W</div>
                        <Checkbox {...label} defaultChecked />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>TH</div>
                        <Checkbox {...label} defaultChecked />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>F</div>
                        <Checkbox {...label} defaultChecked />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>SA</div>
                        <Checkbox {...label} defaultChecked />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ textAlign: 'center', verticalAlign: 'center', height: '100%' }}>SU</div>
                        <Checkbox {...label} defaultChecked />
                    </div>
                </div>
            ),
        },


    ];
    //demo data to display
    const rowsPOCEntry = [
        { id: 1, task: "Justin", duty: "Assist with Home", asNeeded: '', timesAWeek: '', instruction: '', daysAWeek: '' },
        { id: 2, task: "Justin", duty: "Assist with Home", asNeeded: '', timesAWeek: '', instruction: '', daysAWeek: '' },
        { id: 3, task: "Justin", duty: "Assist with Home", asNeeded: '', timesAWeek: '', instruction: '', daysAWeek: '' },
        { id: 4, task: "Justin", duty: "Assist with Home", asNeeded: '', timesAWeek: '', instruction: '', daysAWeek: '' },
        { id: 5, task: "Justin", duty: "Assist with Home", asNeeded: '', timesAWeek: '', instruction: '', daysAWeek: '' },
        { id: 6, task: "Justin", duty: "Assist with Home", asNeeded: '', timesAWeek: '', instruction: '', daysAWeek: '' },
    ];

    function Overlay5() {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={pocTypeOpen}

            >
                <div className="overlay2">
                    <CloseIcon className="crossIcon" onClick={pocClickTypeClose} />


                    <h1 style={{ textAlign: "center", color: "black" }}>POC</h1>

                    <div className="searchFieldsDiv">



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
                                label="Start Date"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className="griditem">
                            <TextField
                                id="outlined-basic"
                                label="Stop Date"
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
                                        label="Shift"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Shift 1</MenuItem>
                                        <MenuItem value={20}>Shift 2</MenuItem>
                                        <MenuItem value={30}>Shift 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                            <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                            <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={pocClickTypeClose}>Close</Button>
                        </div>


                    </div>

                    <div className="searchFieldsDivTable">
                        <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
                            <DataGrid
                                rows={rowsPOCEntry}
                                columns={columnsPOCEntry}
                                pageSize={5} />
                        </div>

                    </div>



                    <div className="searchFieldsDivNotes">
                        <TextField
                            id="notes"
                            label="Notes"
                            multiline
                            rows={10}
                            fullWidth
                            variant="outlined"
                            placeholder="Enter notes here"
                        />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                        <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                        <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={pocClickTypeClose}>Close</Button>
                    </div>



                </div>



            </Backdrop >
        );
    }



    const columnsVisitHistory = [
        { field: 'id', headerName: 'Date', width: 300 },
        { field: 'status', headerName: 'Status', width: 300 },
        { field: 'additionalInformation', headerName: 'Additional Information', width: 300 },


    ];
    //demo data to display
    const rowsVisitHistory = [
        { id: 1, task: "Justin", duty: "Assist with Home" },
        { id: 2, task: "Justin", duty: "Assist with Home" },
        { id: 3, task: "Justin", duty: "Assist with Home" },
        { id: 4, task: "Justin", duty: "Assist with Home" },
    ];



    function Overlay6() {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={visitClaimStatusOpen}

            >
                <div className="overlay2">
                    <CloseIcon className="crossIcon" onClick={visitClaimStatusClickClose} />


                    <h1 style={{ textAlign: "center", color: "black" }}>Visit History</h1>
                    <div className="searchFieldsDivTable">
                        <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
                            <DataGrid
                                rows={rowsVisitHistory}
                                columns={columnsVisitHistory}
                                pageSize={5} />
                        </div>

                    </div>



                    <h1 style={{ textAlign: "center", color: "black" }}>Visit Response File History</h1>
                    <div className="searchFieldsDivTable">
                        <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
                            <DataGrid
                                rows={rowsVisitHistory}
                                columns={columnsVisitHistory}
                                pageSize={5} />
                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                        <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={visitClaimStatusClickClose}>Close</Button>
                    </div>



                </div>



            </Backdrop >
        );
    }

    const LastAuthPressed = () => {
        setViewSelected(3);
    };


    const MemberInfoPressed = () => {
        setViewSelected(2);
    };

    const GeneralInfoPressed = () => {
        setViewSelected(3);
    };

    const ProfileInfoPressed = () => {
        setViewSelected(5);
    };

    function AuthorizationInfoPressed() {
        setViewSelected(6);
    }

    function SpecialReuirementsInfoPressed() {
        setViewSelected(7);
    }

    function MasterWeekInfoPressed() {
        setViewSelected(8);
    }

    const POCInfoPressed = () => {
        setViewSelected(9);
    };

    const VisitInfoPressedMain = () => {
        setViewSelected(10);
    };

    function RenderViews() {
        switch (ViewSelected) {
            case 2:
                return MemberInfoView();

            case 3:
                return GeneralInfoView();


            case 5:
                return ProfileView();

            case 6:
                return AuthorizationView();

            case 7:
                return SpecialRequirementsView();

            case 8:
                return MasterWeekView();

            case 9:
                return POCView();

            case 10:
                return VisitsView();

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

    //
    const localizer = momentLocalizer(moment);
    const myEventsList = [
        {
            start: new Date('2023-04-11T10:00:00'),
            end: new Date('2023-04-11T12:00:00'),
            title: 'Event 1',
            description: 'This is event 1',
            location: 'New York',
            organizer: 'John Doe'
        },
        {
            start: new Date('2023-04-13T14:00:00'),
            end: new Date('2023-04-13T16:00:00'),
            title: 'Event 2',
            description: 'This is event 2',

        }
    ];



    const [TimeOverlay, setIsTimeOverlay] = useState(false);
    function handleEventClick(event) {
        setIsTimeOverlay(true);
        setOpenTime(true);

    }


    //
    const [opentime, setOpenTime] = React.useState(false);
    const handleCloseTime = () => {
        setIsTimeOverlay(false);
        setOpenTime(false);
    };

    //
    const [NavigationState, setNavigationState] = React.useState(0);
    function SchedulePressed() {
        setNavigationState(1);
    }
    function VisitInfoPressed() {
        setNavigationState(2);
    }

    function BillInfoPreseed() {
        setNavigationState(3);
    }
    function renderOverlayViews() {
        switch (NavigationState) {
            case 1:

                return ScheduleView();
            case 2:
                return VisitInfoView();
            case 3:
                return BillingView();

            default:
                break;
        }
    }

    const columns15 = [
        { field: 'id', headerName: 'Duty Number', width: 250 },
        { field: 'fromDate', headerName: 'Category', width: 200 },
        { field: 'toDate', headerName: 'Duty', width: 400 },



    ];
    //demo data to display
    const rows15 = [
        { id: 1, fromDate: "Justin", toDate: "Assist with Home" },
        { id: 2, fromDate: "Justin", toDate: "Assist with Home" },
        { id: 3, fromDate: "Justin", toDate: "Assist with Home" },
        { id: 4, fromDate: "Justin", toDate: "Assist with Home" },
        { id: 5, fromDate: "Justin", toDate: "Assist with Home" },
        { id: 6, fromDate: "Justin", toDate: "Assist with Home" },
    ];


    const ScheduleView = () => {
        return (
            <div>
                <h2 style={{ textAlign: "center", color: "#564873" }}>Schedule</h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>Schedule Time</h1>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="0600"
                            variant="outlined"
                        />
                        <h5 style={{ color: "black", marginTop: "10%" }}>-</h5>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="1400"
                            variant="outlined"
                        />
                    </div>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>Care Giver Code</h1>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="0600"
                            variant="outlined"
                        />

                    </div>

                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>POC</h1>
                        <TextField
                            style={{ margin: "2%" }}
                            id="outlined-basic"
                            label="3758456-11/09/21"
                            variant="outlined"
                        />

                    </div>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>Admission ID: <span>115524</span></h1>

                    </div>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>Service Code</h1>
                        <TextField
                            style={{ margin: "2%" }}
                            id="outlined-basic"
                            label="3758456-11/09/21"
                            variant="outlined"
                        />

                    </div>

                </div>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>H</h1>
                        <TextField
                            style={{ margin: "2%" }}
                            id="outlined-basic"
                            label="0600"
                            variant="outlined"
                        />
                        <h1 style={{ color: "grey", textAlign: "center" }}>M:</h1>
                        <TextField
                            style={{ margin: "2%" }}
                            id="outlined-basic"
                            label="1400"
                            variant="outlined"
                        />
                    </div>

                </div>
                <h1 style={{ color: "grey", textAlign: "center" }}>Bill Type: <span>Hourly</span></h1>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Close</Button>
                </div>

            </div>
        )
    }
    const VisitInfoView = () => {
        return (
            <div style={{ width: "100%" }}>
                <h2 style={{ textAlign: "center", color: "#564873" }}>Visit Schedule</h2>
                <h1 style={{ color: "grey", textAlign: "center" }}>Scheduled Time : <span style={{ color: "black" }}> 0600 : 1400</span></h1>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>Visit Start Time</h1>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="0600"
                            variant="outlined"
                        />
                        <h5 style={{ color: "black", marginTop: "10%" }}>-</h5>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="1400"
                            variant="outlined"
                        />
                    </div>
                    <div style={{ width: "50%", display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <h1 style={{ color: "grey", textAlign: "center" }}>Visit End Time</h1>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="0600"
                            variant="outlined"
                        />
                        <h5 style={{ color: "black", marginTop: "10%" }}>-</h5>
                        <TextField
                            style={{ margin: "5%" }}
                            id="outlined-basic"
                            label="1400"
                            variant="outlined"
                        />
                    </div>

                </div>

                <div>
                    <FormGroup>
                        <FormControlLabel style={{ color: "grey", fontSize: "50px" }} control={<Checkbox defaultChecked />} label="Missed Visit" />
                    </FormGroup>
                </div>
                <table style={{ color: "black", width: "100%" }}>
                    <tr style={{ backgroundColor: "#564873", color: "white" }}>
                        <th>Reason</th>
                        <th>Action Taken</th>
                        <th>Note</th>
                        <th>User</th>
                        <th>Date/Time</th>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>Other</td>
                        <td style={{ textAlign: "center" }}>Supervised approved change</td>
                        <td style={{ textAlign: "center" }}>Notes</td>
                        <td style={{ textAlign: "center" }}>Hector</td>
                        <td style={{ textAlign: "center" }}>2023-04-06</td>
                    </tr>
                </table>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Box style={{ width: "25%", margin: "2%" }}>
                        <FormControl fullWidth>
                            <InputLabel>Action Status</InputLabel>
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
                    <Box style={{ width: "25%", margin: "2%" }}>
                        <FormControl fullWidth>
                            <InputLabel>Action Taken</InputLabel>
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

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                        style={{ margin: "1%", width: "75%" }}
                        id="outlined-basic"
                        label="New Note"
                        variant="outlined"
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Close</Button>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Print</Button>
                </div>
                <hr></hr>

                <h2 style={{ textAlign: "center", color: "#564873" }}>Audit</h2>
                <div style={{ display: "flex" }}>

                    <h1 style={{ color: "grey" }}>Vertified By :</h1>
                    <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Member" />
                    <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Care Giver" />
                    <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Family Member" />
                    <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Other" />

                </div>
                <div>

                    <TextField
                        style={{ margin: "1%", width: "30%" }}
                        id="outlined-basic"
                        label="Date Verified"
                        variant="outlined"
                    />
                    <TextField
                        style={{ margin: "1%", width: "30%" }}
                        id="outlined-basic"
                        label="Time Verfied"
                        variant="outlined"
                    />
                    <TextField
                        style={{ margin: "1%", width: "30%" }}
                        id="outlined-basic"
                        label="Supervisor"
                        variant="outlined"
                    />
                </div>
                <hr></hr>
                <div>

                </div>
                <h2 style={{ textAlign: "center", color: "#564873" }}>Daily Sheet</h2>
                <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Timesheet Required" />
                <h4 style={{ color: "#564873" }}>POC Duties</h4>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rows15}
                        columns={columns15}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                        style={{ margin: "1%", width: "75%" }}
                        id="outlined-basic"
                        label="Care Giver New Note"
                        variant="outlined"
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Close</Button>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Print</Button>
                </div>
            </div>
        )
    }

    const BillingView = () => {
        return (
            <div style={{ width: "100%" }}>/
                <h2 style={{ textAlign: "center", color: "#564873" }}>Primary Bill To</h2>

                <table style={{ color: "black", width: "100%" }}>
                    <tr style={{ backgroundColor: "#564873", color: "white" }}>
                        <th>Primary Bill To</th>
                        <th>Service Code</th>
                        <th>Bill Type</th>
                        <th>Service Hours</th>
                        <th>TT Hours</th>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>KEYSTONE FIRST CHC</td>
                        <td style={{ textAlign: "center" }}>W7125</td>
                        <td style={{ textAlign: "center" }}>Hourly</td>
                        <td style={{ textAlign: "center" }}>08:00</td>
                        <td style={{ textAlign: "center" }}>32.00</td>
                    </tr>
                </table>
//
                <table style={{ color: "black", width: "100%" }}>
                    <tr style={{ backgroundColor: "#564873", color: "white" }}>
                        <th>OT Hours</th>
                        <th>Billable Hours</th>
                        <th>Billable rate</th>
                        <th>Total</th>
                        <th>Billed</th>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>0800</td>
                        <td style={{ textAlign: "center" }}>32.00</td>
                        <td style={{ textAlign: "center" }}>$ 21.52</td>
                        <td style={{ textAlign: "center" }}>$ 171.52</td>
                        <td style={{ textAlign: "center" }}>Y</td>
                    </tr>
                </table>
                <table style={{ color: "black", width: "100%" }}>
                    <tr style={{ backgroundColor: "#564873", color: "white" }}>
                        <th>Invoice Number</th>
                        <th>Invoice Creation Date</th>
                        <th>Billing Hold</th>
                        <th>TRN Number</th>
                        <th>E-Billing Batch #</th>
                        <th>Secondary Billing</th>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>54SD45</td>
                        <td style={{ textAlign: "center" }}>21-4-2023</td>
                        <td style={{ textAlign: "center" }}>4564555</td>
                        <td style={{ textAlign: "center" }}>5488SSS</td>
                        <td style={{ textAlign: "center" }}>656SS</td>
                        <td style={{ textAlign: "center" }}>656SS</td>
                    </tr>
                </table>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                    <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Close</Button>
                </div>

            </div>

        )
    }
    function OverlayTime() {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={opentime}

            >
                <div className="overlayTime">
                    <CloseIcon className="crossIcon" onClick={handleCloseTime} />
                    <h1 style={{ textAlign: "center", color: "black" }}>Non Skilled Visit</h1>
                    <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "5%", }}>

                            <h2 style={{ color: "white" }}>Member Name : <span style={{ color: "#F2A007" }}>{"ROSADO MARTIZA"}</span></h2>
                            <h2 style={{ color: "white" }}>Visit Date : <span style={{ color: "#F2A007" }}>{"ROSADO MARTIZA"}</span></h2>
                            <h2 style={{ color: "white", textAlign: "center" }}>Member Phone # : <span style={{ color: "#F2A007" }}>{"ROSADO MARTIZA"}</span></h2>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "1%" }}>
                            <h2 style={{ color: "white" }}>Admission ID : <span style={{ color: "#F2A007" }}>{"ROSADO MARTIZA"}</span></h2>
                            <h2 style={{ color: "white", textAlign: "center" }}>Assigment ID : <span style={{ color: "#F2A007" }}>{"ROSADO MARTIZA"}</span></h2>
                            <h2 style={{ color: "white", textAlign: "center" }}>Cordinator : <span style={{ color: "#F2A007" }}>{"ROSADO MARTIZA"}</span></h2>
                        </div>
                    </div>
                    <hr />

                    <div style={{ display: "flex", alignContent: "center", marginLeft: "7%", justifyContent: "space-between", width: "85%", textAlign: "center" }}>
                        <Button onClick={SchedulePressed}>Schedule</Button>
                        <Button onClick={VisitInfoPressed}>Visit Info</Button>
                        <Button onClick={BillInfoPreseed}>Bill Info</Button>
                    </div>
                    <hr />
                    <div style={{ width: "100%", height: "100%", display: "flex" }}>


                        {renderOverlayViews()}

                    </div>
                </div>
            </ Backdrop>
        );
    }
    //

    function myCustomFormat(date, event) {
        return (
            <div >
                <div>{date.getDate()}</div>
                <Button onClick={() => handleEventClick(event)}>{event.title}</Button>
                <div>{event.description}</div>

            </div>
        );
    }

    //Side Bar Views

    const MemberInfoView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>


                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Last 3 Authorization</h1>
                <div className='tableData' style={{ height: "50%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rows10}
                        columns={columns10}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>

                <h1 style={{ color: "#564873", textAlign: "center" }}>Calender</h1>
                <div style={{ height: "100%", width: '100%' }}>
                    <Calendar
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        localizer={localizer}
                        formats={{ dayFormat: myCustomFormat }}
                        showMultiDayTimes={false}
                        views={['month']}
                        style={{ height: "100%" }}
                        onSelectEvent={handleEventClick} // pass the function as a prop
                    />
                </div>

            </div>
        );
    };

    const [isCheckedEVVConfirmation, setIsCheckedEVVConfirmation] = useState(false);

    const handleCheckboxChangeEVVConfirmation = (event) => {
        setIsCheckedEVVConfirmation(event.target.checked);
    };

    const [selectedOptionMemberTeam, setSelectedOptionMemberTeam] = useState('Default');

    const handleDropdownChangeMemberTeam = (event) => {
        setSelectedOptionMemberTeam(event.target.value);
    };


    const [isCheckedFOBConfirmation, setIsCheckedFOBConfirmation] = useState(false);

    const handleCheckboxChangeFOBConfirmation = (event) => {
        setIsCheckedFOBConfirmation(event.target.checked);
    };

    const [selectedOptionSourceOfAdmission, setSelectedOptionSourceOfAdmission] = useState('Source of Admission');

    const handleDropdownSourceOfAdmission = (event) => {
        setSelectedOptionSourceOfAdmission(event.target.value);
    };


    const columnsProviderInformation = [
        { field: 'id', headerName: 'Placement ID', width: 150 },
        { field: 'providerName', headerName: 'Provider Name', width: 200 },
        { field: 'coordinatorName', headerName: 'Coordinator Name', width: 200 },
        { field: 'startOfCareDate', headerName: 'Stat of Care Date', width: 200 },
        { field: 'firstVisitDate', headerName: 'First Visit Date', width: 200 },
        { field: 'coordinatorName', headerName: 'Coordinator Name', width: 200 },
        { field: 'dischargedDate', headerName: 'Discharged Date', width: 200 },
        {
            field: 'print',
            headerName: 'Print',
            sortable: false,
            width: 200,
            renderCell: (params) => (
                <Button variant="contained">
                    Print
                </Button>
            ),
        },

    ];
    //demo data to display
    const rowsProviderInformation = [
        { id: 1, providerName: "Justin", coordinatorName: "Assist with Home", startOfCareDate: '', firstVisitDate: '', coordinatorName: '', dischargedDate: '', print: '' },
        { id: 2, providerName: "Justin", coordinatorName: "Assist with Home", startOfCareDate: '', firstVisitDate: '', coordinatorName: '', dischargedDate: '', print: '' },
        { id: 3, providerName: "Justin", coordinatorName: "Assist with Home", startOfCareDate: '', firstVisitDate: '', coordinatorName: '', dischargedDate: '', print: '' },
        { id: 4, providerName: "Justin", coordinatorName: "Assist with Home", startOfCareDate: '', firstVisitDate: '', coordinatorName: '', dischargedDate: '', print: '' },
        { id: 5, providerName: "Justin", coordinatorName: "Assist with Home", startOfCareDate: '', firstVisitDate: '', coordinatorName: '', dischargedDate: '', print: '' },
        { id: 6, providerName: "Justin", coordinatorName: "Assist with Home", startOfCareDate: '', firstVisitDate: '', coordinatorName: '', dischargedDate: '', print: '' },
    ];


    const columnsStatusHistory = [
        { field: 'id', headerName: 'Placement ID', width: 150 },
        { field: 'at', headerName: 'AT', width: 200 },
        { field: 'message', headerName: 'Message', width: 200 },
        { field: 'providerName', headerName: 'Provider Name', width: 200 },
        { field: 'userName', headerName: 'User Name', width: 200 },
    ];
    //demo data to display
    const rowsStatusHistory = [
        { id: 1, providerName: "Justin", at: "Assist with Home", message: '', providerName: '', userName: '' },
        { id: 2, providerName: "Justin", at: "Assist with Home", message: '', providerName: '', userName: '' },
        { id: 3, providerName: "Justin", at: "Assist with Home", message: '', providerName: '', userName: '' },
        { id: 4, providerName: "Justin", at: "Assist with Home", message: '', providerName: '', userName: '' },
        { id: 5, providerName: "Justin", at: "Assist with Home", message: '', providerName: '', userName: '' },
        { id: 6, providerName: "Justin", at: "Assist with Home", message: '', providerName: '', userName: '' },
    ];



    const columnsNotes = [
        { field: 'id', headerName: 'Date', width: 150 },
        { field: 'from', headerName: 'From', width: 200 },
        { field: 'to', headerName: 'To', width: 200 },
        { field: 'note', headerName: 'Note', width: 200 },
        { field: 'reason', headerName: 'Reason', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'action', headerName: 'Action', width: 200 },
        {
            field: 'print',
            headerName: 'Print',
            sortable: false,
            width: 200,
            renderCell: (params) => (
                <Button variant="contained">
                    Print
                </Button>
            ),
        },

    ];
    //demo data to display
    const rowsNotes = [
        { id: 1, from: "Justin", to: "Assist with Home", note: '', reason: '', status: '', action: '', print: '' },
        { id: 2, from: "Justin", to: "Assist with Home", note: '', reason: '', status: '', action: '', print: '' },
        { id: 3, from: "Justin", to: "Assist with Home", note: '', reason: '', status: '', action: '', print: '' },
        { id: 4, from: "Justin", to: "Assist with Home", note: '', reason: '', status: '', action: '', print: '' },
        { id: 5, from: "Justin", to: "Assist with Home", note: '', reason: '', status: '', action: '', print: '' },
        { id: 6, from: "Justin", to: "Assist with Home", note: '', reason: '', status: '', action: '', print: '' },
    ];

    const GeneralInfoView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>


                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>General</h1>
                <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse: <span style={{ color: "#F2A007" }}>{member.Nurse}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Provider Coordinator: <span style={{ color: "#F2A007" }}>{member.ProviderName}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Office: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Disable Automatic Visit Creation Based on EVV Confirmations: <span style={{ color: "#F2A007" }}>
                                <Checkbox
                                    checked={isCheckedEVVConfirmation}
                                    onChange={handleCheckboxChangeEVVConfirmation}
                                />
                            </span></h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>EVV Required: <span style={{ color: "#F2A007" }}>{member.EVVRequired}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member Team: <span style={{ color: "#F2A007" }}>
                                <Select
                                    value={selectedOptionMemberTeam}
                                    onChange={handleDropdownChangeMemberTeam}
                                >
                                    <MenuItem value="Unassigned">Unassigned</MenuItem>
                                    <MenuItem value="Assigned">Assigned</MenuItem>
                                    <MenuItem value="Default">Default</MenuItem>
                                </Select>
                            </span></h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}> Enable FOB Confirmation: <span style={{ color: "#F2A007" }}>
                                <Checkbox
                                    checked={isCheckedFOBConfirmation}
                                    onChange={handleCheckboxChangeFOBConfirmation}
                                />
                            </span></h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Location: <span style={{ color: "#F2A007" }}>{member.Location}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                            }
                        </Grid>


                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Branch: <span style={{ color: "#F2A007" }}>{member.Branch}</span></h2></div>
                            }
                        </Grid>


                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Mutual Case With: <span style={{ color: "#F2A007" }}>{member.Mutual}</span></h2></div>
                            }
                        </Grid>


                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Source of Admission: <span style={{ color: "#F2A007" }}>
                                <Select
                                    value={selectedOptionSourceOfAdmission}
                                    onChange={handleDropdownSourceOfAdmission}
                                >
                                    <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                    <MenuItem value="CHHA">CHHA</MenuItem>
                                    <MenuItem value="Hospice">Hospice</MenuItem>
                                    <MenuItem value="Hospital">Hospital</MenuItem>
                                    <MenuItem value="LHCA">LHCA</MenuItem>
                                    <MenuItem value="Local Social Services/CASA">Local Social Services/CASA</MenuItem>
                                    <MenuItem value="LTHCP">LTHCP</MenuItem>
                                    <MenuItem value="MTO">MTO</MenuItem>
                                    <MenuItem value="MLTC">MLTC</MenuItem>
                                    <MenuItem value="Physician">Physician</MenuItem>
                                    <MenuItem value="RHTF">RHTF</MenuItem>
                                    <MenuItem value="Self/Family/Friend">Self/Family/Friend</MenuItem>
                                    <MenuItem value="Other Instiitution">Other Instiitution</MenuItem>
                                    <MenuItem value="Other Community/Agency">Other Community/Agency</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </span></h2></div>
                        </Grid>
                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="EditButton" variant="outlined">
                            Edit
                        </Button>
                    </div>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Provider Information</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsProviderInformation}
                        columns={columnsProviderInformation}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                    />
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Status History</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsStatusHistory}
                        columns={columnsStatusHistory}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                    />
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Notes</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsNotes}
                        columns={columnsNotes}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                    />
                </div>
            </div>
        );
    };


    const profileAddressTableColumns = [
        { field: 'id', headerName: 'Member ID', width: 100 },
        { field: 'address1', headerName: 'Address Line 1', width: 300 },
        { field: 'address2', headerName: 'Address Line 2', width: 300 },
        { field: 'city', headerName: 'City', width: 120 },
        { field: 'state', headerName: 'State', width: 120 },
        { field: 'country', headerName: 'Country', width: 100 },
        { field: 'zip', headerName: 'Zip', width: 120 },
        { field: 'crossStreet', headerName: 'Cross Street', width: 120 },
        { field: 'primaryAddress', headerName: 'Primary Address', width: 300 },
        { field: 'notes', headerName: 'Notes', width: 300 },

    ];


    const ProfileView = () => {

        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>


                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Demographics</h1>
                <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>First Name: <span style={{ color: "#F2A007" }}>{member.FirstName}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Middle Name: <span style={{ color: "#F2A007" }}>{member.MiddleName}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID: <span style={{ color: "#F2A007" }}>{member.LastName}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB: <span style={{ color: "#F2A007" }}>{member.DateofBirth}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Gender: <span style={{ color: "#F2A007" }}>{member.Gender}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Medicaid Number: <span style={{ color: "#F2A007" }}>{member.MedicaidNumber}</span></h2></div>
                            }
                        </Grid>
                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="EditButton" variant="outlined">
                            Edit
                        </Button>
                    </div>
                </div>
                <h1 style={{ color: "#564873", textAlign: "center" }}>Address</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={profileAddressTableRows}
                        columns={profileAddressTableColumns}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Phone Number Information</h1>
                <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Home Phone: <span style={{ color: "#F2A007" }}>{member.HomePhone}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Home Phone Location: <span style={{ color: "#F2A007" }}>{member.Location}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 2: <span style={{ color: "#F2A007" }}>{member.HomePhone2}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 2 Location: <span style={{ color: "#F2A007" }}>{member.Location}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Description: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 3: <span style={{ color: "#F2A007" }}>{member.HomePhone3}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 3 Location: <span style={{ color: "#F2A007" }}>{member.Location}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Description: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                            }
                        </Grid>
                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="EditButton" variant="outlined">
                            Edit
                        </Button>
                    </div>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Emergency Contact Information</h1>
                <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name: <span style={{ color: "#F2A007" }}>{member.Emergency1Name}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Relationship: <span style={{ color: "#F2A007" }}>{member.Emergency1Relationship}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Address: <span style={{ color: "#F2A007" }}>{member.Emergency1Address}</span></h2></div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 1: <span style={{ color: "#F2A007" }}>{member.Emergency1Phone1}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 2: <span style={{ color: "#F2A007" }}>{member.Emergency1Phone2}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name: <span style={{ color: "#F2A007" }}>{member.Emergency2Name}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Relationship: <span style={{ color: "#F2A007" }}>{member.Emergency1Relationship}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Address: <span style={{ color: "#F2A007" }}>{member.Emergency2Address}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 1: <span style={{ color: "#F2A007" }}>{member.Emergency2Phone1}</span></h2></div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 2: <span style={{ color: "#F2A007" }}>{member.Emergency2Phone2}</span></h2></div>
                            }
                        </Grid>
                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="EditButton" variant="outlined">
                            Edit
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    const AuthorizationView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>

                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Authorization</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rows10}
                        columns={columns10}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                    />
                </div>
            </div>
        );
    };

    const SpecialRequirementsView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>

                <h1 style={{ color: "#564873", textAlign: "center" }}>Special Requirements</h1>
                <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Preffered Gender: <span style={{ color: "#F2A007" }}>{member.PreferredGender}</span></h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Primary Language: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Secondary Language: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Preffered Discipline: <span style={{ color: "#F2A007" }}>{member.Discipline}</span></h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Others: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        </Grid>
                    </Grid>

                </div>

            </div>
        );
    }


    const [openAddMasterWeek, setOpenAddMasterWeek] = useState(false);
    const [openEditMasterWeek, setOpenEditMasterWeek] = useState(false);


    const [selectedFromDateEMW, setSelectedFromDateEMW] = useState(null);

    const handleChangeFromDateEMW = (date) => {
        setSelectedFromDateEMW(date);
    };

    const [selectedToDateEMW, setSelectedToDateEMW] = useState(null);

    const handleChangeToDateEMW = (date) => {
        setSelectedToDateEMW(date);
    };


    const MasterWeekView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>


                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>



                <h1 style={{ color: "#564873", textAlign: "center" }}>Last 3 Authorization</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rows10}
                        columns={columns10}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection
                    />
                </div>



                <div>
                    <div
                        className="bar"
                        style={{
                            width: '100%',
                            height: openAddMasterWeek ? '100%' : '50px',
                            position: 'relative',
                            bottom: '0',
                            left: '0',
                            backgroundColor: '#ccc',
                            transition: 'height 0.3s ease-in-out'
                        }}

                    >
                        <h1 style={{ color: "#564873", textAlign: "center", cursor: 'pointer' }} onClick={() => setOpenAddMasterWeek(!openAddMasterWeek)}>Add Master Week</h1>


                        {openAddMasterWeek &&

                            <div>
                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Monday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>

                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Tuesday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Wednesday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Thursday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>

                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Friday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>

                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Saturday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Sunday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div style={{ display: "flex", justifyContent: "center", marginTop: '20px', padding: '10px' }}>
                                    <Button className="EditButton" variant="outlined">
                                        Create New Master Week
                                    </Button>
                                </div>


                            </div>



                        }
                    </div>
                </div>


                <div>
                    <div
                        className="bar"
                        style={{
                            width: '100%',
                            height: openEditMasterWeek ? '1000px' : '50px',
                            position: 'relative',
                            bottom: '0',
                            left: '0',
                            backgroundColor: '#ccc',
                            transition: 'height 0.3s ease-in-out',
                            marginTop: '5%'
                        }}
                        
                    >
                        <h1 style={{ color: "#564873", textAlign: "center", cursor: 'pointer' }} onClick={() => setOpenEditMasterWeek(!openEditMasterWeek)}>Edit Master Week</h1>

                        {
                            openEditMasterWeek &&

                            <div>
                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Monday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>

                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Tuesday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Wednesday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Thursday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>

                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Friday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>

                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Saturday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div>

                                    <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                        <h1 style={{ color: "#564873", textAlign: "center" }}>Sunday</h1>
                                        <Grid container spacing={2}>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Hour </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid">
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Start Time"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="End Time"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Care Giver </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Code"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Care Giver Name"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>

                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>ASS ID. </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Ass. ID"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>POC </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Time </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Hours"
                                                        variant="outlined"
                                                    />
                                                </div>

                                                <div style={{ margin: "5px" }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Minutes"
                                                        variant="outlined"
                                                    />
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px", marginTop: '20px' }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Codes </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    <Select
                                                        value={selectedOptionSourceOfAdmission}
                                                        onChange={handleDropdownSourceOfAdmission}
                                                    >
                                                        <MenuItem value="Assistant Live-In Facilities">Assistant Live-In Facilities</MenuItem>
                                                        <MenuItem value="CHHA">CHHA</MenuItem>
                                                        <MenuItem value="Hospice">Hospice</MenuItem>
                                                        <MenuItem value="Hospital">Hospital</MenuItem>
                                                    </Select>
                                                </div>
                                            </Grid>


                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type </h2></div>
                                            </Grid>
                                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                                <div style={{ margin: "5px" }}>
                                                    Hourly
                                                </div>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>


                                <div style={{ display: "flex", justifyContent: "center", marginTop: '20px', padding: '10px' }}>
                                    <Button className="EditButton" variant="outlined">
                                        Edit Master Week
                                    </Button>
                                </div>


                            </div>


                        }
                    </div>



                </div>



                {/* <div style={{ height: "100%", width: '100%' }}>
                    <Calendar
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        localizer={localizer}
                        formats={{ dayFormat: myCustomFormat }}
                        showMultiDayTimes={false}
                        views={['month']}
                        style={{ height: "100%" }}
                        onSelectEvent={handleEventClick} // pass the function as a prop
                    />
                </div> */}

            </div>
        );
    }


    const POCView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>



                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>




                <h1 style={{ color: "#564873", textAlign: "center" }}>POC</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsPOC}
                        columns={columnsPOC}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>


            </div>
        );
    };


    const columnsVisitsMain = [
        { field: 'id', headerName: 'Date', width: 250 },
        { field: 'schedule', headerName: 'Schedule', width: 200 },
        { field: 'provider', headerName: 'Provider', width: 400 },
        { field: 'serviceCode', headerName: 'Service Code', width: 200 },
        { field: 'careGiver', headerName: 'Care Giver', width: 200 },
        { field: 'confirmedTime', headerName: 'Confirmed Time', width: 200 },
        { field: 'billed', headerName: 'Billed', width: 200 },
        { field: 'billedUnits', headerName: 'Billed Units', width: 200 },
        { field: 'billedTime', headerName: 'Billed Time', width: 200 },
        { field: 'holdVisit', headerName: 'Hold Visit', width: 200 },
        {
            field: 'claimStatus',
            headerName: 'Claim Status',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Button variant="contained" onClick={visitClaimStatusClickOpen}>
                    Claim Details
                </Button>
            ),
        },


    ];
    //demo data to display
    const rowsVisitsMain = [
        { id: 1, schedule: "Justin", privider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },
        { id: 1, schedule: "Justin", privider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },
        { id: 1, schedule: "Justin", privider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },
        { id: 1, schedule: "Justin", privider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },

    ];


    const VisitsView = () => {
        return (
            <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>



                <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.FirstName + ' ' + member.LastName}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Nurse:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.Nurse}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Frequency:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>
                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Coordinator:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{""}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>MCO Name:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Admission ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.AdmissionID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member ID:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.MemberID}</span>
                                }
                            </h2></div>
                        </Grid>

                        <Grid className="DataHolderGrid">
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>DOB:
                                {member != null &&
                                    <span style={{ color: "#F2A007" }}>{member.DateofBirth}
                                    </span>
                                }
                            </h2></div>
                        </Grid>
                    </Grid>
                </div>



                <div style={{ padding: '20px', marginTop: '5%' }}>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderVisitSearch">
                            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="From Date"
                                        value={selectedDate}
                                        onChange={(newValue) => {
                                            setSelectedDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid className="DataHolderVisitSearch">
                            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="To Date"
                                        value={selectedDate}
                                        onChange={(newValue) => {
                                            setSelectedDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid className="DataHolderVisitSearch">
                            <FormControl style={{ width: "300px" }} >
                                <InputLabel>Action Taken</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Status"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>ALL</MenuItem>
                                    <MenuItem value={20}>Billed</MenuItem>
                                    <MenuItem value={30}>NON-Billed</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>



                <h1 style={{ color: "#564873", textAlign: "center" }}>Visits</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsVisitsMain}
                        columns={columnsVisitsMain}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>


            </div>
        );
    };

    const columnsPOC = [
        {
            field: 'id',
            headerName: 'POC #',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Button variant="contained" onClick={() => pocClickType()}>
                    {params.value}
                </Button>
            ),
        },
        { field: 'fromDate', headerName: 'POC Start Date', width: 150 },
        { field: 'toDate', headerName: 'POC End Date', width: 150 },
        { field: 'serviceType', headerName: 'Created By', width: 150 },
        { field: 'serviceCode', headerName: 'Created Date', width: 150 },


        {
            field: 'authType',
            headerName: 'Authorization Type',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Button variant="contained">
                    Print
                </Button>
            ),
        },

    ];

    const rowsPOC = [
        {
            id: 1, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },
        {
            id: 2, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },
        {
            id: 3, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },


    ];


    const columns10 = [
        { field: 'id', headerName: 'Auth. #', width: 100 },
        { field: 'fromDate', headerName: 'From Date', width: 100 },
        { field: 'toDate', headerName: 'To Date', width: 120 },
        { field: 'serviceType', headerName: 'Service Type', width: 120 },
        { field: 'serviceCode', headerName: 'Service Code', width: 120 },

        { field: 'mco', headerName: 'MCO', width: 120 },
        { field: 'serviceCat', headerName: 'Service Category', width: 120 },
        { field: 'notes', headerName: 'Notes', width: 100 },
        { field: 'visit', headerName: 'Visit / Invoice', width: 100 },


        {
            field: 'authType',
            headerName: 'Authorization Type',
            sortable: false,
            width: 150,
            renderCell: (params) => (
                <Button variant="contained" onClick={() => handleClickAuthType()}>
                    Entire Period
                </Button>
            ),
        },

    ];


    //demo data to display
    const rows10 = [
        {
            id: 1, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },
        {
            id: 2, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },
        {
            id: 3, fromDate: "Justin", toDate: "Alo", serviceType: "02457894561", serviceCode: "XOXO",
            authType: "XZXZ", mco: "1123456", serviceCat: "1123456", notes: "Active", visit: "Homecare"
        },


    ];


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

                    <h3 onClick={MemberInfoPressed} style={{ color: "#F2B90F" }}>Member Info</h3>
                    <h3 onClick={AuthorizationInfoPressed} style={{ color: "#F2B90F" }}>Authorization</h3>
                    <h3 onClick={GeneralInfoPressed} style={{ color: "#F2B90F" }}>General</h3>
                    <h3 onClick={ProfileInfoPressed} style={{ color: "#F2B90F" }}>Profile</h3>
                    <h3 onClick={SpecialReuirementsInfoPressed} style={{ color: "#F2B90F" }}>Special Requirements</h3>
                    <h3 onClick={MasterWeekInfoPressed} style={{ color: "#F2B90F" }}>Master Week</h3>
                    <h3 onClick={VisitInfoPressedMain} style={{ color: "#F2B90F" }}>Visits</h3>
                    <h3 onClick={POCInfoPressed} style={{ color: "#F2B90F" }}>POC</h3>
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
                <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() => navigate("/AdminHome")} />

                <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
                    Log Out
                </Button>
                <LogoutIcon className="LogoutIcon" ></LogoutIcon>
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
                                MemberInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                Member Info
                            </p>
                        </Button>


                        <Button
                            className="navigationButton"
                            onClick={() => {
                                AuthorizationInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                Authorization
                            </p>
                        </Button>


                        <Button
                            className="navigationButton"
                            onClick={() => {
                                GeneralInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                General
                            </p>
                        </Button>


                        <Button
                            className="navigationButton"
                            onClick={() => {
                                ProfileInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                Profile
                            </p>
                        </Button>

                        <Button
                            className="navigationButton"
                            onClick={() => {
                                SpecialReuirementsInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                Special Requirements
                            </p>
                        </Button>


                        <Button
                            className="navigationButton"
                            onClick={() => {
                                MasterWeekInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                Master Week
                            </p>
                        </Button>



                        <Button
                            className="navigationButton"
                            onClick={() => {
                                VisitInfoPressedMain();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                Visits
                            </p>
                        </Button>



                        <Button
                            className="navigationButton"
                            onClick={() => {
                                POCInfoPressed();
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                POC
                            </p>
                        </Button>

                    </div>
                </Card>

                <Card className="dataDisplay">
                    <SearchIcon className="searchIcon" onClick={handleClickIcon} />
                    {isOverlayOpen && <Overlay />}
                    {isOverlayOpen2 && <Overlay2 />}
                    {isOverlayOpen3 && <Overlay3 />}
                    {authTypeOpen && <Overlay4 />}
                    {pocTypeOpen && <Overlay5 />}
                    {visitClaimStatusOpen && <Overlay6 />}
                    {TimeOverlay && <OverlayTime />}
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
export default MemberDetails;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  body::-webkit-scrollbar {
  width: 10px;
    }

    body::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    }

    body::-webkit-scrollbar-thumb {
    background-color: #888;
    }

  .EditButton{
    background-color: #564873;
   
    font-weight:bold;
    width:15%;
    color:white;
  }
  .EditButton:hover {
    color:black;
  }
  

  .DateFieldHolder {
  }

  .DateFieldHolder::-webkit-scrollbar {
  width: 10px;
    }

    .DateFieldHolder::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    }

    .DateFieldHolder::-webkit-scrollbar-thumb {
    background-color: #888;
    }



    .tableData{}

    .tableData::-webkit-scrollbar {
        width: 10px;
    }

    .tableData::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    }

    .tableData::-webkit-scrollbar-thumb {
    background-color: #888;
    }



  .DataHolderGrid{
    width: 50%;
    text-align: center;
  }

  .DataHolderVisitSearch{
    width: 90%;
    text-align: center;
    place-content: center;
    justify-content: center;
    align-items: center;
    display: grid;
    margin-top: 2%;
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
    overflow-y: auto;
    padding: 50px;
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

  .searchFieldsDivTable {
    display: grid;
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
  }

  .searchFieldsDivNotes {
    display: grid;
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
    
    .DataHolderGrid{
    width: 100%;
    text-align: center;
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
