import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <ul className="mt-3">
      {comments.map((c) => (
        <SingleComment key={c._id} comment={c} />
      ))}
    </ul>
  );
};

export default CommentsList;
