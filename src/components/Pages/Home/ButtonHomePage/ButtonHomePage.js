import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {BACKGROUND_COLOR_BODY_DARK} from "../../../../functionalities/color";
import { Link } from "react-router-dom";


function ButtonHomePage() {
  function changeBackground(e) {
    e.target.style.background = BACKGROUND_COLOR_BODY_DARK;
  }
    function returnBackgroundToNormal(e){
      e.target.style.background = null;
    }
  return (
    <>
    <Link to="/packages" className="navLink">
      <Button variant="outline-light"  onMouseOver={changeBackground} onMouseOut={returnBackgroundToNormal} style={{fontWeight:900}}>Discover our travel packages. Click here!</Button>{' '}
      </Link>
    </>
  );
}

export default ButtonHomePage;


