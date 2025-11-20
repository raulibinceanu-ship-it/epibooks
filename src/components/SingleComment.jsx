const SingleComment = ({ comment }) => {
  return (
    <li className="mb-2">
      <strong>{comment.rate}⭐</strong> - {comment.comment}
    </li>
  );
};

export default SingleComment;
