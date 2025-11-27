import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

global.fetch = () =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          _id: "abc",
          comment: "Test comment",
          rate: "5",
          elementId: "123",
        },
      ]),
  });

test("CommentArea mostra i commenti quando riceve un asin", async () => {
  render(<CommentArea asin="123" />);
  const commentText = await screen.findByText(/test comment/i);
  expect(commentText).toBeInTheDocument();
});
