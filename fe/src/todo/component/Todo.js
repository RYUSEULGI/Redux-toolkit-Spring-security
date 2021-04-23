import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteTodo } from 'todo';
import { toggleTodo } from 'todo/features/todo.slice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <ul>
            <li>
                <input
                    onChange={() => dispatch(toggleTodo(todo.id))}
                    type="checkbox"
                />
                {todo.done ? (
                    <del>
                        <label>{todo.text}</label>
                    </del>
                ) : (
                    <label>{todo.text}</label>
                )}
                <input value={todo.text} type="text" />
                <DeleteTodo todo={todo} />
            </li>
        </ul>
    );
};

export default Todo;
