import { Component } from "react";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM5ODU3NTUsImV4cCI6MTc2NTE5NTM1NX0.1rwrbQVF0MrCLCqBodrr-5ysqADXGkfgl7LL7bQd0XE";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin,
    };

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nella POST");
        }
        return res.json();
      })
      .then(() => {
        // pulisco il form
        this.setState({ comment: "", rate: "1" });
        // ricarico i commenti
        if (this.props.onCommentAdded) {
          this.props.onCommentAdded();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <div className="mb-2">
          <label className="form-label">Commento</label>
          <input
            type="text"
            className="form-control"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Voto (1-5)</label>
          <select
            className="form-select"
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Invia
        </button>
      </form>
    );
  }
}

export default AddComment;
