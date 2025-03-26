import React from "react";
import "@/components/Styles/style.css";
import Link from "next/link";
const CardiologyHead = () => {
  return (
    <div className="serviceHead-container">
      <img
        src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="serviceHead-content">
        <div className="serviceHead-wrapper">
          {" "}
          <h2>Cardiology</h2>
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            similique repellendus maiores fuga et sint molestiae, maxime, nulla
            ad earum, modi ex labore magni quia consequuntur iste sequi
            excepturi pariatur.
          </p> */}
          <div className="serviceHead-breadCrumb">
           <h5> <Link href={"/"}>Home</Link> / Cardiology </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiologyHead;
