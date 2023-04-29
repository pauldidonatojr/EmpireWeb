import React, { useState, useEffect } from "react";
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
import { useLocation } from 'react-router-dom'
import UserName from "../UserName";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { ListItemText } from '@material-ui/core';
import { editVisit } from "../API/visitAPI";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function CareGiverDetail() {

  const showToastMessage = () => {
    toast.success('Visit Updated Successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
  };


  const [idCG, setIdCG] = useState(null);

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
  const [userID, setUserID] = useState(null);
  //Visit
  const [scheduleStartCV, setScheduleStartCV] = useState(null);
  const [scheduleEndCV, setScheduleEndCV] = useState(null);

  const [visitStartCV, setVisitStartCV] = useState(null);
  const [visitEndCV, setVisitEndCV] = useState(null);

  const [caregiverCodeEditVisit, setCaregiverCodeEditVisit] = useState(null);
  const [pocEditVisit, setPocEditVisit] = useState(null);
  const [admissionIDEditVisit, setAdmissionIDEditVisit] = useState(null);
  const [serviceCodeEditVisit, setServiceCodeEditVisit] = useState(null);
  const [billtypeEditVisit, setBillTypeEditVisit] = useState(null);
  const [hourEditVisit, setHourEditVisit] = useState(null);
  const [minuteEditVisit, setMinuteEditVisit] = useState(null);
  const [missedVisitNote, setMissedVisitNote] = useState(null);
  const [pocDutiesRowVS, setPocDutiesRowVS] = useState([]);
  const [memberDataCV, setMemberDataCV] = useState(null);
  const [careGiverNotes, setCareGiverNotes] = useState(null);
  const [visitEditReasonVS, setVisitReasonVS] = useState('');
  const [actionTakenReasonVS, setActionTakenVS] = useState('');
  const [actionTakenSelectedList, setActionTakenSelectedList] = useState([]);
  const [TimeOverlay, setIsTimeOverlay] = useState(false);

  const [enteredEIM, setEnteredEim] = useState('Select');
  const [healthSafetyRiskName, setHealthSafetyRiskName] = useState(null);
  const [healthSafetyRiskState, setHealthSafetyRiskState] = useState('Select');
  const [maid, setMaid] = useState(null);

  //=======================
  const [memberId, setMemberId] = useState('');


  const [careGiverCodeG, setCareGiverCodeG] = useState('');
  const [careGiverFirstNameG, setCareGiverFirstNameG] = useState('');
  const [careGiverLastNameG, setCareGiverLastNameG] = useState('');
  const [careGiverGenderG, setCareGiverGenderG] = useState('');
  const [careGiverDOBG, setCareGiverDOBG] = useState('');
  const [careGiverSSNG, setCareGiverSSNG] = useState('');

  const [memberFirstNameG, setMemberFirstNameG] = useState('');
  const [memberLastNameG, setMemberLastNameG] = useState('');

  const [duration, setDuration] = useState('');
  const [selectedDateEditVisit, setSelectedDateEditVisit] = useState(null);
  const [visitEndTime, setVisitEndTime] = useState(dayjs('2022-04-17T15:30'));
  const [visitStartTime, setVisitStartTime] = useState(dayjs('2022-04-17T15:30'));
  const [scheduleStartTime, setScheduleStartTime] = useState(dayjs('2022-04-17T15:30'));
  const [dutiesListEditVisit, setDutiesListEditVisit] = useState([]);
  const [selectedDutyEditVisit, setSelectedDutyEditVisit] = useState('');
  const [scheduleID, setScheduleID] = useState('13252546');
  const [visitID, setVisitID] = useState('');
  const [scheduleEndTime, setScheduleEndTime] = useState(dayjs('2022-04-17T15:30'));
  const [evvStartTime, setEvvStartTime] = useState(dayjs('2022-04-17T15:30'));
  const [evvEndTime, setEvvEndTime] = useState(dayjs('2022-04-17T15:30'));


  const [clockInLocationAddressLine1, setClockInLocationAddressLine1] = useState("123 Street");
  const [clockInLocationAddressLine2, setClockInLocationAddressLine2] = useState("");
  const [clockInLocationCity, setClockInLocationCity] = useState("BOILING SPRINGS");
  const [clockInLocationState, setClockInLocationState] = useState("NC");
  const [clockInZipCode, setClockInZipCode] = useState("28017");
  const [clockInLocationType, setClockInLocationType] = useState("Home");
  const [clockOutLocationCity, setClockOutLocationCity] = useState("BOILING SPRINGS");
  const [diagnosisCode, setDiagnososCode] = useState("F71 | G40.901");
  const [procedureCode, setProcedureCode] = useState("T2013:TF");



  //CC2
  const [clockOutAddressLine1, setClockOutAddressLine1] = useState('123 Street');
  const [clockOutAddressLine2, setClockOutAddressLine2] = useState('');
  const [clockOutLocationState, setClockOutLocationState] = useState('NC');
  const [clockOutLocationZipCode, setClockOutLocationZipCode] = useState('28017');
  const [clockOutLocationType, setClockOutLocationType] = useState('Home');


  //CC3
  const [duties, setDuties] = useState("");
  const [clockInPhone, setClockInPhone] = useState("7324878977");
  const [clockInLatitude, setClockInLatitude] = useState("40.296139");
  const [clockInLongitude, setClockInLongitude] = useState("-74.773369");
  const [clockOutLatitude, setClockOutLatitude] = useState("40.296139");
  const [clockOutLongitude, setClockOutLongitude] = useState("-74.773369");


  //CC4

  const [clockInEvvOtherInfo, setClockInEvvOtherInfo] = useState("non");
  const [clockOutPhone, setClockOutPhone] = useState("7324878977");
  const [clockOutEvvOtherInfo, setClockOutEvvOtherInfo] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("1977171");
  const [visitEditReasonCode, setVisitEditReasonCode] = useState("118");
  const [visitEditActionTaken, setVisitEditActionTaken] = useState("25");


  //CC5

  const [visitEditMadeBy, setVisitEditMadeBy] = useState("");
  const [notes, setNotes] = useState("");
  const [inDeletion, setInDeletion] = useState("N");
  const [invoiceLineItemId, setInvoiceLineItemId] = useState("");
  const [totalBilledAmount, setTotalBilledAmount] = useState("60.84");
  const [unitsBilled, setUnitsBilled] = useState("12");


  //CC6


  const [billedRate, setBilledRate] = useState('5.07');
  const [submissionType, setSubmissionType] = useState('');
  const [trnNumber, setTrnNumber] = useState('');
  const [enableSecondaryBilling, setEnableSecondaryBilling] = useState('');
  const [otherSubscriberId, setOtherSubscriberId] = useState('');
  const [primaryPayerId, setPrimaryPayerId] = useState('');


  //CC7
  const [primaryPayerName, setPrimaryPayerName] = useState('');
  const [relationshipToInsured, setRelationshipToInsured] = useState('');
  const [primaryPayerPolicy, setPrimaryPayerPolicy] = useState('');
  const [primaryPayerProgram, setPrimaryPayerProgram] = useState('');
  const [planType, setPlanType] = useState('');
  const [totalPaidAmount, setTotalPaidAmount] = useState('');


  //CC8
  const [totalPaidUnits, setTotalPaidUnits] = useState("");
  const [paidDate, setPaidDate] = useState(dayjs('2022-04-17T15:30'));
  const [deductible, setDeductible] = useState("");
  const [coinsurance, setCoinsurance] = useState("");
  const [copay, setCopay] = useState("");
  const [contractedAdjustments, setContractedAdjustments] = useState("");


  //CC9
  const [notMedicallyNecessary, setNotMedicallyNecessary] = useState('');
  const [nonCoveredCharges, setNonCoveredCharges] = useState('');
  const [maxBenefitExhausted, setMaxBenefitExhausted] = useState('');
  const [missedVisit, setMissedVisit] = useState('');
  const [missedVisitActionTakenCode, setMissedVisitActionTakenCode] = useState('');
  const [missedVisitReasonCode, setMissedVisitReasonCode] = useState('');



  //CC10
  // State for 'Missed Visit Notes' TextField
  const [missedVisitNotes, setMissedVisitNotes] = useState('');
  const [travelTimeRequestHours, setTravelTimeRequestHours] = useState('');
  const [travelTimeComments, setTravelTimeComments] = useState('');
  const [cancelTravelTimeRequest, setCancelTravelTimeRequest] = useState('');
  const [timesheetRequired, setTimesheetRequired] = useState('');
  const [timesheetApproved, setTimesheetApproved] = useState('');


  //CC10



  //CC11
  const [unitField1, setUnitField1] = useState("");
  const [unitField2, setUnitField2] = useState("");
  const [unitField3, setUnitField3] = useState("");
  const [unitField4, setUnitField4] = useState("");
  const [unitField5, setUnitField5] = useState("");
  const [unitField6, setUnitField6] = useState("");


  const [unitField7Value, setUnitField7Value] = useState('');
  const [unitField8Value, setUnitField8Value] = useState('');
  const [unitField9Value, setUnitField9Value] = useState('');
  const [unitField10Value, setUnitField10Value] = useState('');
  //=======================================================
  const [open10, setOpen10] = React.useState(false);
  const [CareGiverSearch, setCareGiverSearch] = useState(false);
  const [careGiverForVisit, setCareGiverForVisit] = useState(null);
  const [careGiverForVisitName, setCareGiverForVisitName] = useState(null);
  const [careGiverForVisitCode, setCareGiverForVisitCode] = useState(null);
  const [selectedCareGiverAllData, setSelectedCareGiverAllData] = useState(null);
  const [careGiverList, setCareGiverList] = useState([]);

  const [openMissedVisit, setOpenMissedVisit] = useState(false);


  function CareGiverIconClick() {
    setCareGiverSearch(true);
    setOpenTime(true);
    renderCareGivers();
  }
  function getAllCareGiverData(val) {
    for (var key in caregiverArray) {
      if (caregiverArray[key].SSN == val.SSN) {
        setSelectedCareGiverAllData(caregiverArray[key]);
      }
    }
  }
  const columnsCareGiverList = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'city', headerName: 'City', width: 100 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'CoCode', headerName: 'Care Giver Code', width: 120 },
    { field: 'Ethnicity', headerName: 'Ethnicity', width: 140 },
    { field: 'SSN', headerName: 'SSN', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'EmployeeID', headerName: 'Employee ID', width: 200 },
    { field: 'Discipline', headerName: 'Discipline', width: 100 },

  ];

  const handleRowClickCareGiverForVisit = (params) => {
    setCareGiverForVisit(params.row);

    if (careGiverForVisit != null) {
      setCareGiverForVisitName(careGiverForVisit.name);
      setCaregiverCodeEditVisit(careGiverForVisit.CoCode);
      getAllCareGiverData(careGiverForVisit);
    }
  };

  const caregiverStoage = localStorage.getItem("CareGivers");
  var caregiverArray = JSON.parse(caregiverStoage);

  function renderCareGivers() {
    var arr = [];
    for (var key in caregiverArray) {
      var obj = {
        id: caregiverArray[key].id,
        name: caregiverArray[key].FirstName + ' ' + caregiverArray[key].LastName,
        city: caregiverArray[key].City,
        phone: caregiverArray[key].Phone,
        CoCode: caregiverArray[key].AideCode,
        Ethnicity: caregiverArray[key].Ethnicity,
        SSN: caregiverArray[key].SSN,
        Status: caregiverArray[key].Status,
        EmployeeID: caregiverArray[key].EmployeeID,
        Discipline: caregiverArray[key].Discipline,
      }
      arr.push(obj);
    }
    setCareGiverList(arr);
  }


  //=======================================================

  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const location = useLocation()
  const { selectedMemberName } = location.state;

  const cgDataString = localStorage.getItem("CareGivers");
  var cgData = JSON.parse(cgDataString);
  const [caregiver, setCareGiver] = useState(null);

  const visitsDataString = localStorage.getItem("Visits");
  var visitData = JSON.parse(visitsDataString);
  const [visitsDataRow, setVisitsDataRow] = useState([]);

  const membersDataString = localStorage.getItem("Members");
  var membersData = JSON.parse(membersDataString);


  // Get Misc
  const [serviceCodes, setServiceCodes] = useState(null);
  const [selectedServiceCode, setSelectedServiceCode] = useState(null);
  const [dutiesList, setDutiesList] = useState([]);
  const [visitType, setVisitType] = useState(null);
  const [selectedVisitType, setSelectedVisitType] = useState(null);
  const [pocIds, setPocIds] = useState([])
  const [visitEditReasonAll, setVisitEditReasonAll] = useState([]);
  const [visitActionTakenAll, setVisitActionTakenAll] = useState([]);


  var miscValuesString = localStorage.getItem("MISC");
  var miscValues = JSON.parse(miscValuesString)
  miscValues = miscValues.data;
  useEffect(() => {
    var arr = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];



    for (var key in miscValues) {
      if (miscValues[key].tag == "services") {
        for (var key2 in miscValues[key].fields) {
          if (miscValues[key].fields[key2].service_code != null) {
            var obj = {};
            obj.service_code = miscValues[key].fields[key2].service_code;
            obj.payer = miscValues[key].fields[key2].payer;
            obj.description = miscValues[key].fields[key2].description;
            arr.push(obj);
          }
        }
      }

      if (miscValues[key].tag == "poc") {
        for (var key2 in miscValues[key].fields) {
          if (miscValues[key].fields[key2].service_code != null) {
            var obj = {};
            obj.duty = miscValues[key].fields[key2].duty;
            obj.task_id = miscValues[key].fields[key2].task_id;
            obj.category = miscValues[key].fields[key2].category;
            obj.as_needed = miscValues[key].fields[key2].as_needed;
            obj.Instruction = miscValues[key].fields[key2].Instruction;
            obj.days_of_week = miscValues[key].fields[key2].days_of_week;
            obj.times_a_week_max = miscValues[key].fields[key2].times_a_week_max;
            obj.times_a_week_min = miscValues[key].fields[key2].times_a_week_min;
            arr4.push(obj);
          }
        }
      }

      if (miscValues[key].tag == "duties") {
        for (var key2 in miscValues[key].fields) {
          var obj = {};
          obj.task_name = miscValues[key].fields[key2].task_name;
          obj.code = miscValues[key].fields[key2].code;
          obj.hhax_category = miscValues[key].fields[key2].hhax_category;
          arr2.push(obj);
        }
      }

      if (miscValues[key].tag == "visit-type") {
        var obj = miscValues[key].fields.value;
        arr3.push(obj);
      }

      if (miscValues[key].tag == "visit_misc") {
        var obj = miscValues[key].fields;
        setVisitActionTakenAll(obj[1].visit_action_taken)
        setVisitEditReasonAll(obj[0].visit_edit_reason)
      }
    }
    setServiceCodes(arr);
    setDutiesList(arr2);
    setVisitType(arr3);
    setPocIds(arr4);

  }, [])


  const [currMember, setCurrMember] = useState(null);


  function getMemberByID(id) {
    for (var key in membersData) {
      if (id == membersData[key].MemberID) {
        setCurrMember(membersData[key]);
      }
    }
  }


  useEffect(() => {
    for (var key in cgData) {
      if (cgData[key].FirstName + " " + cgData[key].LastName == selectedMemberName) {
        var myArray = cgData[key];
        setCareGiver(myArray)

        setIdCG(myArray.id)
        setFirstName(myArray.FirstName)
        setMiddleName(myArray.MiddleName)
        setLastName(myArray.LastName)
        setInitials(myArray.AideInitial)
        setGender(myArray.Gender)
        setDob(myArray.DateofBirth)
        setStatus(myArray.Status)
        setCareGiverCode(myArray.AideCode)
        setSSN(myArray.SSN)
        setMobileID(myArray.MobileID)
        setMobileDeviceID("")
        setUsername("")
        setPrimaryMemberTeam(myArray.CaregiverTeam)
        setNPINumber("")
        setRehire()
        setRehireDate(myArray.RehireDate)
        setEmploymentType("")
        setAddressStreet1(myArray.Address1)
        setAddressStreet2(myArray.Address2)
        setAddressCity(myArray.City)

        setAddressZip(myArray.Zip4)
        setAddressPhone(myArray.Phone)
        setAddressPhone2(myArray.Phone2)
        setAddressHomePhone(myArray.Phone3)
        setAddressState(myArray.State)

        setEmergencyContact1Name(myArray.Emergency1Name)
        setEmergencyContact1Relation(myArray.Emergency1Relationship)
        setEmergencyContact1Address(myArray.Emergency1Address)
        setEmergencyContact1Phone1(myArray.Emergency1Phone1)
        setEmergencyContact1Phone2(myArray.Emergency1phone2)

        setEmergencyContact2Name(myArray.Emergency2Name)
        setEmergencyContact2Relation(myArray.Emergency2Relationship)
        setEmergencyContact2Address(myArray.Emergency2Address)
        setEmergencyContact2Phone1(myArray.Emergency2Phone1)
        setEmergencyContact2Phone2(myArray.Emergency2Phone2)
        //setUserID(myArray.)
      }
    }
  }, []);




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
  const CalenderPressed = () => {
    setViewSelected(4);
  };

  const CareGiverInfoPressed = () => {
    setViewSelected(2);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return CareGiverInfoView();
      case 3:
        return VisitsHistory();

      case 4:
        return CalenderView();

      default:
        break;
    }
  }
  const VisitsHistory = () => {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={visitsDataRow}
          columns={columns3}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection={false}
        />
      </div>
    );
  };
  //MissedOutView columns and demo data
  const [visitsDataCalenderCell, setVisitsDataCalenderCell] = useState([]);
  const columns3 = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "Date", headerName: "Date", width: 250 },
    { field: "Provider", headerName: "Provider", width: 250 },
    { field: "memberName", headerName: "Member Name", width: 250 },
    { field: "Schedule", headerName: "Schedule", width: 300 },
    { field: "Visit", headerName: "Visit", width: 300 },
    { field: "Billed", headerName: "Billed", width: 250 },
  ];


  function handleVisitCellClick(event) {

    getVisitById(event.id);


    if (currVisit != null) {
      var schStartTime = dayjs(currVisit.ScheduleStartTime)
      setScheduleStartCV(schStartTime);

      var schEndTime = dayjs(currVisit.ScheduleEndTime)
      setScheduleEndCV(schEndTime)

      var vStart = dayjs(currVisit.VisitStartTime);
      setVisitStartCV(vStart);

      var vEnd = dayjs(currVisit.VisitEndTime);
      setVisitEndCV(vEnd);


      setMissedVisitNote(currVisit.MissedVisitNotes);
      var memberData = currVisit.member_data
      memberData = JSON.parse(memberData);
      setMemberDataCV(memberData);
      var memPOC = memberData.POC;
      var arrPOC = [];
      for (var key in memPOC) {
        var obj = {
          id: memPOC[key].task_id,
          category: memPOC[key].category,
          duty: memPOC[key].duty
        }
        arrPOC.push(obj);
      }
      setPocDutiesRowVS(arrPOC);


      // setCaregiverCodeEditVisit(currVisit.CaregiverCode)
      // setServiceCodeEditVisit(currVisit.service_code)
      // var visitTimeComplete = currVisit.ScheduleStartTime.split(" ");
      // var visitTime2 = visitTimeComplete[1].split(":");
      // setHourEditVisit(visitTime2[0]);
      // setMinuteEditVisit(visitTime2[1]);

      // setVisitStartTimeHourVS(currVisit.VisitStartTime);
      // setVisitStartTimeMinVS(currVisit.VisitStartTime);

      // setVisitEndTimeHourVS(currVisit.VisitEndTime);
      // setVisitEndTimeMinVS(currVisit.VisitEndTime);



      setIsTimeOverlay(true);
      setOpenTime(true);
    }
  }

  const [currVisit, setCurrVisit] = useState(null)

  function getVisitById(id) {
    for (var key in visitData) {
      if (visitData[key].id == id) {
        var myArray = visitData[key];
        setCurrVisit(myArray)


        // Setting States for Visit
        setMemberFirstNameG(myArray.MemberFirstName);
        setMemberLastNameG(myArray.MemberLastName);
        setCareGiverFirstNameG(myArray.CaregiverFirstName);
        setCareGiverLastNameG(myArray.CaregiverLastName);
        setCareGiverGenderG(myArray.CaregiverGender);
        setCareGiverDOBG(myArray.CaregiverDateofBirth);
        setCareGiverSSNG(myArray.CaregiverSSN);
        setCareGiverCodeG(myArray.CaregiverCode);

        setMemberId(myArray.MemberID);
        setVisitEndTime(myArray.VisitEndTime)
        setVisitStartTime(myArray.VisitStartTime)
        setScheduleStartTime(myArray.ScheduleStartTime)
        setSelectedDutyEditVisit(myArray.Duties)
        setScheduleID(myArray.ScheduleID)
        setVisitID(myArray.VisitID);
        setScheduleEndTime(myArray.ScheduleEndTime);
        setEvvStartTime(myArray.EVVStartTime);
        setEvvEndTime(myArray.EVVEndTime);
        setClockInLocationAddressLine1(myArray['Clock-InServiceLocationAddressLine1'])
        setClockInLocationAddressLine2(myArray['Clock-InServiceLocationAddressLine2'])
        setClockInLocationCity(myArray['Clock-InServiceLocationCity'])
        setClockInLocationState(myArray['Clock-InServiceLocationState'])
        setClockInZipCode(myArray['Clock-InServiceLocationZipCode'])
        setClockInLocationType(myArray['Clock-InServiceLocationType'])
        setClockOutLocationCity(myArray['Clock-OutServiceLocationCity'])
        setDiagnososCode(myArray.DiagnosisCode)
        setProcedureCode(myArray.ProcedureCode)
        setClockOutAddressLine1(myArray['Clock-OutServiceLocationAddressLine1'])
        setClockOutAddressLine2(myArray['Clock-OutServiceLocationAddressLine2'])
        setClockOutLocationState(myArray['Clock-OutServiceLocationState'])
        setClockOutLocationZipCode(myArray['Clock-OutServiceLocationZipCode'])
        setClockOutLocationType(myArray['Clock-OutServiceLocationType'])
        setClockInPhone(myArray['Clock-InPhoneNumber'])
        setClockInLatitude(myArray['Clock-InLatitude'])
        setClockInLongitude(myArray['Clock-InLongitude'])
        setClockOutLatitude(myArray['Clock-OutLatitude'])
        setClockOutLongitude(myArray['Clock-OutLongitude'])
        setClockInEvvOtherInfo(myArray['Clock-InEVVOtherInfo'])
        setClockOutPhone(myArray['Clock-OutPhoneNumber'])
        setClockOutEvvOtherInfo(myArray['Clock-OutEVVOtherInfo'])
        setInvoiceNumber(myArray.InvoiceNumber)
        setVisitEditReasonCode(myArray.VisitEditReasonCode)
        setVisitEditActionTaken(myArray.VisitEditActionTaken)
        setVisitEditMadeBy(myArray.VisitEditMadeBy)
        setNotes(myArray.Notes)
        setInDeletion(myArray.IsDeletion)
        setInvoiceLineItemId(myArray['InvoiceLine-ItemID'])
        setTotalBilledAmount(myArray.TotalBilledAmount)
        setUnitsBilled(myArray.UnitsBilled)
        setBilledRate(myArray.BilledRate)
        setSubmissionType(myArray.SubmissionType)
        setTrnNumber(myArray.TRNNumber)
        setEnableSecondaryBilling(myArray.EnableSecondaryBilling)
        setOtherSubscriberId(myArray.OtherSubscriberID)
        setPrimaryPayerId(myArray.PrimaryPayerID)
        setPrimaryPayerName(myArray.PrimaryPayerName)
        setRelationshipToInsured(myArray.RelationshiptoInsured)
        setPrimaryPayerPolicy(myArray.PrimaryPayerPolicyorGroupnumber)
        setPrimaryPayerProgram(myArray.PrimaryPayerProgramName)
        setPlanType(myArray.PlanType)
        setTotalPaidAmount(myArray.TotalPaidAmount)
        setTotalPaidUnits(myArray.TotalPaidUnits)
        setPaidDate(myArray.PaidDate)
        setDeductible(myArray.Deductible)
        setCoinsurance(myArray.Coinsurance)
        setCopay(myArray.Copay)
        setContractedAdjustments(myArray.ContractedAdjustments)
        setNotMedicallyNecessary(myArray.NotMedicallyNecessary)
        setNonCoveredCharges(myArray['myArray.Non-CoveredCharges'])
        setMaxBenefitExhausted(myArray.MaxBenefitExhausted)
        setMissedVisit(myArray.MissedVisit)
        setMissedVisitActionTakenCode(myArray.MissedVisitActionTakenCode)
        setMissedVisitReasonCode(myArray.MissedVisitReasonCode)
        setMissedVisitNotes(myArray.MissedVisitNotes)
        setTravelTimeRequestHours(myArray.TravelTimeRequestHours)
        setTravelTimeComments(myArray.TravelTimeComments)
        setCancelTravelTimeRequest(myArray.CancelTravelTimeRequest)
        setTimesheetRequired(myArray.TimesheetRequired)
        setTimesheetApproved(myArray.TimesheetApproved)
        setUnitField1(myArray.UserField1)
        setUnitField2(myArray.UserField2)
        setUnitField3(myArray.UserField3)
        setUnitField4(myArray.UserField4)
        setUnitField5(myArray.UserField5)
        setUnitField6(myArray.UserField6)
        setUnitField7Value(myArray.UserField7)
        setUnitField8Value(myArray.UserField8)
        setUnitField9Value(myArray.UserField9)
        setUnitField10Value(myArray.UserField10)
      }
    }
  }
  useEffect(() => {
    if (visitData != null) {
      var arr2 = [];
      for (var key in visitData) {
        if (visitData[key].CaregiverFirstName + " " + visitData[key].CaregiverLastName == selectedMemberName) {
          var myArray = visitData[key];
          getMemberByID(myArray.MemberID)
          var arr = [];
          var obj = {
            id: key,
            Date: myArray.EVVStartTime,
            Provider: "",
            memberName: myArray.MemberFirstName + myArray.MemberLastName,
            Schedule: myArray.ScheduleStartTime + " TO " + myArray.ScheduleEndTime,
            Visit: myArray.VisitStartTime + " TO " + myArray.VisitEndTime,
            Billed: myArray.BilledRate,
          }
          arr.push(obj);
          setVisitsDataRow(arr);


          //For Calender

          var obj2 = {
            start: myArray.ScheduleStartTime,
            end: myArray.ScheduleEndTime,
            title: myArray.CaregiverFirstName + " " + myArray.CaregiverLastName,
            description: 'This is event 1',
            id: myArray.id
          }
          console.log(obj2)

          arr2.push(obj2);






        }
      }
      setVisitsDataCalenderCell(arr2);
    }
  }, []);
  //demo data to display
  const rows3 = [
    {
      id: 1,
      Date: "Justin",
      Provider: "Alo",
      memberName: "02457894561",
      Schedule: "XOXO",
      Visit: "XZXZ",
      Billed: "1123456",
    },
    {
      id: 2,
      Date: "Justin",
      Provider: "Alo",
      memberName: "02457894561",
      Schedule: "XOXO",
      Visit: "XZXZ",
      Billed: "1123456",
    },
    {
      id: 3,
      Date: "Justin",
      Provider: "Alo",
      memberName: "02457894561",
      Schedule: "XOXO",
      Visit: "XZXZ",
      Billed: "1123456",
    },
    {
      id: 4,
      Date: "Justin",
      Provider: "Alo",
      memberName: "02457894561",
      Schedule: "XOXO",
      Visit: "XZXZ",
      Billed: "1123456",
    },
    {
      id: 5,
      Date: "Justin",
      Provider: "Alo",
      memberName: "02457894561",
      Schedule: "XOXO",
      Visit: "XZXZ",
      Billed: "1123456",
    },
  ];
  //
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      start: new Date("2023-04-11T10:00:00"),
      end: new Date("2023-04-11T12:00:00"),
      title: "Event 1",
      description: "This is event 1",
      location: "New York",
      organizer: "John Doe",
    },
    {
      start: new Date("2023-04-13T14:00:00"),
      end: new Date("2023-04-13T16:00:00"),
      title: "Event 2",
      description: "This is event 2",
    },
  ];

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
  const ScheduleView = () => {
    return (
      <div style={{ width: "100%", borderRadius: "10px", padding: '20px' }}>
        <h2 style={{ textAlign: "center", color: "#564873" }}>Schedule</h2>

        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>Schedule Time:</h2>
          {currVisit != null &&
            <div>
              <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                      label="Visit End Time"
                      value={scheduleStartCV}
                      onChange={(newValue) => {
                        const time = dayjs(newValue).format('HH:mm:ss');
                        const date = dayjs(scheduleStartCV).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                        setScheduleStartCV(datetime);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                      label="Visit End Time"
                      value={scheduleEndCV}
                      onChange={(newValue) => {
                        const time = dayjs(newValue).format('HH:mm:ss');
                        const date = dayjs(scheduleEndCV).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                        setScheduleEndCV(datetime);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          }
        </div>

        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>Care Giver Code:</h2>
          {currVisit != null &&
            <div>
              <TextField
                className="field"
                id="outlined-basic"
                label="Select Care Giver"
                value={caregiverCodeEditVisit}
                InputProps={{ startAdornment: (<PersonSearchIcon onClick={CareGiverIconClick} style={{ cursor: "pointer" }} />) }}
              >
              </TextField>

            </div>

          }
          <span style={{ color: "grey" }}>{careGiverForVisitName}</span>
        </div>

        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>POC:</h2>
          {currVisit != null &&
            <div>
              <TextField

                id="outlined-basic"
                label="POC"
                variant="outlined"
              // value={pocEditVisit}
              />
            </div>
          }
        </div>


        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>Assignment ID:</h2>
          {currVisit != null &&
            <div>
              <TextField

                id="outlined-basic"
                label="Assignment ID"
                variant="outlined"
                value={admissionIDEditVisit}
              />
            </div>
          }
        </div>


        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>Service Code:</h2>
          {currVisit != null &&
            <div>
              <Select
                style={{ width: '50%' }}
                id="demo-simple-select"
                value={serviceCodeEditVisit}
                label="Status"
                onChange={(evt) => { setServiceCodeEditVisit(evt.target.value) }}
              >
                {serviceCodes.map((l, i) => (
                  <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                ))}
              </Select>
            </div>
          }
        </div>


        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>Time of Visit:</h2>
          {currVisit != null &&
            <div>
              <TextField

                id="outlined-basic"
                label="H"
                variant="outlined"
                value={scheduleStartCV.hour()}
              />
              <TextField

                id="outlined-basic"
                label="M"
                variant="outlined"
                value={scheduleStartCV.minute()}
              />
            </div>
          }
        </div>


        <div style={{ margin: "5px", width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type:</h2>
          {currVisit != null &&
            <div>
              <span style={{ color: "grey" }}>Hourly</span>
            </div>
          }
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
          <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={() => {

            editVisit(
              currVisit.id,

              memberFirstNameG,
              memberLastNameG,
              memberId,
              careGiverCodeG,
              careGiverFirstNameG,
              careGiverLastNameG,
              careGiverGenderG,
              careGiverDOBG,
              careGiverSSNG,

              scheduleID,
              visitID,
              procedureCode,
              diagnosisCode,
              scheduleStartCV,
              scheduleEndCV,
              visitStartTime,
              visitEndTime,
              evvStartTime,
              evvEndTime,

              clockInLocationAddressLine1,
              clockInLocationAddressLine2,
              clockInLocationCity,
              clockInLocationState,
              clockInZipCode,
              clockInLocationType,

              clockOutAddressLine1,
              clockOutAddressLine2,
              clockOutLocationCity,
              clockOutLocationState,
              clockOutLocationZipCode,
              clockOutLocationType,

              duties,
              clockInPhone,
              clockInLatitude,
              clockInLongitude,
              clockInEvvOtherInfo,
              clockOutPhone,
              clockOutLatitude,
              clockOutLongitude,
              clockOutEvvOtherInfo,

              invoiceNumber,
              visitEditReasonCode,
              visitEditActionTaken,
              visitEditMadeBy,
              notes,
              inDeletion,

              invoiceLineItemId,
              totalBilledAmount,
              unitsBilled,
              billedRate,
              submissionType,
              trnNumber,
              enableSecondaryBilling,
              otherSubscriberId,
              primaryPayerId,
              primaryPayerName,
              relationshipToInsured,

              primaryPayerPolicy,
              primaryPayerProgram,
              planType,
              totalPaidAmount,
              totalPaidUnits,
              paidDate,
              deductible,
              coinsurance,
              copay,
              contractedAdjustments,
              notMedicallyNecessary,
              nonCoveredCharges,
              maxBenefitExhausted,
              missedVisit,
              missedVisitReasonCode,
              missedVisitActionTakenCode,
              missedVisitNotes,
              travelTimeRequestHours,

              travelTimeComments,
              cancelTravelTimeRequest,
              timesheetRequired,
              timesheetApproved,

              unitField1,
              unitField2,
              unitField3,
              unitField4,
              unitField5,
              unitField6,
              unitField7Value,
              unitField8Value,
              unitField9Value,
              unitField10Value,

              careGiverNotes,
              enteredEIM,
              healthSafetyRiskName,
              healthSafetyRiskState,
              maid
            ).then(res => {
              if (res.data.result == "success") {
                showToastMessage();
              }
            });
          }}>Save</Button>
          <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={handleCloseTime}>Close</Button>
        </div>

      </div>



    )
  }
  //

  //
  const VisitInfoView = () => {
    return (
        <div style={{ width: "100%" }}>
            <h2 style={{ textAlign: "center", color: "#564873" }}>Visit Information</h2>
            <h3 style={{ color: "grey", textAlign: "center" }}>Scheduled Time : <span style={{ color: "black" }}>{scheduleStartCV.format('HH:mm') + " " + "TO" + " " + scheduleEndCV.format('HH:mm')}</span></h3>
            <div style={{ width: '100%' }}>
                <div style={{ width: "100%", alignContent: "center", justifyContent: "center", textAlign: 'center' }}>
                    <h4 style={{ color: "grey", textAlign: "center" }}>Visit Start Time</h4>
                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>

                        <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Date"
                                    value={scheduleStartCV}
                                    onChange={(newValue) => {
                                        {
                                            const timeDay = dayjs(visitStartCV).format('HH:mm:ss');
                                            const date = dayjs(newValue).format('YYYY-MM-DD');
                                            const datetime = dayjs(`${date} ${timeDay}`, 'YYYY-MM-DD HH:mm:ss');
                                            setScheduleStartCV(datetime);
                                        }
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                <TimePicker
                                    label="Time"
                                    value={scheduleStartCV}
                                    onChange={(newValue) => {
                                        {
                                            const time = dayjs(newValue).format('HH:mm:ss');
                                            const date = dayjs(visitStartCV).format('YYYY-MM-DD');
                                            const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                                            setScheduleStartCV(datetime);
                                        }
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
                <div style={{ width: "100%", alignContent: "center", justifyContent: "center", textAlign: 'center' }}>
                    <h4 style={{ color: "grey", textAlign: "center" }}>Visit End Time</h4>
                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>

                        <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Date"
                                    value={scheduleEndCV}
                                    onChange={(newValue) => {
                                        {
                                            const timeDay = dayjs(visitEndCV).format('HH:mm:ss');
                                            const date = dayjs(newValue).format('YYYY-MM-DD');
                                            const datetime = dayjs(`${date} ${timeDay}`, 'YYYY-MM-DD HH:mm:ss');
                                            setScheduleEndCV(datetime);
                                        }
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                <TimePicker
                                    label="Time"
                                    value={scheduleEndCV}
                                    onChange={(newValue) => {
                                        {
                                            const time = dayjs(newValue).format('HH:mm:ss');
                                            const date = dayjs(visitEndCV).format('YYYY-MM-DD');
                                            const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                                            setScheduleEndCV(datetime);
                                        }
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>

            <div>

                <div className="GoBackButtonHolder">
                    <h1 style={{ textAlign: "center", cursor: 'pointer' }} >

                        <Button variant="outlined" onClick={() => setOpenMissedVisit(!openMissedVisit)}>Missed Visit
                        </Button>
                    </h1>
                </div>


                {openMissedVisit &&

                    <div>
                        <div style={{ padding: '20px' }}>

                            <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                                <h1 style={{ color: "#564873", textAlign: "center" }}>Enter Missed Visit Details Here if Check Is Selected</h1>
                                <Grid container spacing={2}>


                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Missed Visit </h2></div>
                                    </Grid>

                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}>
                                            <FormGroup style={{ textAlign: 'center', placeContent: 'center', justifyContent: 'center' }}>
                                                <FormControlLabel style={{ color: "grey", fontSize: "50px" }} control={<Checkbox defaultChecked />} />
                                            </FormGroup>
                                        </div>
                                    </Grid>



                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Entered In EIM </h2></div>
                                    </Grid>
                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={enteredEIM}
                                                label="Status"
                                                onChange={(evt) => {
                                                    setEnteredEim(evt.target.value)
                                                }}
                                            >
                                                <MenuItem value={'Select'}>Select</MenuItem>
                                                <MenuItem value={'Yes'}>Yes</MenuItem>
                                                <MenuItem value={'No'}>No</MenuItem>
                                            </Select>
                                        </div>
                                    </Grid>




                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>EIM# (If above Yes, enter 7-digit EIM#; If above No, enter N/A):	* Health and/or Safety Risk?: </h2></div>
                                    </Grid>
                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}>
                                            <TextField
                                                id="outlined-basic"
                                                label=""
                                                variant="outlined"
                                                value={healthSafetyRiskName}
                                                onChange={(evt) => { setHealthSafetyRiskName(evt.target.value) }}
                                            />
                                        </div>
                                    </Grid>


                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Health and/or Safety Risk? </h2></div>
                                    </Grid>
                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={healthSafetyRiskState}
                                                label="Status"
                                                onChange={(evt) => {
                                                    setHealthSafetyRiskState(evt.target.value)
                                                }}
                                            >
                                                <MenuItem value={'Select'}>Select</MenuItem>
                                                <MenuItem value={'Yes'}>Yes</MenuItem>
                                                <MenuItem value={'No'}>No</MenuItem>
                                            </Select>
                                        </div>
                                    </Grid>




                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Numerical 13 Digit MAID (MPI including Service location - Format #############):	 </h2></div>
                                    </Grid>
                                    <Grid className="DataHolderGrid">
                                        <div style={{ margin: "5px" }}>
                                            <TextField
                                                id="outlined-basic"
                                                label=""
                                                variant="outlined"
                                                value={maid}
                                                onChange={(evt) => { setMaid(evt.target.value) }}
                                            />
                                        </div>
                                    </Grid>





                                </Grid>



                            </div>


                        </div>
                    </div>
                }
            </div>
            {/* <table style={{ color: "black", width: "100%" }}>
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
            </table> */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Box style={{ width: "75%", margin: "2%" }}>
                    <FormControl fullWidth>
                        <InputLabel>New Reason</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                            defaultValue={visitEditReasonVS}
                            onChange={(evt) => {
                                setVisitReasonVS(evt.target.value)
                            }}
                        >
                            {visitEditReasonAll.map((l) => (
                                <MenuItem key={l.id} value={l.description}>
                                    {l.description}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>


            </div>


            <div style={{ display: "flex", justifyContent: "center" }}>
                <Box style={{ width: "75%", margin: "2%" }}>
                    <FormControl fullWidth>
                        <InputLabel>Action Taken</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                            value={actionTakenReasonVS}
                            onChange={(evt) => setActionTakenVS(evt.target.value)}
                        >
                            {visitActionTakenAll.map((l) => (
                                <MenuItem key={l.id} value={l.description}>
                                    {l.description}
                                </MenuItem>
                            ))}
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
                    value={missedVisitNote}
                    onChange={(evt) => setMissedVisitNote(evt.target.value)}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Save</Button>
                <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Close</Button>
                <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Print</Button>
            </div>
            <hr></hr>

            <h2 style={{ textAlign: "center", color: "#564873" }}>Audit</h2>
            <div style={{ display: "grid" }}>

                <h1 style={{ color: "grey" }}>Vertified By :</h1>
                <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Member" />
                <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Care Giver" />
                <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Family Member" />
                <FormControlLabel style={{ color: "grey", fontSize: "50px", marginLeft: "3%" }} control={<Checkbox defaultChecked />} label="Other" />

            </div>


            <div style={{ display: "grid", width: '100%', placeContent: 'center', textAlign: 'center' }}>

                <TextField
                    style={{ margin: "1%", width: "100%" }}
                    id="outlined-basic"
                    label="Date Verified"
                    variant="outlined"
                />
                <TextField
                    style={{ margin: "1%", width: "100%" }}
                    id="outlined-basic"
                    label="Time Verfied"
                    variant="outlined"
                />
                <TextField
                    style={{ margin: "1%", width: "100%" }}
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
                    rows={pocDutiesRowVS}
                    columns={columns15}
                    pageSize={5}
                    rowsPerPageOptions={[15]}
                    checkboxSelection={false}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    style={{ margin: "1%", width: "75%" }}
                    id="outlined-basic"
                    label="Care Giver New Note"
                    variant="outlined"
                    value={careGiverNotes}
                    onChange={(evt) => setCareGiverNotes(evt.target.value)}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={() => {

                    editVisit(
                        currVisit.id,

                        memberFirstNameG,
                        memberLastNameG,
                        memberId,
                        careGiverCodeG,
                        careGiverFirstNameG,
                        careGiverLastNameG,
                        careGiverGenderG,
                        careGiverDOBG,
                        careGiverSSNG,

                        scheduleID,
                        visitID,
                        procedureCode,
                        diagnosisCode,
                        scheduleStartCV,
                        scheduleEndCV,
                        visitStartCV,
                        visitEndCV,
                        evvStartTime,
                        evvEndTime,

                        clockInLocationAddressLine1,
                        clockInLocationAddressLine2,
                        clockInLocationCity,
                        clockInLocationState,
                        clockInZipCode,
                        clockInLocationType,

                        clockOutAddressLine1,
                        clockOutAddressLine2,
                        clockOutLocationCity,
                        clockOutLocationState,
                        clockOutLocationZipCode,
                        clockOutLocationType,

                        duties,
                        clockInPhone,
                        clockInLatitude,
                        clockInLongitude,
                        clockInEvvOtherInfo,
                        clockOutPhone,
                        clockOutLatitude,
                        clockOutLongitude,
                        clockOutEvvOtherInfo,

                        invoiceNumber,
                        visitEditReasonCode,
                        visitEditActionTaken,
                        visitEditMadeBy,
                        notes,
                        inDeletion,

                        invoiceLineItemId,
                        totalBilledAmount,
                        unitsBilled,
                        billedRate,
                        submissionType,
                        trnNumber,
                        enableSecondaryBilling,
                        otherSubscriberId,
                        primaryPayerId,
                        primaryPayerName,
                        relationshipToInsured,

                        primaryPayerPolicy,
                        primaryPayerProgram,
                        planType,
                        totalPaidAmount,
                        totalPaidUnits,
                        paidDate,
                        deductible,
                        coinsurance,
                        copay,
                        contractedAdjustments,
                        notMedicallyNecessary,
                        nonCoveredCharges,
                        maxBenefitExhausted,
                        missedVisit,
                        missedVisitReasonCode,
                        missedVisitActionTakenCode,
                        missedVisitNotes,
                        travelTimeRequestHours,

                        travelTimeComments,
                        cancelTravelTimeRequest,
                        timesheetRequired,
                        timesheetApproved,

                        unitField1,
                        unitField2,
                        unitField3,
                        unitField4,
                        unitField5,
                        unitField6,
                        unitField7Value,
                        unitField8Value,
                        unitField9Value,
                        unitField10Value,

                        careGiverNotes,
                        enteredEIM,
                        healthSafetyRiskName,
                        healthSafetyRiskState,
                        maid
                    ).then(res => {
                        if (res.data.result == "success") {
                            showToastMessage();

                        }
                    });
                }}>Save</Button>
                <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={handleCloseTime}>Close</Button>
                <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Print</Button>
            </div>
        </div>
    )
}
  const columns15 = [
    { field: "id", headerName: "Duty Number", width: 250 },
    { field: "fromDate", headerName: "Category", width: 200 },
    { field: "toDate", headerName: "Duty", width: 400 },
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
  const BillingView = () => {
    return (
        <div style={{ width: "100%" }}>
            <h1 style={{ color: "#564873", textAlign: "center" }}>Primary Bill To</h1>
            <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Primary Bill To: <span style={{ color: "#F2A007" }}>{currVisit.PrimaryPayerName}</span></h2></div>
                        }
                    </Grid>
                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Service Code: <span style={{ color: "#F2A007" }}>
                                {""}
                            </span></h2></div>
                        }
                    </Grid>
                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Type: <span style={{ color: "#F2A007" }}>
                                {""}
                            </span></h2></div>
                        }
                    </Grid>
                    <Grid className="DataHolderGrid">
                        <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>TT Hours: <span style={{ color: "#F2A007" }}>
                            {""}
                        </span></h2></div>
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>OT. Required: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Billable Hours: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Billable Units: <span style={{ color: "#F2A007" }}>{currVisit.UnitsBilled}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Bill Rate: <span style={{ color: "#F2A007" }}>{currVisit.BilledRate}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Total: <span style={{ color: "#F2A007" }}>{currVisit.TotalBilledAmount}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Billed: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Invoice Number: <span style={{ color: "#F2A007" }}>{currVisit.InvoiceNumber}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Invoice Creation Date: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        }
                    </Grid>


                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Billing Hold: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        }
                    </Grid>


                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>TRN Number: <span style={{ color: "#F2A007" }}>{currVisit.TRNNumber}</span></h2></div>
                        }
                    </Grid>

                    <Grid className="DataHolderGrid">
                        {currVisit != null &&
                            <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>E Billing Batch Number: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                        }
                    </Grid>
                </Grid>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button className="EditButton" variant="outlined" onClick={handleCloseTime}>
                        Close
                    </Button>
                </div>


                <div style={{ marginTop: '10px', display: "flex", justifyContent: "center" }}>
                    <Button className="EditButton" variant="outlined">
                        Save
                    </Button>
                </div>
            </div>

        </div>

    )
}

  function OverlayTime() {

  }
  //

  function myCustomFormat(date, event) {
    return (
      <div>
        <div>{date.getDate()}</div>
        <Button onClick={() => handleEventClick(event)}>{event.title}</Button>
        <div>{event.description}</div>
      </div>
    );
  }

  const CalenderView = () => {
    return (
      <>
        {opentime &&
          <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
          <CloseIcon className="crossIcon" onClick={handleCloseTime} />
          {/*  */}
          <h1 style={{ textAlign: "center", color: "black" }}>Non Skilled Visit</h1>
          <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                      <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member Name:
                          {currMember != null &&
                              <span style={{ color: "#F2A007" }}>{" " + currMember.FirstName + ' ' + currMember.LastName}</span>
                          }
                      </h2></div>
                  </Grid>
                  <Grid className="DataHolderGrid">
                      <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Visit Date:
                          {currVisit != null &&
                              <span style={{ color: "#F2A007" }}>{" " + scheduleStartCV.format('YYYY-MM-DD')}</span>
                          }
                      </h2></div>
                  </Grid>
                  <Grid className="DataHolderGrid">
                      <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member Phone:
                          {currMember != null &&
                              <span style={{ color: "#F2A007" }}>{" " + currMember.HomePhone}</span>
                          }
                      </h2></div>
                  </Grid>
                  <Grid className="DataHolderGrid">
                      <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Assignment ID:
                          {currMember != null &&
                              <span style={{ color: "#F2A007" }}>{""}</span>
                          }
                      </h2></div>
                  </Grid>

                  <Grid className="DataHolderGrid">
                      <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Coordinator:
                          {currMember != null &&
                              <span style={{ color: "#F2A007" }}>{currMember.MCOName}</span>}
                      </h2></div>
                  </Grid>

              </Grid>
          </div>
          {/*  */}
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
        }
        {!opentime &&
          <div style={{ overflow: 'auto',height: "100%", width: "100%" }}>
            <Calendar
              events={visitsDataCalenderCell}
              startAccessor="start"
              endAccessor="end"
              localizer={localizer}
              formats={{ dayFormat: myCustomFormat }}
              showMultiDayTimes={false}
              views={["month"]}
              style={{ height: "100%" }}
              onSelectEvent={handleVisitCellClick} // pass the function as a prop
            />
          </div>
        }
      </>
    );
  };

  const CareGiverInfoView = () => {
    return (
      <>
        {open &&
          <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
            <CloseIcon className="crossIcon" onClick={handleClose} />

            <div>
              <h1 style={{ color: "grey", textAlign: "center" }}>
                {" "}
                Edit Care Giver Information
              </h1>
              <div style={{ borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="First Name"
                          variant="outlined"
                          value={firstName}
                          onChange={(evt) => { setFirstName(evt.target.value) }}
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Middle Name"
                          variant="outlined"
                          value={middleName}
                          onChange={(evt) => { setMiddleName(evt.target.value) }}
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                          value={lastName}
                          onChange={(evt) => { setLastName(evt.target.value) }}
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Care Giver Code"
                          variant="outlined"
                          value={careGiverCode}
                          onChange={(evt) => { setCareGiverCode(evt.target.value) }}
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="DOB"
                          variant="outlined"
                          value={dob}
                          onChange={(evt) => { setDob(evt.target.value) }}
                        />
                      </div>
                    }
                  </Grid>


                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Discipline"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                </Grid>
              </div>


              <h3 style={{ color: "grey", textAlign: "center" }}>
                {" "}
                Profile Information
              </h3>
              <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}> Demographics</h4>
              <hr></hr>


              {/* =========== */}


              <div style={{ borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Gender"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Alt Care Giver Code"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Time & Att. PIN"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="SSN #"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Status"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Rehire"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Rehire Date"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Employment Type"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Care Giver Mobile ID"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Primary Member Team"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Hiring Status"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Start Date"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Care Giver Code"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Ethnicity"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>


                </Grid>
              </div>



              <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}> Employment Information</h4>
              <hr></hr>
              <div style={{ borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="HHA/PCA Registry Number"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Added/Checked Registry Date"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                </Grid>
              </div>



              <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}> Address</h4>
              <hr></hr>
              <div style={{ borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Address 1"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Address 2"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Zip"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>


                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 1"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 2"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 3"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                </Grid>
              </div>



              <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}>Emergency Contact 1</h4>
              <hr></hr>
              <div style={{ borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Address 1"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Address 2"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Zip"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>


                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 1"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 2"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 3"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Relationship"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                </Grid>
              </div>


              <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}>Emergency Contact 2</h4>
              <hr></hr>
              <div style={{ borderRadius: "10px", padding: '20px' }}>
                <Grid container spacing={2}>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Address 1"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Address 2"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Zip"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>


                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 1"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 2"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>
                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Phone 3"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                  <Grid className="DataHolderGrid">
                    {caregiver != null &&
                      <div style={{ margin: "5px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Relationship"
                          variant="outlined"
                        />
                      </div>
                    }
                  </Grid>

                </Grid>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className="EditButton" variant="outlined" >
                  Save Changes
                </Button>
              </div>

            </div>
          </div>
        }
        {!open &&
          <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
            <h1 style={{ color: "grey", textAlign: "center" }}>
              {" "}
              Care Giver Information
            </h1>
            <div style={{ borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Name: <span style={{ color: "#564873" }}>{caregiver.FirstName + ' ' + caregiver.MiddleName + ' ' + caregiver.LastName}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Care Giver Code: <span style={{ color: "#564873" }}>{caregiver.AideCode}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Date Of Birth: <span style={{ color: "#564873" }}>{caregiver.DateofBirth}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Discipline: <span style={{ color: "#564873" }}>{caregiver.Discipline}</span></h2></div>
                  }
                </Grid>
              </Grid>
            </div>


            <h3 style={{ color: "grey", textAlign: "center" }}>
              {" "}
              Profile Information
            </h3>
            <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}> Demographics</h4>
            <hr></hr>


            <div style={{ borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>First Name: <span style={{ color: "#564873" }}>{caregiver.FirstName}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Middle Name: <span style={{ color: "#564873" }}>{caregiver.MiddleName}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Last Name: <span style={{ color: "#564873" }}>{caregiver.LastName}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>DOB: <span style={{ color: "#564873" }}>{caregiver.DateofBirth}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Gender: <span style={{ color: "#564873" }}>{caregiver.Gender}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Alt Caregiver Code: <span style={{ color: "#564873" }}>{caregiver.ALternateAideCode}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Time & Att. PIN: <span style={{ color: "#564873" }}>{""}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>SSN #: <span style={{ color: "#564873" }}>{caregiver.SSN}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Status: <span style={{ color: "#564873" }}>{caregiver.Status}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Rehire: <span style={{ color: "#564873" }}>{""}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Rehire Date: <span style={{ color: "#564873" }}>{caregiver.RehireDate}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Employment Type: <span style={{ color: "#564873" }}>{""}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Care Giver Mobile ID: <span style={{ color: "#564873" }}>{caregiver.MobileID}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Primary Member Team: <span style={{ color: "#564873" }}>{""}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Hiring Status: <span style={{ color: "#564873" }}>{caregiver.HiringStatus}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Start Date: <span style={{ color: "#564873" }}>{caregiver.FirstWorkDate}</span></h2></div>
                  }
                </Grid>

                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Ethnicity: <span style={{ color: "#564873" }}>{caregiver.Ethnicity}</span></h2></div>
                  }
                </Grid>
              </Grid>
            </div>



            <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}> Employment Information</h4>
            <hr></hr>
            <div style={{ borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>HHA/PCA Registry Number: <span style={{ color: "#564873" }}>{""}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Added/Checked Registry Date: <span style={{ color: "#564873" }}>{caregiver.RegistryDate}</span></h2></div>
                  }
                </Grid>
              </Grid>
            </div>



            <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}> Address</h4>
            <hr></hr>
            <div style={{ borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Address 1: <span style={{ color: "#564873" }}>{caregiver.Address1}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Address 2: <span style={{ color: "#564873" }}>{caregiver.Address2}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>City: <span style={{ color: "#564873" }}>{caregiver.City}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>State: <span style={{ color: "#564873" }}>{caregiver.State}</span></h2></div>
                  }
                </Grid>


                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Zip: <span style={{ color: "#564873" }}>{caregiver.ZipCode}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone: <span style={{ color: "#564873" }}>{caregiver.Phone}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone 2: <span style={{ color: "#564873" }}>{caregiver.Phone2}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone 3: <span style={{ color: "#564873" }}>{caregiver.Phone3}</span></h2></div>
                  }
                </Grid>


              </Grid>
            </div>



            <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}>Emergency Contact 1</h4>
            <hr></hr>
            <div style={{ borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Address: <span style={{ color: "#564873" }}>{caregiver.Emergency1Address}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Name: <span style={{ color: "#564873" }}>{caregiver.Emergency1Name}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone 1: <span style={{ color: "#564873" }}>{caregiver.Emergency1Phone1}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone 2: <span style={{ color: "#564873" }}>{caregiver.Emergency1phone2}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Relationship: <span style={{ color: "#564873" }}>{caregiver.Emergency1Relationship}</span></h2></div>
                  }
                </Grid>


              </Grid>
            </div>


            <h4 style={{ color: "white", textAlign: "center", backgroundColor: "#f26e22", padding: "1%", borderRadius: "10px" }}>Emergency Contact 2</h4>
            <hr></hr>
            <div style={{ borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Address: <span style={{ color: "#564873" }}>{caregiver.Emergency2Address}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Name: <span style={{ color: "#564873" }}>{caregiver.Emergency2Name}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone 1: <span style={{ color: "#564873" }}>{caregiver.Emergency2Phone1}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Phone 2: <span style={{ color: "#564873" }}>{caregiver.Emergency2phone2}</span></h2></div>
                  }
                </Grid>
                <Grid className="DataHolderGrid">
                  {caregiver != null &&
                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Relationship: <span style={{ color: "#564873" }}>{caregiver.Emergency2Relationship}</span></h2></div>
                  }
                </Grid>


              </Grid>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className="EditButton" variant="outlined" onClick={() => { setOpen(true) }}>
                Edit
              </Button>
            </div>

          </div>
        }
      </>

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
            Member Info
          </h3>

          <h3 onClick={CalenderPressed} style={{ color: "#F2B90F" }}>
            Calender
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
      <ToastContainer />
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
                Care Giver Info
              </p>
            </Button>

            <Button
              className="navigationButton"
              onClick={() => {
                VisitHistoryPressed();
              }}
            >
              <p style={{
                fontSize: "15px",
                color: "white",
                fontWeight: "bold",
              }}>
                Visits
              </p>
            </Button>

            <Button onClick={CalenderPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Calender
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen3 && <Overlay3 />}
          {TimeOverlay && <OverlayTime />}
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
export default CareGiverDetail;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .EditButton{
    background-color: #564873;
   
    font-weight:bold;
    width:15%;
    color:white;
  }
  .EditButton:hover {
    color:black;
  }

  .DataHolderGrid{
    width: 50%;
    text-align: center;
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
    .GoBackButton{
      width:30%;
      height:50px;
    }
    .DataHolderGrid{
    width: 100%;
    text-align: center;
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
