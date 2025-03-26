import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeChildCare from "@/components/HomePage/HomeChildCare/HomeChildCare";
import HomeDoctors from "@/components/HomePage/HomeDoctors/HomeDoctors";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
// import HomeSpecialist from "@/components/HomePage/HomeSpecialist/HomeSpecialist";
export default function HomePage() {
  return (
    <div className="main-container">
      <HomeHeader />
      <HomeAboutUs />
      <HomeService />
      {/* <HomeCall /> */}
      <HomeChildCare />
      <HomeDoctors />

      {/* <HomeSpecialist/> */}
      <HomeTestimonial/>
    </div>
  );
}
