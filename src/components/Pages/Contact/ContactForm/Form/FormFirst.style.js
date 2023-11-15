import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FONT_TEXT_COLOR_BRIGHT } from '../../../../../functionalities/color';


export const FormCustom = styled(Form)`
    
    background: rgba(243, 248, 251, 0.5);
    border-radius:15px;
`;
export const FormLabelCustom = styled (Form.Label)`
    padding: 1.5%;
    margin-left: 3%;
    margin-top: 3%;
    font-size: 1rem;
    color: ${FONT_TEXT_COLOR_BRIGHT};
    font-Weight: 700;
`;

export const FormControlCustom = styled(Form.Control)`
    width: 91%;
    margin-left: 4%;
`;
export const ButtonCustom = styled(Button)`
    background:#324c77;
`;