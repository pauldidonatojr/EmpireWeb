import styled from "styled-components";
import { Text } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext, LoginContext } from './components/context'
import { loginUser } from './API/authAPI';
import { loginCareGiver } from "./API/authCareGiverAPI";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMCO } from "./API/mcoAPI";
import { getMISC } from "./API/miscAPI";
import { getCareGiver } from "./API/careGiverAPI";
import { getVisit } from "./API/visitAPI";
import { getMembers } from "./API/membersApi";
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';


function Login() {


  useEffect(() => {
    getMCO().then(res => {
      localStorage.setItem('MCOS', JSON.stringify(res.data));
    })
  }, [])


  useEffect(() => {
    getMISC().then(res => {
      localStorage.setItem('MISC', JSON.stringify(res.data));
    })

    getMembers().then(res => {
      localStorage.setItem('Members', JSON.stringify(res.data));
    })
  }, [])



  // useEffect(() => {
  //   getVisit().then(res => {
  //     localStorage.setItem('Visits', JSON.stringify(res.data));
  //   })
  // }, []);

  useEffect(() => {
    getCareGiver().then(res => {
      localStorage.setItem('CareGivers', JSON.stringify(res.data));
    })
  }, [])




  const { signIn } = React.useContext(AuthContext);
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  const [selectedRadio, setSelectedRadio] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [device, setDevice] = useState(false);

  const showToastMessage = () => {
    toast.error('Wrong Username or Password!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const [showCard, setShowCard] = useState(false);
  useEffect(() => {
    setShowCard(true);
  }, []);


  const loginHandle = (username, password, usertype) => {
    signIn(username, usertype, password);
  }


  const handleSignIn = (selectedRadio) => {
    switch (selectedRadio) {
      case "Admin":
        if (username != null && password != null) {
          loginUser(username, password).then(res => {
            if (res.data.result == "success") {
              loginHandle(username, password, 'admin');
              localStorage.setItem('LoggedInUser', JSON.stringify(res.data.data));
              navigate("/AdminHome");
              setLoginStatus('sucess');
            }
            if (res.data.result == "error") {
              showToastMessage();
            }
          }
          );
        }


        break;
      case "CareGiver":
        loginCareGiver(username, password).then(res => {
          console.log(res.data);
          if (res.data.result == "success") {
            loginHandle(username, password, 'caregiver');
            localStorage.setItem('LoggedInUser', JSON.stringify(res.data.data));
            navigate("/CareGiverHome");
            setLoginStatus('sucess');
          }
          if (res.data.result == "error") {
            showToastMessage();
          }
        });
        break;
      case "SFTP":
        if (username != null && password != null) {
          loginUser(username, password).then(res => {
            console.log(res.data);
            if (res.data.result == "success") {
              loginHandle(username, password, 'sftp');
              localStorage.setItem('LoggedInUser', JSON.stringify(res.data.data));
              navigate("/SFTPHome");
              setLoginStatus('sucess');
            }
            if (res.data.result == "error") {
              showToastMessage();
            }
          }
          );
        }
        break;
      case "Patient":
        //NAVIGATE TO PATIENT HOMEPAGE
        navigate("/PatientHome");
        loginHandle(username, password, 'patient');
        break;
      default:
        break;
    }
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };


  const handlePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <Wrapper>
      <ToastContainer />

      {loginStatus == 'sucess' &&
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      }

      {loginStatus == 'failed' &&
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      }


      <Card className="ImageCard">
        <div className="LogoImageHolder">
          <img className="logo" src="./EmpireHomeCareLogo.png" alt="logoImageHere"></img>
        </div>
      </Card>
      <div className="cardHolder">
        <Card className={`DesignCard ${showCard ? 'show' : ''}`}>
          <h1 style={{ color: "white", fontSize: "35px" }}>
            Welcome to
            Empire Homecare
            Agency LLC
          </h1>
          <div className="subText">
            <h4 style={{ color: "white" }}>
              Empire Homecare Agency LLC is a living legacy that reflects our commitment to improving the quality of life of our clients. As a provider of in-home care in Pennsylvania, we treat our clients as members of our own family.
            </h4>
          </div>
        </Card>
        <Card className={`loginCard ${showCard ? 'show' : ''}`}>
          <div>
            <h1 style={{ fontSize: "35px" }}>SIGN IN</h1>
          </div>


          <div className="radioHolder">
            <div className="radioTextHolder" >
              <input
                className="radio"
                type="radio"
                value="Admin"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "15%" }}>Admin</h5>
            </div>

            <div className="radioTextHolder">
              <input
                className="radio"
                type="radio"
                value="CareGiver"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "10%" }}>CareGiver</h5>
            </div>
            <div className="radioTextHolder">
              <input
                className="radio"
                type="radio"
                value="Patient"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "10%" }}>Patient</h5>
            </div>
            <div className="radioTextHolder">
              <input
                className="radio"
                type="radio"
                value="SFTP"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "10%" }}>SFTP</h5>
            </div>
          </div>


          <div className="mobileChooseLogin">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Choose Login Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedRadio}
                onChange={(evt) => {
                  setSelectedRadio(evt.target.value);
                }}
                style={{margin: 20}}
              >
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'Caregiver'}>Caregiver</MenuItem>
                <MenuItem value={'Patient'}>Patient</MenuItem>
                <MenuItem value={'SFTP'}>SFTP</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TextField
            id="standard-search"
            label="Username"
            type="search"
            variant="standard"
            className="usernameText"
            onChange={handleUsername}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            className="PasswordText"
            onChange={handlePassword}
          />
          <Button className="signInButton" variant="outlined"
            onClick={() => handleSignIn(selectedRadio)}>
            Sign In
          </Button>
        </Card>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: '#8ea3bf';
  
  .radioTextHolder{
    
      flex-direction:row;
      padding:1;
      width:120px;
      display:flex;
      height:100%;
      border-radius:15px;
      margin-right:1%;

  }


  .logo {
    height: 5%;
    width: 5%;
    margin-left:1%;
  }
  .ImageCard{
    background-color:#2E0F59;
  }

  .loginCard {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 30%;
    background-color: #f2f2f2;
    margin-top: 5%;
    padding: 3%;
    box-shadow: -1px 4px 19px 5px rgba(0, 0, 0, 0.43);
    position:relative;
    left: 100%;
    transition: left 1.5s ease-out;
  }
  
  .loginCard.show {
    left: 0;
  }
  .radioHolder {
    display: flex;
    flex-direction: row;
    border-width: thin;
    width: 100%;
  }

  .mobileChooseLogin{
    display: none;
  }

  .radio{
    margin-top:5%;
  }
  .cardHolder {
    display: flex;
    flex-direction: row;
  }
  .subText {
    margin-top: 20%;
  }
  .usernameText {
    width:40%;
  }
  .PasswordText {
    margin-top: 2%;
    width:40%;
  }
  .signInButton {
    margin-top: 10%;
    background-color:#F26E22;
    color:white;
  }

  .DesignCard {
    background-color: #564873;
    height: 350px;
    width: 20%;
    margin-top: 5%;
    padding: 3%;
    margin-left: 18%;
    margin-right: 0.2%;
    box-shadow: -1px 4px 19px 5px rgba(0, 0, 0, 0.43);
    position:relative;
    left: -100%;
    transition: left 1.5s ease-out;
  }
  
  .DesignCard.show {
    left: 0;
  }

  
  @media only screen and (max-width: 600px) {
    .cardHolder {
        flex-direction: column;
      }
    .DesignCard{
        
        display:none;
    }
    .subText {
        margin-top: 10%;
      }
    .loginCard{
        width:90%;
        margin-left:2%;
        height:550px;
        margin-bottom:10%;
    }
    .logo {
        height: 40%;
        width: 40%;
      }
      .radioHolder {
      display: none
    }

  .mobileChooseLogin{
      display: grid;
      flex-direction: row;
      border-width: thin;
      width: 100%;
    }
  }

`

export default Login;