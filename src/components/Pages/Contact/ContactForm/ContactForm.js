import { useState } from "react";
import React from 'react';
import { ContactFormText, ContainerContactForm } from "./ContactForm.style";
import FormFirst from "./Form/FormFirst";


function ContactForm () {
    return(
        <ContainerContactForm>
            <ContactFormText>Did not find the answer you were looking for?
                Please fiil in the form bellow
            </ContactFormText>
            <FormFirst></FormFirst>
            
        </ContainerContactForm>
    );
}

export default ContactForm;