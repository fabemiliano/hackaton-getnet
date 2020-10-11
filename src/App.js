import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomerManagement from './CustomerManagement';
import Notifier from './Notifier';
import BusinessConfigurations from './BusinessConfigurations';
import ProgramConfiguration from './ProgramConfiguration';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/customer-management/notifer/:cpf" component={ Notifier } />
          <Route path="/customer-management" component={ CustomerManagement } />
          <Route path="/business-configurations" component={ BusinessConfigurations } />
          <Route path="/program-configuration" component={ ProgramConfiguration } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
