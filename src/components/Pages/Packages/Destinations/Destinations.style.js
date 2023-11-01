import styled from 'styled-components';
import { BACKGROUND_COLOR_BODY_BRIGHT, BACKGROUND_COLOR_BODY_DARK, FONT_TEXT_COLOR_DARK } from '../../../../functionalities/color';
import { Alert, Card, Button, Spinner } from "react-bootstrap";


export const ContainerDestinations = styled.div`

`;

export const ContainerDescriptionSearchBarByDestinations = styled.div `
`;

export const DescriptionDestinations = styled.div`
    
    display: flex;
    justify-content: space-between;

    padding: 7%;
    background-color: ${BACKGROUND_COLOR_BODY_DARK};
     p {
        
     }
`;

export const DescriptionDestinationsItem = styled.div`
     color:white;
     
`;

export const DescriptionDestinationsItemIcon = styled.div`
     color:white;
     font-size:50px;
     margin-left: 40%;
`;

export const DescriptionDestinationsItemText = styled.div`
     color:white;
     padding: 10px;
`;

export const SearchBarByDestinationsContainer = styled.div`
    background-color: ${BACKGROUND_COLOR_BODY_BRIGHT};
    color: ${FONT_TEXT_COLOR_DARK};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const SearchBarByDestinationsText = styled.div`
    padding: 3%;
    margin-left: 4rem;
`;

export const SearchBarByDestinationFunctionStyle = styled.div`
    padding: 1%;
   
`;


export const ContainerPackagesByDestinations= styled.div`
    background-color: ${BACKGROUND_COLOR_BODY_BRIGHT};
`;

export const CardsPackagesStyle = styled.div`
    padding: 4%;
    margin-left:1rem;
    width:fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const CardContainerStyle = styled.div`
    margin-bottom: 1rem;
    
`;
export const CardCustom = styled(Card)`
  background:red;
`;