import { render, screen, fireEvent } from "@testing-library/react";
import SingleBook from "../components/SingleBook";
import React from "react";

const mockBook = {
  asin: "123",
  title: "Test Book",
  img: "test.jpg",
};

function Wrapper() {
  const [selected, setSelected] = React.useState(null);

  return (
    <SingleBook
      book={mockBook}
      selectedAsin={selected}
      onBookSelect={setSelected}
    />
  );
}

test("Cliccando sul libro cambia il bordo", () => {
  render(<Wrapper />);

  const card = screen.getByText(/test book/i).closest(".card");

  expect(card.style.border).toBe("1px solid transparent");

  fireEvent.click(card);

  expect(card.style.border).toBe("3px solid red");
});
