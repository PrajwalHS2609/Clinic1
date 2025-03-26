import React from "react";
import "./../HomeSpecialist.css";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-navigation">
        <ul>
          <li>
            <Link href={"/dashboard/chemical"}>Chemical</Link>
          </li>
          <li>
            <Link href={"/dashboard/vaccination"}>Vaccination</Link>
          </li>
          <li>
            <Link href={"/dashboard/microscopy"}>Microscopy</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content"></div>
    </div>
  );
};

export default Dashboard;
