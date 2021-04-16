import { Route } from 'react-router';
import Footer from 'cmm/component/Footer';
import Header from 'cmm/component/Header';
import Home from 'cmm/component/Home';
import Search from 'cmm/component/Search';
import UserDetail from 'user/component/UserDetail';
import Login from 'user/component/Login';
import Signup from 'user/component/Signup';
import ArticleList from 'article/component/ArticleList';
import Contents from 'cmm/component/Contents';
import ArticleDetail from 'article/component/ArticleDetail';
import ArticleWrite from 'article/component/ArticleWrite';
import News from 'board/component/News';

const App = () => {
    return (
        <>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/user/detail" component={UserDetail} />
            <Route exact path="/board" component={ArticleList} />
            <Route exact path="/news" component={News} />
            <Route exact path="/board/write" component={ArticleWrite} />
            <Route exact path="/board/detail" component={ArticleDetail} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/contents" component={Contents} />
            <Footer />
        </>
    );
};

export default App;
