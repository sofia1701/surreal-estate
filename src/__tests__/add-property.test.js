import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("Navbar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
