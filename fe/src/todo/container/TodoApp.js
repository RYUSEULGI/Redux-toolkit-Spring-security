import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todos, AddTodo, DoneTodo } from 'todo/index';
import { addTodo } from 'todo/reducer/todo.reducer';
import 'todo/style/Todo.css';

const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer);
    console.log(todos);
    return (
        <div className="todo-container">
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} />
            <DoneTodo />
        </div>
    );
};

export default TodoApp;
