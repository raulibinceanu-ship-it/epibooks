import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

test("All'avvio non ci sono SingleComment nel DOM", () => {
  render(<CommentArea asin={null} />);

  const comments = screen.queryAllByTestId("single-comment");
  expect(comments.length).toBe(0);
});
