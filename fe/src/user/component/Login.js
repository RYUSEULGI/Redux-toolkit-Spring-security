import React from 'react';
import '../style/Login.css';

const Login = () => {
    const url = '#';
    return (
        <>
            <form action="action_page.php" method="post">
                <div class="imgcontainer">
                    <img
                        src="https://images.velog.io/images/s_keyyy/post/dfe40784-0b7a-41a7-8c9a-865e2f7d1e78/KakaoTalk_Photo_2021-04-16-11-39-13.jpeg"
                        alt="Avatar"
                        class="avatar"
                    />
                </div>
                <div class="container">
                    <label for="uname">
                        <b>Username</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Username"
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
                    <label>
                        <input
                            type="checkbox"
                            checked="checked"
                            name="remember"
                        />
                        Remember me
                    </label>
                </div>
                <div class="container">
                    <button type="button" class="cancelbtn">
                        Cancel
                    </button>
                    <span class="psw">
                        Forgot <a href={url}>password?</a>
                    </span>
                </div>
            </form>
        </>
    );
};
export default Login;
