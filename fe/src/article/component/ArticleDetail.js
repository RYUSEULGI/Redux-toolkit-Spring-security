import React from 'react';
import { useSelector } from 'react-redux';
import { selectArticle } from 'article/features/article.slice';

const ArticleDetail = () => {
    const data = useSelector(selectArticle);

    return (
        <>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <h2>글 읽기</h2>
                    </thead>
                    <tbody>
                        <tr>
                            <th>제목 : </th>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <th>작성 일자 : </th>
                            <td>{data.writer}</td>
                        </tr>
                        <tr>
                            <th>내용 : </th>
                            <td>{data.content}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default ArticleDetail;
