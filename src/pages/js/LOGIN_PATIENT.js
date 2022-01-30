import React from "react";
import "../css/Login_patient.css";
import Logo from "../../images/logo.svg";
// import {authentication} from "../../Firebase";
// import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


function LOGIN_PATIENT() {
  // const handleGoogleSignIn = ()=>{
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(authentication, provider).then((re)=>{
  //     console.log(re);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }

  return (
    <div className="Login_patient">
      <div id="patient-center-align">
        <div id="patient-card">
          <img height={300} src={Logo} 
          id="patient-logo" alt="hello" />
        <div className="patient_Login_card"  >SIGN IN USING GOOGLE
        </div>
      </div>
      </div>
    </div>
  );
}

export default LOGIN_PATIENT;
