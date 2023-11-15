import Carousel from "react-bootstrap/Carousel";

import { useEffect, useState } from "react";
import { CarouselOverlay } from "./CarouselPackages.style";

function CarouselPackages() {
  const [packages, setPackages] = useState();
  useEffect(() => {
      fetch("http://localhost:3002/destinations")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          return response.json();
        })
        .then((response) => {
          console.log(response)
        });
    
  }, []);
  const sliderImages = [
    {
      src:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Discover this month top destinations:",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      label: "Poros",
    },
    {
      src: "https://images.pexels.com/photos/4159867/pexels-photo-4159867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Discover this month top destinations:",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      label: "Interlaken",
    },
    {
      src: "https://images.pexels.com/photos/1287452/pexels-photo-1287452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Discover this month top destinations:",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      label: "Baros",
    },
  ];

  return (
   
    <Carousel pause={true} interval={null}>
      {sliderImages.map((item) => (
        <Carousel.Item key={item.label}>
         
          <img src={item.src} alt={item.label} style={{width:"100%",height:"600px"}} />
          <CarouselOverlay ></CarouselOverlay>

          <Carousel.Caption>
            <h1>{item.title}</h1>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
          
        </Carousel.Item>
      ))}

    </Carousel>
    
    
  );
}

export default CarouselPackages;
