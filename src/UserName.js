import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
const Link = require("react-router-dom").Link;

function UserName() {

    const userString = localStorage.getItem("LoggedInUser");
    var userData = JSON.parse(userString);

    return (

        <Wrapper>
            <Avatar
                className="avatar"
                alt={userData.first_name}
                src="/static/images/avatar/1.jpg"
            />
            <p
                className="text"
            >
                {userData.first_name + " " + userData.last_name}
            </p>
        </Wrapper>
    );
}
export default UserName;

const Wrapper = styled.section`
display: flex;
flex-direction: row;
   margin-top: 5%;
   margin-left: 10%;
   .text{
    
        font-size: 22px;
        margin-top: 8%;
        color: white;
        font-weight: bold;
        text-align:center;
    
   }
.avatar {
    margin: 2%;
    margin-top: 5%;
}
.UserInfo {
   
}
@media only screen and (max-width: 600px) {
    margin-top:1%;
    margin-left:0;
.avatar{
    display:none;
}
.text{
    color:#F2B90F;
}

}
`;
