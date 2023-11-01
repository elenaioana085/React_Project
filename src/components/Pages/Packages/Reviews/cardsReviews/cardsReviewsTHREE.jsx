import Card from 'react-bootstrap/Card';
import {BsFillStarFill} from "react-icons/bs";


function CardReviewsTHREE() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Maria</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Cairo Travel Package</Card.Subtitle>
        <Card.Text>
        Incredible travel package: Unforgettable adventures, excellent service, exceeded expectations. The trip of a lifetime!
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

export default CardReviewsTHREE;