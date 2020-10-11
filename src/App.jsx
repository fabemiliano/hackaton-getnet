import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'
import './style_sheets_general/links.css'
import './App.css'
import {FeedbackPage, UserRegister, HomePage, ClientsList, Payment, SendPromo, Settings} from './components';

function App() {
  return (
    <main className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/feedback-page" component={FeedbackPage} />
        <Route exact path="/sendpromo" component={SendPromo} />
        <Route exact path="/settings" component={Settings} />
        <Route path="/clientsList" component={ClientsList} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
    </main>
  );
}

export default App;
