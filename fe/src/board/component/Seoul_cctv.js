import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'article/style/ArticleList.css';

const Seoul_cctv = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('/data/seoul_cctv.json')
            .then((res) => {
                setItems(res.data.DATA);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="container">
                <table>
                    <tr>
                        <th>No</th>
                        <th>기준날짜</th>
                        <th>카메라코드</th>
                        <th>카메라명칭</th>
                        <th>설명</th>
                    </tr>
                    {items.map((cctv, id) => {
                        return (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{cctv.checktime}</td>
                                <td>{cctv.deviceid}</td>
                                <td>{cctv.devicename}</td>
                                <td>{cctv.description}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
};

export default Seoul_cctv;
