import Accordion from 'react-bootstrap/Accordion';
import { FAQSectionTittle } from './FAQ.style';

function FAQCategories() {
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
          header: "What happens if my flight is cancelled or delayed?",
          body: "In case of disruption, we always aim to contact you directly and share information to you in different channels.As an airline based in an EU country, we comply with the regulation EC261/2004 rules regarding the assistance and compensation to passengers in the event of disruptions",
        },
        {
            header:"What do I do if I fall ill before my flight?",
            body:"If you fall ill suddenly before your flight, please cancel your reservation through the Manage booking page. If the ticket type you purchased is refundable, you can claim a refund by filling in the refund form. In other cases, please contact your insurance company for a reimbursement.Most people with existing medical conditions are able to fly without difficulty. However, sometimes certain precautions need to be taken and in some cases we might request a medical clearance. Read more about flying with medical conditions",
        }
      ],
    },

    { category: "Booking", accordionItems: [
        {
            header:"What happens if my flight is cancelled or delayed?",
            body:"In case of disruption, we always aim to contact you directly and share information to you in different channels.As an airline based in an EU country, we comply with the regulation EC261/2004 rules regarding the assistance and compensation to passengers in the event of disruptions",
        },{
            header:"What do I do if I fall ill before my flight?",
            body:"If you fall ill suddenly before your flight, please cancel your reservation through the Manage booking page. If the ticket type you purchased is refundable, you can claim a refund by filling in the refund form. In other cases, please contact your insurance company for a reimbursement.Most people with existing medical conditions are able to fly without difficulty. However, sometimes certain precautions need to be taken and in some cases we might request a medical clearance. Read more about flying with medical conditions",
        }
    ] },
  ];

  return (
    <>
      {FAQByCategory.map((category) => {
       return  <>
        <FAQSectionTittle>{category.category}</FAQSectionTittle>
        <Accordion defaultActiveKey="0">
          {category.accordionItems.map((item, index) => {
           return <Accordion.Item eventKey={index}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          })}
        </Accordion>
        
        </>
      })}
    </>
  );
}

export default FAQCategories;
