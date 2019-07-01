import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from './components/Home';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div style={{ height: '100vh' }}>
            <Switch>
                <Route exact path="/" component={Home} />
                {/*<Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:id" component={Project} />
                <Route exact path="/bookshelf" component={BookShelf} />
                <Route component={Page404} />*/}
            </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
