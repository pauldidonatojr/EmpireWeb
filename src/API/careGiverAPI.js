import axios from 'axios'


export const addCareGiver = async (
    firstName,
    middleName,
    lastName,
    AideInitials,
    Gender,
    DOB,
    Status,
    CareGiverCode,
    SSN,
    CareGiverMobileID,
    MobileDeviceID,
    PrimaryMemberTeam,
    NPINumber,
    Rehire,//Yes/NO
    RehireDate,
    EmploymentType,
    Street1,
    Street2,
    City,
    Zip,
    Phone,
    State,
    HomePhone,
    Phone2,

    EmergencyContact1Name,
    EmergencyContact1Relation,
    EmergencyContact1Address,
    EmergencyContact1Phone1,
    EmergencyContact1Phone2,

    EmergencyContact2Name,
    EmergencyContact2Relation,
    EmergencyContact2Address,
    EmergencyContact2Phone1,
    EmergencyContact2Phone2
) => {

    var data = JSON.stringify({
        "type": "postcaregivers",
        "FirstName": firstName,
        "LastName": lastName,
        "MiddleName": middleName,
       
        "AideInitial": AideInitials,
        "Gender": Gender,
        "DateofBirth": DOB,
        "AideCode": CareGiverCode,
        "IVREmployee ID": "",
        "ALternateAideCode": "",
        "Ethnicity": "",
        "SSN": SSN,
        "MaritalStatus": "",
        "Discipline": "",
        "Dependents": "",
        "AidePicture": "No",
        "CountryofBirth": "",
        "RehireDate": RehireDate,
        "MobileID": CareGiverMobileID,
        "MobileIDStatus": "",
        "CaregiverMobileAppAvailability": "No",
        "ReferralSource": "",
        "ReferralPerson": "",
        "ApplicationDate": "01/01/1900",
        "HiringStatus": "Employee",
        "status": 1,
        "Reference1": "",
        "Reference2": "",
        "TerminatedDate": "",
        "Sent105": "NO",
        "FirstWorkDate": "03/21/2022",
        "LastWorkDate": "05/19/2022",
        "StateRegistry": "",
        "RegistryDate": "01/01/1900",
        "Location": "",
        "Branch": "",
        "CaregiverTeam": "",
        "Employee ID": "",
        
        "Address1": Street1,
        "Address2": Street2,
        "City": City,
        "ZipCode": Zip,
        "Phone": Phone,
        "State": State,
        "Phone2": Phone2,
        "Phone3": "",
        "Zip4": "",

        "Emergency1Name": EmergencyContact1Name,
        "Emergency1Relationship": EmergencyContact1Relation,
        "Emergency1Address": EmergencyContact1Address,
        "Emergency1Phone1": EmergencyContact1Phone1,
        "Emergency1phone2": EmergencyContact1Phone2,

        "Emergency2Name": EmergencyContact2Name,
        "Emergency2Relationship": EmergencyContact2Relation,
        "Emergency2Address": EmergencyContact2Address,
        "Emergency2Phone1": EmergencyContact2Phone1,
        "Emergency2Phone2": EmergencyContact2Phone2,

        "Language1": "",
        "Language2": "",
        "Language3": "",
        "Language4": "",
        "DocumentAB": "",
        "DocumentC": "",
        "I9FormExpirationDate": "",
        "I9Notes": "",
        "CriminalBackgroundSentOutDate": "",
        "CriminalBackgroundSentOutResult": "",
        "SentOutReceivedOn": "",
        "CriminalBackgroundSecondSubmissionDate": "",
        "CriminalBackgroundSecondSubmissionResult": "",
        "SecondSubmissionReceivedOn": "",
        "CriminalBackgroundThirdSubmissionDate": "",
        "CriminalBackgroundThirdSubmissionResult": "",
        "ThirdSubmissionReceivedOn": "",
        "LastEmploymentAgency": "",
        "LastEmploymentDateFrom": "",
        "LastEmploymentDateTo": "",
        "CoCode": "",
        "FedExemption": "",
        "RateType": "",
        "PensionProfitSharing": "",
        "ExemptionFromOvertime": "",
        "DirectDeposit": "",
        "NycResident": "",
        "Employee1099": "",
        "UnionReduction": "",
        "MedicalDeductionCode": "",
        "PayCycle": "",
        "PreferredContactMethod": "",
        "NotificationEmail": "",
        "NotificationTextMessaging": "",
        "NotificationVoiceMail": ""
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.empirehomecareagency.org/empire/caregivers',
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

export const getCareGiver = async () => {
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

    return fetch("https://api.empirehomecareagency.org/empire/caregivers", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}

export const editCareGiver = async (
    id,
    firstName,
    middleName,
    lastName,
    AideInitials,
    Gender,
    DOB,
    Status,
    CareGiverCode,
    SSN,
    CareGiverMobileID,
    MobileDeviceID,
    PrimaryMemberTeam,
    NPINumber,
    Rehire,
    RehireDate,
    EmploymentType,
    Street1,
    Street2,
    City,
    Zip,
    Phone,
    State,
    HomePhone,
    Phone2,

    EmergencyContact1Name,
    EmergencyContact1Relation,
    EmergencyContact1Address,
    EmergencyContact1Phone1,
    EmergencyContact1Phone2,

    EmergencyContact2Name,
    EmergencyContact2Relation,
    EmergencyContact2Address,
    EmergencyContact2Phone1,
    EmergencyContact2Phone2,
) => {

    var data = JSON.stringify({
        "type":"updatecaregivers",
        "id": id,
        "SSN": SSN,
        "City": City,
        "Zip4": "",
        "Phone": Phone,
        "State": State,
        "Branch": "",
        "CoCode": "",
        "Gender": Gender,
        "Phone2": Phone2,
        "Phone3": "",
        "status": "1",
        "I9Notes": "",
        "Sent105": "NO",
        "ZipCode": Zip,
        "Address1": Street1,
        "Address2": Street2,
        "AideCode": CareGiverCode,
        "FirstName": firstName,
        "LastName": lastName,
        "MiddleName": middleName,
        "Location": "",
        "MobileID": CareGiverMobileID,
        "PayCycle": "",
        "RateType": "",
        "AideInitial": AideInitials,
        "DateofBirth": DOB,
        "IVREmployee ID": "",
        "ALternateAideCode": "",
        "Ethnicity": "",
        "MaritalStatus": "",
        "Discipline": "",
        "Dependents": "",
        "AidePicture": "No",
        "CountryofBirth": "",
        "member_status": 1,
        "RehireDate": RehireDate,
        "MobileIDStatus": "",
        "CaregiverMobileAppAvailability": "No",
        "ReferralSource": "",
        "ReferralPerson": "",
        "ApplicationDate": "01/01/1900",
        "HiringStatus": "Employee",
        "Reference1": "",
        "Reference2": "",
        "TerminatedDate": "",
        "FirstWorkDate": "03/21/2022",
        "LastWorkDate": "05/19/2022",
        "StateRegistry": "",
        "RegistryDate": "01/01/1900",
        "CaregiverTeam": "",
        "Employee ID": "",
        "Emergency1Name": EmergencyContact1Name,
        "Emergency1Relationship": EmergencyContact1Relation,
        "Emergency1Address": EmergencyContact1Address,
        "Emergency1Phone1": EmergencyContact1Phone1,
        "Emergency1phone2": EmergencyContact1Phone2,
        "Emergency2Name": EmergencyContact2Name,
        "Emergency2Relationship": EmergencyContact2Relation,
        "Emergency2Address": EmergencyContact2Address,
        "Emergency2Phone1": EmergencyContact2Phone1,
        "Emergency2Phone2": EmergencyContact2Phone2,
        "Language1": "",
        "Language2": "",
        "Language3": "",
        "Language4": "",
        "DocumentAB": "",
        "DocumentC": "",
        "I9FormExpirationDate": "",
        "CriminalBackgroundSentOutDate": "",
        "CriminalBackgroundSentOutResult": "",
        "SentOutReceivedOn": "",
        "CriminalBackgroundSecondSubmissionDate": "",
        "CriminalBackgroundSecondSubmissionResult": "",
        "SecondSubmissionReceivedOn": "",
        "CriminalBackgroundThirdSubmissionDate": "",
        "CriminalBackgroundThirdSubmissionResult": "",
        "ThirdSubmissionReceivedOn": "",
        "LastEmploymentAgency": "",
        "LastEmploymentDateFrom": "",
        "LastEmploymentDateTo": "",
        "FedExemption": "",
        "PensionProfitSharing": "",
        "ExemptionFromOvertime": "",
        "DirectDeposit": "",
        "NycResident": "",
        "Employee1099": "",
        "UnionReduction": "",
        "MedicalDeductionCode": "",
        "PreferredContactMethod": "",
        "NotificationEmail": "",
        "NotificationTextMessaging": "",
        "NotificationVoiceMail": "",
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.empirehomecareagency.org/empire/caregivers',
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



