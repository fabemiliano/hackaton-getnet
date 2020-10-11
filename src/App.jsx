import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ApiTester from './components/ApiTester';
import UserRegister from './components/UserRegister';
import Payment from './components/Payment';
import SendPromo from './components/SendPromo';
import Settings from './components/Settings';
import FeedbackPage from './components/FeedbackPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/feedback" component={FeedbackPage} />
        <Route exact path="/sendpromo" component={SendPromo} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
