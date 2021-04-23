import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/dist/v4';

const initialState = {
    todos: [],
};

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        editTodo(state, { payload }) {
            return {};
        },
        addTodo(state, { payload }) {
            state.todos.push({ id: uuid(), text: payload, done: false });
        },
        toggle(state, { payload }) {
            return {};
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
    },
});

const { actions, reducer } = todoReducer;
export const { editTodo, addTodo, toggle, deleteTodo } = actions;
export default reducer;
