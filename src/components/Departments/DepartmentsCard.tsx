import React from "react";
import "./Departments.css";
import Image from "next/image";
import Link from "next/link";
import breastCancer from "@/Images/Departments/breastCancer.png";
import dentistry from "@/Images/Departments/dentistry.png";
import cancer from "@/Images/Departments/cancer.png";
import ent from "@/Images/Departments/ent.png";
import dermatology from "@/Images/Departments/dermatology.png";
import cardiology from "@/Images/Departments/cardiology.png";

const DepartmentsCard = () => {
  const departments = [
    {
      id: 1,
      title: "Breast Surgery",
      description:
        "Breast surgery includes a variety of procedures to treat medical conditions, reconstruct breast tissue, or enhance breast appearance.",
      img: breastCancer,
      url: "/",
    },
    {
      id: 2,
      title: "Cancer Treatment",
      description:
        "Cancer treatments involve various therapies designed to control, reduce, or eliminate cancer cells, aiming to prevent the spread or recurrence of the disease.",
      img: cancer,
      url: "",
    },
    {
      id: 3,
      title: "Cardiology",
      description:
        "Heart surgery includes a range of procedures to treat heart conditions, such as coronary artery bypass grafting, heart valve repair, and heart transplants.",
      img: cardiology,
      url: "",
    },
    {
      id: 4,
      title: "Dentistry",
      description:
        "Dentistry treatments involve a variety of procedures to maintain oral health, treat dental issues, and enhance the appearance of teeth and gums.",
      img: dentistry,
      url: "",
    },
    {
      id: 5,
      title: "Dermatology",
      description:
        "Dermatology is the medical specialty focused on the diagnosis, treatment, and prevention of skin, hair, and nail disorders. ",
      img: dermatology,
      url: "",
    },
    {
      id: 6,
      title: "ENT",
      description:
        "ENT (Otolaryngology) treatments involve medical and surgical care for conditions affecting the ear, nose, throat, and related head and neck structures.",
      img: ent,
      url: "",
    },
  ];
  return (
    <div className="departmentsCard-container">
      {departments.map((x) => (
        <div className="departmentsCard-content" key={x.id}>
          <div className="departmentsCard-item">
            <Image src={x.img} alt={x.title} />
          </div>
          <h4>{x.title}</h4>
          <p>{x.description}</p>
          <Link href={x.url}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default DepartmentsCard;
