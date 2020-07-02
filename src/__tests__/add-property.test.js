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

  it("captures user title input correctly", () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const title = getByTestId("title-id");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(title, {
      target: { value: "3 bedroom flat" },
    });
    fireEvent.click(button);

    expect(title.value).toBe("3 bedroom flat");
  });

  it("captures user price input correctly", () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    const price = getByTestId("price-id");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(price, {
      target: { value: "10000" },
    });
    fireEvent.click(button);

    expect(price.value).toBe("10000");
  });

  it("captures user email input correctly", () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    const email = getByTestId("email-id");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(email, {
      target: { value: "sofia-dionisio@mail.com" },
    });
    fireEvent.click(button);

    expect(email.value).toBe("sofia-dionisio@mail.com");
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
