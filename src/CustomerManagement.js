import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Customer from './Customer';
import './CustomerManagement.css';

class CustomerManagement extends React.Component {
  constructor() {
    super();
    this.state = {customersToShow: JSON.parse(localStorage.base)};
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { id } = target;
    const allCustomers = JSON.parse(localStorage.base);
    const customersArray = (id !== 'all') ? allCustomers.filter(customer => customer.temperature === id) : allCustomers;
    this.setState({ customersToShow: customersArray });
  }

  calculateDateDiff(pastDate) {
    const actualDate = new Date();
  
    const dataStamp = pastDate.split('-');
    const lastVisitDate = new Date();
    lastVisitDate.setDate(dataStamp[2]);
    lastVisitDate.setMonth(dataStamp[1]);
    lastVisitDate.setYear(dataStamp[0]);
    const diff = actualDate.getTime() - lastVisitDate.getTime();
    return diff;
  }

  render() {
    let storage = [
      {
        name: 'Jose',
        cpf: '12345678901',
        email: 'jose@jose.com',
        whatsapp: '49989878789',
        isWhatsapp: true,
        purchases: [{
          purchaseValue: 20,
          purchaseDate: '2020-10-09T13:16:27.891Z',
        },
        {
          purchaseValue: 30,
          purchaseDate: '2020-10-11T13:16:27.891Z',
        }],
      },
      {
        name: 'Maria',
        cpf: '23456789012',
        email: 'maria@maria.com',
        whatsapp: '49983478789',
        isWhatsapp: true,
        purchases: [{
          purchaseValue: 40,
          purchaseDate: '2020-10-06T13:16:27.891Z',
        },
        {
          purchaseValue: 20,
          purchaseDate: '2020-10-07T13:16:27.891Z',
        }],
      },
    ];

    const programConfig = JSON.parse(localStorage.programConfig);
    const businessConfig = JSON.parse(localStorage.businessConfig);

    // Customer Filters Heated / Warm / Cold
    const { goal } = programConfig;
    let { start, end } = programConfig;
    const { averageTicket, recurrenceCycle } = businessConfig;
    const estimatedVisits = goal/averageTicket;
    
    const endDateComponents = end.split('-');
    let newEndDate = new Date();
    newEndDate.setDate(endDateComponents[2]);
    newEndDate.setMonth(endDateComponents[1]-1);
    newEndDate.setYear(endDateComponents[0]);
    end = newEndDate;
    const startDateComponents = start.split('-');
    let newStartDate = new Date();
    newStartDate.setDate(startDateComponents[2]);
    newStartDate.setMonth(startDateComponents[1]-1);
    newStartDate.setYear(startDateComponents[0]);
    start = newStartDate;
    const programDuration = (end.getTime() - start.getTime())/(24*3600*1000);

    const estimatedRecurrenceCycle = programDuration/estimatedVisits;
    const limitHeated = estimatedRecurrenceCycle * 24 * 3600 * 1000;
    const limitWarm = 2* estimatedRecurrenceCycle * 24 * 3600 * 1000;
    
    storage.forEach((customer, index) => {
      if (this.calculateDateDiff(customer.purchases[0].purchaseDate) <= limitHeated) {
        customer.temperature = 'heated';
      } else if (this.calculateDateDiff(customer.purchases[0].purchaseDate) <= limitWarm) {
        customer.temperature = 'warm';
      } else {
        customer.temperature = 'cold';
      }
      storage[index] = customer; 
    });

    // Salvando no storage
    localStorage.base = JSON.stringify(storage);

    return(
      <div>     
          <button id="heated" onClick={this.handleState}>Aquecidos</button>
          <button id="warm" onClick={this.handleState}>Mornos</button>
          <button id="cold" onClick={this.handleState}>Frios</button>
          <button id="all" onClick={this.handleState}>Todos</button>
        <div>
          { this.state.customersToShow.map(customer => Customer(customer))  } 
        </div>
      </div>
    );
  }
}

export default CustomerManagement;