import React from "react";
import "./HomeAbout.css";
import Image from "next/image";
import logo from "@/Images/Logo.png";
const HomeAboutImg = () => {
  return (
    <div className="homeAboutImg-container">
      <div className="homeAboutImg-content">
        <img
          src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1740813603~exp=1740817203~hmac=6e30c03724f01c6bb58484faa9ce8c1eaf91bdcec868cc558eadabf9fa152ce3&w=740"
          alt=""
        />
      </div>
      <div className="homeAboutImg-content">
        <div className="homeAboutImg-logo">
          <Image src={logo} alt="logo" />
        </div>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>
                <h4>Open Hours</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>10:00 AM - 4:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeAboutImg;
