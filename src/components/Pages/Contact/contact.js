import { useState } from "react";
import React from 'react';

import { ContainerContact, ContainerContactDescription, ContainerImageContactDescrition } from "./contact.style.js";
import FAQ from "./FAQ/FAQ.js";
import ContactForm from "./ContactForm/ContactForm.js";


function Contact () {
    return (
        <ContainerContact>
            <ContainerImageContactDescrition>
                <img src="https://www.invisibly.com/wp-content/uploads/2023/06/Best-Travel-Magazines-To-Help-You-Take-More-Time-Off-768x372.png"></img>
             <ContainerContactDescription> TripFind a rapidly-growing global online travel agency. TripFind is here to help you plan the perfect trip. Whether you're going on holiday or taking a business trip,  TripFind is here to help you travel the world with cheap flights, and discount hotels. Looking to find great travel deals or enjoy the biggest savings on your next trip? TripFind has you covered. With our easy-to-use website , along with 24-hour customer support, booking your next trip couldn't be simpler.</ContainerContactDescription>
            </ContainerImageContactDescrition>
            
            <FAQ></FAQ>
            <ContactForm></ContactForm>
        </ContainerContact>
    );
}

export default Contact;