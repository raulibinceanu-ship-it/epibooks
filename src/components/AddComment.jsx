import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin,
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM2NDA3NzEsImV4cCI6MTc2NDg1MDM3MX0.7ZBhrYBFs-kIIN4DmySlTxGlNjB1kP7rj2Q0bGQyIzw",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (response.ok) {
        alert("Commento aggiunto!");
        this.setState({ comment: "", rate: "1" });
        this.props.onCommentAdded(); // ricarica i commenti
      } else {
        alert("Errore durante l'invio del commento");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-3">
        <Form.Group className="mb-2">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mt-2">
          Aggiungi commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
