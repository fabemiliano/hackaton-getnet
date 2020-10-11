import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiAnswer from '../utilities/apiAnswer';

class ClientsList extends Component {
  constructor() {
    super()

    this.state = {
      Meta: 100, 
    };
  }

  handleMap = (amount) => {

  }

  render() {
    return (
      <section>
        <Link to="/">
          Voltar
        </Link>
        <h1> Lista de clientes</h1>
        {apiAnswer.map((element) => {
          const { customer: { customer_id }, amount } = element;

          this.handleMap(amount);

          return (
            <div key={customer_id}>
              <h3>ClientID:</h3> <span>{customer_id}</span>
              <h3>Consumo:</h3> <span>R${amount}</span>
              <h3>Meta:</h3> <span>R${this.state.Meta}</span>
            </div>
          )
        })}
      </section>
    )
  }
}

export default ClientsList;