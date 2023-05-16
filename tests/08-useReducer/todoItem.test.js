const { render, screen } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe("Prueba en el TodoItem", () => {
  const todo = {
    id: 1,
    description: "piedra del alma",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("should mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    // expect(spanElement.className).toBe("align-self-center ");

    screen.debug();
  });
});
