import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from 'todo/features/todo.slice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handleEdit = () => {
        const edit = document.getElementsByClassName('edit');
        edit.classList.add('editMode');
        // dispatch(editTodo(todo.id));
    };

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
                <input value={todo.text} type="text" className="editMode" />
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="delete"
                >
                    Delete
                </button>
            </li>
        </ul>
    );
};

export default Todo;
