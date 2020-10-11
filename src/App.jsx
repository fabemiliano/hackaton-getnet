import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ApiTester from './components/ApiTester';
import UserRegister from './components/UserRegister';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={UserRegister} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
