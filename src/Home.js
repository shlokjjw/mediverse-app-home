import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import "./Home.css";
import Logo from './images/homepage.svg';

function Home() {
  return (
        <>
        <div className='Home'>
            <div className="home-user">
                <div className='home-question'>
                    Are you a patient or a<p><span className='home-doctor'>doctor</span> ?</p>
                </div>
                <div className="user-option">
                    <div className="user-patient">
                        <a href="https://mediverse.vercel.app/">PATIENT</a>
                    </div>
                    <div className="user-doctor">
                        <a href="https://mediverse.vercel.app/">DOCTOR</a>
                    </div>
                </div>
            </div>
            <img height={500} src={Logo} id="home-logo" alt="hello" />
        </div>
        <Footer/>
        </>
  )
}

export default Home;