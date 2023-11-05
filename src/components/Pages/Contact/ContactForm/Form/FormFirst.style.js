import { Form } from 'react-bootstrap';
import styled from 'styled-components';


export const FormCustom = styled(Form)`
    /* margin-left: 5%;
    margin-right: 8%; */
    
    background: rgba(243, 248, 251, 0.5);
    border-radius:15px;
`;
export const FormLabelCustom = styled (Form.Label)`
    padding: 1.5%;
    margin-left: 3%;
    margin-top: 3%;
    font-size: 1rem;
`;

export const FormControlCustom = styled(Form.Control)`
    width: 91%;
    margin-left: 4%;
`;