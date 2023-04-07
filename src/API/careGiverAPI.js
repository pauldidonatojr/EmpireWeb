import axios from 'axios'


export const addCareGiver = async (
    firstName,
    middleName,
    lastName,
    Initials,
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
        "first_name": firstName,
        "middle_name": middleName,
        "last_name": lastName,
        "initials": Initials,
        "gender": Gender,
        "dob": DOB,
        "status": Status,
        "caregiver_code": CareGiverCode,
        "ssn": SSN,
        "caregiver_mobile_id": CareGiverMobileID,
        "mobile_device_id": MobileDeviceID,
        "primary_member_team": PrimaryMemberTeam,
        "npi_number": NPINumber,
        "rehire": Rehire,
        "rehire_date": RehireDate,
        "employee_type": EmploymentType,

        "street_1": Street1,
        "street_2": Street2,
        "city": City,
        "zip": Zip,
        "phone": Phone,
        "state": State,
        "home_phone": HomePhone,
        "phone_2": Phone2,

        "emergency_contact_1_name": EmergencyContact1Name,
        "emergency_contact_1_relation": EmergencyContact1Relation,
        "emergency_contact_1_address": EmergencyContact1Address,
        "emergency_contact_1_phone_1": EmergencyContact1Phone1,
        "emergency_contact_1_phone_2": EmergencyContact1Phone2,

        "emergency_contact_2_name": EmergencyContact2Name,
        "emergency_contact_2_relation": EmergencyContact2Relation,
        "emergency_contact_2_address": EmergencyContact2Address,
        "emergency_contact_2_phone_1": EmergencyContact2Phone1,
        "emergency_contact_2_phone_2": EmergencyContact2Phone2,
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://secure.penntelco.com/empire/addcaregivers',
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

    return fetch("https://projects.penntelco.com/empire/caregivers", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}


