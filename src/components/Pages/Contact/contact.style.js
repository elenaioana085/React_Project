import styled from 'styled-components';
import { BACKGROUND_COLOR_BODY_DARK } from '../../../functionalities/color';


export const ContainerContact = styled.div`
    background-color: ${BACKGROUND_COLOR_BODY_DARK};
    padding-bottom: 6%;
`;
export const ContainerContactDescription = styled.div`
    color:${BACKGROUND_COLOR_BODY_DARK};
    display: flex;
    justify-content: center;
    padding: 8%;
    font-size: 1rem;
    font-weight: 700;
`;
export const ContainerImageContactDescrition = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
`;

