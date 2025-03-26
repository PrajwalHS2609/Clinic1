import React from "react";
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const FooterContact = () => {
  return (
    <div className="footerContact-container">
      <h4>Contact Us</h4>
      <ul>
        <li>
          <span>
            <IoLocationSharp />
          </span>
          <a href="">HAL 2nd Stage, Indiranagar, Bengaluru</a>
        </li>
        <li>
          <span>
            <FaPhoneVolume />
          </span>
          <a href="tel:9876543210">+91 9876543210</a>
        </li>
        <li>
          <span>
            <MdMail />
          </span>
          <a href="mailto:info@xyz.com">info@xyz.com</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
