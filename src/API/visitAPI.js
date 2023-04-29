import axios from 'axios'


export const addVisit = async (
    selectedMemberAllDataFirstName,
    selectedMemberAllDataLastName,
    selectedMemberAllDataMemberID,
    selectedCareGiverAllDataCode,
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
        "AgencyTaxID": "822510744",
        "OfficeNPI": "",
        "PayerID": "28223",
        "MedicaidNumber": "1000000000",
        "MemberFirstName": selectedMemberAllDataFirstName,
        "MemberLastName": selectedMemberAllDataLastName,
        "MemberID": selectedMemberAllDataMemberID,
        "CaregiverCode": selectedCareGiverAllDataCode,
        "CaregiverRegistryID": "",
        "CaregiverLicenseNumber": "",
        "CaregiverFirstName": selectedCareGiverAllDataFirstName,
        "CaregiverLastName": selectedCareGiverAllDataLastName,
        "CaregiverGender": selectedCareGiverAllDataGender,
        "CaregiverDateofBirth": selectedCareGiverAllDataDateofBirth,
        "CaregiverSSN": selectedCareGiverAllDataSSN,
        "CaregiverEmail": "",
        "ScheduleID": scheduleID,
        "VisitID": visitID,
        "ProcedureCode": procedureCode,
        "DiagnosisCode": diagnosisCode,
        "ScheduleStartTime": scheduleStartTime,
        "ScheduleEndTime": scheduleEndTime,
        "VisitStartTime": visitStartTime,
        "VisitEndTime": visitEndTime,
        "EVVStartTime": evvStartTime,
        "EVVEndTime": evvEndTime,
        "Clock-InServiceLocationAddressLine1": clockInLocationAddressLine1,
        "Clock-InServiceLocationAddressLine2": clockInLocationAddressLine2,
        "Clock-InServiceLocationCity": clockInLocationCity,
        "Clock-InServiceLocationState ": clockInLocationState,
        "Clock-InServiceLocationZipCode": clockInZipCode,
        "Clock-InServiceLocationType": clockInLocationType,
        "Clock-OutServiceLocationAddressLine1": clockOutAddressLine1,
        "Clock-OutServiceLocationAddressLine2": clockOutAddressLine2,
        "Clock-OutServiceLocationCity": clockOutLocationCity,
        "Clock-OutServiceLocationState ": clockOutLocationState,
        "Clock-OutServiceLocationZipCode": clockOutLocationZipCode,
        "Clock-OutServiceLocationType": clockOutLocationType,
        "Duties": duties,
        "Clock-InPhoneNumber": clockInPhone,
        "Clock-InLatitude": clockInLatitude,
        "Clock-InLongitude": clockInLongitude,
        "Clock-InEVVOtherInfo": clockInEvvOtherInfo,
        "Clock-OutPhoneNumber": clockOutPhone,
        "Clock-OutLatitude": clockOutLatitude,
        "Clock-OutLongitude": clockOutLongitude,
        "Clock-OutEVVOtherInfo": clockOutEvvOtherInfo,
        "InvoiceNumber": invoiceNumber,
        "VisitEditReasonCode": visitEditReasonCode,
        "VisitEditActionTaken": visitEditActionTaken,
        "VisitEditMadeBy": visitEditMadeBy,
        "Notes": notes,
        "IsDeletion": inDeletion,
        "InvoiceLine-ItemID": invoiceLineItemId,
        "TotalBilledAmount": totalBilledAmount,
        "UnitsBilled": unitsBilled,
        "BilledRate": billedRate,
        "SubmissionType": submissionType,
        "TRNNumber": trnNumber,
        "EnableSecondaryBilling": enableSecondaryBilling,
        "OtherSubscriberID": otherSubscriberId,
        "PrimaryPayerID": primaryPayerId,
        "PrimaryPayerName": primaryPayerName,
        "RelationshiptoInsured": relationshipToInsured,
        "PrimaryPayerPolicyorGroupnumber": primaryPayerPolicy,
        "PrimaryPayerProgramName": primaryPayerProgram,
        "PlanType": planType,
        "TotalPaidAmount": totalPaidAmount,
        "TotalPaidUnits": totalPaidUnits,
        "PaidDate": paidDate,
        "Deductible": deductible,
        "Coinsurance": coinsurance,
        "Copay": copay,
        "ContractedAdjustments": contractedAdjustments,
        "NotMedicallyNecessary": notMedicallyNecessary,
        "Non-CoveredCharges": nonCoveredCharges,
        "Max BenefitExhausted": maxBenefitExhausted,
        "MissedVisit": missedVisit,
        "MissedVisitReasonCode": missedVisitReasonCode,
        "MissedVisitActionTakenCode": missedVisitActionTakenCode,
        "MissedVisitNotes": missedVisitNotes,
        "TravelTimeRequestHours": travelTimeRequestHours,
        "TravelTimeComments": travelTimeComments,
        "CancelTravelTimeRequest": cancelTravelTimeRequest,
        "TimesheetRequired": timesheetRequired,
        "TimesheetApproved": timesheetApproved,
        "UserField1": unitField1,
        "UserField2": unitField2,
        "UserField3": unitField3,
        "UserField4": unitField4,
        "UserField5": unitField5,
        "UserField6": unitField6,
        "UserField7": unitField7Value,
        "UserField8": unitField8Value,
        "UserField9": unitField9Value,
        "UserField10": unitField10Value,
        
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
        "type": "getvisit"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://projects.penntelco.com/empire/visit", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}


export const getVisitByID = async (id) => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type": "getvisit",
        "id": id
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://projects.penntelco.com/empire/visit", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}

export const getVisitByCareGiverCode = async (id) => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type": "getvisit",
        "caregiver_code": id
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://projects.penntelco.com/empire/visit", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}


export const editVisit = async (
    id,
    selectedMemberAllDataFirstName,
    selectedMemberAllDataLastName,
    selectedMemberAllDataMemberID,
    selectedCareGiverAllDataCode,
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


    careGiverNote,
    enteredInEim,
    healthSafetyRiskName,
    healthSafetyRiskState,
    maid

) => {

    var data = JSON.stringify({
        "type": "editvisit",
        "id": id,
        "AgencyTaxID": "822510744",
        "OfficeNPI": "",
        "PayerID": "28223",
        "MedicaidNumber": "1000000000",
        "MemberFirstName": selectedMemberAllDataFirstName,
        "MemberLastName": selectedMemberAllDataLastName,
        "MemberID": selectedMemberAllDataMemberID,
        "CaregiverCode": selectedCareGiverAllDataCode,
        "CaregiverRegistryID": "",
        "CaregiverLicenseNumber": "",
        "CaregiverFirstName": selectedCareGiverAllDataFirstName,
        "CaregiverLastName": selectedCareGiverAllDataLastName,
        "CaregiverGender": selectedCareGiverAllDataGender,
        "CaregiverDateofBirth": selectedCareGiverAllDataDateofBirth,
        "CaregiverSSN": selectedCareGiverAllDataSSN,
        "CaregiverEmail": "",
        "ScheduleID": scheduleID,
        "VisitID": visitID,
        "ProcedureCode": procedureCode,
        "DiagnosisCode": diagnosisCode,
        "ScheduleStartTime": scheduleStartTime,
        "ScheduleEndTime": scheduleEndTime,
        "VisitStartTime": visitStartTime,
        "VisitEndTime": visitEndTime,
        "EVVStartTime": evvStartTime,
        "EVVEndTime": evvEndTime,
        "Clock-InServiceLocationAddressLine1": clockInLocationAddressLine1,
        "Clock-InServiceLocationAddressLine2": clockInLocationAddressLine2,
        "Clock-InServiceLocationCity": clockInLocationCity,
        "Clock-InServiceLocationState ": clockInLocationState,
        "Clock-InServiceLocationZipCode": clockInZipCode,
        "Clock-InServiceLocationType": clockInLocationType,
        "Clock-OutServiceLocationAddressLine1": clockOutAddressLine1,
        "Clock-OutServiceLocationAddressLine2": clockOutAddressLine2,
        "Clock-OutServiceLocationCity": clockOutLocationCity,
        "Clock-OutServiceLocationState ": clockOutLocationState,
        "Clock-OutServiceLocationZipCode": clockOutLocationZipCode,
        "Clock-OutServiceLocationType": clockOutLocationType,
        "Duties": duties,
        "Clock-InPhoneNumber": clockInPhone,
        "Clock-InLatitude": clockInLatitude,
        "Clock-InLongitude": clockInLongitude,
        "Clock-InEVVOtherInfo": clockInEvvOtherInfo,
        "Clock-OutPhoneNumber": clockOutPhone,
        "Clock-OutLatitude": clockOutLatitude,
        "Clock-OutLongitude": clockOutLongitude,
        "Clock-OutEVVOtherInfo": clockOutEvvOtherInfo,
        "InvoiceNumber": invoiceNumber,
        "VisitEditReasonCode": visitEditReasonCode,
        "VisitEditActionTaken": visitEditActionTaken,
        "VisitEditMadeBy": visitEditMadeBy,
        "Notes": notes,
        "IsDeletion": inDeletion,
        "InvoiceLine-ItemID": invoiceLineItemId,
        "TotalBilledAmount": totalBilledAmount,
        "UnitsBilled": unitsBilled,
        "BilledRate": billedRate,
        "SubmissionType": submissionType,
        "TRNNumber": trnNumber,
        "EnableSecondaryBilling": enableSecondaryBilling,
        "OtherSubscriberID": otherSubscriberId,
        "PrimaryPayerID": primaryPayerId,
        "PrimaryPayerName": primaryPayerName,
        "RelationshiptoInsured": relationshipToInsured,
        "PrimaryPayerPolicyorGroupnumber": primaryPayerPolicy,
        "PrimaryPayerProgramName": primaryPayerProgram,
        "PlanType": planType,
        "TotalPaidAmount": totalPaidAmount,
        "TotalPaidUnits": totalPaidUnits,
        "PaidDate": paidDate,
        "Deductible": deductible,
        "Coinsurance": coinsurance,
        "Copay": copay,
        "ContractedAdjustments": contractedAdjustments,
        "NotMedicallyNecessary": notMedicallyNecessary,
        "Non-CoveredCharges": nonCoveredCharges,
        "Max BenefitExhausted": maxBenefitExhausted,
        "MissedVisit": missedVisit,
        "MissedVisitReasonCode": missedVisitReasonCode,
        "MissedVisitActionTakenCode": missedVisitActionTakenCode,
        "MissedVisitNotes": missedVisitNotes,
        "TravelTimeRequestHours": travelTimeRequestHours,
        "TravelTimeComments": travelTimeComments,
        "CancelTravelTimeRequest": cancelTravelTimeRequest,
        "TimesheetRequired": timesheetRequired,
        "TimesheetApproved": timesheetApproved,
        "UserField1": unitField1,
        "UserField2": unitField2,
        "UserField3": unitField3,
        "UserField4": unitField4,
        "UserField5": unitField5,
        "UserField6": unitField6,
        "UserField7": unitField7Value,
        "UserField8": unitField8Value,
        "UserField9": unitField9Value,
        "UserField10": unitField10Value,

        
        "CareGiverNote": careGiverNote,
        "EnteredInEim": enteredInEim,
        "HealthSafetyRiskName": healthSafetyRiskName,
        "HealthSafetyRiskState":healthSafetyRiskState,
        "Maid": maid
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


