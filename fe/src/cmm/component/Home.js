import React from 'react';
import Contents from 'cmm/component/Contents';
import Profile from 'cmm/component/Profile';
import Search from 'cmm/component/Search';
import 'cmm/style/Home.css';
import 'cmm/style/Common.css';

const Home = () => (
    <>
        <Profile />
        <Search />
        <Contents />
    </>
);

export default Home;
