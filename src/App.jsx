import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ApiTester from './components/ApiTester';
import UserRegister from './components/UserRegister';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'
import FeedbackPage from './components/FeedbackPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/feedback-page" component={FeedbackPage} />
      </Switch>
    </BrowserRouter>
>>>>>>> 1bfd93a01b4ceb05cb7bfa4c1af55ea0087a858c
  );
}

export default App;
