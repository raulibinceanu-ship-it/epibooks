import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const book = this.props.book;

    return (
      <>
        <Card
          className="mb-4 shadow-sm"
          onClick={this.toggleSelected}
          style={{
            border: this.state.selected
              ? "3px solid red"
              : "1px solid lightgray",
            cursor: "pointer",
          }}
        >
          <div style={{ height: "300px", overflow: "hidden" }}>
            <Card.Img
              variant="top"
              src={book.img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <Card.Body>
            <Card.Title style={{ fontSize: "1rem", minHeight: "48px" }}>
              {book.title}
            </Card.Title>
          </Card.Body>
        </Card>

        {/* SE selected è true, mostra i commenti */}
        {this.state.selected && <CommentArea asin={book.asin} />}
      </>
    );
  }
}

export default SingleBook;
