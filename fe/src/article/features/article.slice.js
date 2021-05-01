import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    article: [
        {
            id: 1,
            title: '테스트',
            writer: '글쓴이1',
            content: '내용1',
        },
    ],
};

const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {
        getArticle(state, { payload }) {
            state.article.articles = JSON.parse(payload);
        },
        articleDetail(state, { payload }) {
            return null;
        },
    },
});

const { actions, reducer } = articleSlice;

export const { getArticle, articleDetail, articleDelete } = actions;

export const fetchDeleteArticle = (id) => (dispatch) => {
    axios
        .delete(`http://localhost:8080//board/article/${id}`)
        .then((res) => {
            console.log(res.data);
            dispatch(getArticle);
        })
        .catch((err) => console.log(err));
};

export const selectArticle = (state) => state.articleSlice.article;
export default reducer;
