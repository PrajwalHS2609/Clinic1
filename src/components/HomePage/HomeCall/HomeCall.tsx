import React from "react";
import "./HomeCall.css";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const HomeCall = () => {
  return (
    <div className="homeCall-container">
      <img
        src="https://img.freepik.com/free-vector/doctor-uniform-composition-with-realistic-closeup-view-doctors-white-gown-with-stethoscope-tie-illustration_1284-61908.jpg?t=st=1740926122~exp=1740929722~hmac=0482e105f648615b034d963d4997cd151971fb29ae60f134788e6177fca61d2a&w=2000"
        alt=""
      />
      <div className="homeCall-content">
        <span>
          <LiaPhoneVolumeSolid className="homeCall-icon" />
        </span>
        <h3>Need a Doctor for Check-up? Call for an Emergency Service!</h3>
        <h2>
          <a href="tel:9876543210">+91 9876543210</a>
        </h2>
      </div>
    </div>
  );
};

export default HomeCall;
