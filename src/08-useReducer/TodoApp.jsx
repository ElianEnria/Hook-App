import { useTodo } from "../hooks";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const {
    todos,
    todoCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todoCount}, <small>pendientes: {pendingTodoCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
