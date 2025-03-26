import Image from "next/image";
import React from "react";
import "./HomeTestimonial.css";
import { IoMdQuote } from "react-icons/io";

interface TestimonialProps {
  image: string;
  description: string;
  name: string;
  place: string;
}
const HomeTestimonialCard: React.FC<TestimonialProps> = (props) => {
  return (
    <div className="homeTestimonialCard-container">
      <div className="homeTestimonialCard-wrapper">
        <div className="homeTestimonialCard-content">
          <Image src={props.image} alt="rating" width={450} height={450} />
        </div>
        <div className="homeTestimonialCard-content">
          <p>{props.description}</p>
          <h4>{props.name}</h4>
        </div>
        <IoMdQuote className="homeTestimonialCard-ico"/>
      </div>
    </div>
  );
};

export default HomeTestimonialCard;
