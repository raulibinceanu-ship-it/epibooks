import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false };

  render() {
    const book = this.props.book;

    return (
      <Card
        className="mb-4 shadow-sm"
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          border: this.state.selected ? "3px solid red" : "1px solid lightgray",
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            height: "300px",
            overflow: "hidden",
          }}
        >
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
    );
  }
}

export default SingleBook;
