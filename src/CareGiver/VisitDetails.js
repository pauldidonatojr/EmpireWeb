import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { display } from "@mui/system";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AuthContext } from '../components/context'
import TextField from "@mui/material/TextField";
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editVisit } from "../API/visitAPI";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import UserName from "../UserName";

//

const PlanOfCareList = [
  {
    id: 1,
    name: "Clothes Washing",
  },
  {
    id: 2,
    name: "Bath",
  },
  {
    id: 3,
    name: "House Clean",
  },
  {
    id: 4,
    name: "House Clean",
  },
  {
    id: 5,
    name: "House Clean",
  },
  {
    id: 6,
    name: "House Clean",
  },
  {
    id: 7,
    name: "House Clean",
  },
  {
    id: 8,
    name: "House Clean",
  },
  {
    id: 9,
    name: "House Clean",
  },
  {
    id: 10,
    name: "House Clean",
  },

];
const OtherTaskList = [
  {
    id: 1,
    name: "Bath",
  },
  {
    id: 2,
    name: "Hair Care",
  },
  {
    id: 3,
    name: "Park Visit",
  },
  {
    id: 3,
    name: "Park Visit",
  },
  {
    id: 3,
    name: "Park Visit",
  },
  {
    id: 3,
    name: "Park Visit",
  },
];

const VisitDetails = () => {


  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAJljHi51Eh_BGroByR6lSrP6vwfgrsExs"
  })

  const [map, setMap] = React.useState(null)

  const showToastMessage = () => {
    toast.success('Visit Updated Successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
  };


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  // States for Visit

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





  // 


  const { signOut } = React.useContext(AuthContext);

  const cgDataString = localStorage.getItem("CareGivers");
  var cgData = JSON.parse(cgDataString);


  const visitsString = localStorage.getItem("Visits");
  var visitData = JSON.parse(visitsString);

  const mS = localStorage.getItem("Members");
  var meData = JSON.parse(mS);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [locationClockIn, setLocationClockIn] = useState(null);
  const [locationClockOut, setLocationClockOut] = useState(null)

  const navigate = useNavigate();
  const { id } = useParams();
  const selectedItem = visitData.find((item) => item.id === parseInt(id));
  var myArray = selectedItem;

  //Setting States

  //==================

  const [ViewSelected, setViewSelected] = useState(1);
  const [pocDutiesList, setPocDutiesList] = useState([]);
  const [currMember, setCurrMember] = useState(null);
  const [PlanListView, setPlanListView] = useState(false);
  const [OtherTaskView, setOtherTaskView] = useState(false);
  function PlanofCarePressed(){
    setPlanListView(true);
    setOtherTaskView(false);
  }
  function OtherTaskPressed(){
    setPlanListView(false);
    setOtherTaskView(true);
  }


  useEffect(() => {
    var memberData = selectedItem.member_data
    memberData = JSON.parse(memberData);
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
    setPocDutiesList(arrPOC);

    var arrMem = [];
    for (var key in meData) {
      if (meData[key].MemberID == selectedItem.MemberID) {
        setCurrMember(meData[key])
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => console.error(error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);


  useEffect(() => {
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

  }, []);



  const [state, setState] = React.useState({
    left: false,
  });


  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return ClockInOutView();

      case 2:
        return DirectionView();

      case 3:
        return PatientView();

      case 4:
        return ClockInView();

      case 5:
        return ClockOutView();

      case 6:
        return CarePlanView();

      default:
        break;
    }
  }



  var prevState = null;

  const CarePlanPressed = () => {
    setViewSelected(6);
  };
  const PatientInfoPressed = () => {
    setViewSelected(3);
  };
  const DirectionPressed = () => {
    setViewSelected(2);
  };
  const ClockInOutPressed = () => {
    setViewSelected(1);
  };

  const ClockInPressed = () => {
    setViewSelected(4);
  };

  const ClockOutPressed = () => {
    setViewSelected(5);
  };


  const CarePlanView = () => {
    return (
      <div style={{ overflow: 'auto' }}>
        <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
          <h1 style={{ color: "#564873", textAlign: "center" }}>Care Plan</h1>


          {pocDutiesList.map((item) => (
            <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px', marginTop: '30px' }}>
              <h1 style={{ color: "#564873", textAlign: "center" }}>{item.category}</h1>
              <div style={{ textAlign: 'center' }}>{currMember != null &&
                <>
                  <h1 style={{ color: "white", textAlign: "center" }}>{item.duty}</h1>
                </>
              }
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


  
  const ClockInOutView = () => {
    return (
      <div style={{ overflow: 'auto' }}>
        <div className="ClockCardHolder">
          <Card className="clockInCard">

            <div className="DateHolder">
              <CalendarMonthIcon className="dateIcon" />
              <div style={{ color: 'white', padding: '10px' }}>
                {dayjs(selectedItem.ScheduleStartTime).format('YYYY-MM-DD')}
              </div>


            </div>
            <Button className="clockBtn" onClick={() => {
              ClockInPressed()
              const currentTime = dayjs();
              setVisitStartTime(currentTime);
            }}>Clock In</Button>
            <div className="DateHolder">
              <QueryBuilderIcon className="dateIcon" />
              <div style={{ color: 'white', padding: '10px' }}>
                {dayjs(selectedItem.ScheduleStartTime).format('HH:mm:ss')}
              </div>
            </div>
          </Card>

          <Card className="clockInCard">

            <div className="DateHolder">
              <CalendarMonthIcon className="dateIcon" />
              <div style={{ color: 'white', padding: '10px' }}>
                {dayjs(selectedItem.ScheduleEndTime).format('YYYY-MM-DD')}
              </div>


            </div>
            <Button className="clockBtn" onClick={() => {
              ClockOutPressed()
              const currentTime = dayjs();
              setVisitEndTime(currentTime);
            }}>Clock Out</Button>
            <div className="DateHolder">
              <QueryBuilderIcon className="dateIcon" />
              <div style={{ color: 'white', padding: '10px' }}>
                {dayjs(selectedItem.ScheduleEndTime).format('HH:mm:ss')}
              </div>
            </div>
          </Card>

        </div>

<div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>

<div style={{backgroundColor:"#564873",borderRadius:15,padding:10}} onClick={PlanofCarePressed}>
              <p style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Plan Of Care</p>
            </div>

            <div style={{backgroundColor:"#564873",borderRadius:15,padding:10}} onClick={OtherTaskPressed}>
              <p style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Other Task</p>
            </div>



</div>
  

        <div className="ListHolder">

          
         {PlanListView &&
          <div className="PlanofCareList">
          <p style={{ color: "grey", fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>Plan of Care</p>
          <List style={{ maxHeight: "75%", overflow: "auto",borderRadius:10,backgroundColor:"white",height:"100%" }} >
            {pocDutiesList.map((item) => (
              <ListItem
                className="ListItem"
              >
                <ListItemText
                  primary={<p style={{ fontSize: "20px", fontWeight: "bold", color: "grey" }}> {item.id}- {item.duty}</p>}
                  className="ListText"
                />

              </ListItem>
            ))}
          </List>
        </div>
         
         }
         


        {
          OtherTaskView && 
          <div className="OtherList">
          <p style={{ color: "grey", fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Other Task</p>
          <List className="forScrollOnly" style={{ maxHeight: "75%", overflow: "auto",backgroundColor:"white",borderRadius:10 }}>
            {OtherTaskList.map((item) => (
              <ListItem
                className="ListItem"
              >
                <ListItemText
                  primary={<p style={{ fontSize: "20px", fontWeight: "bold", color: "grey" }}> {item.id}- {item.name}</p>}
                  className="ListText"
                />

              </ListItem>
            ))}
          </List>
        </div>
        }
         



        </div>
      </div>
    );
  };
  const DirectionView = () => {
    return (
      <div>
        <Card className="DirectionCard">
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}>Primary Address</p>
          </div>
          <div>
            <p style={{ fontSize: "25px", fontWeight: "bold", color: "white", textAlign: "center" }}>{" 262A Upper Tooting Road South West London, SW15DR"}</p>
          </div>
        </Card>
        <div className="mapholder">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
      </div>
    );
  };
  const PatientView = () => {
    return (

      <div className="DateFieldHolder" style={{ overflow: "auto", height: "100%", width: '100%' }}>
        <h1 style={{ color: "#564873", textAlign: "center" }}>Patient Information</h1>
        <div style={{ border: '3px solid #564873', backgroundColor: "#564873", borderRadius: "10px", padding: '20px' }}>
          <Grid container spacing={2}>


            <Grid className="DataHolderGrid">
              <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 1:
                {currMember != null &&
                  <span style={{ color: "#F2A007" }}>{" " + currMember.HomePhone}</span>
                }
              </h2></div>
            </Grid>

            <Grid className="DataHolderGrid">
              <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 2:
                {currMember != null &&
                  <span style={{ color: "#F2A007" }}>{" " + currMember.HomePhone2}</span>
                }
              </h2></div>
            </Grid>


            <Grid className="DataHolderGrid">
              <div style={{ margin: "5px" }}><h2 style={{ color: "white", fontSize: '15px' }}>Phone 3:
                {currMember != null &&
                  <span style={{ color: "#F2A007" }}>{" " + currMember.HomePhone3}</span>
                }
              </h2></div>
            </Grid>

          </Grid>
        </div>



        <div style={{ border: '3px solid grey', backgroundColor: "grey", borderRadius: "10px", padding: '20px', marginTop: '30px' }}>
          <div style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
          <DirectionsIcon style={{color:"white",fontSize:"35px"}} ></DirectionsIcon>
        
          </div>
          <h1 style={{ color: "#564873", textAlign: "center" }}>Address</h1>
          <div style={{ textAlign: 'center' }}>{currMember != null &&
            <>
              <h1 style={{ color: "white", textAlign: "center" }}>{" " + currMember.Address1}</h1>
              <h1 style={{ color: "white", textAlign: "center" }}>{" " + currMember.Address2}</h1>
            </>
          }
          </div>
        </div>
      </div>
    );
  };


  const ClockInView = () => {
    return (
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center", color: "#564873" }}>Clock IN</h2>

        <div style={{ width: '100%' }}>
          <div style={{ width: "100%", alignContent: "center", justifyContent: "center", textAlign: 'center' }}>
            <h4 style={{ color: "grey", textAlign: "center" }}>Latitude</h4>
            <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
              <span style={{ color: "black" }}>{latitude}</span>

            </div>
          </div>

          <div style={{ width: "100%", alignContent: "center", justifyContent: "center", textAlign: 'center' }}>
            <h4 style={{ color: "grey", textAlign: "center" }}>Longitude</h4>
            <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
              <span style={{ color: "black" }}>{longitude}</span>

            </div>
          </div>

        </div>

        <div style={{ display: "grid", width: '100%', placeContent: 'center', textAlign: 'center' }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Clock In Phone Number"
              variant="outlined"
              value={clockInPhone}
              onChange={(evt) => setClockInPhone(evt.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "300px" }}
              id="outlined-basic"
              label="EVV Other Info"
              variant="outlined"
              value={clockInEvvOtherInfo}
              onChange={(evt) => setClockInEvvOtherInfo(evt.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Service Location City"
              variant="outlined"
              value={clockInLocationCity}
              onChange={(evt) => setClockInLocationCity(evt.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Service Location Type"
              variant="outlined"
              value={clockInLocationType}
              onChange={(evt) => setClockInLocationType(evt.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Service Location Zip Code"
              variant="outlined"
            //   value={zipCode}
            // onChange={(evt) => setZipCode(evt.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "300px" }}
              id="outlined-basic"
              label="Service Location Address Line 1"
              variant="outlined"
              value={clockInLocationAddressLine1}
              onChange={(evt) => setClockInLocationAddressLine1(evt.target.value)}
            />
          </div>


          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "300px" }}
              id="outlined-basic"
              label="Service Location Address Line 2"
              variant="outlined"
              value={clockInLocationAddressLine2}
              onChange={(evt) => setClockInLocationAddressLine2(evt.target.value)}
            />
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}>
          <Button className="EditButton" variant="outlined" onClick={() => {
            editVisit(
              selectedItem.id,

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

              "",
              "",
              "",
              "",
              ""
            ).then(res => {
              if (res.data.result == "success") {
                showToastMessage();
              }
            });
          }}>
            Save Changes
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}>
          <Button className="EditButton" variant="outlined" onClick={ClockInOutPressed}>
            Close
          </Button>
        </div>
      </div>
    );
  };

  const ClockOutView = () => {
    return (
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center", color: "#564873" }}>Clock Out</h2>

        <div style={{ width: '100%' }}>
          <div style={{ width: "100%", alignContent: "center", justifyContent: "center", textAlign: 'center' }}>
            <h4 style={{ color: "grey", textAlign: "center" }}>Latitude</h4>
            <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
              <span style={{ color: "black" }}>{latitude}</span>

            </div>
          </div>

          <div style={{ width: "100%", alignContent: "center", justifyContent: "center", textAlign: 'center' }}>
            <h4 style={{ color: "grey", textAlign: "center" }}>Longitude</h4>
            <div style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'grid', marginBottom: '30px' }}>
              <span style={{ color: "black" }}>{longitude}</span>

            </div>
          </div>

        </div>

        <div style={{ display: "grid", width: '100%', placeContent: 'center', textAlign: 'center' }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Clock Out Phone Number"
              variant="outlined"
              value={clockOutPhone}
              onChange={(evt) => setClockOutPhone(evt.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "300px" }}
              id="outlined-basic"
              label="EVV Other Info"
              variant="outlined"
              value={clockOutEvvOtherInfo}
              onChange={(evt) => setClockOutEvvOtherInfo(evt.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Service Location City"
              variant="outlined"
              value={clockOutLocationCity}
              onChange={(evt) => setClockOutLocationCity(evt.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Service Location Type"
              variant="outlined"
              value={clockOutLocationType}
              onChange={(evt) => setClockOutLocationType(evt.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "100%" }}
              id="outlined-basic"
              label="Service Location Zip Code"
              variant="outlined"
            //   value={zipCode}
            // onChange={(evt) => setZipCode(evt.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "300px" }}
              id="outlined-basic"
              label="Service Location Address Line 1"
              variant="outlined"
              value={clockOutAddressLine1}
              onChange={(evt) => setClockOutAddressLine1(evt.target.value)}
            />
          </div>


          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ marginTop: "20px", width: "300px" }}
              id="outlined-basic"
              label="Service Location Address Line 2"
              variant="outlined"
              value={clockOutAddressLine2}
              onChange={(evt) => setClockOutAddressLine2(evt.target.value)}
            />
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}>
          <Button className="EditButton" variant="outlined" onClick={() => {
            editVisit(
              selectedItem.id,

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

              "",
              "",
              "",
              "",
              ""
            ).then(res => {
              if (res.data.result == "success") {
                showToastMessage();
              }
            });
          }}>
            Save Changes
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: '50px' }}>
          <Button className="EditButton" variant="outlined" onClick={ClockInOutPressed}>
            Close
          </Button>
        </div>
      </div>
    );
  };
  //


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
          <UserName />
          <hr
            className="line"
            style={{ width: "50%", fontSize: "10px", opacity: "0.2" }}
          />

          <h3 onClick={ClockInOutPressed} style={{ color: "#F2B90F" }}>Clock In / Out</h3>
          <h3 onClick={DirectionPressed} style={{ color: "#F2B90F" }}>Direction</h3>
          <h3 onClick={PatientInfoPressed} style={{ color: "#F2B90F" }}>Patient Info</h3>
          <h3 onClick={CarePlanPressed} style={{ color: "#F2B90F" }}>Care Plan</h3>

        </div>
      </Box>
    </div>
  );
  //

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
        <img className="headerImage" src="/EmpireHomeCareLogo.png"
          onClick={() => navigate("/CareGiverHome")} />

        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
        <LogoutIcon onClick={signOut} className="LogoutIcon"></LogoutIcon>
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
                ClockInOutPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Clock In / Out
              </p>
            </Button>
            <Button onClick={DirectionPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Direction
              </p>
            </Button>
            <Button onClick={PatientInfoPressed}>
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Patient Info
              </p>
            </Button>

            <Button onClick={CarePlanPressed}>
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Care Plan
              </p>
            </Button>

          </div>

          <div className="NeedHelpDiv">
            <p className="needHelpText">Need Help ?</p>
            <a className="NeedHelpTele" href="tel:+1234567890">
              Call us now
            </a>
          </div>
        </Card>

        <Card className="dataDisplay">{RenderViews()}</Card>
      </div>

      <div className="GoBackButtonHolder">
        <Button className="GoBackButton" variant="outlined" onClick={() => { navigate(-1) }} >Go Back</Button>
      </div>

      <Footer />
    </Wrapper>
  );
};

export default VisitDetails;
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
    justify-content:center;
  }

.CardHolder{
    display:flex;
    flex-direction:row;
}

.CardHolder::-webkit-scrollbar {
  width: 10px;
    }

    .CardHolder::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    }

    .CardHolder::-webkit-scrollbar-thumb {
    background-color: #888;
    }

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


//patient view start
.PatientViewHolder{
  display:flex;
  flex-direction:row;
}
.contactCard{
  background-color:#564873;
  border-radius:15px;
  padding:2%;
  width:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.phoneNumber{
  display:flex;
  flex-direction:row;
  text-align:center;
}
.EmergencyCard{
  
  margin-left:2%;
  background-color:#564873;
  border-radius:15px;
  padding:2%;
  width:50%;
  display:flex;
  align-items:center;
  flex-direction:column;

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

// patient view end


.PlanofCareList{
  height:325px;
  width:400px;
  border-radius:15px;
  padding:1%;
}
.OtherList{
  height:325px;
  width:400px;
  border-radius:15px;
  padding:1%;
}

.forScrollOnly::-webkit-scrollbar {
  width: 10px;
  }

  .forScrollOnly::-webkit-scrollbar-track {
  background-color: #564873;
  }

  .forScrollOnly::-webkit-scrollbar-thumb {
  background-color: #8e9fb1;
  border-radius: 5px;
  }
.ListItem{
  margin-top:1%;
  color:black;
  margin-left:20%;
  width:250px;
}
.ListHolder{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-content:center;
  align-items:center;
}
.ListItem:hover .ListText{
  color:black;
  font-weight:bold;
}

//direction start
.mapholder{
  
  height: 450px;
  width: 100%;
  background-color: white;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.DirectionCard{
  display:flex;
  flex-direction:column;
  background-color:#564873;
  display: flex;
  justify-content: center;
  align-items: center;
}

// direction end




//Clock in/Out View
.ClockCardHolder{
    display:flex;
    flex-direction:row;

}
.clockInCard{
    background-color:#564873;
    width:50%;
    display:flex;
    align-items:center;
    place-items:center;
    justify-content:center;
    flex-direction:column;
    height:180px;
    border-radius:15px;
    margin: 20px;
}
.clockOutCard{
    
  background-color:#564873;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    place-items:center;
    justify-content:center;
    margin-left:1%;
    height:180px;
    border-radius:15px;
}
.DateHolder{
    width: 100%;
    height: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 10px;
}
.dateIcon{
    color:white;
}
.ClockIcon{
    color:white;
}
.clockBtn{
    color:white;
    font-size:20px;
    background-color:#f26e22;
    border-radius:15px;
    width:150px;
}

//Clock in/Out View


//data display card
.dataDisplay{
    height:600px;
    width:70%;
    margin-left:2%;
    margin-top:3%;
    background-color:#F2F2F2;
    padding:1.7%;
    overflow:auto;
}
//data display card end

//UserInfo(TaskBar)
.TaskBar{

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


//need help div start

.NeedHelpDiv{
    margin-left:35%;
    margin-top:45%;
}
.needHelpText{
    color:white;
}
.NeedHelpTele{
    color:white;
    text-decoration: none
}

//need help end


   //Header CSS FILES
   .Header{
   display:flex;
   flex-direction:row;
   margin-left:5.9%;
   margin-top:0.5%;
   width:93%;
   background-color:white;
   }
   .headerImage{
    width:7%;
    height:1%;
    border-radius:15px;
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
      
      margin-top:10%;
      
    }
    .LogoutIcon{
      font-size:40px;
      color:grey;
      margin-left:20%;
      display:inline;
      margin-top:10%;
  
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
    .PatientViewHolder{
      
      flex-direction:column;
    }
    .contactCard{
      width:95%;  
      margin-left:0; 
    }
    .EmergencyCard{
      width:95%;
      margin-left:0;  
      margin-top:1%;
    }
    .ListHolder{
     
      flex-direction:column;
    }
    .PlanofCareList{
      margin-left:0%;
      width:98%;
    }
    .OtherList{
      margin-left:0%;
      width:98%;
      
    }
    .GoBackButton{
      width:50%;
      margin-top:15px;
      height:50%;
    }
    .EditButton{
      width:50%;
    }
  }
   `;
