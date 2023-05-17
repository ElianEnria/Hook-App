import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/context/UseContext";

describe("Prueba para HomePage", () => {
  const user = {
    id: 1,
    name: "elian",
  };
  test("should mostrar el componente sin el usario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
    screen.debug();
  });
  test("should mostrar el componente con el usario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    screen.debug();
  });
});
