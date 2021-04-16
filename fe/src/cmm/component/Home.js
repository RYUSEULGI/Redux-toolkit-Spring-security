import React from 'react';
import { Contents, Profile, Search } from 'cmm';
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
