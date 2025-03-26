import React from "react";
import "./HomeService.css";
import { BsHeartPulseFill } from "react-icons/bs";
import { TbLungsFilled } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { GiStomach } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { FaBaby } from "react-icons/fa";

const HomeServiceCard = () => {
  const service = [
    {
      id: 1,
      name: "Cardiology",
      icon: <BsHeartPulseFill />,
    },
    {
      id: 2,
      name: "Pulmomology",
      icon: <TbLungsFilled />,
    },
    {
      id: 3,
      name: "Neurology",
      icon: <LuBrain />,
    },
    {
      id: 4,
      name: "Gastroenterology",
      icon: <GiStomach />,
    },
    {
      id: 5,
      name: "Gynecology",
      icon: <MdPregnantWoman />,
    },
    {
      id: 6,
      name: "Pediatric",
      icon: <FaBaby />,
    },
  ];
  return (
    <div className="homeServiceCard-container">
      {service.map((x) => (
        <div className="homeServiceCard-content" key={x.id}>
          <div className="homeServiceCard-item">
            <span className="homeServiceCard-icon">{x.icon} </span>
            <div className="homeServiceCard-circle"></div>
            <div className="homeServiceCard-circle"></div>
          </div>
          <h3>{x.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomeServiceCard;
