import Card from 'react-bootstrap/Card';
import {BsFillStarFill} from "react-icons/bs";

function CardReviewsONE() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Razvan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dubai Travel Package</Card.Subtitle>
        <Card.Text>
        Exceptional travel package: Stunning destinations, seamless planning, friendly staff. My dream vacation became a reality!
        </Card.Text>
      </Card.Body>
      <Card.Footer as="h5">
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
         </Card.Footer>
    </Card>
  );
}

export default CardReviewsONE;