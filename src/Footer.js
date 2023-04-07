import React , { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styled from "styled-components";

function Footer(){
  return (
    <Wrapper>
    <div className="footer">
        <div className="LogoHolder">
          <img src="/LogoBK.png"></img>
        </div>
        <div className="company">
          <h6 className="headres" style={{ color: "grey" }}>COMPANY</h6>
          <h5 className="aboutus" style={{ color: "white" }}>About Us</h5>
          <h5 className="contact" style={{ color: "white" }}>Contact Us</h5>
          <h5 className="carreer" style={{ color: "white" }}>Careers</h5>
          <h5 className="press" style={{ color: "white" }}>Press</h5>
        </div>
        <div className="socials">
          <h6 className="headres" style={{ color: "grey" }}>SOCIAL MEDIA</h6>
         
          
          <h5 className="facebook" style={{color: "white",textAlign:"center"}}>
          <FacebookIcon  style={{fontSize:"30px"}} />
           
          </h5>
       
          <h5 className="res2" style={{ color: "white",textAlign:"center" }}>
            <TwitterIcon className="res" style={{fontSize:"30px"}} />
           
          </h5>
          <h5 className="res2" style={{ color: "white",textAlign:"center" }}>
            <LinkedInIcon className="res" style={{fontSize:"30px"}} />
           
          </h5>
        </div>
      </div>
      </Wrapper>
  )
};


export default Footer;
const Wrapper = styled.section`

 //Footer CSS Files
 .footer {
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  height: 260px;
  background-color: #2E0F59;
  margin-top: 0%;
}
.company {
  margin-left: 50%;
  margin-top: 2%;
}
.socials {
  margin-left: 5%;
  margin-top: 2%;
}
.LogoHolder {
  margin-top: 3%;
  margin-left: 15%;
}
//Footer CSS Files end
@media only screen and (max-width: 600px) {
  .LogoHolder {
    display:none;
  }
  .footer{
    display:grid;
    height: 100%;
  }
  .company {
    margin-left: 0%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .socials {
    margin-top:0;
    margin-left: 0%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .res{
    margin-left: 2%;
  }
  .res2{
    margin-left: 20%;
    
  }
  .headres{
    display:none;
  }
  .aboutus{
    font-size:17px;
  }
  .contact{
    font-size:17px;
    margin-left:5%;
  }
  .carreer{
    font-size:17px;
    margin-left:5%;
    
  }
  .press{
    font-size:17px;
    margin-left:5%;

  }
}
`