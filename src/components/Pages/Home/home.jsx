import { useState } from "react";
import React from 'react'
import './home.css';
import video from './videos/home.mp4';
import{BsFillGeoAltFill} from 'react-icons/bs';

function Home ()
{
    return (
        <section className="home">
            <div className="homePageVideo">
                <div className="overlay">
                    <div className="videoVideo">
                        <video src={video} muted autoPlay loop type="video/mp4" id="homeVideo"></video> 
                    </div>
                </div>
                <div className="homePageText">
                <div className="homePageDescription">
                    <h2>Find your next vacation</h2>
                    <p>Discover our holiday packages</p>
                </div>
                <div className="cardDiv">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="City"/>
                            <BsFillGeoAltFill className="homePageFilterIcon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your check-in date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your check-out date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                       <div className="label_total flex">
                        <label htmlFor="price">Maximum price:</label>
                        <h3 className="total">$1000</h3>
                       </div>

                       <div className="input flex">
                        <input type="range" max="1000" min="250"/>
                       </div>
                    </div>

                    <div ></div>

                </div>
            </div>
            </div>
            
            
        </section>
    );
}
export default Home;