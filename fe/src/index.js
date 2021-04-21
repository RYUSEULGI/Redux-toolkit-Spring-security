import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from 'todo/reducer/todo.reducer';

// const rootReducer = combineReducers({ todoReducer });

// const store = configureStore({
//     reducer: rootReducer,
// });

ReactDOM.render(
    // <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    // </Provider>,
    document.getElementById('root')
);
