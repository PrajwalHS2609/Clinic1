import AboutUsCare from "@/components/AboutUs/AboutUsCare/AboutUsCare";
import AboutUsHead from "@/components/AboutUs/AboutUsHead";
import AboutXp from "@/components/AboutUs/AboutXp/AboutXp";
import HomeDoctors from "@/components/HomePage/HomeDoctors/HomeDoctors";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";

export default function AboutUs() {
  return (
    <div className="main-container">
      <AboutUsHead />
      <AboutUsCare />
      <AboutXp />
      <HomeDoctors />
      <HomeTestimonial />
    </div>
  );
}
