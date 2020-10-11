import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserRegister from './components/UserRegister';
import Payment from './components/Payment';
import SendPromo from './components/SendPromo';
import Settings from './components/Settings';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'
import FeedbackPage from './components/FeedbackPage';
import DashBoard from './components/DashBoard';

function App() {
  return (
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
  );
}

export default App;
