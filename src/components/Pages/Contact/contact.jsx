import { useState } from "react";
import React from 'react';

import { ContainerContact, ContainerContactDescription, ContainerImageContactDescrition } from "./contact.style.js";
import FAQ from "./FAQ/FAQ.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";


function Contact () {
    return (
        <ContainerContact>
            <ContainerImageContactDescrition>
                <img src="https://media.istockphoto.com/id/1279008702/vector/travel-packing-list.jpg?s=612x612&w=0&k=20&c=7MBd9AMap-ArDfLQfWCBQA90k4khUFg7JBscWsyjfwY="></img>
             <ContainerContactDescription> TripFind a rapidly-growing global online travel agency. TripFind is here to help you plan the perfect trip. Whether you're going on holiday or taking a business trip,  TripFind is here to help you travel the world with cheap flights, and discount hotels. Looking to find great travel deals or enjoy the biggest savings on your next trip? TripFind has you covered. With our easy-to-use website , along with 24-hour customer support, booking your next trip couldn't be simpler.</ContainerContactDescription>
            </ContainerImageContactDescrition>
            
            <FAQ></FAQ>
            <ContactForm></ContactForm>
        </ContainerContact>
    );
}

export default Contact;