import styled from 'styled-components';

export const ContainerHome = styled.div`
`;

export const HomeSection = styled.div`
`;

export const HomePageVideo = styled.div`
    width: 100%;
    margin: 0;
`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
`;

export const VideoContent = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
`;

export const Video = styled.video`
    width: 100%;
    height: auto;
    display: block;
    position: relative;
`;

export const VideoOverlay = styled.div`
    background-color:rgba(193 212 200 / 30%) ;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const HomePageText = styled.div`
    position: absolute;
    top: 60%;
    left: 20%;

   @media (max-width:1240px) {
        top:15%;
        left:30%;
    }
   
   @media (max-width: 540px) {
        top:15%;
        left:20%;
    }
`;

export const HomePageDescription = styled.div`
    font-weight: 800;
    color: white;
    width:30vw;
`;

export const HomePageTitle = styled.h2`
    font-weight: 700;
    color: white;
;`

export const HomePageParagraph = styled.p`
`;


