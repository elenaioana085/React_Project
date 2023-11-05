import Carousel from "react-bootstrap/Carousel";
import first from "../../Media/CarouselPackages/ImagesCarousel/PorosGreece.jpg";
import second from "../../Media/CarouselPackages/ImagesCarousel/InterlakenSwitzerland.jpg";
import third from "../../Media/CarouselPackages/ImagesCarousel/BarosMaldive.jpg";
import { useEffect, useState } from "react";
import { CarouselOverlay } from "./carouselPackages.style";

function CarouselPackages() {
  const [packages, setPackages] = useState();
  useEffect(() => {
    // get from db json. response.map (item => item.city)
    
      // return await fetch("http://localhost:3000/destinations").then(
      //   (response) => response.json()
      // );

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
      src: first,
      title: "Discover this month top destinations:",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      label: "Poros",
    },
    {
      src: second,
      title: "Discover this month top destinations:",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      label: "Interlaken",
    },
    {
      src: third,
      title: "Discover this month top destinations:",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      label: "Baros",
    },
  ];

  return (
   
    <Carousel pause={true} interval={null}>
      {sliderImages.map((item) => (
        <Carousel.Item key={item.label}>
         
          <img src={item.src} alt={item.label} width={1440} height={600} />
          <CarouselOverlay className="carusel"></CarouselOverlay>

          <Carousel.Caption>
            <h1>{item.title}</h1>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
          
        </Carousel.Item>
      ))}

      {/* <Carousel.Item>
        <img src={first} alt="first-slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={second} alt="second-slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={third} alt="third-slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    
    
  );
}

export default CarouselPackages;
