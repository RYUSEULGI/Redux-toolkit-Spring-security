import React from 'react';
import 'user/style/Signup.css';

const Signup = () => {
    const handleSubmit = () => {};

    return (
        <>
            <form onSubmit={handleSubmit} action="" className="signup-form">
                <div className="container">
                    <h1>회원가입</h1>
                    <p>Please fill in this htmlForm to create an account.</p>
                    <hr />
                    <label htmlFor="id">
                        <b>ID</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter ID"
                        name="id"
                        required
                    />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                    />
                    <label htmlFor="psw-repeat">
                        <b>Repeat Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="psw-repeat"
                        required
                    />
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                    />
                    <label htmlFor="Name">
                        <b>Name</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
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
