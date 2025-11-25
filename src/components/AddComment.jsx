import { useState } from "react";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDVjMzIzZTc0MDAwMTVmN2ZkYWQiLCJpYXQiOjE3NjM5ODU3NTUsImV4cCI6MTc2NTE5NTM1NX0.1rwrbQVF0MrCLCqBodrr-5ysqADXGkfgl7LL7bQd0XE";

function AddComment({ asin, onCommentAdded }) {
  const [form, setForm] = useState({
    comment: "",
    rate: "1",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: form.comment,
      rate: form.rate,
      elementId: asin,
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
        if (!res.ok) throw new Error("Errore nella POST");
        return res.json();
      })
      .then(() => {
        setForm({ comment: "", rate: "1" });
        onCommentAdded && onCommentAdded();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-2">
        <label className="form-label">Commento</label>
        <input
          type="text"
          className="form-control"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Voto (1-5)</label>
        <select
          className="form-select"
          value={form.rate}
          onChange={(e) => setForm({ ...form, rate: e.target.value })}
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

export default AddComment;
