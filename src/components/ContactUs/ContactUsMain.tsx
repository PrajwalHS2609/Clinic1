import React from "react";
import ContactUsAddress from "./ContactUsAddress";
import ContactUsForm from "./ContactUsForm";
import "./ContactUs.css";
const ContactUsMain = () => {
  return (
    <div className="contactUs-container">
      <ContactUsAddress />
      <ContactUsForm />
    </div>
  );
};

export default ContactUsMain;
