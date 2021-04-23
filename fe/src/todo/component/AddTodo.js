import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = ({ addTodo }) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <>
            <p>
                <form onSubmit={handleSubmit} method="post">
                    <label htmlFor="new-task">Add Todo</label>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        id="new-task"
                        type="text"
                    />
                    <button onClick={addTodo}>Add</button>
                </form>
            </p>
        </>
    );
};

export default AddTodo;
