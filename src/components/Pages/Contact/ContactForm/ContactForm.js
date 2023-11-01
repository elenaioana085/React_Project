import { useState } from "react";
import React from 'react';
import { ContainerContactForm } from "./ContactForm.style";
import FormFirst from "./Form/FormFirst";
import ButtonForm from "./FormButton/FormButton";

function ContactForm () {
    return(
        <ContainerContactForm>
            <FormFirst></FormFirst>
            <ButtonForm></ButtonForm>
        </ContainerContactForm>
    );
}

export default ContactForm;