import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from 'todo/features/todo.slice';

const DeleteTodo = () => {
    const dispatch = useDispatch();

    const todo = useSelector((state) => state.todoSlice.todolist);

    return (
        <>
            <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="delete"
            >
                Delete
            </button>
        </>
    );
};

export default DeleteTodo;
