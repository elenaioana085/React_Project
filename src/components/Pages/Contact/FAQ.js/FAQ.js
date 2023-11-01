import { useState } from "react";
import React from 'react';
import { ContainerFAQ, ContainerFAQAccomodation, ContainerFAQBooking, ContainerFAQPayment, ContainerFAQTransport } from "./FAQ.style";
import FAQTransport from "./FAQCategories/Transport/FAQTransport";
import FAQPayment from "./FAQCategories/Payment/FAQPayment";
import { FAQTransportTitle } from "./FAQCategories/Transport/FAQTransport.style";
import { FAQAccomodationTitle } from "./FAQCategories/Accomodation/FAQAccomodation.style";
import FAQAccomodation from "./FAQCategories/Accomodation/FAQAccomodation";
import { FAQPaymentTitle } from "./FAQCategories/Payment/FAQPayment.style";


function FAQ () {
    return (
        <ContainerFAQ>
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

            </ContainerFAQBooking>


        </ContainerFAQ>
    );
}
export default FAQ;