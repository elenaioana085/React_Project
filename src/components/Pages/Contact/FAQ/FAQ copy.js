import { useState } from "react";
import React from 'react';
import { ContainerFAQ, ContainerFAQAccomodation, ContainerFAQBooking, ContainerFAQPayment, ContainerFAQTransport, FAQTitle } from "./FAQ.style";
import FAQTransport from "./FAQCategories/Transport/FAQTransport";
import FAQPayment from "./FAQCategories/Payment/FAQPayment";
import { FAQTransportTitle } from "./FAQCategories/Transport/FAQTransport.style";
import { FAQAccomodationTitle } from "./FAQCategories/Accomodation/FAQAccomodation.style";
import FAQAccomodation from "./FAQCategories/Accomodation/FAQAccomodation";
import { FAQPaymentTitle } from "./FAQCategories/Payment/FAQPayment.style";
import { FAQBookingTitle } from "./FAQCategories/Booking/FAQBooking.style";
import FAQBooking from "./FAQCategories/Booking/FAQBooking";


function FAQ () {
    
    return (
        <ContainerFAQ>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
            <ContainerFAQTransport>
                <FAQTransportTitle>Transport</FAQTransportTitle>
                <FAQTransport></FAQTransport>
            </ContainerFAQTransport>
            <ContainerFAQPayment>
                <FAQPaymentTitle>Payment</FAQPaymentTitle>
                <FAQPayment></FAQPayment>
            </ContainerFAQPayment>
            <ContainerFAQAccomodation>
                <FAQAccomodationTitle>Accomodation</FAQAccomodationTitle>
                <FAQAccomodation></FAQAccomodation>
            </ContainerFAQAccomodation>
            <ContainerFAQBooking>
                <FAQBookingTitle>Booking</FAQBookingTitle>
                <FAQBooking></FAQBooking>
            </ContainerFAQBooking>


        </ContainerFAQ>
    );
}
export default FAQ;