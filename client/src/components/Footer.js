import React from "react";
import { AiFillGithub,AiFillTwitterCircle,AiFillFacebook,AiFillInstagram,AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () =>{
    return (
      
      <div className="footerMain">
      <Link to="/">    
        <div className="logoContainer">
          <div className="logoText">OpenC</div>
          <input className="emailBar"placeholder="your email address"></input>
          <button>Subscribe</button>
        </div>
      </Link>

      <div className="footerItems">
        <div className="githubIcon">
          <AiFillGithub/>
        </div>
      
        <div className="twitterIcon">
          <AiFillTwitterCircle />
        </div>

        <div className="facebookIcon">
          <AiFillFacebook />
        </div>
        <div className="instagramIcon">
          <AiFillInstagram />
        </div>
      
        <div className="youtubeIcon">
          <AiFillYoutube />
        </div>
      </div>
      
      <div className="footerUnder">
        <p>© 2022 BEB,07, Inc</p>
      </div>
    
    </div>    
    )
  }

export default Footer;
