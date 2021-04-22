import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/dist/v4';

const initialState = [
    { id: 1, text: '리덕스1', done: true },
    { id: 2, text: '리덕스2', done: true },
];

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        editTodo(state, { payload }) {
            return {};
        },
        addTodo(state, { payload }) {
            state.push({ id: uuid(), text: payload, done: false });
        },
        toggle(state, { payload }) {
            return {};
        },
        deleteTodo(state, { payload }) {
            return state.filter((todo) => todo.id !== payload.id);
        },
    },
});

const { actions, reducer } = todoReducer;
export const { editTodo, addTodo, toggle, deleteTodo } = actions;
export default reducer;
