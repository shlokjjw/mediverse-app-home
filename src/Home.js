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
                        <Link to="/login">PATIENT</Link>
                    </div>
                    <div className="user-doctor">
                        <Link to="/logindoc">DOCTOR</Link>
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
