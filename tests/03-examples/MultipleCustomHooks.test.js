import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";

import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en multiplesCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks;
  });

  test("should mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();

    screen.debug();
  });

  test("should Mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Elian", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Elian")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Elian", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
