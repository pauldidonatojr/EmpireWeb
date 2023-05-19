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
import dayjs from 'dayjs';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { ListItemText } from '@material-ui/core';

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
import UserName from "../../UserName";
import { getLast3Authorizations } from "../../API/last3AuthorizationsAPI";
import { editVisit } from "../../API/visitAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { addMasterWeek, editMasterWeek } from "../../API/masterWeekAPI";
import { updateMember } from "../../API/membersApi";

//


function MemberDetailsSFTP() {
    const [selectedDate, setSelectedDate] = useState(null);
    const { signOut } = React.useContext(AuthContext);
    const location = useLocation()
    const { selectedMemberID, selectedMemberName } = location.state;
    const [profileAddressTableRows, setProfileAddressTableRows] = useState([]);
    const [callMember, setCallMember] = useState(false);

    const showToastMessage = () => {
        toast.success('Visit Updated Successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
    };



    // For Edit Visit


    //  

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



    //Member States
    const [altMemberID, setAltMemberID] = useState("");
    const [branch, setBranch] = useState("");
    const [cluster, setCluster] = useState("");
    const [mcoName, setMcoName] = useState("");
    const [isDefault, setIsDefault] = useState("");
    const [discipline, setDiscipline] = useState("");
    const [evvRequired, setEvvRequired] = useState("");
    const [firstDayOfService, setFirstDayOfService] = useState("");
    const [fobRequired, setFobRequired] = useState("");
    const [fobSealID, setFobSealID] = useState("");
    const [lastDayOfService, setLastDayOfService] = useState("");
    const [isLinked, setIsLinked] = useState("");
    const [locationMember, setLocationMember] = useState("");
    const [mdOrderRequired, setMdOrderRequired] = useState("");
    const [isMutual, setIsMutual] = useState("");
    const [nurse, setNurse] = useState("");
    const [memberProfileHeaderAlert, setMemberProfileHeaderAlert] = useState("");
    const [projectedDCDate, setProjectedDCDate] = useState("");
    const [sourceOfAdmission, setSourceOfAdmission] = useState("");
    const [status, setStatus] = useState("");
    const [team, setTeam] = useState("");
    const [uniqueDeviceSerialNumber, setUniqueDeviceSerialNumber] = useState("");
    const [providerName, setProviderName] = useState("");
    const [acceptedServices, setAcceptedServices] = useState("");
    const [admissionID, setAdmissionID] = useState("");
    const [alert, setAlert] = useState("");
    const [coordinatorName, setCoordinatorName] = useState("");
    const [coordinatorName2, setCoordinatorName2] = useState("");
    const [coordinatorName3, setCoordinatorName3] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState("");
    const [icd10, setIcd10] = useState("");
    const [icd9, setIcd9] = useState("");
    const [ivrRequired, setIvrRequired] = useState("");
    const [lastName, setLastName] = useState("");
    const [medicaidNumber, setMedicaidNumber] = useState("");
    const [medicareNumber, setMedicareNumber] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [memberHIClaimNo, setMemberHIClaimNo] = useState("");
    const [memberID, setMemberID] = useState("");
    const [ssn, setSsn] = useState("");
    const [startDate, setStartDate] = useState("");
    const [isWageParity, setIsWageParity] = useState("");
    const [wageParityFromDate1, setWageParityFromDate1] = useState("");
    const [wageParityFromDate2, setWageParityFromDate2] = useState("");
    const [wageParityToDate1, setWageParityToDate1] = useState("");
    const [wageParityToDate2, setWageParityToDate2] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [crossStreet, setCrossStreet] = useState("");
    const [homePhone, setHomePhone] = useState("");
    const [homePhone2, setHomePhone2] = useState("");
    const [homePhone3, setHomePhone3] = useState("");
    const [stateMember, setStateMember] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [billingCity, setBillingCity] = useState("");
    const [billingFirstName, setBillingFirstName] = useState("");
    const [billingLastName, setBillingLastName] = useState("");
    const [billingMiddleName, setBillingMiddleName] = useState("");
    const [billingResponsibleParty, setBillingResponsibleParty] = useState("");
    const [billingState, setBillingState] = useState("");
    const [billingStreet, setBillingStreet] = useState("");
    const [billingZipCode, setBillingZipCode] = useState("");
    const [differentBillingAddress, setDifferentBillingAddress] = useState("");
    const [emergency1Address, setEmergency1Address] = useState("");
    const [emergency1Name, setEmergency1Name] = useState("");
    const [emergency1Phone1, setEmergency1Phone1] = useState("");
    const [emergency1phone2, setEmergency1phone2] = useState("");
    const [emergency1Relationship, setEmergency1Relationship] = useState("");
    const [emergency2Address, setEmergency2Address] = useState("");
    const [emergency2Name, setEmergency2Name] = useState("");
    const [emergency2Phone1, setEmergency2Phone1] = useState("");
    const [emergency2Phone2, setEmergency2Phone2] = useState("");
    const [emergency2Relationship, setEmergency2Relationship] = useState("");
    const [priorityCode, setPriorityCode] = useState("");
    const [evacuationZone, setEvacuationZone] = useState("");
    const [evacuationLocation, setEvacuationLocation] = useState("");
    const [mobilityStatus, setMobilityStatus] = useState("");
    const [electricEquipmentDependency, setElectricEquipmentDependency] = useState("");
    const [mcoPriorityCode, setMcoPriorityCode] = useState("");
    const [preferredGender, setPreferredGender] = useState("");
    const [shabbatObservant, setShabbatObservant] = useState("");
    const [accountManager, setAccountManager] = useState("");
    const [commissionStatus, setCommissionStatus] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [intakePerson, setIntakePerson] = useState("");
    const [receivedDate, setReceivedDate] = useState("");
    const [source, setSource] = useState("");
    const [type, setType] = useState("");
    const [clinicalComments, setClinicalComments] = useState("");
    const [mdVisitDue, setMdVisitDue] = useState("");
    const [allergies, setAllergies] = useState("");
    const [lastSkilledRNVisit, setLastSkilledRNVisit] = useState("");
    const [phiMemberID, setPhiMemberID] = useState("");







    //Master Week States ADD


    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const [startTimeM, setStartTimeM] = useState('');
    const [endTimeM, setEndTimeM] = useState('');
    const [careGiverCodeM, setCareGiverCodeM] = useState('');
    const [careGiverNameM, setCareGiverNameM] = useState('');
    const [assIdM, setAssIdM] = useState('');
    const [pocM, setPocM] = useState('');
    const [hoursM, setHoursM] = useState('');
    const [minutesM, setMinutesM] = useState('');
    const [secondsM, setSecondsM] = useState('');
    const [serviceCodeM, setServiceCodeM] = useState('');
    const [modeM, setModeM] = useState('');


    const [startTimeT, setStartTimeT] = useState('');
    const [endTimeT, setEndTimeT] = useState('');
    const [careGiverCodeT, setCareGiverCodeT] = useState('');
    const [careGiverNameT, setCareGiverNameT] = useState('');
    const [assIdT, setAssIdT] = useState('');
    const [pocT, setPocT] = useState('');
    const [hoursT, setHoursT] = useState('');
    const [minutesT, setMinutesT] = useState('');
    const [serviceCodeT, setServiceCodeT] = useState('');
    const [secondsT, setSecondsT] = useState('');
    const [modeT, setModeT] = useState('');


    const [startTimeW, setStartTimeW] = useState('');
    const [endTimeW, setEndTimeW] = useState('');
    const [careGiverCodeW, setCareGiverCodeW] = useState('');
    const [careGiverNameW, setCareGiverNameW] = useState('');
    const [assIdW, setAssIdW] = useState('');
    const [pocW, setPocW] = useState('');
    const [hoursW, setHoursW] = useState('');
    const [minutesW, setMinutesW] = useState('');
    const [serviceCodeW, setServiceCodeW] = useState('');
    const [secondsW, setSecondsW] = useState('');
    const [modeW, setModeW] = useState('');

    const [startTimeTH, setStartTimeTH] = useState('');
    const [endTimeTH, setEndTimeTH] = useState('');
    const [careGiverCodeTH, setCareGiverCodeTH] = useState('');
    const [careGiverNameTH, setCareGiverNameTH] = useState('');
    const [assIdTH, setAssIdTH] = useState('');
    const [pocTH, setPocTH] = useState('');
    const [hoursTH, setHoursTH] = useState('');
    const [minutesTH, setMinutesTH] = useState('');
    const [serviceCodeTH, setServiceCodeTH] = useState('');
    const [secondsTH, setSecondsTH] = useState('');
    const [modeTH, setModeTH] = useState('');


    const [startTimeF, setStartTimeF] = useState('');
    const [endTimeF, setEndTimeF] = useState('');
    const [careGiverCodeF, setCareGiverCodeF] = useState('');
    const [careGiverNameF, setCareGiverNameF] = useState('');
    const [assIdF, setAssIdF] = useState('');
    const [pocF, setPocF] = useState('');
    const [hoursF, setHoursF] = useState('');
    const [minutesF, setMinutesF] = useState('');
    const [serviceCodeF, setServiceCodeF] = useState('');
    const [secondsF, setSecondsF] = useState('');
    const [modeF, setModeF] = useState('');

    const [startTimeST, setStartTimeST] = useState('');
    const [endTimeST, setEndTimeST] = useState('');
    const [careGiverCodeST, setCareGiverCodeST] = useState('');
    const [careGiverNameST, setCareGiverNameST] = useState('');
    const [assIdST, setAssIdST] = useState('');
    const [pocST, setPocST] = useState('');
    const [hoursST, setHoursST] = useState('');
    const [minutesST, setMinutesST] = useState('');
    const [serviceCodeST, setServiceCodeST] = useState('');
    const [secondsST, setSecondsST] = useState('');
    const [modeST, setModeST] = useState('');


    const [startTimeSU, setStartTimeSU] = useState('');
    const [endTimeSU, setEndTimeSU] = useState('');
    const [careGiverCodeSU, setCareGiverCodeSU] = useState('');
    const [careGiverNameSU, setCareGiverNameSU] = useState('');
    const [assIdSU, setAssIdSU] = useState('');
    const [pocSU, setPocSU] = useState('');
    const [hoursSU, setHoursSU] = useState('');
    const [minutesSU, setMinutesSU] = useState('');
    const [serviceCodeSU, setServiceCodeSU] = useState('');
    const [secondsSU, setSecondsSU] = useState('');
    const [modeSU, setModeSU] = useState('');


    //====================



    //Master Week States Edit

    const [fromDateE, setFromDateE] = useState(null);
    const [toDateE, setToDateE] = useState(null);

    const [startTimeME, setStartTimeME] = useState('');
    const [endTimeME, setEndTimeME] = useState('');
    const [careGiverCodeME, setCareGiverCodeME] = useState('');
    const [careGiverNameME, setCareGiverNameME] = useState('');
    const [assIdME, setAssIdME] = useState('');
    const [pocME, setPocME] = useState('');
    const [hoursME, setHoursME] = useState('');
    const [minutesME, setMinutesME] = useState('');
    const [serviceCodeME, setServiceCodeME] = useState('');
    const [secondsME, setSecondsME] = useState('');
    const [modeME, setModeME] = useState('');


    const [startTimeTE, setStartTimeTE] = useState('');
    const [endTimeTE, setEndTimeTE] = useState('');
    const [careGiverCodeTE, setCareGiverCodeTE] = useState('');
    const [careGiverNameTE, setCareGiverNameTE] = useState('');
    const [assIdTE, setAssIdTE] = useState('');
    const [pocTE, setPocTE] = useState('');
    const [hoursTE, setHoursTE] = useState('');
    const [minutesTE, setMinutesTE] = useState('');
    const [serviceCodeTE, setServiceCodeTE] = useState('');
    const [secondsTE, setSecondsTE] = useState('');
    const [modeTE, setModeTE] = useState('');


    const [startTimeWE, setStartTimeWE] = useState('');
    const [endTimeWE, setEndTimeWE] = useState('');
    const [careGiverCodeWE, setCareGiverCodeWE] = useState('');
    const [careGiverNameWE, setCareGiverNameWE] = useState('');
    const [assIdWE, setAssIdWE] = useState('');
    const [pocWE, setPocWE] = useState('');
    const [hoursWE, setHoursWE] = useState('');
    const [minutesWE, setMinutesWE] = useState('');
    const [serviceCodeWE, setServiceCodeWE] = useState('');
    const [secondsWE, setSecondsWE] = useState('');
    const [modeWE, setModeWE] = useState('');

    const [startTimeTHE, setStartTimeTHE] = useState('');
    const [endTimeTHE, setEndTimeTHE] = useState('');
    const [careGiverCodeTHE, setCareGiverCodeTHE] = useState('');
    const [careGiverNameTHE, setCareGiverNameTHE] = useState('');
    const [assIdTHE, setAssIdTHE] = useState('');
    const [pocTHE, setPocTHE] = useState('');
    const [hoursTHE, setHoursTHE] = useState('');
    const [minutesTHE, setMinutesTHE] = useState('');
    const [serviceCodeTHE, setServiceCodeTHE] = useState('');
    const [secondsTHE, setSecondsTHE] = useState('');
    const [modeTHE, setModeTHE] = useState('');


    const [startTimeFE, setStartTimeFE] = useState('');
    const [endTimeFE, setEndTimeFE] = useState('');
    const [careGiverCodeFE, setCareGiverCodeFE] = useState('');
    const [careGiverNameFE, setCareGiverNameFE] = useState('');
    const [assIdFE, setAssIdFE] = useState('');
    const [pocFE, setPocFE] = useState('');
    const [hoursFE, setHoursFE] = useState('');
    const [minutesFE, setMinutesFE] = useState('');
    const [serviceCodeFE, setServiceCodeFE] = useState('');
    const [secondsFE, setSecondsFE] = useState('');
    const [modeFE, setModeFE] = useState('');

    const [startTimeSTE, setStartTimeSTE] = useState('');
    const [endTimeSTE, setEndTimeSTE] = useState('');
    const [careGiverCodeSTE, setCareGiverCodeSTE] = useState('');
    const [careGiverNameSTE, setCareGiverNameSTE] = useState('');
    const [assIdSTE, setAssIdSTE] = useState('');
    const [pocSTE, setPocSTE] = useState('');
    const [hoursSTE, setHoursSTE] = useState('');
    const [minutesSTE, setMinutesSTE] = useState('');
    const [serviceCodeSTE, setServiceCodeSTE] = useState('');
    const [secondsSTE, setSecondsSTE] = useState('');
    const [modeSTE, setModeSTE] = useState('');


    const [startTimeSUE, setStartTimeSUE] = useState('');
    const [endTimeSUE, setEndTimeSUE] = useState('');
    const [careGiverCodeSUE, setCareGiverCodeSUE] = useState('');
    const [careGiverNameSUE, setCareGiverNameSUE] = useState('');
    const [assIdSUE, setAssIdSUE] = useState('');
    const [pocSUE, setPocSUE] = useState('');
    const [hoursSUE, setHoursSUE] = useState('');
    const [minutesSUE, setMinutesSUE] = useState('');
    const [serviceCodeSUE, setServiceCodeSUE] = useState('');
    const [secondsSUE, setSecondsSUE] = useState('');
    const [modeSUE, setModeSUE] = useState('');


    //====================








    // =========================

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
            if (selectedMemberID != null) {
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
                    if (myArray.FOBRequired == 'Yes') {
                        setIsCheckedFOBConfirmation(true);
                    }
                    if (myArray.FOBRequired == 'No') {
                        setIsCheckedFOBConfirmation(false);
                    }
                    setProfileAddressTableRows(arr);

                    setAltMemberID(myArray.AltMemberID)
                    setBranch(myArray.Branch)
                    setCluster(myArray.Cluster)
                    setMcoName(myArray.MCOName)
                    setIsDefault(myArray.Default)
                    setDiscipline(myArray.Discipline)
                    setEvvRequired(myArray.EVVRequired)
                    setFirstDayOfService(myArray.FirstDayofService)
                    setFobRequired(myArray.FOBRequired)
                    setFobSealID(myArray.FOBSealID)
                    setLastDayOfService(myArray.LastDayofService)
                    setIsLinked(myArray.Linked)
                    setLocationMember(myArray.Location)
                    setMdOrderRequired(myArray.MDOrderRequired)
                    setIsMutual(myArray.Mutual)
                    setNurse(myArray.Nurse)
                    setMemberProfileHeaderAlert(myArray.MemberProfileHeaderAlert)
                    setProjectedDCDate(myArray.ProjectedDCDate)
                    setSourceOfAdmission(myArray.SourceOfAdmission)
                    setStatus(myArray.Status)
                    setTeam(myArray.Team)
                    setUniqueDeviceSerialNumber(myArray.UniqueDeviceSerialNumber)
                    setProviderName(myArray.ProviderName)
                    setAcceptedServices(myArray.AcceptedServices)
                    setAdmissionID(myArray.AdmissionID)
                    setAlert(myArray.Alert)
                    setCoordinatorName(myArray.CoordinatorName)
                    setCoordinatorName2(myArray.CoordinatorName2)
                    setCoordinatorName3(myArray.CoordinatorName3)
                    setDateOfBirth(myArray.DateofBirth)
                    setFirstName(myArray.FirstName)
                    setGender(myArray.Gender)
                    setIcd10(myArray['ICD-10'])
                    setIcd9(myArray['ICD-9'])
                    setIvrRequired(myArray.IVRRequired)
                    setLastName(myArray.LastName)
                    setMedicaidNumber(myArray.MedicaidNumber)
                    setMedicareNumber(myArray.MedicareNumber)
                    setMiddleName(myArray.MiddleName)
                    setMemberHIClaimNo(myArray.MemberHIClaimNo)
                    setMemberID(myArray.MemberID)
                    setSsn(myArray.SSN)
                    setStartDate(myArray.StartDate)
                    setIsWageParity(myArray.WageParity)
                    setWageParityFromDate1(myArray.WageParityFromDate1)
                    setWageParityFromDate2(myArray.WageParityFromDate2)
                    setWageParityToDate1(myArray.WageParityToDate1)
                    setWageParityToDate2(myArray.WageParityToDate2)
                    setAddress1(myArray.Address1)
                    setAddress2(myArray.Address2)
                    setCity(myArray.City)
                    setCrossStreet(myArray.CrossStreet)
                    setHomePhone(myArray.HomePhone)
                    setHomePhone2(myArray.HomePhone2)
                    setHomePhone3(myArray.HomePhone3)
                    setStateMember(myArray.State)
                    setZipCode(myArray.ZipCode)
                    setBillingCity(myArray.BillingCity)
                    setBillingFirstName(myArray.BillingFirstName)
                    setBillingLastName(myArray.BillingLastName)
                    setBillingMiddleName(myArray.BillingMiddleName)
                    setBillingResponsibleParty(myArray.BillingResponsibleParty)
                    setBillingState(myArray.BillingState)
                    setBillingStreet(myArray.BillingStreet)
                    setBillingZipCode(myArray.BillingZipCode)
                    setDifferentBillingAddress(myArray.DifferentBillingAddress)
                    setEmergency1Address(myArray.Emergency1Address)
                    setEmergency1Name(myArray.Emergency1Name)
                    setEmergency1Phone1(myArray.Emergency1Phone1)
                    setEmergency1phone2(myArray.Emergency1phone2)
                    setEmergency1Relationship(myArray.Emergency1Relationship)
                    setEmergency2Address(myArray.Emergency2Address)
                    setEmergency2Name(myArray.Emergency2Name)
                    setEmergency2Phone1(myArray.Emergency2Phone1)
                    setEmergency2Phone2(myArray.Emergency2Phone2)
                    setEmergency2Relationship(myArray.Emergency2Relationship)
                    setPriorityCode(myArray.PriorityCode)
                    setEvacuationZone(myArray.EvacuationZone)
                    setEvacuationLocation(myArray.EvacuationLocation)
                    setMobilityStatus(myArray.MobilityStatus)
                    setElectricEquipmentDependency(myArray.ElectricEquipmentDependency)
                    setMcoPriorityCode(myArray.MCOPriorityCode)
                    setPreferredGender(myArray.PreferredGender)
                    setShabbatObservant(myArray.ShabbatObservant)
                    setAccountManager(myArray.AccountManager)
                    setCommissionStatus(myArray.CommissionStatus)
                    setContactPerson(myArray.ContactPerson)
                    setIntakePerson(myArray.IntakePerson)
                    setReceivedDate(myArray.ReceivedDate)
                    setSource(myArray.Source)
                    setType(myArray.Type)
                    setClinicalComments(myArray.ClinicalComments)
                    setMdVisitDue(myArray.MDVisitDue)
                    setAllergies(myArray.Allergies)
                    setLastSkilledRNVisit(myArray['LastSkilled/RNVisit'])
                    setPhiMemberID(myArray.PHIMemberID)
                }
            }
            else if (selectedMemberName != null) {
                if (membersData[key].FirstName + " " + membersData[key].LastName == selectedMemberName) {
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
                    if (myArray.FOBRequired == 'Yes') {
                        setIsCheckedFOBConfirmation(true);
                    }
                    if (myArray.FOBRequired == 'No') {
                        setIsCheckedFOBConfirmation(false);
                    }
                    setProfileAddressTableRows(arr);

                    setAltMemberID(myArray.AltMemberID)
                    setBranch(myArray.Branch)
                    setCluster(myArray.Cluster)
                    setMcoName(myArray.MCOName)
                    setIsDefault(myArray.Default)
                    setDiscipline(myArray.Discipline)
                    setEvvRequired(myArray.EVVRequired)
                    setFirstDayOfService(myArray.FirstDayofService)
                    setFobRequired(myArray.FOBRequired)
                    setFobSealID(myArray.FOBSealID)
                    setLastDayOfService(myArray.LastDayofService)
                    setIsLinked(myArray.Linked)
                    setLocationMember(myArray.Location)
                    setMdOrderRequired(myArray.MDOrderRequired)
                    setIsMutual(myArray.Mutual)
                    setNurse(myArray.Nurse)
                    setMemberProfileHeaderAlert(myArray.MemberProfileHeaderAlert)
                    setProjectedDCDate(myArray.ProjectedDCDate)
                    setSourceOfAdmission(myArray.SourceOfAdmission)
                    setStatus(myArray.Status)
                    setTeam(myArray.Team)
                    setUniqueDeviceSerialNumber(myArray.UniqueDeviceSerialNumber)
                    setProviderName(myArray.ProviderName)
                    setAcceptedServices(myArray.AcceptedServices)
                    setAdmissionID(myArray.AdmissionID)
                    setAlert(myArray.Alert)
                    setCoordinatorName(myArray.CoordinatorName)
                    setCoordinatorName2(myArray.CoordinatorName2)
                    setCoordinatorName3(myArray.CoordinatorName3)
                    setDateOfBirth(myArray.DateofBirth)
                    setFirstName(myArray.FirstName)
                    setGender(myArray.Gender)
                    setIcd10(myArray['ICD-10'])
                    setIcd9(myArray['ICD-9'])
                    setIvrRequired(myArray.IVRRequired)
                    setLastName(myArray.LastName)
                    setMedicaidNumber(myArray.MedicaidNumber)
                    setMedicareNumber(myArray.MedicareNumber)
                    setMiddleName(myArray.MiddleName)
                    setMemberHIClaimNo(myArray.MemberHIClaimNo)
                    setMemberID(myArray.MemberID)
                    setSsn(myArray.SSN)
                    setStartDate(myArray.StartDate)
                    setIsWageParity(myArray.WageParity)
                    setWageParityFromDate1(myArray.WageParityFromDate1)
                    setWageParityFromDate2(myArray.WageParityFromDate2)
                    setWageParityToDate1(myArray.WageParityToDate1)
                    setWageParityToDate2(myArray.WageParityToDate2)
                    setAddress1(myArray.Address1)
                    setAddress2(myArray.Address2)
                    setCity(myArray.City)
                    setCrossStreet(myArray.CrossStreet)
                    setHomePhone(myArray.HomePhone)
                    setHomePhone2(myArray.HomePhone2)
                    setHomePhone3(myArray.HomePhone3)
                    setStateMember(myArray.State)
                    setZipCode(myArray.ZipCode)
                    setBillingCity(myArray.BillingCity)
                    setBillingFirstName(myArray.BillingFirstName)
                    setBillingLastName(myArray.BillingLastName)
                    setBillingMiddleName(myArray.BillingMiddleName)
                    setBillingResponsibleParty(myArray.BillingResponsibleParty)
                    setBillingState(myArray.BillingState)
                    setBillingStreet(myArray.BillingStreet)
                    setBillingZipCode(myArray.BillingZipCode)
                    setDifferentBillingAddress(myArray.DifferentBillingAddress)
                    setEmergency1Address(myArray.Emergency1Address)
                    setEmergency1Name(myArray.Emergency1Name)
                    setEmergency1Phone1(myArray.Emergency1Phone1)
                    setEmergency1phone2(myArray.Emergency1phone2)
                    setEmergency1Relationship(myArray.Emergency1Relationship)
                    setEmergency2Address(myArray.Emergency2Address)
                    setEmergency2Name(myArray.Emergency2Name)
                    setEmergency2Phone1(myArray.Emergency2Phone1)
                    setEmergency2Phone2(myArray.Emergency2Phone2)
                    setEmergency2Relationship(myArray.Emergency2Relationship)
                    setPriorityCode(myArray.PriorityCode)
                    setEvacuationZone(myArray.EvacuationZone)
                    setEvacuationLocation(myArray.EvacuationLocation)
                    setMobilityStatus(myArray.MobilityStatus)
                    setElectricEquipmentDependency(myArray.ElectricEquipmentDependency)
                    setMcoPriorityCode(myArray.MCOPriorityCode)
                    setPreferredGender(myArray.PreferredGender)
                    setShabbatObservant(myArray.ShabbatObservant)
                    setAccountManager(myArray.AccountManager)
                    setCommissionStatus(myArray.CommissionStatus)
                    setContactPerson(myArray.ContactPerson)
                    setIntakePerson(myArray.IntakePerson)
                    setReceivedDate(myArray.ReceivedDate)
                    setSource(myArray.Source)
                    setType(myArray.Type)
                    setClinicalComments(myArray.ClinicalComments)
                    setMdVisitDue(myArray.MDVisitDue)
                    setAllergies(myArray.Allergies)
                    setLastSkilledRNVisit(myArray['LastSkilled/RNVisit'])
                    setPhiMemberID(myArray.PHIMemberID)
                }
            }
        }
    }, []);

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


    const [ViewSelected, setViewSelected] = useState(2);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
    const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);

    const [selectedAuth3Row, setSelectedAuth3Row] = useState(null);
    const [rowDiagnosisCodeV, setRowDiagnosisCodeV] = useState(null);

    const columnsDiagnosisCode = [
        { field: 'id', headerName: 'Code', width: 100 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'admit', headerName: 'Admit', width: 200 },
        { field: 'primary', headerName: 'Primary', width: 200 },
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
        { id: 1, description: 'John', admit: 'Doe' },
        { id: 2, description: 'Jane', admit: 'Doe' },
    ];


    //Last 3 Auth Auth-Type
    const [authTypeOpen, setAuthTypeOpen] = useState(false);
    const handleClickAuthType = (row) => {
        setAuthTypeOpen(true);
        for (var key in l3AllData) {
            if (row.id == l3AllData[key].id) {
                setSelectedAuth3Row(l3AllData[key]);
                var obj2 = {
                    id: l3AllData[key].billing_diag_code.code,
                    description: l3AllData[key].billing_diag_code.description,
                    admit: l3AllData[key].billing_diag_code.admit,
                    primary: l3AllData[key].billing_diag_code.primary,
                }
                var arr = [];
                arr.push(obj2);
                setRowDiagnosisCodeV(arr);
            }
        }
    }

    const handleClickAuthTypeClose = () => {
        setViewSelected(2);
    }


    //POC 
    const [pocTypeOpen, setPocAuthTypeOpen] = useState(false);
    const pocClickType = () => {
        setPocAuthTypeOpen(true);
    }

    const pocClickTypeClose = () => {
        setViewSelected(9);
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
                open={open}>

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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>MCO</InputLabel>
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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Office</InputLabel>
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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>MCO</InputLabel>
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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Export Status</InputLabel>
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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Billing Hold</InputLabel>
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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Status</InputLabel>
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
                                    <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>MCO</InputLabel>
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



    function Overlay4() {
        return (

            <div className="">
                <CloseIcon className="crossIcon" onClick={handleClickAuthTypeClose} />


                <h1 style={{ textAlign: "center", color: "black" }}>Authorization</h1>

                <div className="searchFieldsDiv">


                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="Service Category"
                            variant="outlined"
                            value={selectedAuth3Row.service_category}
                        />
                    </Grid>
                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="Service Type"
                            variant="outlined"
                            value={selectedAuth3Row.service_type}
                        />
                    </Grid>
                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="Authorization Number"
                            variant="outlined"
                            value={""}
                        />
                    </Grid>
                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="Service Code"
                            variant="outlined"
                            value={selectedAuth3Row.service_code}
                        />
                    </Grid>
                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="From Date DD/MM/YYYY"
                            variant="outlined"
                            value={selectedAuth3Row.from_date}
                        />
                    </Grid>

                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="To Date DD/MM/YYYY"
                            variant="outlined"
                            value={selectedAuth3Row.to_date}
                        />
                    </Grid>

                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="Service Code Type"
                            variant="outlined"
                            value={selectedAuth3Row.service_code_type}
                        />
                    </Grid>

                    <Grid className="griditem">
                        <TextField
                            id="outlined-basic"
                            label="Authorization Type"
                            variant="outlined"
                            value={selectedAuth3Row.auth_type}
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
                    <h3 style={{ textAlign: "center", color: "black" }}>Document</h3>
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
                    <h3 style={{ textAlign: "center", color: "black" }}>Billing Diagnosis Code</h3>
                    <div style={{ height: 400, width: '100%', overflowX: 'auto' }}>
                        <DataGrid
                            rows={rowDiagnosisCodeV}
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
                        value={selectedAuth3Row.notes}
                    />
                </div>

            </div>


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

            <div className="">
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
                                <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Status</InputLabel>
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

            case 11:
                return Overlay4();
            case 22:
                return Overlay5();

            case 33:
                return EditMasterWeekView();
            case 44:
                return AddMasterWeekView();

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
    const visitsDataString = localStorage.getItem("Visits");
    var visitData = JSON.parse(visitsDataString);
    const cgDataString = localStorage.getItem("CareGivers");
    var cgData = JSON.parse(cgDataString);

    // const l3ADataString = localStorage.getItem("Last3Authorizations");
    // var l3AData = JSON.parse(l3ADataString);
    const [l3DataRow, setL3DataRow] = useState([]);
    const [l3AllData, setL3AllData] = useState([]);


    const [visitsDataRow, setVisitsDataRow] = useState([]);


    const [visitsViewRow, setVisitsViewRow] = useState([]);

    const [currMember, setCurrMember] = useState(null);
    const [currCaregiver, setCurrCaregiver] = useState(null);
    const [currVisit, setCurrVisit] = useState(null);
    const [allVisit, setAllVisit] = useState(null);
    const [currSelectedRow, setCurrSelectedRow] = useState([]);

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
        setCurrCaregiver(obj);
    }

    function getDateTimeDayJS(timeStr) {
        const dateTimeString = timeStr;
        const myDate = dayjs(dateTimeString);
        const date = myDate.format('YYYY-MM-DD'); // Get date in 'YYYY-MM-DD' format
        const time = myDate.format('HH:mm:ss'); // Get time in 'HH:mm:ss' format

        var obj = { date: date, time: time };
        return obj;
    }

    useEffect(() => {
        var arr = [];
        var arr2 = [];
        var arr3 = [];
        if (member != null) {
            for (var key in visitData) {

                if (visitData[key].MemberFirstName + " " + visitData[key].MemberLastName == member.FirstName + ' ' + member.LastName) {
                    var myArray = visitData[key];
                    getCareGiverVisitSearch(myArray.CaregiverFirstName + " " + myArray.CaregiverLastName);

                    var obj = {
                        start: myArray.ScheduleStartTime,
                        end: myArray.ScheduleEndTime,
                        title: myArray.CaregiverFirstName + " " + myArray.CaregiverLastName,
                        description: 'This is event 1',
                        id: myArray.id
                    }

                    arr.push(obj);

                    var obj2 = {
                        id: key,
                        visitDetails: myArray
                    }
                    arr2.push(obj2);


                    var obj3 = {
                        id: myArray.VisitStartTime.split(" ")[0],
                        schedule: myArray.ScheduleID,
                        provider: "",
                        serviceCode: "",
                        careGiver: myArray.CaregiverFirstName + " " + myArray.CaregiverLastName,
                        confirmedTime: '',
                        billed: '',
                        billedUnits: myArray.UnitsBilled,
                        billedTime: '',
                        holdVisit: '',
                        claimStatus: ''
                    }
                    arr3.push(obj3);

                }
            }
        }
        setAllVisit(arr2);
        setVisitsDataRow(arr);
        setVisitsViewRow(arr3);
    }, [member]);


    useEffect(() => {
        const fetchData = async () => {
            if (member != null) {
                try {
                    const res = await getLast3Authorizations(member.MemberID);
                    const l3AData = res.data;
                    const arr = l3AData.map(myArray => ({
                        id: myArray.id,
                        fromDate: myArray.from_date,
                        toDate: myArray.to_date,
                        serviceType: myArray.service_type,
                        serviceCode: myArray.service_code,
                        serviceCat: myArray.service_category,
                        notes: myArray.notes,
                        visit: ''
                    }));
                    setL3AllData(l3AData);
                    setL3DataRow(arr);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchData();
    }, [member]);

    const [providerInfoList, setProviderInfoList] = useState([]);
    const [statusHistoryList, setStatusHistoryList] = useState([]);
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        if (member != null) {
            var obj = {
                id: member.MemberID,
                providerName: member.ProviderName,
                coordinatorName: member.CoordinatorName,
                startOfCareDate: member.StartDate,
                firstVisitDate: "",
                dischargedDate: "",
                print: ''
            }
            var arr = [];
            arr.push(obj)
            setProviderInfoList(arr);
        }
    }, [member]);


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
    function handleEventClick(event) {
        setIsTimeOverlay(true);
        setOpenTime(true);

    }


    function populateActionTaken(name) {
        var code;
        var arr = [];
        for (var key in visitEditReasonAll) {
            if (visitEditReasonAll[key].description == name) {
                code = visitEditReasonAll[key].code;
            }
        }

        for (var key in visitActionTakenAll) {
            if (visitActionTakenAll[key].code == code) {
                var obj = visitActionTakenAll[key].description;
                arr.push(obj);
            }
        }
        setActionTakenSelectedList(arr);
    }

    function convertTimeFormat(time) {
        const formatString = "HH:mm";
        var v2 = dayjs(time, formatString);
        return v2;
    }

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
        { field: 'category', headerName: 'Category', width: 200 },
        { field: 'duty', headerName: 'Duty', width: 400 },



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





    //Select Care Giver for The Schedule
    const handleClose10 = () => {
        setOpen10(false);
        setCareGiverSearch(false);
    };

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
        setOpen10(true);
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

    //==============================================
    const columnsReasonVS = [
        { field: 'id', headerName: 'Code', width: 100 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'admit', headerName: 'Admit', width: 200 },
        { field: 'primary', headerName: 'Primary', width: 200 },
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

                            member.FirstName,
                            member.LastName,
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
                            <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>New Reason</InputLabel>
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
                            <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Action Taken</InputLabel>
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
            <>
                {open10 &&
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
                {opentime && !open10 &&
                    <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
                        <CloseIcon className="crossIcon" onClick={handleCloseTime} />
                        {/*  */}
                        <h1 style={{ textAlign: "center", color: "black" }}>Non Skilled Visit</h1>
                        <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
                            <Grid container spacing={2}>
                                <Grid className="DataHolderGrid">
                                    <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Member Name:
                                        {member != null &&
                                            <span style={{ color: "#F2A007" }}>{" " + member.FirstName + ' ' + member.LastName}</span>
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
                                        {member != null &&
                                            <span style={{ color: "#F2A007" }}>{" " + member.HomePhone}</span>
                                        }
                                    </h2></div>
                                </Grid>
                                <Grid className="DataHolderGrid">
                                    <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Assignment ID:
                                        {member != null &&
                                            <span style={{ color: "#F2A007" }}>{""}</span>
                                        }
                                    </h2></div>
                                </Grid>

                                <Grid className="DataHolderGrid">
                                    <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Coordinator:
                                        {member != null &&
                                            <span style={{ color: "#F2A007" }}>{member.MCOName}</span>}
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
                                rows={l3DataRow}
                                columns={columns10}
                                pageSize={5}
                                rowsPerPageOptions={[15]}
                                checkboxSelection={false}
                            />
                        </div>

                        <h1 style={{ color: "#564873", textAlign: "center" }}>Calender</h1>
                        <div style={{ height: "100%", width: '100%' }}>
                            <Calendar
                                events={visitsDataRow}
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

                    </div>
                }
            </>
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

    const [providerCoordinatorMemberTeam, setProviderCoordinatorMemberTeam] = useState('Default');

    const handleDropdownProviderCoordinatorMemberTeam = (event) => {
        setProviderCoordinatorMemberTeam(event.target.value);
    };

    const [officeMemberTeam, setOfficeMemberTeam] = useState('Select');

    const handleOfficeMemberTeam = (event) => {
        setOfficeMemberTeam(event.target.value);
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
                <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '30px' }}>



                    <div className="generalFields">

                        <div style={{ marginTop: 15 }}>
                            {member != null &&
                                <TextField
                                    id="outlined-basic"
                                    label="Nurse"
                                    variant="outlined"
                                    value={member.Nurse}
                                    style={{ width: 350 }}
                                />
                            }
                        </div>

                        <div style={{ marginTop: 15 }}>
                            {member != null &&
                                <div>
                                    <Box style={{ width: 350 }}>
                                        <FormControl fullWidth>
                                            <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Provider Coordinator</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={providerCoordinatorMemberTeam}
                                                label="Status"
                                                onChange={handleDropdownProviderCoordinatorMemberTeam}
                                            >
                                                <MenuItem value="Select">Select</MenuItem>
                                                <MenuItem value="Default">Default</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </div>


                            }
                        </div>
                    </div>


                    <div className="generalFields">


                        <div style={{ marginTop: 15 }}>
                            {member != null &&


                                <Box style={{ width: 350 }}>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }} >Office</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={officeMemberTeam}
                                            label="Status"
                                            onChange={handleOfficeMemberTeam}
                                        >
                                            <MenuItem value="Select">Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            }
                        </div>




                        <Box style={{ width: 350, marginTop: 15 }}>
                            <FormControl fullWidth>
                                <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }} >Member Team</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={team}
                                    onChange={(evt) => { setTeam(evt.target.value) }}
                                >
                                    <MenuItem value="Unassigned">Unassigned</MenuItem>
                                    <MenuItem value="Assigned">Assigned</MenuItem>
                                    <MenuItem value="Default">Default</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>



                    </div>

                    <div className="generalFields">
                        <div style={{ margin: "5px", marginTop: 15 }}><h2 style={{ color: "grey", fontSize: '15px' }}>Disable Automatic Visit Creation Based on EVV Confirmations: <span style={{ color: "#F2A007" }}>
                            <Checkbox
                                checked={isCheckedEVVConfirmation}
                                onChange={handleCheckboxChangeEVVConfirmation}
                            />
                        </span></h2></div>

                        <div style={{ margin: "5px", marginTop: 15 }}><h2 style={{ color: "grey", fontSize: '15px' }}> Enable FOB Confirmation: <span style={{ color: "#F2A007" }}>
                            <Checkbox
                                checked={isCheckedFOBConfirmation}
                                onChange={handleCheckboxChangeFOBConfirmation}
                            />
                        </span></h2></div>
                    </div>


                    <div className="generalFields">

                        <div style={{ marginTop: 15 }}>
                            {member != null &&


                                <Box style={{ width: 350 }}>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Location</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={officeMemberTeam}
                                            onChange={handleOfficeMemberTeam}
                                        >
                                            <MenuItem value="Select">Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            }
                        </div>




                        <div style={{ marginTop: 15 }}>
                            {member != null &&


                                <Box style={{ width: 350 }}>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Branch</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={officeMemberTeam}
                                            onChange={handleOfficeMemberTeam}
                                        >
                                            <MenuItem value="Select">Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            }
                        </div>

                    </div>

                    <div className="generalFields">
                        <div>
                            {member != null &&
                                <div style={{ margin: "5px", marginTop: 15 }}><h2 style={{ color: "grey", fontSize: '15px' }}>EVV Required: <span style={{ color: "#F2A007" }}>{member.EVVRequired}</span></h2></div>
                            }
                        </div>
                        <div>

                            {member != null &&
                                <div style={{ margin: "5px", marginTop: 15 }}><h2 style={{ color: "grey", fontSize: '15px' }}>Mutual Case With: <span style={{ color: "#F2A007" }}>{member.Mutual}</span></h2></div>
                            }
                        </div>

                    </div>

                    <div className="generalFields">

                        <div>

                            {member != null &&
                                <div style={{ margin: "5px", marginTop: 15 }}><h2 style={{ color: "grey", fontSize: '15px' }}>Frequency: <span style={{ color: "#F2A007" }}>{""}</span></h2></div>
                            }
                        </div>

                        <Box style={{ width: 350, marginTop: 15 }}>
                            <FormControl fullWidth>
                                <InputLabel style={{ backgroundColor: "#f2f2f2", color: "grey" }}>Source of Admission</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sourceOfAdmission}
                                    onChange={(evt) => { setSourceOfAdmission(evt.target.value) }}
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
                            </FormControl>
                        </Box>


                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
                        <Button className="EditButton" variant="outlined" onClick={() => {
                            updateMember(
                                altMemberID,
                                branch,
                                cluster,
                                mcoName,
                                isDefault,
                                discipline,
                                evvRequired,
                                firstDayOfService,
                                fobRequired,
                                fobSealID,
                                lastDayOfService,
                                isLinked,
                                locationMember,
                                mdOrderRequired,
                                isMutual,
                                nurse,
                                memberProfileHeaderAlert,
                                projectedDCDate,
                                sourceOfAdmission,
                                status,
                                team,
                                uniqueDeviceSerialNumber,
                                providerName,
                                acceptedServices,
                                admissionID,
                                alert,
                                coordinatorName,
                                coordinatorName2,
                                coordinatorName3,
                                dateOfBirth,
                                firstName,
                                gender,
                                icd10,
                                icd9,
                                ivrRequired,
                                lastName,
                                medicaidNumber,
                                medicareNumber,
                                middleName,
                                memberHIClaimNo,
                                memberID,
                                ssn,
                                startDate,
                                isWageParity,
                                wageParityFromDate1,
                                wageParityFromDate2,
                                wageParityToDate1,
                                wageParityToDate2,
                                address1,
                                address2,
                                city,
                                crossStreet,
                                homePhone,
                                homePhone2,
                                homePhone3,
                                stateMember,
                                zipCode,
                                billingCity,
                                billingFirstName,
                                billingLastName,
                                billingMiddleName,
                                billingResponsibleParty,
                                billingState,
                                billingStreet,
                                billingZipCode,
                                differentBillingAddress,
                                emergency1Address,
                                emergency1Name,
                                emergency1Phone1,
                                emergency1phone2,
                                emergency1Relationship,
                                emergency2Address,
                                emergency2Name,
                                emergency2Phone1,
                                emergency2Phone2,
                                emergency2Relationship,
                                priorityCode,
                                evacuationZone,
                                evacuationLocation,
                                mobilityStatus,
                                electricEquipmentDependency,
                                mcoPriorityCode,
                                preferredGender,
                                shabbatObservant,
                                accountManager,
                                commissionStatus,
                                contactPerson,
                                intakePerson,
                                receivedDate,
                                source,
                                type,
                                clinicalComments,
                                mdVisitDue,
                                allergies,
                                lastSkilledRNVisit,
                                phiMemberID
                            ).then(res => {
                                console.log(res)
                                if (res.data.result == "success") {
                                    showToastMessage();
                                }
                            });
                        }}>
                            Edit
                        </Button>
                    </div>
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Provider Information</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={providerInfoList}
                        columns={columnsProviderInformation}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Status History</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsStatusHistory}
                        columns={columnsStatusHistory}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>


                <h1 style={{ color: "#564873", textAlign: "center" }}>Notes</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={rowsNotes}
                        columns={columnsNotes}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>
            </div>
        );
    };

    const items = [
        { id: 'GPS', name: 'GPS' },
        { id: 'Billing', name: 'Billing' },
        { id: 'Home', name: 'Item 3' },
        { id: 'Community', name: 'Community' },
        // add more items as needed
    ];
    const [selectedItems, setSelectedItems] = useState([]);


    const profileAddressTableColumns = [
        { field: 'id', headerName: 'Member ID', width: 100 },
        { field: 'address1', headerName: 'Address Line 1', width: 300, editable: true },
        { field: 'address2', headerName: 'Address Line 2', width: 300, editable: true },
        { field: 'city', headerName: 'City', width: 120, editable: true },
        { field: 'state', headerName: 'State', width: 120, editable: true },
        { field: 'country', headerName: 'County', width: 100, editable: true },
        { field: 'zip', headerName: 'Zip', width: 120, editable: true },
        { field: 'crossStreet', headerName: 'Cross Street', width: 120, editable: true },
        { field: 'primaryAddress', headerName: 'Primary Address', width: 300, editable: true },
        {
            field: 'notes', headerName: 'Notes', width: 300, editable: true,

            renderCell: (params) => (
                <FormControl>
                    <InputLabel id="select-label">Select Items</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        multiple
                        value={selectedItems}
                        onChange={(event) => {
                            setSelectedItems(event.target.value);
                        }}
                        renderValue={(selected) => selected.map((item) => item.name).join(', ')}
                    >
                        {items.map((item) => (
                            <MenuItem key={item.id} value={item}>
                                <Checkbox checked={selectedItems.some((selected) => selected.id === item.id)} />
                                <ListItemText primary={item.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            ),
        },
        {
            field: 'print',
            headerName: 'Save',
            sortable: false,
            width: 200,
            renderCell: (params) => (
                <Button variant="contained" onClick={() => {
                    var val = params.row;
                    updateMember(
                        altMemberID,
                        branch,
                        cluster,
                        mcoName,
                        isDefault,
                        discipline,
                        evvRequired,
                        firstDayOfService,
                        fobRequired,
                        fobSealID,
                        lastDayOfService,
                        isLinked,
                        locationMember,
                        mdOrderRequired,
                        isMutual,
                        nurse,
                        memberProfileHeaderAlert,
                        projectedDCDate,
                        sourceOfAdmission,
                        status,
                        team,
                        uniqueDeviceSerialNumber,
                        providerName,
                        acceptedServices,
                        admissionID,
                        alert,
                        coordinatorName,
                        coordinatorName2,
                        coordinatorName3,
                        dateOfBirth,
                        firstName,
                        gender,
                        icd10,
                        icd9,
                        ivrRequired,
                        lastName,
                        medicaidNumber,
                        medicareNumber,
                        middleName,
                        memberHIClaimNo,
                        memberID,
                        ssn,
                        startDate,
                        isWageParity,
                        wageParityFromDate1,
                        wageParityFromDate2,
                        wageParityToDate1,
                        wageParityToDate2,
                        val.address1,
                        val.address2,
                        val.city,
                        val.crossStreet,
                        homePhone,
                        homePhone2,
                        homePhone3,
                        stateMember,
                        val.zip,
                        billingCity,
                        billingFirstName,
                        billingLastName,
                        billingMiddleName,
                        billingResponsibleParty,
                        billingState,
                        billingStreet,
                        billingZipCode,
                        differentBillingAddress,
                        emergency1Address,
                        emergency1Name,
                        emergency1Phone1,
                        emergency1phone2,
                        emergency1Relationship,
                        emergency2Address,
                        emergency2Name,
                        emergency2Phone1,
                        emergency2Phone2,
                        emergency2Relationship,
                        priorityCode,
                        evacuationZone,
                        evacuationLocation,
                        mobilityStatus,
                        electricEquipmentDependency,
                        mcoPriorityCode,
                        preferredGender,
                        shabbatObservant,
                        accountManager,
                        commissionStatus,
                        contactPerson,
                        intakePerson,
                        receivedDate,
                        source,
                        type,
                        clinicalComments,
                        mdVisitDue,
                        allergies,
                        lastSkilledRNVisit,
                        phiMemberID
                    ).then(res => {
                        console.log(res)
                        if (res.data.result == "success") {
                            showToastMessage();
                        }
                    });

                }}>
                    Save
                </Button>
            ),
        },
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



                <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '50px' }}>
                    <h1 style={{ color: "#564873", textAlign: "center", marginBottom: "5%" }}>Phone Number Information</h1>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone 1"
                                        variant="outlined"
                                        value={homePhone}
                                        onChange={(evt) => { setHomePhone(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Home Phone Location"
                                        variant="outlined"
                                        value={address1}
                                        onChange={(evt) => { setAddress1(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone 2"
                                        variant="outlined"
                                        value={homePhone2}
                                        onChange={(evt) => { setHomePhone2(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Home Phone 2 Location"
                                        variant="outlined"
                                        value={address1}
                                        onChange={(evt) => { setAddress1(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Home Phone 3"
                                        variant="outlined"
                                        value={homePhone3}
                                        onChange={(evt) => { setHomePhone3(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Home Phone 3 Location"
                                        variant="outlined"
                                        value={address1}
                                        onChange={(evt) => { setAddress1(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                    />
                                </div>
                            }
                        </Grid>
                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="EditButton" variant="outlined" onClick={() => {
                            updateMember(
                                altMemberID,
                                branch,
                                cluster,
                                mcoName,
                                isDefault,
                                discipline,
                                evvRequired,
                                firstDayOfService,
                                fobRequired,
                                fobSealID,
                                lastDayOfService,
                                isLinked,
                                locationMember,
                                mdOrderRequired,
                                isMutual,
                                nurse,
                                memberProfileHeaderAlert,
                                projectedDCDate,
                                sourceOfAdmission,
                                status,
                                team,
                                uniqueDeviceSerialNumber,
                                providerName,
                                acceptedServices,
                                admissionID,
                                alert,
                                coordinatorName,
                                coordinatorName2,
                                coordinatorName3,
                                dateOfBirth,
                                firstName,
                                gender,
                                icd10,
                                icd9,
                                ivrRequired,
                                lastName,
                                medicaidNumber,
                                medicareNumber,
                                middleName,
                                memberHIClaimNo,
                                memberID,
                                ssn,
                                startDate,
                                isWageParity,
                                wageParityFromDate1,
                                wageParityFromDate2,
                                wageParityToDate1,
                                wageParityToDate2,
                                address1,
                                address2,
                                city,
                                crossStreet,
                                homePhone,
                                homePhone2,
                                homePhone3,
                                stateMember,
                                zipCode,
                                billingCity,
                                billingFirstName,
                                billingLastName,
                                billingMiddleName,
                                billingResponsibleParty,
                                billingState,
                                billingStreet,
                                billingZipCode,
                                differentBillingAddress,
                                emergency1Address,
                                emergency1Name,
                                emergency1Phone1,
                                emergency1phone2,
                                emergency1Relationship,
                                emergency2Address,
                                emergency2Name,
                                emergency2Phone1,
                                emergency2Phone2,
                                emergency2Relationship,
                                priorityCode,
                                evacuationZone,
                                evacuationLocation,
                                mobilityStatus,
                                electricEquipmentDependency,
                                mcoPriorityCode,
                                preferredGender,
                                shabbatObservant,
                                accountManager,
                                commissionStatus,
                                contactPerson,
                                intakePerson,
                                receivedDate,
                                source,
                                type,
                                clinicalComments,
                                mdVisitDue,
                                allergies,
                                lastSkilledRNVisit,
                                phiMemberID
                            ).then(res => {
                                console.log(res)
                                if (res.data.result == "success") {
                                    showToastMessage();
                                }
                            });
                        }}>
                            Edit
                        </Button>
                    </div>
                </div>



                <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '30px', marginBottom: "2%", marginTop: "1.5%" }}>
                    <h1 style={{ color: "#564873", textAlign: "center", marginBottom: "5%" }}>Emergency Contact Information</h1>
                    <Grid container spacing={2}>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Name"
                                        variant="outlined"
                                        value={emergency1Name}
                                        onChange={(evt) => { setEmergency1Name(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Relationship"
                                        variant="outlined"
                                        value={emergency1Relationship}
                                        onChange={(evt) => { setEmergency1Relationship(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Address"
                                        variant="outlined"
                                        value={emergency1Address}
                                        onChange={(evt) => { setEmergency1Address(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone 1"
                                        variant="outlined"
                                        value={emergency1Phone1}
                                        onChange={(evt) => { setEmergency1Phone1(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone 2"
                                        variant="outlined"
                                        value={emergency1phone2}
                                        onChange={(evt) => { setEmergency1phone2(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Name"
                                        variant="outlined"
                                        value={emergency1Name}
                                        onChange={(evt) => { setEmergency1Name(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Relationship"
                                        variant="outlined"
                                        value={emergency2Name}
                                        onChange={(evt) => { setEmergency2Name(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Address"
                                        variant="outlined"
                                        value={emergency2Address}
                                        onChange={(evt) => { setEmergency2Address(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone 1"
                                        variant="outlined"
                                        value={emergency2Phone1}
                                        onChange={(evt) => { setEmergency2Phone1(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid className="DataHolderGrid">
                            {member != null &&
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone 2"
                                        variant="outlined"
                                        value={emergency2Phone2}
                                        onChange={(evt) => { setEmergency2Phone2(evt.target.value) }}
                                    />
                                </div>
                            }
                        </Grid>
                    </Grid>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="EditButton" variant="outlined" onClick={() => {
                            updateMember(
                                altMemberID,
                                branch,
                                cluster,
                                mcoName,
                                isDefault,
                                discipline,
                                evvRequired,
                                firstDayOfService,
                                fobRequired,
                                fobSealID,
                                lastDayOfService,
                                isLinked,
                                locationMember,
                                mdOrderRequired,
                                isMutual,
                                nurse,
                                memberProfileHeaderAlert,
                                projectedDCDate,
                                sourceOfAdmission,
                                status,
                                team,
                                uniqueDeviceSerialNumber,
                                providerName,
                                acceptedServices,
                                admissionID,
                                alert,
                                coordinatorName,
                                coordinatorName2,
                                coordinatorName3,
                                dateOfBirth,
                                firstName,
                                gender,
                                icd10,
                                icd9,
                                ivrRequired,
                                lastName,
                                medicaidNumber,
                                medicareNumber,
                                middleName,
                                memberHIClaimNo,
                                memberID,
                                ssn,
                                startDate,
                                isWageParity,
                                wageParityFromDate1,
                                wageParityFromDate2,
                                wageParityToDate1,
                                wageParityToDate2,
                                address1,
                                address2,
                                city,
                                crossStreet,
                                homePhone,
                                homePhone2,
                                homePhone3,
                                stateMember,
                                zipCode,
                                billingCity,
                                billingFirstName,
                                billingLastName,
                                billingMiddleName,
                                billingResponsibleParty,
                                billingState,
                                billingStreet,
                                billingZipCode,
                                differentBillingAddress,
                                emergency1Address,
                                emergency1Name,
                                emergency1Phone1,
                                emergency1phone2,
                                emergency1Relationship,
                                emergency2Address,
                                emergency2Name,
                                emergency2Phone1,
                                emergency2Phone2,
                                emergency2Relationship,
                                priorityCode,
                                evacuationZone,
                                evacuationLocation,
                                mobilityStatus,
                                electricEquipmentDependency,
                                mcoPriorityCode,
                                preferredGender,
                                shabbatObservant,
                                accountManager,
                                commissionStatus,
                                contactPerson,
                                intakePerson,
                                receivedDate,
                                source,
                                type,
                                clinicalComments,
                                mdVisitDue,
                                allergies,
                                lastSkilledRNVisit,
                                phiMemberID
                            ).then(res => {
                                console.log(res)
                                if (res.data.result == "success") {
                                    showToastMessage();
                                }
                            });
                        }}>
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
                        rows={l3DataRow}
                        columns={columns10}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
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

    function handleCloseAddMasterWeek() {
        setViewSelected(8);
    }

    const AddMasterWeekView = () => {
        return (

            <div>
                <div>
                    <CloseIcon className="crossIcon" onClick={handleCloseAddMasterWeek} />
                    <h1 style={{ color: "grey", textAlign: "center" }}>ADD MASTER WEEK</h1>

                    <div className="FieldsHolderMaster">
                        <div style={{ margin: "5px" }}>
                            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="From Date"
                                        value={fromDate}
                                        onChange={(newValue) => {
                                            setFromDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>




                        <div style={{ margin: "5px" }}>
                            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="To Date"
                                        value={toDate}
                                        onChange={(newValue) => {
                                            setToDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                    </div>


                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>

                        <h1 style={{ color: "#564873", textAlign: "center" }}>Monday</h1>
                        <Grid container spacing={2}>


                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeM}
                                                    onChange={(newValue) => {
                                                        setStartTimeM(newValue);

                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeM}
                                                    onChange={(newValue) => {
                                                        setEndTimeM(newValue);
                                                        if (startTimeM != null) {
                                                            var val = dayjs(endTimeM);
                                                            var st = dayjs(startTimeM);
                                                            const diffInMinutes = val.diff(st, 'minute');
                                                            const hours = Math.floor(diffInMinutes / 60);
                                                            const minutes = diffInMinutes % 60;
                                                            setHoursM(hours);
                                                            setMinutesM(minutes)
                                                        }
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        variant="outlined"
                                        value={careGiverCodeM}
                                        onChange={(evt) => { setCareGiverCodeM(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        variant="outlined"
                                        value={careGiverNameM}
                                        onChange={(evt) => { setCareGiverNameM(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        variant="outlined"
                                        value={assIdM}
                                        onChange={(evt) => { setAssIdM(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <h4 style={{ color: "grey" }}>POC</h4>
                                <div style={{ margin: "1px" }}>
                                    <Select
                                        value={pocM}
                                        onChange={(evt) => { setPocM(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        variant="outlined"
                                        value={hoursM}
                                        onChange={(evt) => { setHoursM(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        variant="outlined"
                                        value={minutesM}
                                        onChange={(evt) => { setMinutesM(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <h4 style={{ color: "grey" }}>Services Code</h4>
                                <div style={{ margin: "0px" }}>
                                    <Select
                                        value={serviceCodeM}
                                        onChange={(evt) => { setServiceCodeM(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
                            </Grid>
                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    Hourly
                                </div>
                            </Grid>
                        </Grid>

                    </div>







                    <div>

                        <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                            <h1 style={{ color: "#564873", textAlign: "center" }}>Tuesday</h1>
                            <Grid container spacing={2}>




                                <Grid className="DataHolderGrid">
                                    <div style={{ margin: "5px" }}>
                                        <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                    <TimePicker
                                                        label="Start Time"
                                                        value={startTimeT}
                                                        onChange={(newValue) => {
                                                            setStartTimeT(newValue);
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>
                                    </div>

                                    <div style={{ margin: "5px" }}>
                                        <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                    <TimePicker
                                                        label="Start Time"
                                                        value={endTimeT}
                                                        onChange={(newValue) => {
                                                            setEndTimeT(newValue);
                                                            if (startTimeT != null) {
                                                                // const diffInMinutes = endTimeT.diff(startTimeT, 'minute');
                                                                // const diffInHours = endTimeT.diff(startTimeT, 'hour');
                                                                // setHoursT(diffInHours);
                                                                // setMinutesT(diffInMinutes)
                                                            }
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>
                                    </div>
                                </Grid>



                                <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                    <div style={{ margin: "5px" }}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Care Giver Code"
                                            value={careGiverCodeT}
                                            onChange={(evt) => { setCareGiverCodeT(evt.target.value) }}
                                        />
                                    </div>

                                    <div style={{ margin: "5px" }}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Care Giver Name"
                                            value={careGiverNameT}
                                            onChange={(evt) => { setCareGiverNameT(evt.target.value) }}
                                        />
                                    </div>
                                </Grid>


                                <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                    <div style={{ margin: "5px" }}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Ass. ID"
                                            value={assIdT}
                                            onChange={(evt) => { setAssIdT(evt.target.value) }}
                                        />
                                    </div>
                                </Grid>



                                <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                    <div style={{ margin: "0px" }}>
                                        <h4 style={{ color: "grey" }}>POC</h4>
                                        <Select
                                            value={pocT}
                                            onChange={(evt) => { setPocT(evt.target.value) }}
                                        >
                                            {pocIds.map((l, i) => (
                                                <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </Grid>



                                <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                    <div style={{ margin: "5px" }}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Hours"
                                            value={hoursT}
                                            onChange={(evt) => { setHoursT(evt.target.value) }}
                                        />
                                    </div>

                                    <div style={{ margin: "5px" }}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Minutes"
                                            value={minutesT}
                                            onChange={(evt) => { setMinutesT(evt.target.value) }}
                                        />
                                    </div>
                                </Grid>



                                <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                    <div style={{ margin: "0px" }}>
                                        <h4 style={{ color: "grey" }}>Services Code</h4>
                                        <Select
                                            value={serviceCodeT}
                                            onChange={(evt) => { setServiceCodeT(evt.target.value) }}
                                        >
                                            {serviceCodes.map((l, i) => (
                                                <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </Grid>


                                <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                    <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
                                </Grid>
                                <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                    <div style={{ margin: "5px" }}>
                                        Hourly
                                    </div>
                                </Grid>
                            </Grid>

                        </div>
                    </div>




                </div>


                <div>

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Wednesday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeW}
                                                    onChange={(newValue) => {
                                                        setStartTimeW(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeW}
                                                    onChange={(newValue) => {
                                                        setEndTimeW(newValue);
                                                        if (startTimeW != null) {
                                                            // const diffInMinutes = endTimeW.diff(startTimeW, 'minute');
                                                            // const diffInHours = endTimeW.diff(startTimeW, 'hour');
                                                            // setHoursW(diffInHours);
                                                            // setMinutesW(diffInMinutes)
                                                        }
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeW}
                                        onChange={(evt) => { setCareGiverCodeW(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameW}
                                        onChange={(evt) => { setCareGiverNameW(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdW}
                                        onChange={(evt) => { setAssIdW(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocW}
                                        onChange={(evt) => { setPocW(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursW}
                                        onChange={(evt) => { setHoursW(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesW}
                                        onChange={(evt) => { setMinutesW(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeW}
                                        onChange={(evt) => { setServiceCodeW(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Thursday</h1>
                        <Grid container spacing={2}>


                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeTH}
                                                    onChange={(newValue) => {
                                                        setStartTimeTH(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeTH}
                                                    onChange={(newValue) => {
                                                        setEndTimeTH(newValue);
                                                        if (startTimeTH != null) {
                                                            // const diffInMinutes = endTimeTH.diff(startTimeTH, 'minute');
                                                            // const diffInHours = endTimeTH.diff(startTimeTH, 'hour');
                                                            // setHoursTH(diffInHours);
                                                            // setMinutesTH(diffInMinutes)
                                                        }
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeTH}
                                        onChange={(evt) => { setCareGiverCodeTH(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameTH}
                                        onChange={(evt) => { setCareGiverNameTH(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdTH}
                                        onChange={(evt) => { setAssIdTH(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocTH}
                                        onChange={(evt) => { setPocTH(evt.target.value) }}
                                    >{pocIds.map((l, i) => (
                                        <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                    ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursTH}
                                        onChange={(evt) => { setHoursTH(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesTH}
                                        onChange={(evt) => { setMinutesTH(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeTH}
                                        onChange={(evt) => { setServiceCodeTH(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Friday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeF}
                                                    onChange={(newValue) => {
                                                        setStartTimeF(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeF}
                                                    onChange={(newValue) => {
                                                        setEndTimeF(newValue);
                                                        if (startTimeF != null) {
                                                            // const diffInMinutes = endTimeF.diff(startTimeF, 'minute');
                                                            // const diffInHours = endTimeF.diff(startTimeF, 'hour');
                                                            // setHoursF(diffInHours);
                                                            // setMinutesF(diffInMinutes)
                                                        }
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        className="field"
                                        id="outlined-basic"
                                        label="Select Care Giver"
                                        value={careGiverCodeME}
                                        InputProps={{ startAdornment: (<PersonSearchIcon onClick={CareGiverIconClick} style={{ cursor: "pointer" }} />) }}
                                    >
                                    </TextField>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameF}
                                        onChange={(evt) => { setCareGiverNameF(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdF}
                                        onChange={(evt) => { setAssIdF(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocF}
                                        onChange={(evt) => { setPocF(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursF}
                                        onChange={(evt) => { setHoursF(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesF}
                                        onChange={(evt) => { setMinutesF(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeF}
                                        onChange={(evt) => { setServiceCodeF(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Saturday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeST}
                                                    onChange={(newValue) => {
                                                        setStartTimeST(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeST}
                                                    onChange={(newValue) => {
                                                        setEndTimeST(newValue);
                                                        if (startTimeST != null) {
                                                            // const diffInMinutes = endTimeST.diff(startTimeST, 'minute');
                                                            // const diffInHours = endTimeST.diff(startTimeST, 'hour');
                                                            // setHoursST(diffInHours);
                                                            // setMinutesST(diffInMinutes)
                                                        }
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>

                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeST}
                                        onChange={(evt) => { setCareGiverCodeST(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameST}
                                        onChange={(evt) => { setCareGiverNameST(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdST}
                                        onChange={(evt) => { setAssIdST(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocST}
                                        onChange={(evt) => { setPocST(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursST}
                                        onChange={(evt) => { setHoursST(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesST}
                                        onChange={(evt) => { setMinutesST(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeST}
                                        onChange={(evt) => { setServiceCodeST(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Sunday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeSU}
                                                    onChange={(newValue) => {
                                                        setStartTimeSU(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeSU}
                                                    onChange={(newValue) => {
                                                        setEndTimeSU(newValue);
                                                        if (startTimeSU != null) {
                                                            // const diffInMinutes = endTimeSU.diff(startTimeSU, 'minute');
                                                            // const diffInHours = endTimeSU.diff(startTimeSU, 'hour');
                                                            // setHoursSU(diffInHours);
                                                            // setMinutesSU(diffInMinutes)
                                                        }
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeSU}
                                        onChange={(evt) => { setCareGiverCodeSU(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameSU}
                                        onChange={(evt) => { setCareGiverNameSU(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdSU}
                                        onChange={(evt) => { setAssIdSU(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocSU}
                                        onChange={(evt) => { setPocSU(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursSU}
                                        onChange={(evt) => { setHoursSU(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesSU}
                                        onChange={(evt) => { setMinutesSU(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeSU}
                                        onChange={(evt) => { setServiceCodeSU(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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
                    <Button className="EditButton" variant="outlined"
                        onClick={() => {
                            addMasterWeek(
                                memberId,
                                fromDate,
                                toDate,

                                startTimeM,
                                endTimeM,
                                careGiverCodeM,
                                assIdM,
                                pocM,
                                hoursM,
                                minutesM,
                                secondsM,
                                serviceCodeM,
                                modeM,

                                startTimeT,
                                endTimeT,
                                careGiverCodeT,
                                assIdT,
                                pocT,
                                hoursT,
                                minutesT,
                                secondsT,
                                serviceCodeT,
                                modeT,

                                startTimeW,
                                endTimeW,
                                careGiverCodeW,
                                assIdW,
                                pocW,
                                hoursW,
                                minutesW,
                                secondsW,
                                serviceCodeW,
                                modeW,

                                startTimeTH,
                                endTimeTH,
                                careGiverCodeTH,
                                assIdTH,
                                pocTH,
                                hoursTH,
                                minutesTH,
                                secondsTH,
                                serviceCodeTH,
                                modeTH,

                                startTimeF,
                                endTimeF,
                                careGiverCodeF,
                                assIdF,
                                pocF,
                                hoursF,
                                minutesF,
                                secondsF,
                                serviceCodeF,
                                modeF,

                                startTimeST,
                                endTimeST,
                                careGiverCodeST,
                                assIdST,
                                pocST,
                                hoursST,
                                minutesST,
                                secondsST,
                                serviceCodeST,
                                modeST,

                                startTimeSU,
                                endTimeSU,
                                careGiverCodeSU,
                                assIdSU,
                                pocSU,
                                hoursSU,
                                minutesSU,
                                secondsSU,
                                serviceCodeSU,
                                modeSU,

                            ).then(res => {
                                if (res.data.result == "success") {
                                    showToastMessage();
                                }
                            });
                        }}
                    >
                        Create New Master Week
                    </Button>
                </div>


            </div>
        )
    }

    function handleCloseEditMasterWeek() {
        setViewSelected(8);
    }

    const EditMasterWeekView = () => {
        return (


            //


            <div>
                <CloseIcon className="crossIcon" onClick={handleCloseEditMasterWeek} />
                <h1 style={{ color: "grey", textAlign: "center" }}>Edit Master Week</h1>
                <div>

                    <div className="FieldsHolderMaster">
                        <div style={{ margin: "5px" }}>
                            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="From Date"
                                        value={fromDate}
                                        onChange={(newValue) => {
                                            setFromDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>




                        <div style={{ margin: "5px" }}>
                            <LocalizationProvider style={{ width: "300px" }} dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="To Date"
                                        value={toDate}
                                        onChange={(newValue) => {
                                            setToDate(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                    </div>

                </div>

                <div>
                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>

                        <h1 style={{ color: "#564873", textAlign: "center" }}>Monday</h1>
                        <Grid container spacing={2}>


                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeME}
                                                    onChange={(newValue) => {
                                                        setStartTimeME(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeME}
                                                    onChange={(newValue) => {
                                                        setEndTimeME(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        className="field"
                                        id="outlined-basic"
                                        label="Select Care Giver"
                                        value={careGiverCodeME}
                                        InputProps={{ startAdornment: (<PersonSearchIcon onClick={CareGiverIconClick} style={{ cursor: "pointer" }} />) }}
                                    >
                                    </TextField>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        variant="outlined"
                                        value={careGiverNameME}
                                        onChange={(evt) => { setCareGiverNameME(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        variant="outlined"
                                        value={assIdME}
                                        onChange={(evt) => { setAssIdME(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocME}
                                        onChange={(evt) => { setPocME(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        variant="outlined"
                                        value={hoursME}
                                        onChange={(evt) => { setHoursME(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        variant="outlined"
                                        value={minutesME}
                                        onChange={(evt) => { setMinutesME(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeME}
                                        onChange={(evt) => { setServiceCodeME(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
                            </Grid>
                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    Hourly
                                </div>
                            </Grid>
                        </Grid>

                    </div>

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Tuesday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeTE}
                                                    onChange={(newValue) => {
                                                        setStartTimeTE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeTE}
                                                    onChange={(newValue) => {
                                                        setEndTimeTE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeTE}
                                        onChange={(evt) => { setCareGiverCodeTE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameTE}
                                        onChange={(evt) => { setCareGiverNameTE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdTE}
                                        onChange={(evt) => { setAssIdTE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocTE}
                                        onChange={(evt) => { setPocTE(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursTE}
                                        onChange={(evt) => { setHoursTE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesTE}
                                        onChange={(evt) => { setMinutesTE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeTE}
                                        onChange={(evt) => { setServiceCodeTE(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Wednesday</h1>
                        <Grid container spacing={2}>


                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeWE}
                                                    onChange={(newValue) => {
                                                        setStartTimeWE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeWE}
                                                    onChange={(newValue) => {
                                                        setEndTimeWE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeWE}
                                        onChange={(evt) => { setCareGiverCodeWE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameWE}
                                        onChange={(evt) => { setCareGiverNameWE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdWE}
                                        onChange={(evt) => { setAssIdWE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocWE}
                                        onChange={(evt) => { setPocWE(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>




                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursWE}
                                        onChange={(evt) => { setHoursWE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesWE}
                                        onChange={(evt) => { setMinutesWE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeWE}
                                        onChange={(evt) => { setServiceCodeWE(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Thursday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeTHE}
                                                    onChange={(newValue) => {
                                                        setStartTimeTHE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeTHE}
                                                    onChange={(newValue) => {
                                                        setEndTimeTHE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeTHE}
                                        onChange={(evt) => { setCareGiverCodeTH(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameTHE}
                                        onChange={(evt) => { setCareGiverNameTHE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdTHE}
                                        onChange={(evt) => { setAssIdTHE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocTHE}
                                        onChange={(evt) => { setPocTHE(evt.target.value) }}
                                    >{pocIds.map((l, i) => (
                                        <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                    ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursTHE}
                                        onChange={(evt) => { setHoursTHE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesTHE}
                                        onChange={(evt) => { setMinutesTHE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeTHE}
                                        onChange={(evt) => { setServiceCodeTHE(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Friday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeFE}
                                                    onChange={(newValue) => {
                                                        setStartTimeFE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeFE}
                                                    onChange={(newValue) => {
                                                        setEndTimeFE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeFE}
                                        onChange={(evt) => { setCareGiverCodeFE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameFE}
                                        onChange={(evt) => { setCareGiverNameFE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdFE}
                                        onChange={(evt) => { setAssIdFE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocFE}
                                        onChange={(evt) => { setPocFE(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursFE}
                                        onChange={(evt) => { setHoursFE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesFE}
                                        onChange={(evt) => { setMinutesFE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeFE}
                                        onChange={(evt) => { setServiceCodeFE(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Saturday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeSTE}
                                                    onChange={(newValue) => {
                                                        setStartTimeSTE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeSTE}
                                                    onChange={(newValue) => {
                                                        setEndTimeSTE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeSTE}
                                        onChange={(evt) => { setCareGiverCodeSTE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameSTE}
                                        onChange={(evt) => { setCareGiverNameSTE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdSTE}
                                        onChange={(evt) => { setAssIdSTE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocSTE}
                                        onChange={(evt) => { setPocSTE(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursSTE}
                                        onChange={(evt) => { setHoursSTE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesSTE}
                                        onChange={(evt) => { setMinutesSTE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeSTE}
                                        onChange={(evt) => { setServiceCodeSTE(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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

                    <div style={{ border: '0.5px solid grey', borderRadius: "10px", padding: '10px', margin: "2%", width: "90%" }}>
                        <h1 style={{ color: "#564873", textAlign: "center" }}>Sunday</h1>
                        <Grid container spacing={2}>



                            <Grid className="DataHolderGrid">
                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={startTimeSUE}
                                                    onChange={(newValue) => {
                                                        setStartTimeSUE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                                                <TimePicker
                                                    label="Start Time"
                                                    value={endTimeSUE}
                                                    onChange={(newValue) => {
                                                        setEndTimeSUE(newValue);
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Code"
                                        value={careGiverCodeSUE}
                                        onChange={(evt) => { setCareGiverCodeSUE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Care Giver Name"
                                        value={careGiverNameSUE}
                                        onChange={(evt) => { setCareGiverNameSUE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Ass. ID"
                                        value={assIdSUE}
                                        onChange={(evt) => { setAssIdSUE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>POC</h4>
                                    <Select
                                        value={pocSUE}
                                        onChange={(evt) => { setPocSUE(evt.target.value) }}
                                    >
                                        {pocIds.map((l, i) => (
                                            <MenuItem value={l.task_id}>{l.task_id}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Hours"
                                        value={hoursSUE}
                                        onChange={(evt) => { setHoursSUE(evt.target.value) }}
                                    />
                                </div>

                                <div style={{ margin: "5px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Minutes"
                                        value={minutesSUE}
                                        onChange={(evt) => { setMinutesSUE(evt.target.value) }}
                                    />
                                </div>
                            </Grid>



                            <Grid className="DataHolderGrid" style={{ marginTop: '0px' }}>
                                <div style={{ margin: "0px" }}>
                                    <h4 style={{ color: "grey" }}>Services Code</h4>
                                    <Select
                                        value={serviceCodeSUE}
                                        onChange={(evt) => { setServiceCodeSUE(evt.target.value) }}
                                    >
                                        {serviceCodes.map((l, i) => (
                                            <MenuItem value={l.service_code}>{l.service_code}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>


                            <Grid className="DataHolderGrid" style={{ marginTop: '20px' }}>
                                <div style={{ margin: "5px" }}><h2 style={{ color: "grey", fontSize: '15px' }}>Bill Type </h2></div>
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
                    <Button className="EditButton" variant="outlined"
                        onClick={() => {
                            editMasterWeek(
                                //masterWeekID
                                memberId,
                                fromDate,
                                toDate,

                                startTimeM,
                                endTimeM,
                                careGiverCodeM,
                                assIdM,
                                pocM,
                                hoursM,
                                minutesM,
                                secondsM,
                                serviceCodeM,
                                modeM,

                                startTimeT,
                                endTimeT,
                                careGiverCodeT,
                                assIdT,
                                pocT,
                                hoursT,
                                minutesT,
                                secondsT,
                                serviceCodeT,
                                modeT,

                                startTimeW,
                                endTimeW,
                                careGiverCodeW,
                                assIdW,
                                pocW,
                                hoursW,
                                minutesW,
                                secondsW,
                                serviceCodeW,
                                modeW,

                                startTimeTH,
                                endTimeTH,
                                careGiverCodeTH,
                                assIdTH,
                                pocTH,
                                hoursTH,
                                minutesTH,
                                secondsTH,
                                serviceCodeTH,
                                modeTH,

                                startTimeF,
                                endTimeF,
                                careGiverCodeF,
                                assIdF,
                                pocF,
                                hoursF,
                                minutesF,
                                secondsF,
                                serviceCodeF,
                                modeF,

                                startTimeST,
                                endTimeST,
                                careGiverCodeST,
                                assIdST,
                                pocST,
                                hoursST,
                                minutesST,
                                secondsST,
                                serviceCodeST,
                                modeST,

                                startTimeSU,
                                endTimeSU,
                                careGiverCodeSU,
                                assIdSU,
                                pocSU,
                                hoursSU,
                                minutesSU,
                                secondsSU,
                                serviceCodeSU,
                                modeSU,

                            ).then(res => {
                                if (res.data.result == "success") {
                                    showToastMessage();
                                }
                            });
                        }}
                    >
                        Save Changes in Master Week
                    </Button>
                </div>


            </div>

        )
    }


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
                        rows={l3DataRow}
                        columns={columns10}
                        pageSize={5}
                        rowsPerPageOptions={[15]}
                        checkboxSelection={false}
                    />
                </div>

                {/* //      <h1 style={{ color: "white",padding:10,backgroundColor:"grey", textAlign: "center", cursor: 'pointer' }} onClick={() => setOpenAddMasterWeek(!openAddMasterWeek)}>Add Master Week</h1>
           ///     <h1 style={{ color: "white",padding:10,backgroundColor:"grey", textAlign: "center", cursor: 'pointer' }} onClick={() => setOpenAddMasterWeek(!openAddMasterWeek)}>Add Master Week</h1> */}

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>


                    <div onClick={() => setViewSelected(44)} className="AddEditButton" >
                        <h3 style={{ color: "#F2B90F", textAlign: "center" }}>Add Master Week</h3>
                    </div>


                    <div onClick={() => setViewSelected(33)} className="AddEditButton">
                        <h3 style={{ color: "#F2B90F", textAlign: "center" }}>Edit Master Week</h3>
                    </div>
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
                            transition: 'height 0.3s ease-in-out',

                        }}

                    >


                        {openAddMasterWeek &&
                            <div></div>
                        }
                    </div>
                </div>


                <div>
                    <div
                        className="bar"
                        style={{
                            width: '100%',
                            height: openEditMasterWeek ? '1000px' : '50px',
                            pocition: 'relative',
                            bottom: '0',
                            left: '0',

                            transition: 'height 0.3s ease-in-out',
                            marginTop: '5%'
                        }}

                    >

                        {
                            openEditMasterWeek &&

                            <div></div>


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
        { id: 1, schedule: "Justin", provider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },
        { id: 1, schedule: "Justin", provider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },
        { id: 1, schedule: "Justin", provider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },
        { id: 1, schedule: "Justin", provider: "Assist", serviceCode: "Assist", careGiver: "Assist", confirmedTime: "Assist", billed: "Assist", billedUnits: "Assist", billedTime: "Assist", holdVisit: "Assist", claimStatus: "" },

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



                <div className="holder" >

                    <div style={{ width: "300px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    </div>

                    <div style={{ width: "300px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    </div>

                    <div style={{ width: "300px" }}>
                        <FormControl style={{ width: "100%", marginTop: "0.5%" }} >
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
                    </div>
                </div>



                <h1 style={{ color: "#564873", textAlign: "center" }}>Visits</h1>
                <div style={{ height: "45%", width: '100%', marginTop: "2%" }}>
                    <DataGrid
                        rows={visitsViewRow}
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
                <Button variant="contained" onClick={() => setViewSelected(22)}>
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
                <Button variant="contained" onClick={() => PrintDocument({ content: document.getElementById("print-content").innerHTML })}>
                    Print
                </Button>
            ),
        },

    ];

    function PrintDocument(props) {
        const windowContent = '<!DOCTYPE html><html><head><title>Print</title></head><body>' + props.content + '</body></html>';
        const printWindow = window.open('', '', 'height=400,width=600');
        printWindow.document.write(windowContent);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }

    function PrintContent(props) {
        return (
            <div id="print-content">
                <h1>{props.member.LastName}</h1>
                <p>{props.member.Nurse}</p>
            </div>
        );
    }

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
                <Button variant="contained" onClick={() => {
                    handleClickAuthType(params.row);
                    setViewSelected(11);
                }}>
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

            <ToastContainer />

            <div className="Header">
                <MenuIcon
                    className="menuIcon"
                    onClick={toggleDrawer("left", true)}
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                ></MenuIcon>
                <img className="headerImage" src="./EmpireHomeCareLogo.png" onClick={() => navigate("/SFTPHome")} />

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

                <Card className="dataDisplay" style={{ overflow: "auto" }}>
                    {isOverlayOpen && <Overlay />}
                    {isOverlayOpen2 && <Overlay2 />}
                    {isOverlayOpen3 && <Overlay3 />}


                    {visitClaimStatusOpen && <Overlay6 />}
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
export default MemberDetailsSFTP;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .AddEditButton{
    background-color:#2E0F59;
    border-radius:10px;
    padding:5px;
    margin:1%;
  }
  .generalFields{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:10px;
  }

  body::-webkit-scrollbar {
  width: 10px;
    }

    body::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    }

    body::-webkit-scrollbar-thumb {
    background-color: #888;
    }
.FieldsHolderMaster{
    display:flex;
    flex-direction:row;
    justify-content:center;
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
    margin-left: 2%;
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
  .holder{
    padding: 20px;
     margin-top: 5%;
     display:flex;
     flex-direction:row;
     justify-content:space-evenly;
     
  }
  
  @media only screen and (max-width: 600px) {

    .generalFields{
        flex-direction:column;
    }

    .holder{
        flex-direction:column;
        margin-left:5%;
    }
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
    .AddEditButton{
        margin-top:5%;
        padding:10;
     }
  }
  .FieldsHolderMaster{
    flex-direction:column;
  }
  .EditButton{
    width:50%;
  }
  
  
`;
