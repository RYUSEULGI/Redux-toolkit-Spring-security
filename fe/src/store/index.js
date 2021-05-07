import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import todoSlice from 'todo/features/todo.slice';
import articleSlice from 'article/features/article.slice';
import userSlice from 'user/features/user.slice';

const rootReducer = combineReducers({ todoSlice, articleSlice, userSlice });

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
});
