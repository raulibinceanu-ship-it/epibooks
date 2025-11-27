import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasyBooks from "../books/fantasy.json";

describe("BookList component", () => {
  it("renderizza una card per ogni libro", () => {
    render(<BookList books={fantasyBooks} />);
    const cards = screen.getAllByRole("img"); // ogni libro ha un’immagine

    expect(cards.length).toBe(fantasyBooks.length);
  });
});
