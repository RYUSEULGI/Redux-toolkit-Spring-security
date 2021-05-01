import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from 'todo/features/todo.slice';
import articleSlice from 'article/features/article.slice';

const rootReducer = combineReducers({ todoSlice, articleSlice });

const store = configureStore({
    reducer: rootReducer,
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
