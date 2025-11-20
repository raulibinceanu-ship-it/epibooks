import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    errMsg: "",
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM2NDA3NzEsImV4cCI6MTc2NDg1MDM3MX0.7ZBhrYBFs-kIIN4DmySlTxGlNjB1kP7rj2Q0bGQyIzw",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({
          comments: data,
          isLoading: false,
          errMsg: "",
        });
      } else {
        this.setState({
          errMsg: "Errore nel caricamento dei commenti",
          isLoading: false,
        });
      }
    } catch (err) {
      this.setState({
        errMsg: err.message,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="p-3 border rounded mb-4 bg-light">
        <h6>Commenti</h6>

        {this.state.isLoading && <Spinner animation="border" />}

        {this.state.errMsg && (
          <Alert variant="danger" className="mt-2">
            {this.state.errMsg}
          </Alert>
        )}

        {/* Lista commenti */}
        <CommentsList comments={this.state.comments} />

        {/* Form per aggiungere un commento */}
        <AddComment
          asin={this.props.asin}
          onCommentAdded={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;
