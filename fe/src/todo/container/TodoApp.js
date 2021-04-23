import React from 'react';
import { Todos, AddTodo, DoneTodo } from 'todo/index';
import { addTodo } from 'todo/features/todo.slice';
import 'todo/style/Todo.css';

const TodoApp = () => {
    return (
        <div className="todo-container">
            <AddTodo addTodo={addTodo} />
            <Todos />
            <DoneTodo />
        </div>
    );
};

export default TodoApp;
