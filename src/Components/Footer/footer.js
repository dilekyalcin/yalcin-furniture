import React from "react";
import { AppBar, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.css";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <div id="top">
        <div id="topItem1">
          <h4>YALÇIN HALI MOBİLYA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptatibus consectetur aliquam laboriosam fugit? Ad, dolorum.
            Vitae laboriosam vel repudiandae!
          </p>
        </div>
        <div id="topItem2">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <HomeIcon style={{ marginRight: 8 }} />
            CamiKebir mah. Cevat Şahin sokak No: 16
          </div>

          <div className="contact-item">
            <EmailIcon style={{ marginRight: 8 }}/>
            mobilya81@hotmail.com
          </div>
          <div className="contact-item">
            <PhoneEnabledIcon style={{ marginRight: 8 }} />
            0(380) 524 26 38
          </div>
        </div>
        <div id="topItem3">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <InstagramIcon style={{ marginRight: 20 }}/>
          <FacebookIcon style={{ marginRight: 20 }} />
          <TwitterIcon style={{ marginRight: 20 }}/>

          </div>
          
        </div>
      </div>

      <Divider className="divider" />

      <div id="bottom">
        <div id="copyright">
          <p>
            Copyright ©2022 All rights reserved | Block is made with by Dilek
            Yalçın
          </p>
        </div>
      </div>
    </AppBar>
  );
};

export default Footer;
