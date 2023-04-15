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
                style={{
                    fontSize: "22px",
                    marginTop: "8%",
                    color: "white",
                    fontWeight: "bold",
                }}
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
.avatar {
    margin: 2%;
    margin-top: 5%;
}
.UserInfo {
   
}
`;
