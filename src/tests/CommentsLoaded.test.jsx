import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentArea from "../components/CommentArea";

const fakeComments = [
  { _id: "1", comment: "Bellissimo libro", rate: 5 },
  { _id: "2", comment: "Molto interessante", rate: 4 },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeComments),
    })
  );
});

test("I commenti vengono caricati nel DOM dopo la selezione di un libro", async () => {
  const { rerender } = render(<CommentArea asin={null} />);

  expect(screen.getByText(/seleziona un libro/i)).toBeInTheDocument();
  rerender(<CommentArea asin="TEST123" />);

  // ora aspettiamo che i commenti arrivino
  const comment1 = await screen.findByText(/bellissimo libro/i);
  const comment2 = await screen.findByText(/molto interessante/i);

  expect(comment1).toBeInTheDocument();
  expect(comment2).toBeInTheDocument();
});
