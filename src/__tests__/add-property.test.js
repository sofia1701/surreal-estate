import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("captures user input correctly", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const textbox = getByRole("textbox");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(textbox, {
      target: { value: "3 bedroom flat" },
    });
    fireEvent.click(button);

    expect(textbox.value).toBe("3 bedroom flat");
  });

  it("captures user select city correctly", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    expect(getByTestId("form-id")).toHaveFormValues({ city: "Manchester" });

    fireEvent.change(getByTestId("select-city-id"), {
      target: { value: "Liverpool" },
    });
    expect(getByText("Liverpool")).toBeInTheDocument();
    expect(getByTestId("form-id")).toHaveFormValues({ city: "Liverpool" });
  });

  it("captures user select type correctly", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    expect(getByTestId("form-id")).toHaveFormValues({ type: "Flat" });

    fireEvent.change(getByTestId("select-type-id"), {
      target: { value: "Detached" },
    });
    expect(getByText("Detached")).toBeInTheDocument();
    expect(getByTestId("form-id")).toHaveFormValues({ type: "Detached" });
  });
});
