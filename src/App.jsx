import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style_sheets_general/buttons.css'
import './style_sheets_general/inputs.css'
import './style_sheets_general/links.css'
import './App.css'
import {FeedbackPage, UserRegister, HomePage, ClientsList, Payment, SendPromo, Settings, CustomerManagement, Notifier, BusinessConfigurations} 
from './components';
import ProgramConfigurations from './components/ProgramConfiguration';

function App() {
  return (
    <main className="App">
      <section className='mobile-simulated-page'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/feedback" component={FeedbackPage} />
            <Route exact path="/sendpromo" component={SendPromo} />
            <Route exact path="/settings" component={Settings} />
            <Route path="/clientsList" component={ClientsList} />
            <Route path="/customer-management/notifer/:cpf" component={ Notifier } />
            <Route path="/customer-management" component={ CustomerManagement } />
            <Route path="/business-configurations" component={ BusinessConfigurations } />
            <Route exact path="/program-configuration" component={ ProgramConfigurations } />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
     </section>
    </main>
  );
}

export default App;
