import React from "react";
import{BsFillGeoAltFill} from 'react-icons/bs';

import './FilterCards.css';
import useFetchPackages from "../../../../hooks/useFetchDestinations";



function FilterCards({setDestinationFiltered}) {
    const { destinations, loading, error, setError } = useFetchPackages();
            const handleSearch = (value) => {
              const filtered = destinations.filter(el =>
                // el.city.toLowerCase() == value.toLowerCase()
                el.city.toLowerCase().indexOf(value.toLowerCase()) !== -1
              )
              setDestinationFiltered(filtered)
            }
        
    
    return(
        <section className="home">
            <div className="homePageVideo">
                <div className="overlay">
                    <div className="videoVideo">
                        <video src={"https://player.vimeo.com/external/380348110.sd.mp4?s=ed9960e904787de85f0a126ccb4439c993f0ef0d&profile_id=164&oauth2_token_id=57447761"} muted autoPlay loop type="video/mp4" id="homeVideo"></video> 
                        <div className="videoOverlay" ></div>
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
                            <input name="destination" type="text" placeholder="City" onBlur={e =>handleSearch(e.target.value)} />
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
export default FilterCards;