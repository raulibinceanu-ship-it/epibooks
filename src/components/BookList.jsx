import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList(props) {
  return (
    <Row className="gy-4">
      {props.books.map((book) => (
        <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
}

export default BookList;
