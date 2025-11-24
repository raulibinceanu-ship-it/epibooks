import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selectedAsin: null,
  };

  handleBookSelect = (asin) => {
    this.setState({
      selectedAsin: asin,
    });
  };

  render() {
    const books = this.props.books;

    return (
      <Container className="mt-4">
        <Row>
          {/* COLONNA SINISTRA: LIBRI */}
          <Col md={8}>
            <Row className="g-3">
              {books.map((book) => (
                <Col xs={12} sm={6} md={4} key={book.asin}>
                  <SingleBook
                    book={book}
                    selectedAsin={this.state.selectedAsin}
                    onBookSelect={this.handleBookSelect}
                  />
                </Col>
              ))}
            </Row>
          </Col>

          {/* COLONNA DESTRA: COMMENTI */}
          <Col md={4}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
