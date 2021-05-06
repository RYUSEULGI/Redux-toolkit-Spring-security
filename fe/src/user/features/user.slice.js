import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
});

const { actions, reducer } = userSlice;
export const {} = actions;

export const getUserList = createAsyncThunk('GET_USERS', async () => {
    const res = await axios.get('http://localhost:8000/users');
    return res.data;
});

export const selectName = (state) => state.userSlice.users;
export default reducer;
