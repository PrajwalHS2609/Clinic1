import ContactUsHead from "@/components/ContactUs/ContactUsHead";
import ContactUsMain from "@/components/ContactUs/ContactUsMain";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";

export default function ContactUs() {
  return (
    <div className="main-container">
      <ContactUsHead />
      <ContactUsMain />
      <ContactUsMap />
    </div>
  );
}
