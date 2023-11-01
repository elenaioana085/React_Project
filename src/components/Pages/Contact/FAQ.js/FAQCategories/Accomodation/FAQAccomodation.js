import { useState } from "react";
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FAQAccomodation() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What happens if my flight is cancelled or delayed?</Accordion.Header>
          <Accordion.Body>
          In case of disruption, we always aim to contact you directly and share information to you in different channels.As an airline based in an EU country, we comply with the regulation EC261/2004 rules regarding the assistance and compensation to passengers in the event of disruptions
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What do I do if I fall ill before my flight?</Accordion.Header>
          <Accordion.Body>
          If you fall ill suddenly before your flight, please cancel your reservation through the Manage booking page. If the ticket type you purchased is refundable, you can claim a refund by filling in the refund form. In other cases, please contact your insurance company for a reimbursement.Most people with existing medical conditions are able to fly without difficulty. However, sometimes certain precautions need to be taken and in some cases we might request a medical clearance. Read more about flying with medical conditions  
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };
  
  export default FAQAccomodation;