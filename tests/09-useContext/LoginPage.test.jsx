import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/context/UseContext";

describe("Prueba LoginPage", () => {
  test("should mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
    screen.debug();
  });

  test("should mostrar el componente con el usuario", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toBeCalledWith({
      correo: "eliannben2@gmail.com",
      id: 1,
      name: "Elian",
    });
  });
});
