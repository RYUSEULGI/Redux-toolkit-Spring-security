import React from 'react';
import 'user/style/Login.css';

const Login = () => {
    const url = '#';
    return (
        <>
            <form action="" method="post" className="login-form">
                <div className="imgcontainer">
                    <img
                        src="https://images.velog.io/images/s_keyyy/post/dfe40784-0b7a-41a7-8c9a-865e2f7d1e78/KakaoTalk_Photo_2021-04-16-11-39-13.jpeg"
                        alt="Avatar"
                        className="avatar"
                    />
                </div>
                <div className="container">
                    <label for="uname">
                        <b>ID</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter ID"
                        name="uname"
                        required
                    />
                    <label for="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                    />
                    <button type="submit">Login</button>
                </div>
                <div className="container">
                    <span className="psw">
                        Forgot <a href={url}>password?</a>
                    </span>
                </div>
            </form>
        </>
    );
};
export default Login;
