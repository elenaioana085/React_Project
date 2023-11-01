import styled from 'styled-components';
import { BACKGROUND_COLOR_BODY_BRIGHT, BACKGROUND_COLOR_BODY_DARK, FONT_TEXT_COLOR_BRIGHT, FONT_TEXT_COLOR_DARK } from '../../../../functionalities/color';

export const ContainerReviews = styled.div`
    display: flex;
    flex-direction: column;

    padding: 7%;
    background-color: ${BACKGROUND_COLOR_BODY_DARK};
    
`;

export const ContainerCardReview = styled.div`

`;

export const ContainerReviewsJustCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const ContainerReviewsTitle = styled.div`
    color: ${FONT_TEXT_COLOR_BRIGHT};
    margin-left: 20%;
    padding: 3%;
`;