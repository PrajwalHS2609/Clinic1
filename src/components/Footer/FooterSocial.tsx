import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const FooterSocial = () => {
  return (
    <div className="footerSocial-container">
      <h4>Social Media</h4>
      <ul>
        <li>
          <Link href="">
            <FaFacebookSquare  className="socialIcon"/>
          </Link>
        </li>
        <li>
          <Link href="">
            <FaInstagram className="socialIcon" />
          </Link>
        </li>
        <li>
          <Link href="">
            <FaXTwitter className="socialIcon" />
          </Link>
        </li>
        <li>
          <Link href="">
            <FaYoutube className="socialIcon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
