import React from 'react';
import Customer from './Customer';
import './style_sheets/CustomerManagement.css';
import HeaderImage from "./HeaderImage";
import FlowBack from './test-components/FlowBackGuide';

class CustomerManagement extends React.Component {
  constructor() {
    super();
    this.state = {customersToShow: JSON.parse(localStorage.customerPurchases)};
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { id } = target;
    const allCustomers = JSON.parse(localStorage.customerPurchases);
    const customersArray = (id !== 'all') ? allCustomers.filter(customer => customer.temperature === id) : allCustomers;
    this.setState({ customersToShow: customersArray });
  }

  calculateDateDiff(pastDate) {
    const dataStamp = pastDate.split('-');
    let lastVisitDate = new Date();
    lastVisitDate.setDate(parseInt(dataStamp[2]));
    lastVisitDate.setMonth(parseInt(dataStamp[1])-1);
    lastVisitDate.setYear(parseInt(dataStamp[0]));
    const diff = Date.now() - lastVisitDate.getTime();
    // alert(Date.now())
    return diff;
  }

  render() {

    let storage = JSON.parse(localStorage.customerPurchases);

    const programConfig = JSON.parse(localStorage.programConfig);
    const businessConfig = JSON.parse(localStorage.businessConfig);

    // Customer Filters Heated / Warm / Cold
    const { goal } = programConfig;
    let { start, end } = programConfig;
    const { averageTicket, recurrenceCycle } = businessConfig;
    const estimatedVisits = goal/averageTicket;
    
    const endDateComponents = end.split('-');
    let newEndDate = new Date();
    newEndDate.setDate(parseInt(endDateComponents[2]));
    newEndDate.setMonth(parseInt(endDateComponents[1])-1);
    newEndDate.setYear(parseInt(endDateComponents[0]));
    end = newEndDate;
    const startDateComponents = start.split('-');
    let newStartDate = new Date();
    newStartDate.setDate(parseInt(startDateComponents[2]));
    newStartDate.setMonth(parseInt(startDateComponents[1])-1);
    newStartDate.setYear(parseInt(startDateComponents[0]));
    start = newStartDate;
    const programDuration = (end.getTime() - start.getTime())/(24*3600*1000);

    const estimatedRecurrenceCycle = programDuration/estimatedVisits;
    const limitHeated = parseInt(estimatedRecurrenceCycle) * 24 * 3600 * 1000;
    const limitWarm = 2* parseInt(estimatedRecurrenceCycle) * 24 * 3600 * 1000;
    
    storage.forEach((customer, index) => {
      if (this.calculateDateDiff(customer.purchases[customer.purchases.length-1].purchaseDate) <= limitHeated) {
        customer.temperature = 'heated';
      } else if (this.calculateDateDiff(customer.purchases[customer.purchases.length-1].purchaseDate) <= limitWarm) {
        customer.temperature = 'warm';
      } else {
        customer.temperature = 'cold';
      }
      storage[index] = customer; 
    });

    // Salvando no storage
    localStorage.customerPurchases = JSON.stringify(storage);

    return(
      <section className="customer-management-page">
        <HeaderImage size="150px" />
        <div>     
            <button className="footer-menu-item" id="heated" onClick={this.handleState}>Aquecidos</button>
            <button className="footer-menu-item" id="heated" id="warm" onClick={this.handleState}>Mornos</button>
            <button className="footer-menu-item" id="heated" id="cold" onClick={this.handleState}>Frios</button>
            <button className="footer-menu-item" id="heated" id="all" onClick={this.handleState}>Todos</button>
          <div className="customer-grid">
            { this.state.customersToShow.map(customer => Customer(customer))  } 
          </div>
        </div>
        <FlowBack path="/dashboard"/>
      </section>
    );
  }
}

export default CustomerManagement;