import React from "react";
import FooterContact from "./FooterContact";
import FooterTiming from "./FooterTiming";
import "./Footer.css";
import FooterSocial from "./FooterSocial";
const FooterTop = () => {
  return (
    <div className="footerTop-container">
      <FooterContact />
      <FooterTiming />
      <FooterSocial />
    </div>
  );
};

export default FooterTop;
