import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#myNavbar"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        Me
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to={'/login'}>LOGIN</Link>
                        </li>
                        <li>
                            <Link to={'/signup'}>SIGNUP</Link>
                        </li>
                        <li>
                            <Link to={'/todo'}>TODO</Link>
                        </li>
                        <li>
                            <Link to={'/board/article'}>BOARD</Link>
                        </li>
                        <li>
                            <Link to={'#'}>WHERE</Link>
                        </li>
                        <li>
                            <Link to={'/news'}>NEWS</Link>
                        </li>
                        <li>
                            <Link to={'/board/seoul-cctv'}>서울시CCTV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
