import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import Footer from './components/footer';
import Home from './components/home';
import Projects from './components/projects';
import Project from './components/project';
import BookShelf from './components/bookshelf';
import Page404 from './components/page404';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={Project} />
                <Route exact path="/bookshelf" component={BookShelf} />
                <Route component={Page404} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
