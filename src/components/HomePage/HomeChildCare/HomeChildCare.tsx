import React from "react";
import "./HomeChildCare.css";
import HomeChildCareHead from "./HomeChildCareHead";
const HomeChildCare = () => {
  return (
    <div className="homeChildCare-container">
      <img
        src="https://img.freepik.com/free-photo/portrait-female-pediatrician-work_23-2151686836.jpg?t=st=1740818096~exp=1740821696~hmac=7fd7926fa1bfcda27a3db3fae3d9265302a2c1a6e9224af8c03017b0d3db1d2d&w=1380"
        alt=""
      />
      <div className="homeChildCare-content">
        <HomeChildCareHead/>
      </div>
    </div>
  );
};

export default HomeChildCare;
