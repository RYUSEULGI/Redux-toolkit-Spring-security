import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './cmm/component/Footer';
import Header from './cmm/component/Header';
import Home from './cmm/component/Home';

ReactDOM.render(
    <div>
        <Header />
        <Home />
        <App />
        <Footer />
    </div>,
    document.getElementById('root')
);
