import React from 'react';
import "./Footer.css";
import logo from './images/logo.svg';
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <hr className="footer-horizontal-line" />
        <div className='footer-area'>
            <div className="logo-left">
                <img height={80} id="logo" src={logo} alt="" />
                <span id="footer-loyality"><Link to="/about">Know about our Loyality</Link>
                </span>
            </div>
            <div className='footer-socialmediaicons'>
                <img height={70} src={instagram} alt="" />
                <img height={50} src={facebook} alt="" />
                <img height={50} src={twitter} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Footer;
