import React from "react";


import ButtonHomePage from "./ButtonHomePage/ButtonHomePage";
import { ContainerHome, HomePageDescription, HomePageParagraph, HomePageText, HomePageTitle, HomePageVideo, HomeSection, Video, VideoContainer, VideoContent, VideoOverlay } from "./Home.style";


function HomeCopy(){
    return(
        <ContainerHome>
        <HomeSection>
            <HomePageVideo>
                <VideoContainer>
                    <VideoContent>
                        <Video src={"https://player.vimeo.com/external/406568164.sd.mp4?s=d34348b81ceba47b6d1a03e0d07256de1d166c43&profile_id=164&oauth2_token_id=57447761"} muted autoPlay loop type="video/mp4" id="homeVideo"></Video> 
                        <VideoOverlay ></VideoOverlay>
                    </VideoContent>
                </VideoContainer>
                <HomePageText>
                <HomePageDescription>
                    <HomePageTitle>Adventure awaits. Book your escape</HomePageTitle>
                    <HomePageParagraph>Discover the world's wonders with our exclusive travel packages. From pristine beaches to historic cities, your adventure begins here!</HomePageParagraph>
                     <ButtonHomePage style={{weight:"900"}}></ButtonHomePage>
                    
                    
                </HomePageDescription>
                
            </HomePageText>
            </HomePageVideo>
            
            
        </HomeSection>
        </ContainerHome>
    );
}
export default HomeCopy;