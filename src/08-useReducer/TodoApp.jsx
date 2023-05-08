import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
    // {
    // id: new Date().getTime(),
    // description: 'recolectar la piedra del alma',
    // done: false,
    // },
]
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, todoActionDispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || "error en todos");

    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[Todo] Add Todo',
            payload: todo
        }
        todoActionDispatch(action);
    }
    const handleDeleteTodo = (id) => {
        todoActionDispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        todoActionDispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }
    

    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div >
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div >
        </>
    )
}
