import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userLogin } from 'user/features/user.slice';
import { unwrapResult } from '@reduxjs/toolkit';
import 'user/style/Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(userLogin(login));
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    return (
        <>
            <form method="post" className="login-form">
                <div className="imgcontainer">
                    <img
                        src="https://images.velog.io/images/s_keyyy/post/dfe40784-0b7a-41a7-8c9a-865e2f7d1e78/KakaoTalk_Photo_2021-04-16-11-39-13.jpeg"
                        alt="Avatar"
                        className="avatar"
                    />
                </div>
                <div className="container">
                    <label htmlFor="username">
                        <b>ID</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter ID"
                        name="username"
                        value={login.username}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                        required
                    />
                    <button onClick={handleClick} type="submit">
                        Login
                    </button>
                </div>
                <div className="container">
                    <span className="psw">
                        Forgot <Link to="#">password?</Link>
                    </span>
                </div>
            </form>
        </>
    );
};
export default Login;
