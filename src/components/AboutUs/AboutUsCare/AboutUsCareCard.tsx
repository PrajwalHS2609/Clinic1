import React from "react";
import "./AboutUsCare.css";
import { MdFamilyRestroom } from "react-icons/md";
import { MdChildFriendly } from "react-icons/md";
import { LuMicroscope } from "react-icons/lu";

const AboutUsCareCard = () => {
  const care = [
    {
      id: 1,
      icon: <MdFamilyRestroom />,
      title: "Family Care",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, debitis ad. A aliquid voluptates atque nulla expedita rem ab possimus saepe maiores, beatae, lab",
    },
    {
      id: 2,
      icon: <MdChildFriendly />,
      title: "Pediatrics Care",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, debitis ad. A aliquid voluptates atque nulla expedita rem ab possimus saepe maiores, beatae, lab",
    },
    {
      id: 3,
      icon: <LuMicroscope />,
      title: "Advanced Care",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, debitis ad. A aliquid voluptates atque nulla expedita rem ab possimus saepe maiores, beatae, lab",
    },
  ];
  return (
    <div className="aboutUsCareCard-container">
      {care.map((x) => (
        <div className="aboutUsCareCard-content" key={x.id}>
          <span>{x.icon}</span>
          <h3>{x.title}</h3>
          <p>{x.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsCareCard;
