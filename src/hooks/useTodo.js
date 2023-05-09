import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
    
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    const [todos, todoActionDispatch] = useReducer(todoReducer, [], init);

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

    return { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo };
}