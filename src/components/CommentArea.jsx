import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM5ODU3NTUsImV4cCI6MTc2NTE5NTM1NX0.1rwrbQVF0MrCLCqBodrr-5ysqADXGkfgl7LL7bQd0XE";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    error: false,
  };

  fetchComments = () => {
    if (!this.props.asin) {
      return;
    }

    this.setState({ isLoading: true, error: false });

    fetch(API_URL + this.props.asin, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ comments: data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true, isLoading: false });
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props.asin && this.props.asin !== prevProps.asin) {
      this.fetchComments();
    }
  }

  render() {
    if (!this.props.asin) {
      return (
        <div>
          <h5>Commenti</h5>
          <p>Seleziona un libro a sinistra per vedere i commenti.</p>
        </div>
      );
    }

    return (
      <div>
        <h5>Commenti</h5>

        {this.state.isLoading && <p>Caricamento...</p>}
        {this.state.error && (
          <p style={{ color: "red" }}>Errore nel caricamento dei commenti.</p>
        )}

        <CommentsList comments={this.state.comments} />

        <AddComment
          asin={this.props.asin}
          onCommentAdded={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;
