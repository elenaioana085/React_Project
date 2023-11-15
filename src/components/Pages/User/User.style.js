import styled from 'styled-components';
import { CardContainerStyle, CardsPackagesStyle } from '../Packages/Destinations/Destinations.style';
import { BACKGROUND_COLOR_BODY_DARK, FONT_TEXT_COLOR_BRIGHT } from '../../../functionalities/color';

export const CardContainerStyleUserPage = styled(CardContainerStyle)`
    padding:2%;
`;
export const CardsPackagesStyleUserPage = styled(CardsPackagesStyle)`
    width: 100%;
    flex-wrap: nowrap;
`;
export const ContainerUserPage = styled.div`
    margin-left: 0;
    padding: 0;
`;
export const ContainerPageText = styled.div`
    background:${BACKGROUND_COLOR_BODY_DARK};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageTitle = styled.h1`
    
    
    color: ${FONT_TEXT_COLOR_BRIGHT};
    font-weight: 700;
`;

export const PageDescription = styled.div`
    font-weight: 200;
    color: ${FONT_TEXT_COLOR_BRIGHT};
    width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const PageDescriptionParagraph = styled.p`
    margin-left: 5%;
`;

export const CardsPackagesContainer = styled.div`
    display: flex;
    padding: 5%;
`;

