import fantasy from "../books/fantasy.json";
import { Card, Col, Row, Container } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container className="mt-4">
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={4} lg={3} key={book.asin} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
