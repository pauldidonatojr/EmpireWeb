import axios from 'axios'



export const getLast3Authorizations = async (memberID) => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type":"authhistory",
        "member_id":memberID
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