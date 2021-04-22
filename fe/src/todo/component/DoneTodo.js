import React from 'react';
import { DeleteTodo, EditTodo } from 'todo/index';

const DoneTodo = () => {
    return (
        <>
            <h3>Done</h3>
            <ul id="completed-tasks">
                <li>
                    <input type="checkbox" checked="" />
                    <label>See the Doctor</label>
                    <input type="text" />
                    <EditTodo />
                    <DeleteTodo />
                </li>
            </ul>
        </>
    );
};

export default DoneTodo;
