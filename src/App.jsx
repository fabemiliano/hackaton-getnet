import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserRegister from './components/UserRegister';
import FeedbackPage from './components/FeedbackPage';
import DashBoard from './components/DashBoard';
import Payment from './components/Payment';
import SendPromo from './components/SendPromo';
import Settings from './components/Settings';

import './App.css';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'



function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={UserRegister} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/sendpromo" component={SendPromo} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/feedback" component={FeedbackPage} />
          <Route exact path="/dashboard" component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
