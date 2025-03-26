import React from "react";
import "./ContactUs.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsAddress = () => {
  return (
    <div className="contactUsAddress-container">
      <h2>Contact Us Address</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut
        eos libero modi rerum ab, officiis quis veniam, quam repellendus maxime
        ducimus dolorem porro assumenda. Non cumque velit aliquam. Optio.
      </p>
      <p>
        <span>
          <IoLocationSharp />
        </span>{" "}
        <span>
            <b>Our Location</b>
          <a href="">123 Main St, City, State, Zip</a>
        </span>{" "}
      </p>
      <p>
        <span>
          <FaPhoneAlt />
        </span>
        <span>
        <b>Call Us 24/7</b>
        <a href="tel:9876543210">+91 9876543210</a>
        </span>{" "}
      </p>
      <p>
        <span>
          <MdEmail />
        </span>
        <span>
        <b>Email Address</b>
        <a href="mailto:info@example.com">info@example.com</a>
        </span>{" "}
      </p>
      {/* <p>
        <span>
          <IoMdTime />
        </span>
        Hours: Monday - Friday 9:00 AM - 5:00 PM
      </p> */}
    </div>
  );
};

export default ContactUsAddress;
