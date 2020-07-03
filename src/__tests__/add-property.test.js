import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("captures user title input correctly", () => {
    const { getByRole, getByTestId } = render(<AddProperty />);

    const title = getByTestId("title-id");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(title, {
      target: { value: "3 bedroom flat" },
    });
    fireEvent.click(button);

    expect(title.value).toBe("3 bedroom flat");
  });

  it("captures user price input correctly", () => {
    const { getByRole, getByTestId } = render(<AddProperty />);
    const price = getByTestId("price-id");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(price, {
      target: { value: "10000" },
    });
    fireEvent.click(button);

    expect(price.value).toBe("10000");
  });

  it("captures user email input correctly", () => {
    const { getByRole, getByTestId } = render(<AddProperty />);
    const email = getByTestId("email-id");
    const button = getByRole("button", { name: /add/i });

    fireEvent.change(email, {
      target: { value: "sofia-dionisio@mail.com" },
    });
    fireEvent.click(button);

    expect(email.value).toBe("sofia-dionisio@mail.com");
  });
});
