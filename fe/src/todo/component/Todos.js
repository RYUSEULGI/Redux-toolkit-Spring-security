import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from 'todo/index';
import { allDeleteTodo } from 'todo/features/todo.slice';

const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todoSlice.todolist);

    return (
        <>
            <h3>TodoList</h3>
            <button
                onClick={() => dispatch(allDeleteTodo(todos))}
                className="all-delete-btn"
            >
                전체삭제
            </button>
            {todos.map((todo) => (
                <>
                    <Todo key={todo.id} todo={todo} />
                </>
            ))}
        </>
    );
};

export default Todos;
