import axios from 'axios'



export const addMember = async (
    FirstName,
    LastName,
    Email,
    Password,
    Username
) => {

    var data = JSON.stringify({
        "type": "createuser",
        "type_id": "3",
        "user_id": Username,
        "pwd": Password,
        "email": Email
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.empirehomecareagency.org/empire/auth',
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




export const getMembers = async () => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type": "getmembers"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://api.empirehomecareagency.org/empire/members", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}



export const updateMember = async (
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
) => {

    var data = JSON.stringify({
        "type": "updatemembers",
        "AltMemberID": altMemberID,
        "Branch": branch,
        "Cluster": cluster,
        "MCOName": mcoName,
        "Default": isDefault,
        "Discipline": discipline,
        "EVVRequired": evvRequired,
        "FirstDayofService": firstDayOfService,
        "FOBRequired": fobRequired,
        "FOBSealID": fobSealID,
        "LastDayofService": lastDayOfService,
        "Linked": isLinked,
        "Location": locationMember,
        "MDOrderRequired": mdOrderRequired,
        "Mutual": isMutual,
        "Nurse": nurse,
        "MemberProfileHeaderAlert": memberProfileHeaderAlert,
        "ProjectedDCDate": projectedDCDate,
        "SourceOfAdmission": sourceOfAdmission,
        "Status": status,
        "Team": team,
        "UniqueDeviceSerialNumber": uniqueDeviceSerialNumber,
        "ProviderName": providerName,
        "AcceptedServices": acceptedServices,
        "AdmissionID": admissionID,
        "Alert": alert,
        "CoordinatorName": coordinatorName,
        "CoordinatorName2": coordinatorName2,
        "CoordinatorName3": coordinatorName3,
        "DateofBirth": dateOfBirth,
        "FirstName": firstName,
        "Gender": gender,
        "ICD-10": icd10,
        "ICD-9": icd9,
        "IVRRequired": ivrRequired,
        "LastName": lastName,
        "MedicaidNumber": medicaidNumber,
        "MedicareNumber": medicareNumber,
        "MiddleName": middleName,
        "MemberHIClaimNo": memberHIClaimNo,
        "MemberID": memberID,
        "SSN": ssn,
        "StartDate": startDate,
        "WageParity": isWageParity,
        "WageParityFromDate1": wageParityFromDate1,
        "WageParityFromDate2": wageParityFromDate2,
        "WageParityToDate1": wageParityToDate1,
        "WageParityToDate2": wageParityToDate2,
        "Address1": address1,
        "Address2": address2,
        "City": city,
        "CrossStreet": crossStreet,
        "HomePhone": homePhone,
        "HomePhone2": homePhone2,
        "HomePhone3": homePhone3,
        "State": stateMember,
        "ZipCode": zipCode,
        "BillingCity": billingCity,
        "BillingFirstName": billingFirstName,
        "BillingLastName": billingLastName,
        "BillingMiddleName": billingMiddleName,
        "BillingResponsibleParty": billingResponsibleParty,
        "BillingState": billingState,
        "BillingStreet": billingStreet,
        "BillingZipCode": billingZipCode,
        "DifferentBillingAddress": differentBillingAddress,
        "Emergency1Address": emergency1Address,
        "Emergency1Name": emergency1Name,
        "Emergency1Phone1": emergency1Phone1,
        "Emergency1phone2": emergency1phone2,
        "Emergency1Relationship": emergency1Relationship,
        "Emergency2Address": emergency2Address,
        "Emergency2Name": emergency2Name,
        "Emergency2Phone1": emergency2Phone1,
        "Emergency2Phone2": emergency2Phone2,
        "Emergency2Relationship": emergency2Relationship,
        "PriorityCode": priorityCode,
        "EvacuationZone": evacuationZone,
        "EvacuationLocation": evacuationLocation,
        "MobilityStatus": mobilityStatus,
        "ElectricEquipmentDependency": electricEquipmentDependency,
        "MCOPriorityCode": mcoPriorityCode,
        "PreferredGender": preferredGender,
        "ShabbatObservant": shabbatObservant,
        "AccountManager": accountManager,
        "CommissionStatus": commissionStatus,
        "ContactPerson": contactPerson,
        "IntakePerson": intakePerson,
        "ReceivedDate": receivedDate,
        "Source": source,
        "Type": type,
        "ClinicalComments": clinicalComments,
        "MDVisitDue": mdVisitDue,
        "Allergies": allergies,
        "LastSkilled/RNVisit": lastSkilledRNVisit,
        "PHIMemberID": phiMemberID
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.empirehomecareagency.org/empire/members',
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