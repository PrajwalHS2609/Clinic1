import React from "react";
import "./HomeAbout.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HomeAboutHead = () => {
  return (
    <div className="homeAboutHead-container">
      <h6>ABOUT US</h6>
      <h2>Professional Medical Care in Full Measure</h2>
      <p>
        For us, there are no minor aspects, because a quality result always
        depends on trifles. Over the years of our activities, we have gained the
        unique experience of organizing medical services for citizens and
        foreign nationals.
      </p>
      <p>
        Private patients, international organizations and corporate businesses
        feel safe and comfortable in establishing relationships.
      </p>
      <Link href="/about-us">
        Read More <FaArrowRight className="homeAboutHead-ico" />
      </Link>
    </div>
  );
};

export default HomeAboutHead;
