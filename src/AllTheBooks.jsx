import fantasy from "../books/fantasy.json";
import { Card, Col, Row, Container } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container className="mt-4">
      <Row className="g-3">
        {fantasy.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={book.img}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "15px" }}>
                  {book.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
