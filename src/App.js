import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Footer from './components/Footer';
import CodeNotesPage from './pages/CodeNotes';
import CodeNotesDetailPage from './pages/CodeNoteDetail';
import CreateCodeNotePage from './pages/CreateCodeNote';
import ScrollToTop from './components/ScrollToTop';
import CodeNotesDraftsPage from './pages/CodeNotesDrafts';
import EditCodeNoteDraft from './pages/EditCodeNoteDraft';
import EditCodeNote from './pages/EditCodeNote';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/notes' component={CodeNotesPage}/>
              <Route exact path='/notes/create' component={CreateCodeNotePage}/>
              <Route exact path='/notes/drafts' component={CodeNotesDraftsPage}/>
              <Route exact path='/notes/drafts/:id' component={EditCodeNoteDraft}/>
              <Route exact path='/notes/:link' component={CodeNotesDetailPage}/>
              <Route exact path='/notes/:link/edit' component={EditCodeNote}/>
              <Route component={Page404} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
