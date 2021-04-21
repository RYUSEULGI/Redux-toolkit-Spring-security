import { Route } from 'react-router';
import { Home, Footer, Header, Search, Contents } from 'cmm/index';
import { Login, Signup, UserDetail } from 'user/index';
import { ArticleDetail, ArticleWrite } from 'article/index';
import { News, Seoul_cctv } from 'board/index';
import { TodoApp } from 'todo/index';

const App = () => {
    return (
        <>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/todo" component={TodoApp} />
            <Route exact path="/contents" component={Contents} />
            <Route exact path="/user/detail" component={UserDetail} />
            <Route exact path="/board/news" component={News} />
            <Route exact path="/board/seoul-cctv" component={Seoul_cctv} />
            <Route exact path="/article/write" component={ArticleWrite} />
            <Route exact path="/article/detail" component={ArticleDetail} />
            <Footer />
        </>
    );
};

export default App;
