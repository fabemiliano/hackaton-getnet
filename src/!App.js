import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';
import ClientsList from './components/ClientsList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/clientsList" component={ClientsList} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
