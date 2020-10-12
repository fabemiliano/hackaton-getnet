import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiAnswer from '../utilities/apiAnswer';
import './style_sheets/ClientsList.css';
import expensesIcon from './style_sheets/images/expenses_icon.png';
import voucherIcon from './style_sheets/images/voucher_icon.png';

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
      <section className='client-list-page'>
        <Link to="/dashboard">
          Voltar
        </Link>
        <h1> Lista de clientes</h1>
        <section className="customers-grid">
          {apiAnswer.map((element) => {
            const { customer: { customer_id }, amount } = element;

            this.handleMap(amount);

            return (
              <div key={customer_id} className="customer-container">
                <h3>ClientID:</h3> <span>{customer_id}</span>
                <div className="client-wallet">
                 <div className="wallet-icon-container">
                    <img src={expensesIcon} alt="expense icon" width="30px" className="wallet-icon" /> 
                  </div>
                  <span>R${amount}</span>
                </div>

                <div className="client-wallet">
                  <div className="wallet-icon-container">
                    <img src={voucherIcon} alt="goal icon" width="30px" className="wallet-icon"/> 
                  </div>
                  <span>R${this.state.Meta}</span>
                </div>
              </div>
            )
          })}
        </section>
      </section>
    )
  }
}

export default ClientsList;