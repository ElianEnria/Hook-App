const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");

describe("Prueba para MainApp", () => {
  test("should mostrar el homepage", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('HomePage')).toBeTruthy()
  });
  test("should mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage')).toBeTruthy()
  });
});
