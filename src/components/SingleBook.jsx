import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const book = this.props.book;

    return (
      <Card
        className="mb-3"
        onClick={this.toggleSelected}
        style={{
          border: this.state.selected ? "3px solid red" : "1px solid lightgray",
          cursor: "pointer",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
