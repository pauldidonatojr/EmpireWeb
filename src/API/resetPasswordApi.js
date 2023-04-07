import axios from 'axios'
import { LoginContext } from '../components/context';


export const resetPassword = async (email, oldPassword, newPassword) => {

    var data = JSON.stringify({
        // {"type":"resetpwd","type_id":"1","pwd":"12345","new_pwd":"123456","email":"fahadbashir757@gmail.com"}
        "type":"resetpwd",
        "type_id":"1",
        "email" : email,
        'pwd': oldPassword,
        'new_pwd': newPassword
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
        .catch(err => {
          reject(err)
        })
      })

  };