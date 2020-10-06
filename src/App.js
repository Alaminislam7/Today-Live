import React from 'react';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import StreamCreate from './components/StreamCreate'
import StreamEdit from './components/StreamEdit'
import StreamList from './components/StreamList'
import StreamShow from './components/StreamShow'
import StreamDelete from './components/StreamDelete'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
      <Header/>
        <div>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
