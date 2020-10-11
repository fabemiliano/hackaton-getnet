import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ApiTester from './components/ApiTester';
import UserRegister from './components/UserRegister';
import FeedbackPage from './components/FeedbackPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/feedback-page" component={FeedbackPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
