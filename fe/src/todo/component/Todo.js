import React from 'react';
import { DeleteTodo, EditTodo } from 'todo/index';

const Todo = ({ todo }) => (
    <>
        <ul id="incomplete-tasks">
            <li>
                <input type="checkbox" />
                <label>{todo.text}</label>
                <input value={todo.text} type="text" />
                <EditTodo />
                <DeleteTodo />
            </li>
        </ul>
    </>
);

export default Todo;
