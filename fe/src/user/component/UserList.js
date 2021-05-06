import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('/data/users.json')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="container">
                <h2>회원리스트</h2>
                <table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>아이디</td>
                            <td>비밀번호</td>
                            <td>이름</td>
                            <td>이메일</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, id) => {
                            return (
                                <tr key={id}>
                                    <td>{user.userId}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserList;
