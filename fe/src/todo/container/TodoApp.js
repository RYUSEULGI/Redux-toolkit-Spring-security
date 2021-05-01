import React from 'react';
import { Todos, AddTodo } from 'todo/index';
import { addTodo } from 'todo/features/todo.slice';
import 'todo/style/Todo.css';

const TodoApp = () => (
    <div className="todo-container">
        <AddTodo addTodo={addTodo} />
        <Todos />
    </div>
);

export default TodoApp;
