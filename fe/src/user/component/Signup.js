import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignup } from 'user/features/user.slice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import 'user/style/Signup.css';

const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userSignup(userInfo)).then(unwrapResult);
        alert('회원가입이 완료되었습니다');
        history.push('/login');
    };

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setUserInfo({
                ...userInfo,
                [name]: value,
            });
        },
        [userInfo]
    );

    return (
        <>
            <form onSubmit={handleSubmit} action="" className="signup-form">
                <div className="container">
                    <h1>회원가입</h1>
                    <p>Please fill in this Form to create an account.</p>
                    <hr />
                    <label htmlFor="id">
                        <b>ID</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter ID"
                        name="username"
                        value={userInfo.username}
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
                        value={userInfo.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="Name">
                        <b>Name</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                        required
                    />
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            Cancel
                        </button>
                        <button type="submit" className="signupbtn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default Signup;
