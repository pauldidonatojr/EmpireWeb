import axios from 'axios'


export const createCareGiverLogin = async (email, username, password) => {

    var data = JSON.stringify({
        "type":"createuser",
        "type_id":"2",
        'user_id': username,
        'pwd': password,
        "email":email
      });

    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/auth',
        // headers: { 
        //   'Authorization': 'Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR', 
        // },
        data : data
      };
      
      return new Promise((resolve, reject) => {
        axios(config)
        .then(
            (res => {
                resolve(res)
                console.log(res)
            }
            )
        )
        .catch(err => reject(err))
      })

  };

  export const loginCareGiver = async (username, password) => {

    var data = JSON.stringify({
      // {"type":"login","type_id":"1","user_id":"demo","pwd":"12345"}
        'type': 'login',
        "type_id":"2",
        'user_id': username,
        'pwd': password,
      });

    var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://projects.penntelco.com/empire/auth',
        // headers: { 
        //   'Authorization': 'Bearer sIW4iLCJJta2w_PEc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybF0IjoxNjc2NjYmFtZSI6Ib7c32gxMFYzKvSHeyJhZSIfNmbGciOiJIUzI1NiJ9.eyJSb2kphdmFJblVzmV4cCI6MTY3NjY2NjQzOCwiaW2NDM4fQ.nuvs4fzaaeYFhiE4sx2oxlIjoiQWR', 
        // },
        data : data
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

  };