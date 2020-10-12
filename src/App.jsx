import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import './App.css';
import './style_sheets_general/buttons.css';
import './style_sheets_general/inputs.css';
import './style_sheets_general/links.css';
import {
  FeedbackPage,
  UserRegister,
  HomePage,
  ClientsList,
  Payment,
  SendPromo,
  Settings,
  CustomerManagement,
  Notifier,
  BusinessConfigurations,
  DashBoard,
  Footer,
}
  from './components';
import ProgramConfigurations from './components/ProgramConfiguration';

function App() {
  return (
    <main className="App">
      <section className="mobile-simulated-page">
        <BrowserRouter >
          <Switch>
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/feedback" component={FeedbackPage} />
            <Route exact path="/sendpromo" component={SendPromo} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/clientsList" component={ClientsList} />
            <Route exact path="/customer-management/notifer/:cpf" component={Notifier} />
            <Route exact path="/customer-management" component={CustomerManagement} />
            <Route exact path="/business-configurations" component={BusinessConfigurations} />
            <Route exact path="/program-configuration" component={ProgramConfigurations} />
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
