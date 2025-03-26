import React from "react";
import "./HomeChildCare.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const HomeChildCareHead = () => {
  return (
    <div className="homeChildCareHead-container">
      <h6>CARE OF KIDS</h6>
      <h2>Pediatrics Care</h2>
      <ul>
        <p>
          The pediatrician shall conduct an examination using the methods below:
        </p>
        <li>
          <IoMdCheckmarkCircleOutline className="homeChildCareHead-ico"/>
          Detailed medical history, physical examination methods
        </li>
        <li>
          <IoMdCheckmarkCircleOutline className="homeChildCareHead-ico"/>A wide range of laboratory studies
        </li>
        <li>
          <IoMdCheckmarkCircleOutline className="homeChildCareHead-ico"/>
          Ultrasound examination
        </li>
        <li>
          <IoMdCheckmarkCircleOutline className="homeChildCareHead-ico"/>
          ECG, echocardiography
        </li>
        <li>
          <IoMdCheckmarkCircleOutline className="homeChildCareHead-ico"/>
          Consultations with specialized pediatricians
        </li>
      </ul>
      <Link href="/about-us">
        Read More <FaArrowRight className="homeChildCareHead-ico" />
      </Link>{" "}
    </div>
  );
};

export default HomeChildCareHead;
