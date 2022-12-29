import React from "react";
import { AiFillGithub,AiFillTwitterCircle,AiFillFacebook,AiFillInstagram,AiFillYoutube } from "react-icons/ai";
import './Footer.css'
const Footer = () =>{
    return (
      
      <div className="footerMain">
        <div className="footerContainer">
          <div className="footerRow">
            <div className="footerHalf">
              <div className="footerSection">Stay in the loop </div>
              <div className='footertext'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenC</div>
              <input className="mailAddress"placeholder="Your email address"></input>
              <div className='mailingSignupForm'>
      
              </div>
            </div>
          </div>
       
   

      <div className="footerItems">
        <a class href="https://github.com/codestates-beb/BEB-07-first-04">
        <div className="githubIcon">
          <AiFillGithub/>
        </div>
        </a>
      
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
        <p>© 2022 BEB-07-Team4</p>
      </div>
    
      </div>    
    </div>
    )
  }

export default Footer;
