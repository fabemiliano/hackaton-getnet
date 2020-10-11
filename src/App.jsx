import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ApiTester from './components/ApiTester';
import UserRegister from './components/UserRegister';
import Payment from './components/Payment';
import Feedback from './components/Feedback'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
