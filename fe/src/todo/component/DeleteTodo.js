import React from 'react';

const DeleteTodo = () => {
    const deleteTask = () => {
        console.log('Delete Task...');
        const listItem = this.parentNode;
        const ul = listItem.parentNode;
        ul.removeChild(listItem);
    };

    return (
        <>
            <button className="delete" onClick={deleteTask}>
                Delete
            </button>
        </>
    );
};

export default DeleteTodo;
