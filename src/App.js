import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Footer from './components/Footer';
import NotesPage from './pages/Notes';
import NotesDetailPage from './pages/NoteDetail';
import CreateNotePage from './pages/CreateNote';
import ScrollToTop from './components/ScrollToTop';
import NotesDraftsPage from './pages/NotesDrafts';
import EditNoteDraft from './pages/EditNoteDraft';
import EditNote from './pages/EditNote';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/notes' component={NotesPage}/>
              <Route exact path='/notes/create' component={CreateNotePage}/>
              <Route exact path='/notes/drafts' component={NotesDraftsPage}/>
              <Route exact path='/notes/drafts/:id' component={EditNoteDraft}/>
              <Route exact path='/notes/:link' component={NotesDetailPage}/>
              <Route exact path='/notes/:link/edit' component={EditNote}/>
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
