var axios = require('axios');



export const addMCO = async (
    Name,
) => {

    var data = JSON.stringify({
        "type":"addmco",
        "name": Name,
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/misc',
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



export const getMCO = async () => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR");
    // myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "type": "getmco"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://projects.penntelco.com/empire/misc", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}