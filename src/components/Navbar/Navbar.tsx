// import Logo from "./Logo";
import Logo from "./Logo";
import Menu from "./Menu";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {" "}
        <div className="navbar-item">
          {" "}
          <Logo />
        </div>
        <div className="navbar-item">
          <div className="navbar-itemContent">
            <FaLocationDot className="navbar-icon" />
            <a href=""> HAL 2nd Stage, Indiranagar, Bengaluru</a>
          </div>
          <div className="navbar-itemContent">
            <FaPhoneAlt className="navbar-icon" />{" "}
            <a href="tel:9876543210">+91 9876543210</a>
          </div>
          <div className="navbar-itemContent">
            <IoIosMail className="navbar-icon" />
            <a href="mailto:clinic@gmail.comx">clinic@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="navbar-content">
        {" "}
        <Menu />
      </div>
    </nav>
  );
}
