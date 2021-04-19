import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {},
});

export const {} = CounterSlice.actions;
export default CounterSlice.reducer;
