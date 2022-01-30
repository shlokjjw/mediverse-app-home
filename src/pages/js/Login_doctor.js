import React from "react";
import "../css/Login_doctor.css";
import Logo from "../../images/logo.svg";

function Login_doctor() {
  return (
    <div className="Login_doctor">
      <div id="center-align">
        <div id="card">
          <img height={300} src={Logo} id="doctor-logo" alt="hello" />
          <div className="Login_card">SIGN IN USING GOOGLE</div>
        </div>
      </div>
    </div>
  );
}

export default Login_doctor;
