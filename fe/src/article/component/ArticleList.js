import React, { useEffect } from 'react';
import 'article/style/ArticleList.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    getArticle,
    selectArticle,
    articleDelete,
} from 'article/features/article.slice';

const ArticleList = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectArticle);

    console.log(data);
    useEffect(() => {
        dispatch(getArticle);
    }, [dispatch]);

    const handleDelete = () => {
        console.log('delete');
        dispatch(articleDelete);
    };
    const handleDetail = () => {
        console.log('detail');
    };

    return (
        <>
            <div className="container">
                <table>
                    <tr>
                        <th className="table-ttl">제목</th>
                        <th className="table-ttl">작성자</th>
                        <th className="table-ttl">내용</th>
                        <th className="table-ttl">삭제</th>
                        <th className="table-ttl">디테일</th>
                    </tr>
                    {data.map((article) => {
                        return (
                            <tr key={article.id}>
                                <td>{article.title}</td>
                                <td>{article.writer}</td>
                                <td>{article.content}</td>
                                <td>
                                    <button onClick={handleDelete}>
                                        Delete
                                    </button>
                                </td>
                                <td td>
                                    <button onClick={handleDetail}>
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
};

export default ArticleList;
