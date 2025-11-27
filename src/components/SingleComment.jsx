const SingleComment = ({ comment }) => {
  return (
    <li className="mb-2" data-testid="single-comment">
      <strong>{comment.rate}⭐</strong> - {comment.comment}
    </li>
  );
};

export default SingleComment;
