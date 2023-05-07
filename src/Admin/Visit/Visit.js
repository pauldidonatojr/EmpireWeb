import React, { useState, useRef } from "react";
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
import { Menu } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

//

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { addVisit, editVisit, getVisitByID } from "../../API/visitAPI";
import UserName from "../../UserName";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Link = require("react-router-dom").Link;

function Visit() {

  const showToastMessage = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const { signOut } = React.useContext(AuthContext);

  // MCO
  const [selectedMCO, setSelectedMCO] = useState('');
  const overlayRef = useRef(null);
  const handleSelectionChange = (event) => {
    setSelectedMCO(event.target.value);
    event.stopPropagation();
  }

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
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [visitEndTime, setVisitEndTime] = useState(dayjs('2023-04-17T15:30'));
  const [visitStartTime, setVisitStartTime] = useState(dayjs('2023-04-17T15:30'));
  const [scheduleStartTime, setScheduleStartTime] = useState(dayjs('2023-04-17T15:30'));
  const [scheduleEndTime, setScheduleEndTime] = useState(dayjs('2023-04-17T15:30'));
  const [dutiesList, setDutiesList] = useState([]);
  const [selectedDutyEditVisit, setSelectedDutyEditVisit] = useState('');
  const [selectedDuty, setSelectedDuty] = useState('');
  const [scheduleID, setScheduleID] = useState('13252546');
  const [visitID, setVisitID] = useState('');
  
  const [evvStartTime, setEvvStartTime] = useState(dayjs('2023-04-17T15:30'));
  const [evvEndTime, setEvvEndTime] = useState(dayjs('2023-04-17T15:30'));


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
  const [paidDate, setPaidDate] = useState(dayjs('2023-04-17T15:30'));
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


  const [careGiverCodeG, setCareGiverCodeG] = useState('');
  const [careGiverFirstNameG, setCareGiverFirstNameG] = useState('');
  const [careGiverLastNameG, setCareGiverLastNameG] = useState('');
  const [careGiverGenderG, setCareGiverGenderG] = useState('');
  const [careGiverDOBG, setCareGiverDOBG] = useState('');
  const [careGiverSSNG, setCareGiverSSNG] = useState('');

  const [memberFirstNameG, setMemberFirstNameG] = useState('');
  const [memberLastNameG, setMemberLastNameG] = useState('');





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



  const membersDataString = localStorage.getItem("Members");
  var membersData = JSON.parse(membersDataString);

  const cgDataString = localStorage.getItem("CareGivers");
  var cgData = JSON.parse(cgDataString);



  // 


  function getTimeDuration(start, end) {
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
  const [visitEditReasonAll, setVisitEditReasonAll] = useState([]);
  const [visitActionTakenAll, setVisitActionTakenAll] = useState([]);
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

      if (miscValues[key].tag == "visit_misc") {
        var obj = miscValues[key].fields;
        setVisitActionTakenAll(obj[1].visit_action_taken)
        setVisitEditReasonAll(obj[0].visit_edit_reason)
        console.log(obj)
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
    //setIsOverlayOpen3(true);
    setOpen3(true);
    setOpen2(false);

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


  //
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };

  //


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



  const visitsDataString = localStorage.getItem("Visits");
  var visitData = JSON.parse(visitsDataString);
  const [visitsDataRow, setVisitsDataRow] = useState([]);
  const [currMember, setCurrMember] = useState(null);
  const [currCaregiver, setCurrCaregiver] = useState(null);
  const [currVisit, setCurrVisit] = useState(null);
  const [allVisit, setAllVisit] = useState(null);
  const [currSelectedRow, setCurrSelectedRow] = useState([]);

  //Schedule States
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


  function getMemberVisitSearch(memberName) {
    var obj = {};
    var Mem = null;

    for (var key in membersData) {

      if (membersData[key].FirstName + " " + membersData[key].LastName == memberName) {
        var myArray = membersData[key];
        Mem = (myArray)
      }
    }
    obj.Member = Mem;
    return obj;

  }

  function getCareGiverVisitSearch(careGiverName) {
    var obj = {};
    var CG = null;

    for (var key in cgData) {
      if (cgData[key].FirstName + " " + cgData[key].LastName == careGiverName) {
        var myArray = cgData[key];
        CG = (myArray);
      }
    }
    obj.CareGiver = CG;
    return obj;

  }



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

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'mcoName', headerName: 'MCO Name', width: 200 },
    { field: 'coordinator', headerName: 'Coordinator', width: 100 },
    { field: 'admissionID', headerName: 'Admission ID', width: 200 },
    {
      field: 'memberName',
      headerName: 'Member Name',
      width: 250,
      renderCell: (params) => (
        <div>
          <Link to="/MemberDetails" state={{ selectedMemberID: null, selectedMemberName: params.value }}
          >
            {params.value}
          </Link>
        </div>
      )
    },
    { field: 'memberTeam', headerName: 'Member Team', width: 200 },
    {
      field: 'caregiverName',
      headerName: 'Care Giver Name',
      width: 250,
      renderCell: (params) => (
        <Link to="/CareGiverDetail" state={{ selectedMemberName: params.value }}
        >
          {params.value}
        </Link>
      )
    },
    { field: 'assignmentID', headerName: 'Assignment ID', width: 200 },
    { field: 'visitDate', headerName: 'Visit Date', width: 300 },
    { field: 'schedule', headerName: 'Schedule', width: 300 },
    { field: 'visit', headerName: 'Visit', width: 200 },
    { field: 'i', headerName: 'I', width: 100 },
    { field: 'o', headerName: 'O', width: 100 },
    { field: 'billed', headerName: 'Billed', width: 100 },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" onClick={() => {
          var cgMem = getMemberVisitSearch(currSelectedRow.memberName);
          var cgCG = getCareGiverVisitSearch(currSelectedRow.caregiverName);
          if (cgMem.Member != null) {
            setAdmissionIDEditVisit(cgMem.Member.AdmissionID);
            setCurrMember(cgMem.Member);
          }
          setCurrCaregiver(cgCG.CareGiver);
          setCurrSelectedRow(params.row);

          if (currMember != null && currCaregiver != null) {
            handleNonSkilledVisit()
          }
        }}>
          Edit
        </Button>
      ),
    },

  ];


  useEffect(() => {
    var arr = [];
    var arr2 = [];
    for (var key in visitData) {

      var myArray = visitData[key];
      var cgMem = getMemberVisitSearch(myArray.MemberFirstName + " " + myArray.MemberLastName);

      if (cgMem.Member != null) {
        var obj = {
          id: myArray.id,
          mcoName: cgMem.Member.MCOName,
          coordinator: cgMem.Member.CoordinatorName,
          admissionID: cgMem.Member.AdmissionID,
          memberName: myArray.MemberFirstName + " " + myArray.MemberLastName,
          memberTeam: cgMem.Member.Team,
          //
          caregiverName: myArray.CaregiverFirstName + " " + myArray.CaregiverLastName,
          assignmentID: "",

          visitDate: myArray.VisitStartTime,
          schedule: myArray.ScheduleStartTime,

          visit: '',
          i: '',
          o: '',
          billed: ''
        }

        arr.push(obj);

        var obj2 = {
          id: key,
          visitDetails: myArray
        }
        arr2.push(obj2);

      }
    }
    setAllVisit(arr2);
    setVisitsDataRow(arr);
  }, []);


  // VisitSearchView
  const [openTime, setOpenTime] = React.useState(false);
  const [nonSkilledVisit, setNonSkilledVisit] = useState(false);
  const [visitStartTimeHourVS, setVisitStartTimeHourVS] = useState(null);
  const [visitStartTimeMinVS, setVisitStartTimeMinVS] = useState(null);

  const [visitEndTimeHourVS, setVisitEndTimeHourVS] = useState(null);
  const [visitEndTimeMinVS, setVisitEndTimeMinVS] = useState(null);
  const [openMissedVisit, setOpenMissedVisit] = useState(false);



  function getDateTimeDayJS(timeStr) {
    const dateTimeString = timeStr;
    const myDate = dayjs(dateTimeString);
    const date = myDate.format('YYYY-MM-DD'); // Get date in 'YYYY-MM-DD' format
    const time = myDate.format('HH:mm:ss'); // Get time in 'HH:mm:ss' format

    var obj = { date: date, time: time };
    return obj;
  }

  function convertTimeFormat(time) {
    const formatString = "HH:mm";
    var v2 = dayjs(time, formatString);
    return v2;
  }




  function handleNonSkilledVisit(event) {
    getVisitById(currSelectedRow.id)
    setNonSkilledVisit(true);
    if (currVisit != null) {
      setCaregiverCodeEditVisit(currVisit.CaregiverCode)
      //setServiceCodeEditVisit(currVisit.service_code)

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

      setOpenTime(true);
    }
  }
  //
  const handleCloseTime = () => {
    setNonSkilledVisit(false);
    setOpenTime(false);
  };

  //
  const [NavigationState, setNavigationState] = React.useState(0);
  function SchedulePressed() {
    setNavigationState(1);
    renderOverlayViews()
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

              currMember.FirstName,
              currMember.LastName,
              memberId,
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
              console.log(res)
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
                    value={visitStartCV}
                    onChange={(newValue) => {
                      {
                        const timeDay = dayjs(visitStartCV).format('HH:mm:ss');
                        const date = dayjs(newValue).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${timeDay}`, 'YYYY-MM-DD HH:mm:ss');
                        setVisitStartCV(datetime);
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
                    value={visitStartCV}
                    onChange={(newValue) => {
                      {
                        const time = dayjs(newValue).format('HH:mm:ss');
                        const date = dayjs(visitStartCV).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                        setVisitStartCV(datetime);
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
                    value={visitEndCV}
                    onChange={(newValue) => {
                      {
                        const timeDay = dayjs(visitEndCV).format('HH:mm:ss');
                        const date = dayjs(newValue).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${timeDay}`, 'YYYY-MM-DD HH:mm:ss');
                        setVisitEndCV(datetime);
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
                    value={visitEndCV}
                    onChange={(newValue) => {
                      {
                        const time = dayjs(newValue).format('HH:mm:ss');
                        const date = dayjs(visitEndCV).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                        setVisitEndCV(datetime);
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
              console.log(res)
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
                  {/* {currVisit.service_code} */}
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
                console.log(res)
                if (res.data.result == "success") {
                  showToastMessage();

                }
              });
            }}>Save</Button>
            <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }} onClick={handleCloseTime}>Close</Button>
            <Button style={{ fontWeight: "font", margin: "1%", width: "15%", backgroundColor: "#564873", color: "white" }}>Print</Button>
          </div>
        </div>

      </div>

    )
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





  const VisitSearchView = () => {
    return (
      <>
        {open10 && !openTime && !open &&
          <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
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


            {setCareGiverForVisitName == null &&
              <h1 style={{ textAlign: "center" }}>Care Giver Not Selected</h1>
            }
            {setCareGiverForVisitName != null &&
              <h1 style={{ textAlign: "center" }}>Selected Care Giver is {careGiverForVisitName}</h1>
            }


            <div style={{ cursor: 'pointer', height: 400, width: '100%', overflowX: 'auto', overflowY: 'auto' }}>
              <DataGrid
                rows={careGiverList}
                columns={columnsCareGiverList}
                pageSize={5}
                rowsPerPageOptions={[15]}
                checkboxSelection={false}
                onRowClick={handleRowClickCareGiverForVisit}
              />
            </div>
            <Button className="searchButton" onClick={() => {
              handleClose10();
            }}>
              Close
            </Button>


          </div>
        }
        {openTime && !open && !open10 &&
          <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
            <CloseIcon className="crossIcon" onClick={handleCloseTime} />


            {/*  */}
            <h1 style={{ textAlign: "center", color: "black" }}>Non Skilled Visit</h1>
            <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid className="DataHolderGrid">
                  <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member Name:
                    {currMember != null &&
                      <span style={{ color: "#F2A007" }}>{currMember.FirstName + ' ' + currMember.LastName}</span>
                    }
                  </h2></div>
                </Grid>
                <Grid className="DataHolderGrid">
                  <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Visit Date:
                    {currVisit != null &&
                      <span style={{ color: "#F2A007" }}>{currVisit.VisitStartTime.split(" ")[0]}</span>
                    }
                  </h2></div>
                </Grid>
                <Grid className="DataHolderGrid">
                  <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member Phone:
                    {currMember != null &&
                      <span style={{ color: "#F2A007" }}>{currMember.HomePhone}</span>
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
        {open &&
          <div>
            <CloseIcon className="crossIcon" onClick={handleClose} />
            <h1 style={{ textAlign: "center", color: "black" }}>Set Filter from here !</h1>
            <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Visit Search</p>
            <div className="searchFieldsDiv">


              <Grid className="griditem">
                <TextField

                  id="outlined-basic"
                  label="Caregiver IN"
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
                  label="Member Name"
                  variant="outlined"
                />
              </Grid>
              <Grid className="griditem">

                <TextField
                  id="outlined-basic"
                  label="Caregiver Name"
                  variant="outlined"
                />

              </Grid>

              <Grid className="griditem">

                <TextField

                  id="outlined-basic"
                  label="From Date"
                  variant="outlined"
                />

              </Grid>
              <Grid className="griditem">

                <TextField

                  id="outlined-basic"
                  label="To Date"
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
                      <MenuItem value={10}>All</MenuItem>
                      <MenuItem value={20}>Default</MenuItem>
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
                      <MenuItem value={10}>All</MenuItem>
                      <MenuItem value={20}>Unassigned</MenuItem>
                      <MenuItem value={30}>Default</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

    
              <Grid className="griditem2">

                <Box >
                  <FormControl fullWidth>
                    <InputLabel >MCO</InputLabel>
                    <Select

                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Status"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>All</MenuItem>
                      <MenuItem value={20}>AmeriHealth Cartias of PA</MenuItem>
                      <MenuItem value={30}>Centene PA Health Wellness</MenuItem>
                      <MenuItem value={30}>KEYSTONE FIRST CHC</MenuItem>
                      <MenuItem value={30}>UPMC Health Plan</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

           

            </div>

            <Button className="searchButton" onClick={handleCloseOverlay}>
              Search
            </Button>
          </div>
        }
        {!open && !openTime &&
          <div style={{ height: "100%", width: '100%' }}>
            <DataGrid
              rows={visitsDataRow}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[15]}
              checkboxSelection={false}
            />
          </div>
        }
      </>
    );
  };


  const [CareGiverSearch, setCareGiverSearch] = useState(false);
  function CareGiverIconClick() {
    setCareGiverSearch(true);
    setOpen10(true);
    setOpenTime(false);
    setOpen(false)
    renderCareGivers();
  }
  const [open10, setOpen10] = React.useState(false);
  const handleClose10 = () => {
    setOpen10(false);
    setCareGiverSearch(false);
    setOpenTime(true)
  };


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
      setCaregiverCodeEditVisit(careGiverForVisit.CoCode);
      getAllCareGiverData(careGiverForVisit);
      console.log(careGiverForVisit.CoCode)
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
  // 


  function OverlayCareGiverSearch() {
    // return (
    //   <Backdrop
    //     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //     open={open10}

    //   >
    //     <div className="overlayCareGiver">
    //       <CloseIcon className="crossIcon" onClick={handleClose10} />
    //       <h1 style={{ textAlign: "center", color: "black" }}>Search Care Giver</h1>
    //       <div className="searchFieldsDiv">



    //         <Grid className="griditem">

    //           <TextField

    //             id="outlined-basic"
    //             label="Name"
    //             variant="outlined"
    //           />

    //         </Grid>
    //         <Grid className="griditem">

    //           <TextField

    //             id="outlined-basic"
    //             label="City"
    //             variant="outlined"
    //           />

    //         </Grid>
    //         <Grid className="griditem">

    //           <TextField

    //             id="outlined-basic"
    //             label="Code"
    //             variant="outlined"
    //           />

    //         </Grid>
    //         <Grid className="griditem">

    //           <TextField

    //             id="outlined-basic"
    //             label="Ethnicity"
    //             variant="outlined"
    //           />

    //         </Grid>
    //         <Grid className="griditem">

    //           <TextField

    //             id="outlined-basic"
    //             label="SSN"
    //             variant="outlined"
    //           />

    //         </Grid>
    //         <Grid className="griditem">

    //           <TextField

    //             id="outlined-basic"
    //             label="Discipline"
    //             variant="outlined"
    //           />

    //         </Grid>

    //       </div>
    //       <Button className="searchButton" onClick={handleClose10} >
    //         Search
    //       </Button>
    //       <DataGrid
    //         rows={careGiverList}
    //         columns={columns12}
    //         pageSize={5}
    //         rowsPerPageOptions={[15]}
    //         checkboxSelection
    //         onRowClick={handleRowClickCareGiverForVisit}
    //       />
    //     </div>
    //   </Backdrop>
    // );
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



  
  const [selectedPaidDate, setSelectedPaidDate] = useState(null);
  const VisitQuickSearchView = () => {
    return (
      <>
        {open10 &&
          <div>
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


            {setCareGiverForVisitName == null &&
              <h1 style={{ textAlign: "center" }}>Care Giver Not Selected</h1>
            }
            {setCareGiverForVisitName != null &&
              <h1 style={{ textAlign: "center" }}>Selected Care Giver is {careGiverForVisitName}</h1>
            }


            <div style={{ cursor: 'pointer', height: 400, width: '100%', overflowX: 'auto', overflowY: 'auto' }}>
              <DataGrid
                rows={careGiverList}
                columns={columns12}
                pageSize={5}
                rowsPerPageOptions={[15]}
                checkboxSelection={false}
                onRowClick={handleRowClickCareGiverForVisit}
              />
            </div>
            <Button className="searchButton" onClick={() => {
              handleClose10();
            }}>
              Close
            </Button>


          </div>
        }
        {open2 &&
          <div>
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
                />

              </Grid>

            </div>
            <Button className="searchButton" onClick={SearchButtonPressed} >
              Search
            </Button>
          </div>
        }
        {open3 &&
          <div>
            <CloseIcon className="crossIcon" onClick={handleClose3} />
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


            {memberForVisitName == null &&
              <h1 style={{ textAlign: "center" }}>Member Not Selected</h1>
            }
            {memberForVisitName != null &&
              <h1 style={{ textAlign: "center" }}>Selected Member is {memberForVisitName}</h1>
            }

            <div style={{ cursor: 'pointer', height: 400, width: '100%', overflowX: 'auto', overflowY: 'auto' }}>
              <DataGrid
                rows={membersList}
                columns={columns10}
                pageSize={5}
                rowsPerPageOptions={[15]}
                checkboxSelection={false}
                onRowClick={handleRowClick}
              />
            </div>


            <Button className="searchButton" onClick={() => {
              handleClose3();
              handleClose2();
            }}>
              Close
            </Button>


          </div>
        }

        {!open2 && !open3 && !open10 &&
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
                      label="Start Date"
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
                      label="Schedule Start Time"
                      value={scheduleStartTime}
                      onChange={(newValue) => {
                        const time = dayjs(newValue).format('HH:mm:ss');
                        const date = dayjs(selectedDate).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss');
                        setScheduleStartTime(datetime);
                        setSelectedDate(newValue);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>

              </div>


              <div style={{ display: "flex", justifyContent: "space-evenly" }}>



                <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                     label="End Date"
                     value={selectedEndDate}
                     onChange={(newValue) => {
                       setSelectedEndDate(newValue);
                     }}
                    />
                  </DemoContainer>
                </LocalizationProvider>



                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                      label="Schedule End Time"
                      value={scheduleEndTime}
                      onChange={(newValue) => {
                        const time = dayjs(newValue).format('HH:mm:ss');
                        const date = dayjs(selectedDate).format('YYYY-MM-DD');
                        const datetime = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss')
                        setScheduleEndTime(datetime);
                        setSelectedDate(newValue);
                      }}
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
                  onClick={() => { getTimeDuration(visitStartTime, visitEndTime) }}
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
                {/*  */}

                {/*======================================================== */}





                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                      label="Visit Start Time"
                      value={visitStartTime}
                      onChange={(newValue)=>{
                        setVisitStartTime(newValue);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                      label="Visit End Time"
                      value={visitEndTime}
                      onChange={(newValue)=>{
                        setVisitEndTime(newValue);
                      }}
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
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="Paid Date"
                                        value={selectedPaidDate}
                                        onChange={(newValue) => {
                                            setSelectedPaidDate(newValue);
                                        }}
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

                        console.log(res);
                        if (res.data.result == "success") {
                          showToastMessage();
                        }
                      });
                    }
                  }
                  }

                > Create Visit </Button>
              </div>
            </div>
          </div >
        }
      </>
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
      <ToastContainer />
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


.DataHolderGrid{
    width: 50%;
    text-align: center;
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


.showAllButton{

}

.scrollable-form{
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
  justify-content:center;
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
  overflow-y: auto;
  padding: 50px;
}
.crossIcon{
    margin-right:95%;
    margin-top:2%;
    color:black;
    cursor: pointer;
}
.searchFieldsDiv {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
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
  .DataHolderGrid{
    width: 100%;
    text-align: center;
  }
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
