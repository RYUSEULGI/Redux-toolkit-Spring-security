import React from 'react';

const Header = () => {
    const url = '#';
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
                    <a className="navbar-brand" href={url}>
                        Me
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href={url}>WHO</a>
                        </li>
                        <li>
                            <a href={url}>WHAT</a>
                        </li>
                        <li>
                            <a href={url}>WHERE</a>
                        </li>
                        <li>
                            <a href={url}>Board</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
