import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome.jsx";

describe("Welcome component", () => {
  it("dovrebbe renderizzare il testo di benvenuto", () => {
    render(<Welcome />);

    const heading = screen.getByText(/benvenuto in epibooks/i);

    expect(heading).toBeInTheDocument();
  });
});
