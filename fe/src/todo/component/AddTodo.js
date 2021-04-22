import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = ({ addTodo }) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
    };

    return (
        <p>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="new-task">Add Item</label>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    id="new-task"
                    type="text"
                />
                <button onClick={addTodo}>Add</button>
            </form>
        </p>
    );
};

export default AddTodo;
