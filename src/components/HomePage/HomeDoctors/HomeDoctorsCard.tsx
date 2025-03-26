import React from "react";
import "./HomeDoctors.css";
const HomeDoctorsCard = () => {
  const doctor = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/pretty-female-doctor-with-arms-crossed_23-2147648686.jpg?t=st=1740831124~exp=1740834724~hmac=bef51e6cc5d369dc4d58a7f29b4ef79bd2e3ad6a78506df714268711f221085b&w=900",
      name: "Jena Doe",
      specialty: "Cardiologist",
      experience: "15 years",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/portrait-candid-male-doctor_329181-611.jpg?t=st=1740914528~exp=1740918128~hmac=5dcebe79cdc15a6a9a88ff9763a45d1135bda0572a40046e079b741c364f0053&w=740",
      name: "Dr. Michael Smith",
      specialty: "Neurologist",
      experience: "12 years",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?t=st=1740916720~exp=1740920320~hmac=e6a457b0021398b78fc43a5dde9fcdc05c5c2e61cd35a07ca16fa30b5579b281&w=740",
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      experience: "10 years",
    },
  ];

  return (
    <div className="homeDoctorCard-container">
      {doctor.map((x) => (
        <div className="homeDoctorCard-content" key={x.id}>
          <div className="homeDoctorCard-img">
            <img src={x.img} alt={x.name} />
          </div>
          <div className="homeDoctorCard-details">
            <h4>{x.name}</h4>
            <h6>{x.specialty}</h6>
            <h6>Experience:{x.experience}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDoctorsCard;
