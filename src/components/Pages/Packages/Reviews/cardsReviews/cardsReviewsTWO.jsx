import Card from 'react-bootstrap/Card';
import {BsFillStarFill} from "react-icons/bs";


function CardReviewsTWO() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Dragos</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Poros Travel Package</Card.Subtitle>
        <Card.Text>
        Fantastic travel package: Memorable experiences, great value, top-notch accommodations. A journey I'll cherish forever.
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

export default CardReviewsTWO;