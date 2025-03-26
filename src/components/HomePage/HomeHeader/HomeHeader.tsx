import React from "react";
import "./HomeHeader.css";
const HomeHeader = () => {
  return (
    <div className="homeHeader-container">
      <img
        src="https://img.freepik.com/free-photo/friendly-young-female-doctor-physician-stretch-out-hand-handshake-greeting-patient-clinic-hol_1258-121766.jpg?t=st=1740734700~exp=1740738300~hmac=64eaf96a406b6b6c676b76e8dc77e85e5fa6e0ed6179bc06c8c1e9ea7e4fbbbc&w=1380"
        alt=""
      />
      <div className="homeHeader-item">
        <h2>Take Care of Your Health Now</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem
          porro possimus provident modi nobis,
        </p>
        <div className="homeHeader-button">
          <button>Contact Now</button>
          <button>Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
