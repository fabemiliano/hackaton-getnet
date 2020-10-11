import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ApiTester from './components/ApiTester';
import UserRegister from './components/UserRegister';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'
import FeedbackPage from './components/FeedbackPage';
import Payment from './components/Payment';
import SendPromo from './components/SendPromo';
import Settings from './components/Settings';

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
      </Switch>
    </BrowserRouter>
    </main>
  );
}

export default App;
