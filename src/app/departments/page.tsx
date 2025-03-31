import DepartmentsCard from "@/components/Departments/DepartmentsCard";
import DepartmentsHead from "@/components/Departments/DepartmentsHead";
import HomeDoctors from "@/components/HomePage/HomeDoctors/HomeDoctors";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";

export default function Departments() {
  return (
    <div className="main-container">
      <DepartmentsHead />
      <DepartmentsCard />
      <HomeDoctors />
      <HomeTestimonial />
    </div>
  );
}
