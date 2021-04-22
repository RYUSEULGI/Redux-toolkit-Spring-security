import React from 'react';

const EditTodo = () => {
    const editTask = () => {
        console.log('Edit Task...');
        const listItem = this.parentNode;
        const editInput = listItem.querySelector('input[type=text]');
        const label = listItem.querySelector('label');
        const containsClass = listItem.classList.contains('editMode');

        if (containsClass) {
            label.innerText = editInput.value;
        } else {
            editInput.value = label.innerText;
        }
        listItem.classList.toggle('editMode');
    };

    return (
        <>
            <button className="edit" onClick={editTask}>
                Edit
            </button>
        </>
    );
};

export default EditTodo;
