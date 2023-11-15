import styled from 'styled-components';
import { BACKGROUND_COLOR_BODY_BRIGHT, BACKGROUND_COLOR_BODY_DARK, FONT_TEXT_COLOR_BRIGHT, FONT_TEXT_COLOR_DARK } from '../../../../functionalities/color';
import { Alert, Card, Button, Spinner, ListGroupItem } from "react-bootstrap";


export const ContainerDestinations = styled.div`

`;

export const ContainerDescriptionSearchBarByDestinations = styled.div `
`;

export const DescriptionDestinations = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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

export const ContainerButtonCategoryDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1%;
    padding-left: 5%;
`;

export const ContainerDescriptionDestinationsItem = styled.div`
    display: flex;
    flex-direction: row;
`;


export const SearchBarByDestinationsContainer = styled.div`
    background-color: ${BACKGROUND_COLOR_BODY_DARK};
    color: ${FONT_TEXT_COLOR_BRIGHT};
    display: flex;
    flex-direction: row;
    

`;

export const SearchBarByDestinationsText = styled.div`
    padding: 3%;
    margin-left: 4rem;
    

`;

export const SearchBarByDestinationFunctionStyle = styled.div`
    padding: 1%;
    width: 40vw;
    height: auto;
   
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
    padding: 0.5rem;
    
`;
export const CardCustom = styled(Card)`
  background:${BACKGROUND_COLOR_BODY_DARK};
  
  
`;

export const ListGroupItemCustom = styled(ListGroupItem)`
     background: rgb(227 233 255);
     font-family: 'Montserrat', sans-serif;
     font-weight: 300;
     font-size: 15px;


`;

export const CardTitleCustom = styled(Card.Title)`
    font-weight: 500;
    color: ${FONT_TEXT_COLOR_BRIGHT};
    font-family: 'Montserrat', sans-serif;
`;