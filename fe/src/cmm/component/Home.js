import React from 'react';
import Contents from './Contents';
import Profile from './Profile';
import Search from './Search';
import '../style/Home.css';
import '../style/Common.css';

const Home = () => (
    <>
        <Profile />
        <Search />
        <Contents />
    </>
);

export default Home;
