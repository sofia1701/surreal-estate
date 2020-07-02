import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct specs", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logo = getByTestId("logo-id");
    expect(logo).toBeInTheDocument();

    const viewProperties = getByTestId("view-properties-id");
    expect(viewProperties).toHaveTextContent("View Properties");

    const addProperty = getByTestId("add-property-id");
    expect(addProperty).toHaveTextContent("Add a Property");
  });
});
