import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {BACKGROUND_COLOR_BODY_BRIGHT, BACKGROUND_COLOR_BODY_DARK, FONT_TEXT_COLOR_DARK} from "../../../../functionalities/color";
import { Link } from "react-router-dom";


function ButtonCategoryDetails() {
  function changeBackground(e) {
    e.target.style.background = 'blue';
    
  }
    function returnBackgroundToNormal(e){
      e.target.style.background = null;
    }
    const ButtonByCategory = [
        {
          category: "Transport Details",
          link:"/contact"
          
        },
        {
            category: "Accomodation Details",
            link:"/contact"
            
          },
          {
            category: "Booking Details",
            link:"/contact"
            
          }
      ];
  return (
   
    <>
     {ButtonByCategory.map((item) => (
    <Link to={item.link} className="navLink">
      <Button variant="outline-light"  onMouseOver={changeBackground} onMouseOut={returnBackgroundToNormal} style={{fontWeight:900}}>{item.category}. Click here!</Button>{' '}
      </Link>
     ))}
    </>
  );
}

export default ButtonCategoryDetails;




