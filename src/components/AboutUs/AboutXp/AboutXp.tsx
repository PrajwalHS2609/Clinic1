"use client";
import React from "react";
import "./AboutXp.css";
import Image from "next/image";
import aboutXp from "@/Images/aboutXp.png";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import CountUp from "react-countup";

const AboutXp = () => {
  return (
    <div className="aboutXp-container">
      <Image src={aboutXp} alt="aboutXp" />
      <div className="aboutXp-content">
        <ul>
          <li>
            <span>
              <FaHeartbeat />
            </span>
            <h3>
              <CountUp end={2500} duration={7} suffix=" +" />
            </h3>
            <p>SATISFIED PATIENTS</p>
          </li>
          <li>
            <span>
              <FaUserDoctor />
            </span>
            <h3>
              <CountUp end={15} duration={10} suffix=" +" />
            </h3>
            <p>HEALTH SECTIONS</p>
          </li>
          <li>
            <span>
              <GiTestTubes />
            </span>
            <h3>
              <CountUp end={40} duration={10} suffix=" +" />
            </h3>
            <p>KINDS OF RESEARCH</p>
          </li>
          <li>
            <span>
              <GrCertificate />
            </span>
            <h3>
              <CountUp end={25} duration={10} suffix=" +" />
            </h3>
            <p>CERTIFICATES</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutXp;
