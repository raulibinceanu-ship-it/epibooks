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
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM2NDA3NzEsImV4cCI6MTc2NDg1MDM3MX0.7ZBhrYBFs-kIIN4DmySlTxGlNjB1kP7rj2Q0bGQyIzw",
