import React from 'react';
import { Todo } from 'todo/index';

const Todos = ({ todos }) => {
    return (
        <>
            <h3>TodoList</h3>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </>
    );
};

export default Todos;
