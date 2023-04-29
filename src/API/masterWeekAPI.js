import axios from 'axios'


export const addMasterWeek = async (
    memberID,
    fromDate,
    toDate,

    startTimeMon,
    endTimeMon,
    caregiverCodeMon,
    assIDMon,
    posIDMon,
    hourMon,
    minMon,
    secMon,
    serviceCodeMon,
    modeMon,

    startTimeTue,
    endTimeTue,
    caregiverCodeTue,
    assIDTue,
    posIDTue,
    hourTue,
    minTue,
    secTue,
    serviceCodeTue,
    modeTue,

    startTimeWed,
    endTimeWed,
    caregiverCodeWed,
    assIDWed,
    posIDWed,
    hourWed,
    minWed,
    secWed,
    serviceCodeWed,
    modeWed,

    startTimeThr,
    endTimeThr,
    caregiverCodeThr,
    assIDThr,
    posIDThr,
    hourThr,
    minThr,
    secThr,
    serviceCodeThr,
    modeThr,

    startTimeF,
    endTimeF,
    caregiverCodeF,
    assIDF,
    posIDF,
    hourF,
    minF,
    secF,
    serviceCodeF,
    modeF,

    startTimeSat,
    endTimeSat,
    caregiverCodeSat,
    assIDSat,
    posIDSat,
    hourSat,
    minSat,
    secSat,
    serviceCodeSat,
    modeSat,

    startTimeSu,
    endTimeSu,
    caregiverCodeSu,
    assIDSu,
    posIDSu,
    hourSu,
    minSu,
    secSu,
    serviceCodeSu,
    modeSu,

) => {

    var data = JSON.stringify({
        "type": "addmasterweek",
        "member_id": memberID,
        "from_date": fromDate,
        "to_date": toDate,
        "days": [
            {
                "MON":
                {
                    "hours": startTimeMon + ":" + endTimeMon,
                    "caregiver": caregiverCodeMon,
                    "ass_id": assIDMon,
                    "poc_id": posIDMon,
                    "hour": hourMon,
                    "min": minMon,
                    "sec": secMon,
                    "service_code": serviceCodeMon,
                    "mode": modeMon
                },
                "TUE":
                {
                    "hours": startTimeTue + ":" + endTimeTue,
                    "caregiver": caregiverCodeTue,
                    "ass_id": assIDTue,
                    "poc_id": posIDTue,
                    "hour": hourTue,
                    "min": minTue,
                    "sec": secTue,
                    "service_code": serviceCodeTue,
                    "mode": modeTue
                },
                "WED":
                {
                    "hours": startTimeWed + ":" + endTimeWed,
                    "caregiver": caregiverCodeWed,
                    "ass_id": assIDWed,
                    "poc_id": posIDWed,
                    "hour": hourWed,
                    "min": minWed,
                    "sec": secWed,
                    "service_code": serviceCodeWed,
                    "mode": modeWed
                },
                "THU":
                {
                    "hours": startTimeThr + ":" + endTimeThr,
                    "caregiver": caregiverCodeThr,
                    "ass_id": assIDThr,
                    "poc_id": posIDThr,
                    "hour": hourThr,
                    "min": minThr,
                    "sec": secThr,
                    "service_code": serviceCodeThr,
                    "mode": modeThr
                },
                "FRI":
                {
                    "hours": startTimeF + ":" + endTimeF,
                    "caregiver": caregiverCodeF,
                    "ass_id": assIDF,
                    "poc_id": posIDF,
                    "hour": hourF,
                    "min": minF,
                    "sec": secF,
                    "service_code": serviceCodeF,
                    "mode": modeF
                },
                "SAT":
                {
                    "hours": startTimeSat + ":" + endTimeSat,
                    "caregiver": caregiverCodeSat,
                    "ass_id": assIDSat,
                    "poc_id": posIDSat,
                    "hour": hourSat,
                    "min": minSat,
                    "sec": secSat,
                    "service_code": serviceCodeSat,
                    "mode": modeSat
                },
                "SUN":
                {
                    "hours": startTimeSu + ":" + endTimeSu,
                    "caregiver": caregiverCodeSu,
                    "ass_id": assIDSu,
                    "poc_id": posIDSu,
                    "hour": hourSu,
                    "min": minSu,
                    "sec": secSu,
                    "service_code": serviceCodeSu,
                    "mode": modeSu
                }
            }
        ]
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/members',
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


export const getMasterWeek = async (memberID) => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type": "getmasterweek",
        "member_id": memberID
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://projects.penntelco.com/empire/members", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}


export const editMasterWeek = async (
    id,
    memberID,
    fromDate,
    toDate,

    startTimeMon,
    endTimeMon,
    caregiverCodeMon,
    assIDMon,
    posIDMon,
    hourMon,
    minMon,
    secMon,
    serviceCodeMon,
    modeMon,

    startTimeTue,
    endTimeTue,
    caregiverCodeTue,
    assIDTue,
    posIDTue,
    hourTue,
    minTue,
    secTue,
    serviceCodeTue,
    modeTue,

    startTimeWed,
    endTimeWed,
    caregiverCodeWed,
    assIDWed,
    posIDWed,
    hourWed,
    minWed,
    secWed,
    serviceCodeWed,
    modeWed,

    startTimeThr,
    endTimeThr,
    caregiverCodeThr,
    assIDThr,
    posIDThr,
    hourThr,
    minThr,
    secThr,
    serviceCodeThr,
    modeThr,

    startTimeF,
    endTimeF,
    caregiverCodeF,
    assIDF,
    posIDF,
    hourF,
    minF,
    secF,
    serviceCodeF,
    modeF,

    startTimeSat,
    endTimeSat,
    caregiverCodeSat,
    assIDSat,
    posIDSat,
    hourSat,
    minSat,
    secSat,
    serviceCodeSat,
    modeSat,

    startTimeSu,
    endTimeSu,
    caregiverCodeSu,
    assIDSu,
    posIDSu,
    hourSu,
    minSu,
    secSu,
    serviceCodeSu,
    modeSu,

) => {

    var data = JSON.stringify({
        "type": "updatemasterweek",
        "id": id,
        "member_id": memberID,
        "from_date": fromDate,
        "to_date": toDate,
        "days": [
            {
                "MON":
                {
                    "hours": startTimeMon + ":" + endTimeMon,
                    "caregiver": caregiverCodeMon,
                    "ass_id": assIDMon,
                    "poc_id": posIDMon,
                    "hour": hourMon,
                    "min": minMon,
                    "sec": secMon,
                    "service_code": serviceCodeMon,
                    "mode": modeMon
                },
                "TUE":
                {
                    "hours": startTimeTue + ":" + endTimeTue,
                    "caregiver": caregiverCodeTue,
                    "ass_id": assIDTue,
                    "poc_id": posIDTue,
                    "hour": hourTue,
                    "min": minTue,
                    "sec": secTue,
                    "service_code": serviceCodeTue,
                    "mode": modeTue
                },
                "WED":
                {
                    "hours": startTimeWed + ":" + endTimeWed,
                    "caregiver": caregiverCodeWed,
                    "ass_id": assIDWed,
                    "poc_id": posIDWed,
                    "hour": hourWed,
                    "min": minWed,
                    "sec": secWed,
                    "service_code": serviceCodeWed,
                    "mode": modeWed
                },
                "THU":
                {
                    "hours": startTimeThr + ":" + endTimeThr,
                    "caregiver": caregiverCodeThr,
                    "ass_id": assIDThr,
                    "poc_id": posIDThr,
                    "hour": hourThr,
                    "min": minThr,
                    "sec": secThr,
                    "service_code": serviceCodeThr,
                    "mode": modeThr
                },
                "FRI":
                {
                    "hours": startTimeF + ":" + endTimeF,
                    "caregiver": caregiverCodeF,
                    "ass_id": assIDF,
                    "poc_id": posIDF,
                    "hour": hourF,
                    "min": minF,
                    "sec": secF,
                    "service_code": serviceCodeF,
                    "mode": modeF
                },
                "SAT":
                {
                    "hours": startTimeSat + ":" + endTimeSat,
                    "caregiver": caregiverCodeSat,
                    "ass_id": assIDSat,
                    "poc_id": posIDSat,
                    "hour": hourSat,
                    "min": minSat,
                    "sec": secSat,
                    "service_code": serviceCodeSat,
                    "mode": modeSat
                },
                "SUN":
                {
                    "hours": startTimeSu + ":" + endTimeSu,
                    "caregiver": caregiverCodeSu,
                    "ass_id": assIDSu,
                    "poc_id": posIDSu,
                    "hour": hourSu,
                    "min": minSu,
                    "sec": secSu,
                    "service_code": serviceCodeSu,
                    "mode": modeSu
                }
            }
        ]
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/members',
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


