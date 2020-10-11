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
    const customersArray = (id != 'all') ? allCustomers.filter(customer => customer.temperature === id) : allCustomers;
    this.setState({ customersToShow: customersArray });
  }

  calculateDateDiff(pastDate) {
    const actualDate = new Date();
  
    const dataStamp = pastDate.split('/');
    const lastVisitDate = new Date();
    lastVisitDate.setDate(dataStamp[0]);
    lastVisitDate.setMonth(dataStamp[1]-1);
    lastVisitDate.setYear(dataStamp[2]);
  
    const diff = actualDate.getTime() - lastVisitDate.getTime();
    return diff;
  }

  render() {
    let baseSimulada = [
        {
          name: 'João',
          cpf: '110.013.356-17',
          phone: '(34) 99689-5183',
          whatsapp: true,
          email: 'joão@gmail.com',
          buys: [{
              total: 100,
              date: '8/10/2020',
              payment: 'credito',
            },
            {
              total: 100,
              date: '7/9/2020',
              payment: 'debito',
            },
          ],
          lastVisit: '8/10/2020',
          temperature: '',
        },
        {
          name: 'Pedro',
          cpf: '110.400.356-17',
          phone: '(11) 99909-7865',
          whatsapp: false,
          email: 'pedro@gmail.com',
          buys: [{
            total: 60,
            date: '28/9/2020',
            payment: 'credito',
          },
          {
            total: 10,
            date: '7/9/2020',
            payment: 'credito',
          },
        ],
          lastVisit: '28/9/2020',
          temperature: '',
        },
        {
          name: 'Joana',
          cpf: '110.400.356-17',
          phone: '(11) 99909-7865',
          whatsapp: true,
          email: 'joana@gmail.com',
          buys: [{
            total: 60,
            date: '3/8/2020',
            payment: 'credito',
          },
          {
            total: 10,
            date: '7/9/2019',
            payment: 'credito',
          },
        ],
          lastVisit: '3/8/2020',
          temperature: '',
        },
    ];

    const programaFidelidade = {
      type: 'valor-acumulado',
      goal: 400,
      reward: 'Carteira de couro',
      start: '12/11/2020',
      end: '24/12/2020',
    };

    const configNegocio = {
      cicloMedioRetornoDoCliente: 10,
      ticketMedio: 80,
    };

    // Customer Filters Heated / Warm / Cold
    const limitHeated = configNegocio.cicloMedioRetornoDoCliente * 24 * 3600 * 1000;
    const limitWarm = 2* configNegocio.cicloMedioRetornoDoCliente * 24 * 3600 * 1000;

    baseSimulada.forEach((customer, index) => {
      if (this.calculateDateDiff(customer.lastVisit) <= limitHeated) {
        customer.temperature = 'heated';
      } else if (this.calculateDateDiff(customer.lastVisit) <= limitWarm) {
        customer.temperature = 'warm';
      } else {
        customer.temperature = 'cold';
      }
      baseSimulada[index] = customer; 
    });

  // Salvando no storage
  localStorage.base = JSON.stringify(baseSimulada);
  localStorage.programa = JSON.stringify(programaFidelidade);
  localStorage.configNegocio = JSON.stringify(configNegocio);


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