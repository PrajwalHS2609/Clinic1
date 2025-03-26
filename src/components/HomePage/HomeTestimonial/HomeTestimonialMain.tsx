"use client"
import React from 'react'
import { Carousel } from "react-bootstrap";
import HomeTestimonialCard from './HomeTestimonialCard';
import  Arjun from "@/Images/Testimonial/Arjun R.png"
import  Priya from "@/Images/Testimonial/Neha M.png"
import  Neha from "@/Images/Testimonial/Priya S.png"
const HomeTestimonialMain = () => {
  return (
    <Carousel>
    {/* First Slide */}
    <Carousel.Item>
      <HomeTestimonialCard
        image={Priya.src}
        description="“Very modern clinic and friendly stuff. They translate all documents and analysis in English. I did a throat operation through them and they managed all process it with a lot of care very smoothly. Highly recommended.”"
        name="Priya S"
        place="Bangalore"
      />
    </Carousel.Item>
    {/* Second Slide */}
    <Carousel.Item>
      <HomeTestimonialCard
        image={Arjun.src}
        description="“Very modern clinic and friendly stuff. They translate all documents and analysis in English. I did a throat operation through them and they managed all process it with a lot of care very smoothly. Highly recommended.”"
        name="Arjun R"
        place="Bangalore"
      />
    </Carousel.Item>
    {/* Third Slide */}
    <Carousel.Item>
      <HomeTestimonialCard
        image={Neha.src}
        description="“Very modern clinic and friendly stuff. They translate all documents and analysis in English. I did a throat operation through them and they managed all process it with a lot of care very smoothly. Highly recommended.”"
        name="Neha M"
        place="Bangalore"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default HomeTestimonialMain
