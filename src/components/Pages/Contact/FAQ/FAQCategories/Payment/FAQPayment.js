import { useState } from "react";
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionCustom } from "./FAQPayment.style";

function FAQPayment() {
    return (
      <AccordionCustom defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What payment methods are accepted?</Accordion.Header>
          <Accordion.Body>
          We accept various payment methods, including credit/debit cards, PayPal, and more. You can choose your preferred payment method during the booking process.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Are travel cards accepted?</Accordion.Header>
          <Accordion.Body>
            Yes, travel cards from are accepted as payment method for some packages, please refer to package description.For further details please send us a message.
          </Accordion.Body>
        </Accordion.Item>
      </AccordionCustom>
    );
  };
  
  export default FAQPayment;