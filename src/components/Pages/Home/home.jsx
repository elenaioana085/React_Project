import React from "react";
import './Home.css';

import ButtonHomePage from "./ButtonHomePage/ButtonHomePage";


function Home(){
    return(
        <div className="ContainerHomeTest">
       <section className="home">
            <div className="homePageVideo">
                <div className="overlay">
                    <div className="videoVideo">
                        <video src={"https://player.vimeo.com/external/406568164.sd.mp4?s=d34348b81ceba47b6d1a03e0d07256de1d166c43&profile_id=164&oauth2_token_id=57447761"} muted autoPlay loop type="video/mp4" id="homeVideo"></video> 
                        <div className="videoOverlay" ></div>
                    </div>
                </div>
                <div className="homePageText">
                <div className="homePageDescription">
                    <h2>Adventure awaits. Book your escape</h2>
                    <p>Discover the world's wonders with our exclusive travel packages. From pristine beaches to historic cities, your adventure begins here!</p>
                     <ButtonHomePage style={{weight:"900"}}></ButtonHomePage>
                    
                    
                </div>
                
            </div>
            </div>
            
            
        </section>
        </div>
    );
}
export default Home;