import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';
import Backdrop from '@mui/material/Backdrop';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../components/context'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

//

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { addVisit } from "../../API/visitAPI";
import UserName from "../../UserName";
const Link = require("react-router-dom").Link;

function Visit() {

  const { signOut } = React.useContext(AuthContext);

  // MCO
  const [selectedMCO, setSelectedMCO] = useState('');
  // 

  const [selectedMemberName, setSelectedMemberName] = useState(null);
  const [selectedCaseCoordinator, setSelectedCaseCoordinator] = useState(null);
  const [selectedMemberTeam, setSelectedMemberTeam] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null)
  const [selectedPhone, setSelectedPhone] = useState(null)
  const [selectedFirstName, setSelectedFirstName] = useState(null)
  const [selectedLastName, setSelectedLastName] = useState(null);
  const [selectedMemberID, setSelectedMemberID] = useState(null);
  const [selectedAdmissionID, setSelectedAdmissionID] = useState(null);

  //Members
  const [membersList, setMembersList] = useState([]);
  const [memberForVisit, setMemberForVisit] = useState(null);
  const [memberForVisitName, setMemberForVisitName] = useState(null);
  const [selectedMemberAllData, setSelectedMemberAllData] = useState(null);
  //

  //Care Giver
  const [careGiverList, setCareGiverList] = useState([]);
  const [careGiverForVisit, setCareGiverForVisit] = useState(null);
  const [careGiverForVisitName, setCareGiverForVisitName] = useState(null);
  const [selectedCareGiverAllData, setSelectedCareGiverAllData] = useState(null);

  //Service Codes
  const [serviceCodes, setServiceCodes] = useState(null);
  const [selectedServiceCode, setSelectedServiceCode] = useState(null);

  //  

  //Service Codes
  const [visitType, setVisitType] = useState(null);
  const [selectedVisitType, setSelectedVisitType] = useState(null);

  //  

  const [memberId, setMemberId] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [visitEndTime, setVisitEndTime] = useState(dayjs('2022-04-17T15:30'));
  const [visitStartTime, setVisitStartTime] = useState(dayjs('2022-04-17T15:30'));
  const [scheduleStartTime, setScheduleStartTime] = useState(dayjs('2022-04-17T15:30'));
  const [dutiesList, setDutiesList] = useState([]);
  const [selectedDuty, setSelectedDuty] = useState('');
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





  const handleClockOutAddressLine1Change = (event) => {
    setClockOutAddressLine1(event.target.value);
  }

  const handleClockOutAddressLine2Change = (event) => {
    setClockOutAddressLine2(event.target.value);
  }

  const handleClockOutLocationStateChange = (event) => {
    setClockOutLocationState(event.target.value);
  }

  const handleClockOutLocationZipCodeChange = (event) => {
    setClockOutLocationZipCode(event.target.value);
  }

  const handleClockOutLocationTypeChange = (event) => {
    setClockOutLocationType(event.target.value);
  }





  function handleClockInLocationAddressLine1Change(event) {
    setClockInLocationAddressLine1(event.target.value);
  }

  function handleClockInLocationAddressLine2Change(event) {
    setClockInLocationAddressLine2(event.target.value);
  }

  function handleClockInLocationCityChange(event) {
    setClockInLocationCity(event.target.value);
  }

  function handleClockInLocationStateChange(event) {
    setClockInLocationState(event.target.value);
  }

  function handleClockInZipCodeChange(event) {
    setClockInZipCode(event.target.value);
  }

  function handleClockInLocationTypeChange(event) {
    setClockInLocationType(event.target.value);
  }

  function handleClockOutLocationCityChange(event) {
    setClockOutLocationCity(event.target.value);
  }




  const handleDutiesChange = (event) => {
    setDuties(event.target.value);
  };

  const handleClockInPhoneChange = (event) => {
    setClockInPhone(event.target.value);
  };

  const handleClockInLatitudeChange = (event) => {
    setClockInLatitude(event.target.value);
  };

  const handleClockInLongitudeChange = (event) => {
    setClockInLongitude(event.target.value);
  };

  const handleClockOutLatitudeChange = (event) => {
    setClockOutLatitude(event.target.value);
  };

  const handleClockOutLongitudeChange = (event) => {
    setClockOutLongitude(event.target.value);
  };






  const handleClockInEvvOtherInfoChange = (event) => {
    setClockInEvvOtherInfo(event.target.value);
  };

  const handleClockOutPhoneChange = (event) => {
    setClockOutPhone(event.target.value);
  };

  const handleClockOutEvvOtherInfoChange = (event) => {
    setClockOutEvvOtherInfo(event.target.value);
  };

  const handleInvoiceNumberChange = (event) => {
    setInvoiceNumber(event.target.value);
  };

  const handleVisitEditReasonCodeChange = (event) => {
    setVisitEditReasonCode(event.target.value);
  };

  const handleVisitEditActionTakenChange = (event) => {
    setVisitEditActionTaken(event.target.value);
  };






  const handleVisitEditMadeByChange = (event) => {
    setVisitEditMadeBy(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleInDeletionChange = (event) => {
    setInDeletion(event.target.value);
  };

  const handleInvoiceLineItemIdChange = (event) => {
    setInvoiceLineItemId(event.target.value);
  };

  const handleTotalBilledAmountChange = (event) => {
    setTotalBilledAmount(event.target.value);
  };

  const handleUnitsBilledChange = (event) => {
    setUnitsBilled(event.target.value);
  };







  const handleBilledRateChange = (event) => {
    setBilledRate(event.target.value);
  };

  const handleSubmissionTypeChange = (event) => {
    setSubmissionType(event.target.value);
  };

  const handleTrnNumberChange = (event) => {
    setTrnNumber(event.target.value);
  };

  const handleEnableSecondaryBillingChange = (event) => {
    setEnableSecondaryBilling(event.target.value);
  };

  const handleOtherSubscriberIdChange = (event) => {
    setOtherSubscriberId(event.target.value);
  };

  const handlePrimaryPayerIdChange = (event) => {
    setPrimaryPayerId(event.target.value);
  };


  const handlePrimaryPayerNameChange = (event) => {
    setPrimaryPayerName(event.target.value);
  };

  const handleRelationshipToInsuredChange = (event) => {
    setRelationshipToInsured(event.target.value);
  };

  const handlePrimaryPayerPolicyChange = (event) => {
    setPrimaryPayerPolicy(event.target.value);
  };

  const handlePrimaryPayerProgramChange = (event) => {
    setPrimaryPayerProgram(event.target.value);
  };

  const handlePlanTypeChange = (event) => {
    setPlanType(event.target.value);
  };

  const handleTotalPaidAmountChange = (event) => {
    setTotalPaidAmount(event.target.value);
  };


  const handleTotalPaidUnitsChange = (event) => {
    setTotalPaidUnits(event.target.value);
  };

  const handlePaidDateChange = (newValue) => {
    setPaidDate(newValue);
  };

  const handleDeductibleChange = (event) => {
    setDeductible(event.target.value);
  };

  const handleCoinsuranceChange = (event) => {
    setCoinsurance(event.target.value);
  };

  const handleCopayChange = (event) => {
    setCopay(event.target.value);
  };

  const handleContractedAdjustmentsChange = (event) => {
    setContractedAdjustments(event.target.value);
  };










  const handleNotMedicallyNecessaryChange = (event) => {
    setNotMedicallyNecessary(event.target.value);
  }

  const handleNonCoveredChargesChange = (event) => {
    setNonCoveredCharges(event.target.value);
  }

  const handleMaxBenefitExhaustedChange = (event) => {
    setMaxBenefitExhausted(event.target.value);
  }

  const handleMissedVisitChange = (event) => {
    setMissedVisit(event.target.value);
  }

  const handleMissedVisitActionTakenCodeChange = (event) => {
    setMissedVisitActionTakenCode(event.target.value);
  }

  const handleMissedVisitReasonCodeChange = (event) => {
    setMissedVisitReasonCode(event.target.value);
  }









  const handleUnitField1Change = (event) => {
    setUnitField1(event.target.value);
  };

  const handleUnitField2Change = (event) => {
    setUnitField2(event.target.value);
  };

  const handleUnitField3Change = (event) => {
    setUnitField3(event.target.value);
  };

  const handleUnitField4Change = (event) => {
    setUnitField4(event.target.value);
  };

  const handleUnitField5Change = (event) => {
    setUnitField5(event.target.value);
  };

  const handleUnitField6Change = (event) => {
    setUnitField6(event.target.value);
  };

  const handleUnitField7Change = (event) => {
    setUnitField7Value(event.target.value);
  };

  const handleUnitField8Change = (event) => {
    setUnitField8Value(event.target.value);
  };

  const handleUnitField9Change = (event) => {
    setUnitField9Value(event.target.value);
  };

  const handleUnitField10Change = (event) => {
    setUnitField10Value(event.target.value);
  };






  // Change handler for 'Timesheet Approved' TextField
  const handleTimesheetApprovedChange = (event) => {
    setTimesheetApproved(event.target.value);
  };


  // Change handler for 'Missed Visit Notes' TextField
  const handleMissedVisitNotesChange = (event) => {
    setMissedVisitNotes(event.target.value);
  };

  // Change handler for 'Timesheet Required' TextField
  const handleTimesheetRequiredChange = (event) => {
    setTimesheetRequired(event.target.value);
  };

  // Change handler for 'Cancel Travel Time Request' TextField
  const handleCancelTravelTimeRequestChange = (event) => {
    setCancelTravelTimeRequest(event.target.value);
  };

  // Change handler for 'Travel Time Comments' TextField
  const handleTravelTimeCommentsChange = (event) => {
    setTravelTimeComments(event.target.value);
  };

  // Change handler for 'Travel Time Request Hours' TextField
  const handleTravelTimeRequestHoursChange = (event) => {
    setTravelTimeRequestHours(event.target.value);
  };




  const handleEvvEndTimeChange = (newValue) => {
    setEvvEndTime(newValue);
  };


  const handleEvvStartTimeChange = (newValue) => {
    setEvvStartTime(newValue);
  };



  const handleScheduleEndTimeChange = (newValue) => {
    setScheduleEndTime(newValue);
  };



  const handleScheduleStartTimeChange = (newValue) => {
    setScheduleStartTime(newValue);
  };


  const handleVisitStartTime = (newValue) => {
    setVisitStartTime(newValue);
  };



  const handleVisitEndTime = (newValue) => {
    setVisitEndTime(newValue);
  };



  // 


  function getTimeDuration(start, end) {
    console.log(start)
  //   if (visitStart != null && visitEnd) {
  //     var durationMinute;
  //     var durationHour;
  //     var durationTime;
  //     var startTime = visitStart.split(':');
  //     var endTime = visitEnd.split(':');

  //     startTime[0] = parseInt(startTime[0]);
  //     startTime[1] = parseInt(startTime[1]);

  //     endTime[0] = parseInt(endTime[0]);
  //     endTime[1] = parseInt(endTime[1]);

  //     if (endTime[1] >= startTime[1]) {
  //         durationMinute = endTime[1] - startTime[1];
  //         durationHour = endTime[0] - startTime[0];
  //         durationTime = durationHour + ' Hours and ' + durationMinute + ' Minutes';
  //         setDuration(durationTime);
  //     }
  //     else if (endTime[1] < startTime[1]) {
  //         durationMinute = (endTime[1] + 60) - startTime[1];
  //         durationHour = (endTime[0] - 1) - startTime[0];
  //         durationTime = durationHour + ' Hours and ' + durationMinute + ' Minutes';
  //         setDuration(durationTime);
  //     }
  // }
  }









  const navigate = useNavigate();
  function CallDashBoardPressed() {
    navigate("/CallDashBoard");
  }





  // MCO Setup
  const [mcoList, setMcoList] = useState([]);
  const mcoString = localStorage.getItem("MCOS");
  var mcos = JSON.parse(mcoString);

  useEffect(() => {
    var arr = [];
    for (var key in mcos) {

      if (mcos[key].active == 1) {
        var obj = mcos[key].name;
        arr.push(obj);
      }
    }
    setMcoList(arr);
  }, [])

  // 


  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //


  // Get Misc
  var miscValuesString = localStorage.getItem("MISC");
  var miscValues = JSON.parse(miscValuesString)
  miscValues = miscValues.data;
  useEffect(() => {
    var arr = [];
    var arr2 = [];
    var arr3 = [];
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
    }
    setServiceCodes(arr);
    setDutiesList(arr2);
    setVisitType(arr3);

  }, [])

  // 



  function GoBackButtonPressed() {
    navigate(-1);

  }

  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);


  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  //Nested Overlay Open
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const SearchButtonPressed = () => {
    renderMembers()
    setIsOverlayOpen3(true);
    setOpen3(true);
  }

  //
  const [open3, setOpen3] = React.useState(false);
  const handleClose3 = () => {
    setOpen3(false);
  };

  //

  // =============================Members Data===========================================


  const handleRowClick = (params) => {
    setMemberForVisit(params.row);
    if (memberForVisit != null) {
      setMemberForVisitName(memberForVisit.MemberName);
      getSelectedMemberAllData(memberForVisit);
    }
    handleClose3();
    handleClose2();
  };



  const membersStoage = localStorage.getItem("Members");
  var membersArray = JSON.parse(membersStoage);
  
  function getSelectedMemberAllData(val) {
    for (var key in membersArray) {
      if (val.id == membersArray[key].MemberID) {
        setSelectedMemberAllData(membersArray[key]);
      }
    }
  }


  function renderMembers() {
    var arr = [];
    for (var key in membersArray) {
      if (selectedMCO.toUpperCase() === membersArray[key].MCOName) {
        var obj = {};
        obj.id = membersArray[key].MemberID;
        obj.AdmissionID = membersArray[key].AdmissionID;
        obj.MemberName = membersArray[key].FirstName + ' ' + membersArray[key].LastName
        obj.CaseCoordinator = '';
        obj.StartDate = membersArray[key].StartDate;
        obj.Phone = membersArray[key].HomePhone;
        obj.DOB = membersArray[key].DateofBirth;
        obj.MCO = membersArray[key].MCOName
        arr.push(obj);
      }

    }
    setMembersList(arr);
  }
  // 

  function Overlay3() {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open3}

      >
        <div className="MemberSearchOverlay">
          <CloseIcon className="crossIcon" onClick={handleClose3} />
          <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
          <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Member Search</p>
          <div className="searchFieldsDiv">

            <Grid className="griditem">

              <TextField

                id="selected-member-id-cg"
                label="Member ID"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="selected-admission-id-cg"
                label="Admission ID"
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
                    value={selectedStatus}
                    label="Status"
                    onChange={(event) => { setSelectedStatus(event.target.value) }}
                  >
                    <MenuItem value={'Active'}>Active</MenuItem>
                    <MenuItem value={'Inactive'}>Inactive</MenuItem>
                    <MenuItem value={'Terminated'}>Terminated</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>


            <Grid className="griditem">

              <TextField

                id="selected-last-name-cg"
                label="Last Name"
                variant="outlined"
              />

            </Grid>

            <Grid className="griditem">

              <TextField

                id="selected-first-name-cg"
                label="First Name"
                variant="outlined"
              />

            </Grid>

            <Grid className="griditem">

              <TextField

                id="selected-phone-cg"
                label="Phone Number"
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
                    value={selectedMemberTeam}
                    label="Status"
                    onChange={(event) => { setSelectedMemberTeam(event.target.value) }}
                  >
                    <MenuItem value={'Unassigned'}>Unassigned</MenuItem>
                    <MenuItem value={'Default'}>Default</MenuItem>
                    <MenuItem value={'All'}>All</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid className="griditem2">

              <Box >
                <FormControl fullWidth>
                  <InputLabel >Case Cordinator</InputLabel>
                  <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCaseCoordinator}
                    label="Status"
                    onChange={(event) => { setSelectedCaseCoordinator(event.target.value) }}
                  >
                    <MenuItem value={'Default'}>Default</MenuItem>
                    <MenuItem value={'All'}>All</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>



          </div>


          <Button className="searchButton" onClick={() => {
            setSelectedFirstName(document.getElementById('selected-first-name-cg').value)
            setSelectedLastName(document.getElementById('selected-last-name-cg').value)
            setSelectedPhone(document.getElementById('selected-phone-cg').value)

            setSelectedMemberID(document.getElementById('selected-member-id-cg').value)
            setSelectedAdmissionID(document.getElementById('selected-admission-id-cg').value)
          }}>
            Search
          </Button>


          <div style={{ height: "100%", width: '100%', marginTop: "2%" }}>
            <DataGrid
              rows={membersList}
              columns={columns10}
              pageSize={5}
              rowsPerPageOptions={[15]}
              checkboxSelection
              onRowClick={handleRowClick}
            />
          </div>
        </div>
      </Backdrop>
    );
  }

  // =============================Members Data===========================================

  // VisitSearchView
  const columns10 = [
    { field: 'id', headerName: 'Member ID', width: 100 },
    { field: 'AdmissionID', headerName: 'Admission ID', width: 100 },
    { field: 'MemberName', headerName: 'Member Name', width: 120 },
    { field: 'memberTeam', headerName: 'Member Team', width: 120 },
    { field: 'caseCordinator', headerName: 'Case Cordinator', width: 120 },
    { field: 'StartDate', headerName: 'Start Of Date', width: 100 },
    { field: 'Status', headerName: 'Status', width: 120 },
    { field: 'Phone', headerName: 'Phone Number', width: 120 },
    { field: 'DOB', headerName: 'DOB', width: 100 },
    { field: 'MCO', headerName: 'MCO', width: 100 },

  ];
  //demo data to display
  const rows10 = [
    {
      id: 1, admissionID: "Justin", memberName: "Alo", memberTeam: "02457894561", caseCordinator: "XOXO",
      startDate: "XZXZ", status: "1123456", phoneNumber: "1123456", dob: "Active", mco: "Homecare"
    },


  ];
  //
  //Nested Overlay End




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

  function Overlay() {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}

      >
        <div className="overlay">
          <CloseIcon className="crossIcon" onClick={handleClose} />
          <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
          <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Visit Search</p>
          <div className="searchFieldsDiv">


            <Grid className="griditem">
              <TextField

                id="outlined-basic"
                label="Care Giver First Name"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">
              <TextField
                id="outlined-basic"
                label="Care Giver Last Name"
                variant="outlined"
              />
            </Grid>

            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Care Giver Code"
                variant="outlined"
              />
            </Grid>
            <Grid className="griditem">

              <TextField
                id="outlined-basic"
                label="Assigment ID"
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
                label="Member First Name"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Member Last Name"
                variant="outlined"
              />

            </Grid>


            <Grid className="griditem2">

              <Box >
                <FormControl fullWidth>
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
              </Box>
            </Grid>
            <Grid className="griditem2">

              <Box>
                <FormControl fullWidth>
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
              </Box>
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

            <Grid className="griditem2">

              <Box >
                <FormControl fullWidth>
                  <InputLabel >Member Location</InputLabel>
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
                  <InputLabel >Member Branch</InputLabel>
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
                label="From Date dd/mm/yyyy"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Till Date dd/mm/yyyy"
                variant="outlined"
              />

            </Grid>

          </div>
          <Button className="searchButton" onClick={handleCloseOverlay}>
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }

  //
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
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
          <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Quick Visit Entry</p>
          <div className="searchFieldsDiv">



            <Grid style={{ width: '100%' }}>

              <Box >
                <FormControl fullWidth>
                  <InputLabel >MCO</InputLabel>
                  <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedMCO}
                    label="Status"
                    onChange={(event) => { setSelectedMCO(event.target.value) }}
                  >
                    {mcoList.map((l, i) => (
                      <MenuItem value={l}>{l}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>


            <Grid style={{ width: '100%' }}>

              <TextField
                id="outlined-basic"
                label="Member Search"
                variant="outlined"
                onChange={(name) => { setSelectedMemberName(name) }}
              />

            </Grid>

          </div>
          <Button className="searchButton" onClick={SearchButtonPressed} >
            Search
          </Button>
        </div>
      </Backdrop>
    );
  }


  const VisitSearchPressed = () => {
    setViewSelected(2);
  };
  const VisitQuickSearchPressed = () => {
    setViewSelected(3);
  };

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
          <hr className="line" style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />

          <h3 onClick={() => {
            CallDashBoardPressed();
          }} style={{ color: "#F2B90F" }}>Call Dashboard</h3>
          <h3 onClick={VisitSearchPressed} style={{ color: "#F2B90F" }}>Visit Search</h3>
          <h3 onClick={VisitQuickSearchPressed} style={{ color: "#F2B90F" }}>Visit Quick Entry</h3>

        </div>



      </Box>
    </div>
  );
  //
  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return VisitSearchView();

      case 3:
        return VisitQuickSearchView();

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
  const VisitSearchView = () => {
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
  // VisitSearchView
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First Name', width: 100 },
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'caregiverCode', headerName: 'CareGiver Code', width: 150 },
    { field: 'assigmentID', headerName: 'Assigment ID', width: 100 },
    { field: 'admissionID', headerName: 'Admission ID', width: 100 },
    { field: 'memberFirstName', headerName: 'Member First Name', width: 150 },
    { field: 'memberLastName', headerName: 'Member Last Name', width: 150 },
    { field: 'cordinator', headerName: 'Cordinator', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'memberTeam', headerName: 'Member Team', width: 150 },
    { field: 'memberLocation', headerName: 'Member Location', width: 150 },
    { field: 'memberBranch', headerName: 'Member Branch', width: 150 },
    { field: 'fromDate', headerName: 'From Date', width: 100 },
    { field: 'tillDate', headerName: 'Till Date', width: 100 },

  ];
  //demo data to display
  const rows = [
    {
      id: 1, firstName: "Justin", lastName: "Alo", caregiverCode: "02457894561", assigmentID: "XOXO", admissionID: "XZXZ", memberFirstName: "1123456", memberLastName: "1123456", cordinator: "Active", status: "Homecare", memberTeam: "51s",
      memberLocation: "China", memberBranch: "Depot", fromDate: "10 Jul 2020", tillDate: "10 Jul 2021"
    },
    {
      id: 2, firstName: "Justin", lastName: "Alo", caregiverCode: "02457894561", assigmentID: "XOXO", admissionID: "XZXZ", memberFirstName: "1123456", memberLastName: "1123456", cordinator: "Active", status: "Homecare", memberTeam: "51s",
      memberLocation: "China", memberBranch: "Depot", fromDate: "10 Jul 2020", tillDate: "10 Jul 2021"
    },
    {
      id: 3, firstName: "Justin", lastName: "Alo", caregiverCode: "02457894561", assigmentID: "XOXO", admissionID: "XZXZ", memberFirstName: "1123456", memberLastName: "1123456", cordinator: "Active", status: "Homecare", memberTeam: "51s",
      memberLocation: "China", memberBranch: "Depot", fromDate: "10 Jul 2020", tillDate: "10 Jul 2021"
    },
    {
      id: 4, firstName: "Justin", lastName: "Alo", caregiverCode: "02457894561", assigmentID: "XOXO", admissionID: "XZXZ", memberFirstName: "1123456", memberLastName: "1123456", cordinator: "Active", status: "Homecare", memberTeam: "51s",
      memberLocation: "China", memberBranch: "Depot", fromDate: "10 Jul 2020", tillDate: "10 Jul 2021"
    },
    {
      id: 5, firstName: "Justin", lastName: "Alo", caregiverCode: "02457894561", assigmentID: "XOXO", admissionID: "XZXZ", memberFirstName: "1123456", memberLastName: "1123456", cordinator: "Active", status: "Homecare", memberTeam: "51s",
      memberLocation: "China", memberBranch: "Depot", fromDate: "10 Jul 2020", tillDate: "10 Jul 2021"
    },
    {
      id: 6, firstName: "Justin", lastName: "Alo", caregiverCode: "02457894561", assigmentID: "XOXO", admissionID: "XZXZ", memberFirstName: "1123456", memberLastName: "1123456", cordinator: "Active", status: "Homecare", memberTeam: "51s",
      memberLocation: "China", memberBranch: "Depot", fromDate: "10 Jul 2020", tillDate: "10 Jul 2021"
    },

  ];
  const [CareGiverSearch, setCareGiverSearch] = useState(false);
  function CareGiverIconClick() {
    setCareGiverSearch(true);
    setOpen10(true);
    renderCareGivers();
  }
  const [open10, setOpen10] = React.useState(false);
  const handleClose10 = () => {
    setOpen10(false);
    setCareGiverSearch(false);
  };




  //


  //=======================================Care Giver Data ========================================================



  function getAllCareGiverData(val) {
    for (var key in caregiverArray) {
      if (caregiverArray[key].SSN == val.SSN) {
        setSelectedCareGiverAllData(caregiverArray[key]);
      }
    }
  }

  const handleRowClickCareGiverForVisit = (params) => {
    setCareGiverForVisit(params.row);

    if (careGiverForVisit != null) {
      setCareGiverForVisitName(careGiverForVisit.name);
      getAllCareGiverData(careGiverForVisit);
    }
    handleClose10();
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
        CoCode: caregiverArray[key].CoCode,
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
  // 


  function OverlayCareGiverSearch() {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open10}

      >
        <div className="overlayCareGiver">
          <CloseIcon className="crossIcon" onClick={handleClose10} />
          <h1 style={{ textAlign: "center", color: "black" }}>Search Care Giver</h1>
          <div className="searchFieldsDiv">



            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Name"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="City"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Code"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Ethnicity"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="SSN"
                variant="outlined"
              />

            </Grid>
            <Grid className="griditem">

              <TextField

                id="outlined-basic"
                label="Discipline"
                variant="outlined"
              />

            </Grid>

          </div>
          <Button className="searchButton" onClick={handleClose10} >
            Search
          </Button>
          <DataGrid
            rows={careGiverList}
            columns={columns12}
            pageSize={5}
            rowsPerPageOptions={[15]}
            checkboxSelection
            onRowClick={handleRowClickCareGiverForVisit}
          />
        </div>
      </Backdrop>
    );
  }

  const columns12 = [
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
  //=====================================================Care Giver Data =====================================================




  const VisitQuickSearchView = () => {
    return (

      <div>
        <div>
          <div>
            <h1 style={{ textAlign: "center" }}> Active Authorization (-90 Days)</h1>
            <Button className="showAllButton">Show All</Button>
            <div style={{ height: "100%", width: '100%', marginBottom: "2%" }}>
              <DataGrid
                rows={rows11}
                columns={columns11}
                pageSize={5}
                rowsPerPageOptions={[15]}
                checkboxSelection
              />
            </div>
          </div>
          <hr />

          {memberForVisitName == null &&
            <h1 style={{ textAlign: "center" }}>Member Not Selected</h1>
          }
          {memberForVisitName != null &&
            <h1 style={{ textAlign: "center" }}>Create A New Visit for {memberForVisitName}</h1>
          }
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>



            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Visit Date"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>



            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
                <TimePicker
                  label="Visit Start Time"
                  value={visitStartTime}
                  onChange={handleVisitStartTime}
                />
              </DemoContainer>
            </LocalizationProvider>




            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
                <TimePicker
                  label="Visit End Time"
                  value={visitEndTime}
                  onChange={handleVisitEndTime}
                />
              </DemoContainer>
            </LocalizationProvider>

          </div>
          <div className="VisitAddDel">



            <FormControl style={{ width: '30%' }}>
              <InputLabel>Service Codes</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedServiceCode}
                label="Status"
                onChange={(evt) => { setSelectedServiceCode(evt.target.value) }}
              >
                {serviceCodes.map((l, i) => (
                  <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                ))}
              </Select>
            </FormControl>


            <TextField
              className="field"
              id="duration"
              label="Duration"
              variant="outlined"
              readOnly
              value={duration}
              onClick = {()=>{getTimeDuration(visitStartTime, visitEndTime)}}
            />

            <TextField
              className="field"
              id="outlined-basic"
              label="Select Care Giver"
              value={careGiverForVisitName}
              InputProps={{ startAdornment: (<PersonSearchIcon onClick={CareGiverIconClick} style={{ cursor: "pointer" }} />) }}
            >
              {/* <div  style={{ display: "flex", cursor: "pointer", justifyContent: "center", alignContent: "center", alignItems: "center" }}> */}

              {/* </div> */}
            </TextField>




          </div>
          {/* =========================To Check======================= */}
          <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: '20px' }}>


            <FormControl style={{ width: '30%' }}>
              <InputLabel>Visit Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedVisitType}
                label="Visit Type"
                onChange={(evt) => { setSelectedVisitType(evt.target.value) }}
              >
                {visitType.map((l, i) => (
                  <MenuItem value={l}>{l}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/*======================================================== */}





            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
                <TimePicker
                  label="Schedule Start Time"
                  value={scheduleStartTime}
                  onChange={handleScheduleStartTimeChange}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
                <TimePicker
                  label="Schedule End Time"
                  value={scheduleEndTime}
                  onChange={handleScheduleEndTimeChange}
                />
              </DemoContainer>
            </LocalizationProvider>

          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: '20px' }}>


            <TextField
              className="field"
              id="Authorization Number"
              label="Member ID"
              variant="outlined"
              value={memberId}
              onChange={(event) => setMemberId(event.target.value)}
            />



            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
                <TimePicker
                  label="EVV Start Time"
                  value={evvStartTime}
                  onChange={handleEvvStartTimeChange}

                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker', 'TimePicker']}>
                <TimePicker
                  label="EVV End Time"
                  value={evvEndTime}
                  onChange={handleEvvEndTimeChange}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-in-location-address-line-1"
              label="Clock In Service Location Address Line 1"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleClockInLocationAddressLine1Change}
              value={clockInLocationAddressLine1}
            />
            <TextField
              className="field"
              id="clock-in-location-address-line-2"
              label="Clock In Service Location Address Line 2"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleClockInLocationAddressLine2Change}
              value={clockInLocationAddressLine2}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-in-location-city"
              label="Clock In Location City"
              variant="outlined"
              style={{ width: '200px' }}
              onChange={handleClockInLocationCityChange}
              value={clockInLocationCity}
            />
            <TextField
              className="field"
              id="clock-in-location-state"
              label="Clock In Location State"
              variant="outlined"
              style={{ width: '200px' }}
              onChange={handleClockInLocationStateChange}
              value={clockInLocationState}
            />
            <TextField
              className="field"
              id="clock-in-zip-code"
              label="Clock In Zip Code"
              variant="outlined"
              style={{ width: '200px' }}
              onChange={handleClockInZipCodeChange}
              value={clockInZipCode}
            />
          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>



            <TextField
              className="field"
              id="Authorization Number"
              label="Clock In Location Type"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleClockInLocationTypeChange}
              value={clockInLocationType}
            />

            <TextField
              className="field"
              id="Authorization Number"
              label="Clock Out Location City"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleClockOutLocationCityChange}
              value={clockOutLocationCity}
            />
          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-out-location-address-line-1"
              label="Clock Out Location Address Line 1"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutAddressLine1}
              onChange={handleClockOutAddressLine1Change}
            />
            <TextField
              className="field"
              id="clock-out-location-address-line-2"
              label="Clock Out Location Address Line 2"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutAddressLine2}
              onChange={handleClockOutAddressLine2Change}
            />
          </div>
          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-out-location-state"
              label="Clock Out Location State"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutLocationState}
              onChange={handleClockOutLocationStateChange}
            />
            <TextField
              className="field"
              id="clock-out-location-zip-code"
              label="Clock Out Location Zip Code"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutLocationZipCode}
              onChange={handleClockOutLocationZipCodeChange}
            />
          </div>
          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-out-location-type"
              label="Clock Out Location Type"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutLocationType}
              onChange={handleClockOutLocationTypeChange}
            />
            <TextField
              className="field"
              id="clock-out-location-type"
              label="Clock Out Location Type"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutLocationType}
              onChange={handleClockOutLocationTypeChange}
            />
          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* <TextField
              className="field"
              id="Duties"
              label="Duties"
              variant="outlined"
              style={{ width: "400px" }}
              onChange={handleDutiesChange}
              value={duties}
            /> */}

            <FormControl style={{ width: '30%' }}>
              <InputLabel>Duties</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDuty}
                label="Duties"
                onChange={(evt) => { setSelectedDuty(evt.target.value) }}
              >
                {dutiesList.map((l, i) => (
                  <MenuItem value={l.task_name}>{l.task_name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              className="field"
              id="Authorization Number"
              label="Clock In Phone Number"
              variant="outlined"
              style={{ width: "400px" }}
              onChange={handleClockInPhoneChange}
              value={clockInPhone}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-in-latitude"
              label="Clock In Latitude"
              variant="outlined"
              style={{ width: "400px" }}
              onChange={handleClockInLatitudeChange}
              value={clockInLatitude}
            />

            <TextField
              className="field"
              id="clock-in-longitude"
              label="Clock In Longitude"
              variant="outlined"
              style={{ width: "400px" }}
              onChange={handleClockInLongitudeChange}
              value={clockInLongitude}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-out-latitude"
              label="Clock Out Latitude"
              variant="outlined"
              style={{ width: "400px" }}
              onChange={handleClockOutLatitudeChange}
              value={clockOutLatitude}
            />

            <TextField
              className="field"
              id="clock-out-longitude"
              label="Clock Out Longitude"
              variant="outlined"
              style={{ width: "400px" }}
              onChange={handleClockOutLongitudeChange}
              value={clockOutLongitude}
            />
          </div>

          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-in-evv-other-info"
              label="Clock In EVV Other Info"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockInEvvOtherInfo}
              onChange={handleClockInEvvOtherInfoChange}
            />

            <TextField
              className="field"
              id="clock-out-phone"
              label="Clock Out Phone Number"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutPhone}
              onChange={handleClockOutPhoneChange}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="clock-out-evv-other-info"
              label="Clock Out EVV Other Info"
              variant="outlined"
              style={{ width: '400px' }}
              value={clockOutEvvOtherInfo}
              onChange={handleClockOutEvvOtherInfoChange}
            />

            <TextField
              className="field"
              id="invoice-number"
              label="Invoice Number"
              variant="outlined"
              style={{ width: '400px' }}
              value={invoiceNumber}
              onChange={handleInvoiceNumberChange}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="visit-edit-reason-code"
              label="Visit Edit Reason Code"
              variant="outlined"
              style={{ width: '400px' }}
              value={visitEditReasonCode}
              onChange={handleVisitEditReasonCodeChange}
            />

            <TextField
              className="field"
              id="visit-edit-action-takem"
              label="Visit Edit Action Taken"
              variant="outlined"
              style={{ width: '400px' }}
              value={visitEditActionTaken}
              onChange={handleVisitEditActionTakenChange}
            />
          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="diagnosis_code"
              label="Diagnosis Code"
              variant="outlined"
              style={{ width: "400px" }}
              value={diagnosisCode}
              onChange={(event) => setDiagnososCode(event.target.value)}
            />

            <TextField
              className="field"
              id="visit-edit-made-by"
              label="Visit Edit Made By"
              variant="outlined"
              style={{ width: "400px" }}
              value={visitEditMadeBy}
              onChange={handleVisitEditMadeByChange}
            />
          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="notes"
              label="Notes"
              variant="outlined"
              style={{ width: "500px" }}
              value={notes}
              onChange={handleNotesChange}
            />
          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="in-delition"
              label="In Deletion"
              variant="outlined"
              style={{ width: "400px" }}
              value={inDeletion}
              onChange={handleInDeletionChange}
            />

            <TextField
              className="field"
              id="invoice-line-item-id"
              label="Visit Line Item ID"
              variant="outlined"
              style={{ width: "400px" }}
              value={invoiceLineItemId}
              onChange={handleInvoiceLineItemIdChange}
            />
          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="total-billed-amount"
              label="Total Billed Amount"
              variant="outlined"
              style={{ width: "400px" }}
              value={totalBilledAmount}
              onChange={handleTotalBilledAmountChange}
            />

            <TextField
              className="field"
              id="units-billed"
              label="Units Billed"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitsBilled}
              onChange={handleUnitsBilledChange}
            />
          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="billed-rate"
              label="Billed Rate"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleBilledRateChange}
              value={billedRate}
            />
            <TextField
              className="field"
              id="submission-type"
              label="Submission Type"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleSubmissionTypeChange}
              value={submissionType}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="trn-number"
              label="TRN Number"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleTrnNumberChange}
              value={trnNumber}
            />
            <TextField
              className="field"
              id="enable-secondary-billing"
              label="Enable Secondary Billing"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleEnableSecondaryBillingChange}
              value={enableSecondaryBilling}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="other-subscriber-id"
              label="Other Subscriber ID"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleOtherSubscriberIdChange}
              value={otherSubscriberId}
            />
            <TextField
              className="field"
              id="primary-payer-id"
              label="Primary Payer ID"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handlePrimaryPayerIdChange}
              value={primaryPayerId}
            />
          </div>
          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="primary-payer-name"
              label="Primary Payer Name"
              variant="outlined"
              style={{ width: '400px' }}
              value={primaryPayerName}
              onChange={handlePrimaryPayerNameChange}
            />

            <TextField
              className="field"
              id="relationship-to-insured"
              label="Relationship To Insured"
              variant="outlined"
              style={{ width: '400px' }}
              value={relationshipToInsured}
              onChange={handleRelationshipToInsuredChange}
            />
          </div>

          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="primary-payer-policy-or-group-number"
              label="Primary Payer Policy or Group Number"
              variant="outlined"
              style={{ width: '400px' }}
              value={primaryPayerPolicy}
              onChange={handlePrimaryPayerPolicyChange}
            />
          </div>

          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="primary-payer-policy-or-group-number"
              label="Visit ID"
              variant="outlined"
              style={{ width: '400px' }}
              value={visitID}
              onChange={(event) => setVisitID(event.target.value)}
            />

            <TextField
              className="field"
              id="primary-payer-policy-or-group-number"
              label="Schedule ID"
              variant="outlined"
              style={{ width: '400px' }}
              value={scheduleID}
              onChange={(event) => setScheduleID(event.target.value)}
            />
          </div>

          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="primary-payer-program-name"
              label="Primary Payer Program Name"
              variant="outlined"
              style={{ width: '400px' }}
              value={primaryPayerProgram}
              onChange={handlePrimaryPayerProgramChange}
            />

            <TextField
              className="field"
              id="notes"
              label="Procedure Code"
              variant="outlined"
              style={{ width: "400px" }}
              value={procedureCode}
              onChange={(event) => setProcedureCode(event.target.value)}
            />
          </div>

          {/* ======================================================== */}

          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="plan-type"
              label="Plan Type"
              variant="outlined"
              style={{ width: '400px' }}
              value={planType}
              onChange={handlePlanTypeChange}
            />

            <TextField
              className="field"
              id="total-paid-amount"
              label="Total Paid Amount"
              variant="outlined"
              style={{ width: '400px' }}
              value={totalPaidAmount}
              onChange={handleTotalPaidAmountChange}
            />
          </div>

          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="total-paid-units"
              label="Total Paid Units"
              variant="outlined"
              style={{ width: "250px" }}
              value={totalPaidUnits}
              onChange={handleTotalPaidUnitsChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker", "TimePicker"]}>
                <TimePicker
                  label="Paid Date"
                  value={paidDate}
                  onChange={handlePaidDateChange}
                  defaultValue={dayjs("2022-04-17T15:30")}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="deductible"
              label="Deductible"
              variant="outlined"
              style={{ width: "400px" }}
              value={deductible}
              onChange={handleDeductibleChange}
            />
            <TextField
              className="field"
              id="coinsurance"
              label="Coinsurance"
              variant="outlined"
              style={{ width: "400px" }}
              value={coinsurance}
              onChange={handleCoinsuranceChange}
            />
          </div>
          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="copay"
              label="Copay"
              variant="outlined"
              style={{ width: "400px" }}
              value={copay}
              onChange={handleCopayChange}
            />
            <TextField
              className="field"
              id="contracted-adjustments"
              label="Contracted-adjustments"
              variant="outlined"
              style={{ width: "400px" }}
              value={contractedAdjustments}
              onChange={handleContractedAdjustmentsChange}
            />
          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>


            <TextField
              className="field"
              id="not-medically-necessary"
              label="Not Medically Necassary"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleNotMedicallyNecessaryChange}
              value={notMedicallyNecessary}
            />

            <TextField
              className="field"
              id="non-covered-charges"
              label="Non Covered Charges"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleNonCoveredChargesChange}
              value={nonCoveredCharges}
            />


          </div>
          {/* ======================================================== */}



          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>


            <TextField
              className="field"
              id="max-benefit-exhausted"
              label="Max Benefit Exhausted"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleMaxBenefitExhaustedChange}
              value={maxBenefitExhausted}
            />

            <TextField
              className="field"
              id="missed-visit"
              label="Missed Visit"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleMissedVisitChange}
              value={missedVisit}
            />


          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>



            <TextField
              className="field"
              id="missed-visit-action-taken-code"
              label="Missed Visit Action Taken Code"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleMissedVisitActionTakenCodeChange}
              value={missedVisitActionTakenCode}
            />

            <TextField
              className="field"
              id="missed-visit-reason-code"
              label="Missed Visit Reason Code"
              variant="outlined"
              style={{ width: '400px' }}
              onChange={handleMissedVisitReasonCodeChange}
              value={missedVisitReasonCode}
            />


          </div>
          {/* ======================================================== */}



          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <TextField
              className="field"
              id="missed-visit-notes"
              label="Missed Visit Notes"
              variant="outlined"
              style={{ width: '400px' }}
              value={missedVisitNotes}
              onChange={handleMissedVisitNotesChange}
            />

          </div>

          {/* ======================================================== */}

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <TextField
              className="field"
              id="travel-time-request-hours"
              label="Travel Time Request Hours"
              variant="outlined"
              style={{ width: '400px' }}
              value={travelTimeRequestHours}
              onChange={handleTravelTimeRequestHoursChange}
            />

            <TextField
              className="field"
              id="travel-time-comments"
              label="Travel Time Comments"
              variant="outlined"
              style={{ width: '400px' }}
              value={travelTimeComments}
              onChange={handleTravelTimeCommentsChange}
            />

          </div>

          {/* ======================================================== */}

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <TextField
              className="field"
              id="cancel-travel-time-request"
              label="Cancel Travel Time Request"
              variant="outlined"
              style={{ width: '400px' }}
              value={cancelTravelTimeRequest}
              onChange={handleCancelTravelTimeRequestChange}
            />

            <TextField
              className="field"
              id="timesheet-required"
              label="Timesheet Required"
              variant="outlined"
              style={{ width: '400px' }}
              value={timesheetRequired}
              onChange={handleTimesheetRequiredChange}
            />


          </div>
          {/* ======================================================== */}



          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <TextField
              className="field"
              id="timesheet-approved"
              label="Timesheet Approved"
              variant="outlined"
              style={{ width: '400px' }}
              value={timesheetApproved}
              onChange={handleTimesheetApprovedChange}
            />



          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="unit-field-1"
              label="Unit Field 1"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitField1}
              onChange={handleUnitField1Change}
            />

            <TextField
              className="field"
              id="unit-field-2"
              label="Unit Field 2"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitField2}
              onChange={handleUnitField2Change}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="unit-field-3"
              label="Unit Field 3"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitField3}
              onChange={handleUnitField3Change}
            />

            <TextField
              className="field"
              id="unit-field-4"
              label="Unit Field 4"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitField4}
              onChange={handleUnitField4Change}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="unit-field-5"
              label="Unit Field 5"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitField5}
              onChange={handleUnitField5Change}
            />

            <TextField
              className="field"
              id="unit-field-6"
              label="Unit Field 6"
              variant="outlined"
              style={{ width: "400px" }}
              value={unitField6}
              onChange={handleUnitField6Change}
            />
          </div>
          {/* ======================================================== */}


          {/* ======================================================== */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="unit-field-7"
              label="Unit Field 7"
              variant="outlined"
              style={{ width: '400px' }}
              value={unitField7Value}
              onChange={handleUnitField7Change}
            />

            <TextField
              className="field"
              id="unit-field-8"
              label="Unit Field 8"
              variant="outlined"
              style={{ width: '400px' }}
              value={unitField8Value}
              onChange={handleUnitField8Change}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="unit-field-8"
              label="Unit Field 8"
              variant="outlined"
              style={{ width: '400px' }}
              value={unitField8Value}
              onChange={handleUnitField8Change}
            />

            <TextField
              className="field"
              id="unit-field-9"
              label="Unit Field 9"
              variant="outlined"
              style={{ width: '400px' }}
              value={unitField9Value}
              onChange={handleUnitField9Change}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              className="field"
              id="unit-field-10"
              label="Unit Field 10"
              variant="outlined"
              style={{ width: '400px' }}
              value={unitField10Value}
              onChange={handleUnitField10Change}
            />
          </div>
          {/* ======================================================== */}





          <div >

            <Button className="delButton"> Delete </Button>
            <Button className="addButton"> Add </Button>
            <Button className="PreviewAuthButton"> Preview Authorization </Button>

          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
            <Button className="createVisitButton"
              onClick={() => {
                if (selectedMemberAllData != null && selectedCareGiverAllData != null) {
                  console.log(selectedMemberAllData)
                  console.log(selectedCareGiverAllData)
                  addVisit(
                    selectedMemberAllData.FirstName,
                    selectedMemberAllData.LastName,
                    selectedMemberAllData.MemberID,
                    selectedCareGiverAllData.AideCode,
                    selectedCareGiverAllData.FirstName,
                    selectedCareGiverAllData.LastName,
                    selectedCareGiverAllData.Gender,
                    selectedCareGiverAllData.DateofBirth,
                    selectedCareGiverAllData.SSN,

                    scheduleID,
                    visitID,
                    procedureCode,
                    diagnosisCode,
                    scheduleStartTime,
                    scheduleEndTime,
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
                  ).then(res => {
                    if (res.data.result == "success") {
                      console.log("Here")
                    }
                  });
                }
              }
              }

            > Create Visit </Button>
          </div>
        </div>
      </div >
    );
  };

  const columns11 = [
    { field: 'id', headerName: 'Auth #', width: 75 },
    { field: 'fromDate', headerName: 'From Date', width: 100 },
    { field: 'toDate', headerName: 'To Date', width: 100 },
    { field: 'serviceCategory', headerName: 'Service Category', width: 120 },
    { field: 'serviceType', headerName: 'Service Type', width: 120 },
    { field: 'serviceCode', headerName: 'Service Code', width: 120 },
    { field: 'authorizationType', headerName: 'Authorization Type', width: 150 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'notes', headerName: 'Notes', width: 100 },
  ];

  const rows11 = [
    {
      id: 1, fromDate: "Justin", toDate: "Alo", serviceCategory: "Justin", serviceType: "Alo",
      serviceCode: "Justin", authorizationType: "Justin", mco: "Alo", notes: "Justin"
    },
    {
      id: 2, fromDate: "Justin", toDate: "Alo", serviceCategory: "Justin", serviceType: "Alo",
      serviceCode: "Justin", authorizationType: "Justin", mco: "Alo", notes: "Justin"
    },
    {
      id: 3, fromDate: "Justin", toDate: "Alo", serviceCategory: "Justin", serviceType: "Alo",
      serviceCode: "Justin", authorizationType: "Justin", mco: "Alo", notes: "Justin"
    },


  ];

  return (
    <Wrapper>
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
                CallDashBoardPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Call Dashboard
              </p>
            </Button>
            <Button onClick={VisitSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visit Search
              </p>
            </Button>


            <Button onClick={VisitQuickSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visit Quick Entry
              </p>
            </Button>

          </div>


        </Card>

        <Card className="dataDisplay" style={{ overflow: 'auto' }} >

          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen3 && <Overlay3 />}
          {CareGiverSearch && <OverlayCareGiverSearch />}
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

.showAllButton{

}

.scrollable-form{
  backgroundColor: black;
}

.delButton{
  background-color:#564873;
  color:white;
}
.delButton:hover{
  color:black;
}
.addButton {
  background-color:#564873;
  color:white;
  margin-left:1%;
}
.addButton:hover{
  color:black;
}
.PreviewAuthButton{
  background-color:#564873;
  color:white;
  margin-left:1%;
}
.PreviewAuthButton:hover{
  color:black;
}

.createVisitButton{
  background-color: #f26e22;
  color: white;
  width:25%;
 
}
.createVisitButton:hover{
 
  color: black;
 
}

.VisitAddDel{
  display:flex;
  margin-top:2%;
  justify-content:space-between;

}
.field{
  margin:1%;
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
.CardHolder{
    display:flex;
    flex-direction:row;
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
    font-size:18px;
    color:white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color:white;
    font-size:16px;
    
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
  width: 100px;
  text-align: center;
 
}
.item1 {
    

  font-size: 15px;
  color: white;
  font-weight: bold;
  text-align:center;
  margin:0.5%;
}


// overlay css end
.MemberSearchOverlay{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 65%;
  z-index: 1000;
  background-color: white;
  padding: 1%; 
  overflow:auto;
}
.overlayCareGiver{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 65%;
  z-index: 1000;
  background-color: white;
  padding: 1%; 
  overflow:auto;
}
.overlay{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
}
.overlay2{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 40%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
}
.crossIcon{
    margin-left:95%;
    margin-top:2%;
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
.Field{
    width:50%;
    margin:2%;
}
.searchButton {
  margin-left: 35%;
  margin-top: 5%;
  margin-bottom:2%;
  width:30%;
  background-color:#f26e22;
  color:white;
  font-weight:bold;
}
.searchButton:hover {
  background-color:#2E0F59;
  color:white;
}
.item1 {
    

  font-size: 15px;
  color: white;
  font-weight: bold;
  text-align:center;
  margin:0.5%;
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
.colume5{
    margin-left:20%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume6{
    margin-left:45%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
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
.headerImage {
  width: 7%;
  height: 1%;
  border-radius: 15px;
  margin-right:55%;
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
.griditem{
  width:100%;
}
.griditem2{
  width:68%;
}
.menuIcon{
  display:none;
}
.LogoutIcon{
  display:none;
}
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
  .overlay2 {
    width: 75%;
    height: 60%;
    overflow:auto;
    }
    .MemberSearchOverlay{
      overflow:auto;
    }
  .searchButton {
    margin-top: 5%;
    margin-bottom: 2%;
  }
  .input{
    margin-left:20%;
  }
  
  .Signup{
    margin-left:25%;
    
  }
}
`;
