import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

function BookList({ books }) {
  const [selectedAsin, setSelectedAsin] = useState(null);

  const handleBookSelect = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* COLONNA SINISTRA */}
        <Col md={8}>
          <Row className="g-3">
            {books.map((book) => (
              <Col xs={12} sm={6} md={4} key={book.asin}>
                <SingleBook
                  book={book}
                  selectedAsin={selectedAsin}
                  onBookSelect={handleBookSelect}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* COLONNA DESTRA */}
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
}

export default BookList;
