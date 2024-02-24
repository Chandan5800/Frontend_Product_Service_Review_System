import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define an array of image URLs for your carousel
  const images = [
    "https://media.istockphoto.com/id/1460275041/photo/customer-satisfaction-survey-concept-5-star-satisfaction-service-experience-rating-online.jpg?s=2048x2048&w=is&k=20&c=gtTRq2ijMcCSUUZ0J80g3pgasY7xecS-nMKBAJKJiV4=",
    "https://media.istockphoto.com/id/1208411337/photo/consumer-reviews-concepts-with-bubble-people-review-comments-and-smartphone-rating-or.jpg?s=2048x2048&w=is&k=20&c=DhzOm4FX2gqjpS6uGZ8uu71c1Pnb8yTz__B6B3mYF3M=",
    "https://media.istockphoto.com/id/1061357372/photo/quality-control-certification-checked-guarantee-of-standard.jpg?s=2048x2048&w=is&k=20&c=QPEbBXYiJQ29jotI71u2v9QluIdiMk1nX1zQfxFEDqE=",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next slide
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 3000); // Auto-slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, [activeIndex]);

  return (
    <div>
      <Navbar />
      <div id="carouselExampleIndicators" className="carousel slide">
        {/* ...carousel indicators and items... */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={image} className="d-block w-100" alt="img not found" />
            </div>
          ))}
        </div>
        {/* ...carousel controls... */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
