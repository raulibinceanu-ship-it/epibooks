import { useEffect, useState } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM5ODU3NTUsImV4cCI6MTc2NTE5NTM1NX0.1rwrbQVF0MrCLCqBodrr-5ysqADXGkfgl7LL7bQd0XE";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchComments = () => {
    if (!asin) return;

    setIsLoading(true);
    setError(false);

    fetch(API_URL + asin, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nel caricamento");
        }
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
      });
  };

  // Sostituisce componentDidUpdate
  useEffect(() => {
    fetchComments();
  }, [asin]);

  if (!asin) {
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

      {isLoading && <p>Caricamento...</p>}
      {error && (
        <p style={{ color: "red" }}>Errore nel caricamento dei commenti.</p>
      )}

      <CommentsList comments={comments} />

      <AddComment asin={asin} onCommentAdded={fetchComments} />
    </div>
  );
}

export default CommentArea;
