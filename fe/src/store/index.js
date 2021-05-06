import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import todoSlice from 'todo/features/todo.slice';
import articleSlice from 'article/features/article.slice';
import userSlice from 'user/features/user.slice';
import logger from 'redux-logger';

const rootReducer = combineReducers({ todoSlice, articleSlice, userSlice });

export default configureStore({
    rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
