
import React from "react";
import {
  ContainerFAQ,
  FAQSectionTittle,
  FAQTitle,
} from "./FAQ.style";

import { Accordion } from "react-bootstrap";

function FAQ() {
    const FAQByCategory = [
        {
          category: "Transport",
          accordionItems: [
            {
              header: "What happens if my flight is cancelled or delayed?",
              body: "In case of disruption, we always aim to contact you directly and share information to you in different channels.As an airline based in an EU country, we comply with the regulation EC261/2004 rules regarding the assistance and compensation to passengers in the event of disruptions",
            },
            {
              header: "What do I do if I fall ill before my flight?",
              body: "If you fall ill suddenly before your flight, please cancel your reservation through the Manage booking page. If the ticket type you purchased is refundable, you can claim a refund by filling in the refund form. In other cases, please contact your insurance company for a reimbursement.Most people with existing medical conditions are able to fly without difficulty. However, sometimes certain precautions need to be taken and in some cases we might request a medical clearance. Read more about flying with medical conditions",
            },
          ],
        },
        {
          category: "Payment",
          accordionItems: [
            {
              header: "What payment methods are accepted?",
              body: "We accept various payment methods, including credit/debit cards, PayPal, and more. You can choose your preferred payment method during the booking process.",
            },
            {
                header:"Are travel cards accepted?",
                body:"Yes, travel cards from are accepted as payment method for some packages, please refer to package description.For further details please send us a message.",
            }
          ],
        },
        {
          category: "Accomodation",
          accordionItems: [
            {
              header: "Is accommodation air-conditioned/ heated?",
              body: "We want our travellers to be as comfortable as possible so when you are headed to a hot climate, it is likely that you will either have a fan or air-con. Of course, if you are staying in remote areas or at homestays, you will need to expect the facilities to be a little more basic.",
            },
            {
                header:"What should I do if I would like to issue a complaint in regards to the accomodation?",
                body:"To address a complaint and request accommodation change, contact our travel agency's customer service team by completing the form at the bottom of the contact page. Please fill in the field Accomodation and describe the issue you are having as well as provide the details of the accomodation(name,adress).We will do our best to get in the touch with the agency provding the accomodation and notify you of the best possible solution.",
            }
          ],
        },
    
        { category: "Booking", accordionItems: [
            {
                header:"My itinerary has been changed, what can I do?",
                body:"You should've received an email from us explaining the changes to your itinerary, and any options that may be available. If you have further questions after reading the letter, please reach out via phone or live chat",
            },{
                header:"My travelling companion can no longer go on our trip. Can someone take their place or can I get a refund?",
                body:"It depends on how close you are to departure. In some circumstances we may be able to transfer the spot to another traveller for a fee if it's outside the pay-in-full period.When you pay your deposit, we'll sometimes use those funds to secure certain non-refundable permits or activities on your trip. If you're outside the pay-in-full period but you have paid for your trip, then a partial refund minus the cost of the deposit may be possible. If you are inside the pay in full period, then further fees may apply as per our Booking Conditions. Please get in touch to discuss your options.",
            }
        ] },
      ];
  return (
    <ContainerFAQ>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {FAQByCategory.map((category) => {
        return (
          <>
            <FAQSectionTittle>{category.category}</FAQSectionTittle>
            <Accordion defaultActiveKey="0">
              {category.accordionItems.map((item, index) => {
                return (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </>
        );
      })}
    </ContainerFAQ>
  );
}
export default FAQ;
