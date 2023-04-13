import axios from 'axios'


export const addVisit = async (
    selectedMemberAllDataFirstName,
    selectedMemberAllDataLastName,
    selectedMemberAllDataMemberID,
    selectedCareGiverAllDataFirstName,
    selectedCareGiverAllDataLastName,
    selectedCareGiverAllDataGender,
    selectedCareGiverAllDataDateofBirth,
    selectedCareGiverAllDataSSN,

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
) => {

    var data = JSON.stringify({
        "type": "postvisit",
        "Agency Tax ID": "888888888",
        "Office NPI": "",
        "Payer ID": "28223",
        "Medicaid Number": "1000000000",
        "Member First Name": selectedMemberAllDataFirstName,
        "Member Last Name": selectedMemberAllDataLastName,
        "Member ID": selectedMemberAllDataMemberID,
        "Caregiver Code": "555555",
        "Caregiver Registry ID": "",
        "Caregiver License Number": "",
        "Caregiver First Name": selectedCareGiverAllDataFirstName,
        "Caregiver Last Name": selectedCareGiverAllDataLastName,
        "Caregiver Gender": selectedCareGiverAllDataGender,
        "Caregiver Date of Birth": selectedCareGiverAllDataDateofBirth,
        "Caregiver SSN": selectedCareGiverAllDataSSN,
        "Caregiver Email": "",
        "Schedule ID": scheduleID,
        "Visit ID": visitID,
        "Procedure Code": procedureCode,
        "Diagnosis Code": diagnosisCode,
        "Schedule Start Time": scheduleStartTime,
        "Schedule End Time": scheduleEndTime,
        "Visit Start Time": visitStartTime,
        "Visit End Time": visitEndTime,
        "EVV Start Time": evvStartTime,
        "EVV End Time": evvEndTime,
        "Clock-In Service Location Address Line 1": clockInLocationAddressLine1,
        "Clock-In Service Location Address Line 2": clockInLocationAddressLine2,
        "Clock-In Service Location City": clockInLocationCity,
        "Clock-In Service Location State ": clockInLocationState,
        "Clock-In Service Location Zip Code": clockInZipCode,
        "Clock-In Service Location Type": clockInLocationType,
        "Clock-Out Service Location Address Line 1": clockOutAddressLine1,
        "Clock-Out Service Location Address Line 2": clockOutAddressLine2,
        "Clock-Out Service Location City": clockOutLocationCity,
        "Clock-Out Service Location State ": clockOutLocationState,
        "Clock-Out Service Location Zip Code": clockOutLocationZipCode,
        "Clock-Out Service Location Type": clockOutLocationType,
        "Duties": duties,
        "Clock-In Phone Number": clockInPhone,
        "Clock-In Latitude": clockInLatitude,
        "Clock-In Longitude": clockInLongitude,
        "Clock-In EVV Other Info": clockInEvvOtherInfo,
        "Clock-Out Phone Number": clockOutPhone,
        "Clock-Out Latitude": clockOutLatitude,
        "Clock-Out Longitude": clockOutLongitude,
        "Clock-Out EVV Other Info": clockOutEvvOtherInfo,
        "Invoice Number": invoiceNumber,
        "Visit Edit Reason Code": visitEditReasonCode,
        "Visit Edit Action Taken": visitEditActionTaken,
        "Visit Edit Made By": visitEditMadeBy,
        "Notes": notes,
        "Is Deletion": inDeletion,
        "Invoice Line-Item ID": invoiceLineItemId,
        "Total Billed Amount": totalBilledAmount,
        "Units Billed": unitsBilled,
        "Billed Rate": billedRate,
        "Submission Type": submissionType,
        "TRN Number": trnNumber,
        "Enable Secondary Billing": enableSecondaryBilling,
        "Other Subscriber ID": otherSubscriberId,
        "Primary Payer ID": primaryPayerId,
        "Primary Payer Name": primaryPayerName,
        "Relationship to Insured": relationshipToInsured,
        "Primary Payer Policy or Group number": primaryPayerPolicy,
        "Primary Payer Program Name": primaryPayerProgram,
        "Plan Type": planType,
        "Total Paid Amount": totalPaidAmount,
        "Total Paid Units": totalPaidUnits,
        "Paid Date": paidDate,
        "Deductible": deductible,
        "Coinsurance": coinsurance,
        "Copay": copay,
        "Contracted Adjustments": contractedAdjustments,
        "Not Medically Necessary": notMedicallyNecessary,
        "Non-Covered Charges": nonCoveredCharges,
        "Max Benefit Exhausted": maxBenefitExhausted,
        "Missed Visit": missedVisit,
        "Missed Visit Reason Code": missedVisitReasonCode,
        "Missed Visit Action Taken Code": missedVisitActionTakenCode,
        "Missed Visit Notes": missedVisitNotes,
        "Travel Time Request Hours": travelTimeRequestHours,
        "Travel Time Comments": travelTimeComments,
        "Cancel Travel Time Request": cancelTravelTimeRequest,
        "Timesheet Required": timesheetRequired,
        "Timesheet Approved": timesheetApproved,
        "User Field 1": unitField1,
        "User Field 2": unitField2,
        "User Field 3": unitField3,
        "User Field 4": unitField4,
        "User Field 5": unitField5,
        "User Field 6": unitField6,
        "User Field 7": unitField7Value,
        "User Field 8": unitField8Value,
        "User Field 9": unitField9Value,
        "User Field 10": unitField10Value
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/visit',
        // headers: {
        //     'Authorization': 'Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR', 
        //     'Content-Type': 'application/json',
        //     'Cookie': 'PHPSESSID=ugn8r0fu6qih7mao9e2g5l1vs7'
        // },
        data: data
    };

    return new Promise((resolve, reject) => {

        axios(config)
            .then(
                (res => {
                    resolve(res)
                }
                )
            )
            .catch(err => reject(err))

    })
}


export const getVisit = async () => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type": "getcaregivers"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://projects.penntelco.com/empire/caregivers", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}


