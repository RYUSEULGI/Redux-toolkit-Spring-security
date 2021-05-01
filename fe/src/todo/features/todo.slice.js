import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/dist/v4';

const initialState = {
    todolist: [],
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        editTodo(state, { payload }) {
            console.log('edit todo');
            const editId = state.todolist.find((todo) => todo.id === payload);
            editId.text = payload.text;
        },
        addTodo(state, { payload }) {
            state.todolist.push({ id: uuid(), text: payload, done: false });
        },
        toggleTodo(state, { payload }) {
            const toggle = state.todolist.find((todo) => todo.id === payload);
            toggle.done = !toggle.done;
        },
        allDeleteTodo(state, { payload }) {
            state.todolist.splice(payload);
        },
        deleteTodo(state, { payload }) {
            const idx = state.todolist.findIndex((todo) => todo.id === payload);
            state.todolist.splice(idx, 1);
            /*
            *********filter 사용하는 방법**********
            state.todolist = state.todolist.filter(
                (todo) => todo.id !== payload
            );
            */
        },
    },
});

const { actions, reducer } = todoSlice;
export const {
    editTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    allDeleteTodo,
} = actions;
export default reducer;
