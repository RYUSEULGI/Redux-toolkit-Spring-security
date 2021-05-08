import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from 'user/index';

export const getUserList = createAsyncThunk('users/findAll', async () => {
    const res = await UserService.getList();
    return res.data;
});

export const userSignup = createAsyncThunk('users/siginup', async (arg) => {
    const res = await UserService.signup(arg);
    return res.data;
});

export const userLogin = createAsyncThunk('users/siginin', async (arg) => {
    console.log('----user.slice userLogin----');
    console.log(arg);
    const res = await UserService.signin(arg);
    return res.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.fulfilled, (state, { payload }) => {
            return [...payload];
        });
        builder.addCase(userSignup.fulfilled, (state, { payload }) => {
            return [...payload];
        });
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            console.log('=======userLogin.funfilled========');
        });
    },
});

const { actions, reducer } = userSlice;
export const {} = actions;
export default reducer;
export const selectUsers = (state) => state.userSlice;
