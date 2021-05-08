import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, selectUsers } from 'user/features/user.slice';

const UserList = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectUsers);

    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch]);

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
