import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import card from '../images/card.png';
import './style_sheets/Payment.css';
import HeaderImage from './HeaderImage';

function savePurchaseInfo(purchaseValue, cpf, isCredit) {
  const storage = JSON.parse(localStorage.getItem('customerPurchases'));
  const user = storage.filter((e) => e.cpf === cpf)[0];
  if (!user) return { message: 'not found' };
  const newUserInfo = {
    ...user,
    purchases: [...user.purchases,
    { purchaseValue: Number(purchaseValue), isCredit, purchaseDate: (new Date().toISOString()) }],
  };
  const newStorage = [...storage.filter((e) => e.cpf !== cpf), newUserInfo];
  localStorage.setItem('customerPurchases', JSON.stringify(newStorage));
  return { message: 'ok' };
}

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseValue: '',
      cpf: '',
      isCredit: true,
      insertCardScreen: true,
      creditOrDebitScreen: false,
      paymentInfoScreen: false,
      feedBackScreen: false,
      notFound: false,
      redirectToRegister: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ insertCardScreen: false, creditOrDebitScreen: true });
    }, 4000);
  }

  renderCreditOrDebit() {
    return (
      <div className="payment-page">
        <p>Opção</p>
        <div>
          <button className="btn" type="button" onClick={() => this.setState({ isCredit: true, creditOrDebitScreen: false, paymentInfoScreen: true })}>Crédito </button>
          <button className="btn" type="button" onClick={() => this.setState({ isCredit: false, creditOrDebitScreen: false, paymentInfoScreen: true })}>Débito </button>
        </div>
      </div>
    );
  }

  renderPurchaseInfo(purchaseValue, cpf) {
    return (
      <div className="payment-page purchase-info">
        <div>
          <p>Digite o valor da compra</p>
          <input className="form-control" onChange={(e) => this.setState({ purchaseValue: e.target.value })} value={purchaseValue} />
        </div>
        <div>
          <p>Digite o CPF do comprador</p>
          <input className="form-control" onChange={(e) => this.setState({ cpf: e.target.value })} value={cpf} />
        </div>
        <button
          className="btn"
          type="button"
          onClick={() => {
            if (savePurchaseInfo(purchaseValue, cpf).message === 'not found') {
              this.setState({ notFound: true });
            } else { this.setState({ paymentInfoScreen: false, feedBackScreen: true }); }
          }}
        >
          Enviar

        </button>
      </div>
    );
  }

  render() {
    const {
      purchaseValue, cpf, isCredit, insertCardScreen, creditOrDebitScreen, paymentInfoScreen,
      feedBackScreen, notFound, redirectToRegister,
    } = this.state;
    return (
      <div className="payment">
        <HeaderImage size="150px" />
        {insertCardScreen && (
          <div className="payment-page">
            <p>Insira o Cartão</p>
          </div>
        )}
        {creditOrDebitScreen && this.renderCreditOrDebit(isCredit)}
        {paymentInfoScreen && this.renderPurchaseInfo(purchaseValue, cpf, isCredit)}
        {notFound && (
          <div className="cpf-register-container">
            <p>CPF não cadastrado. Deseja cadastrar?</p>
            <div className="cpf-register-footer">
              <button className="btn footer-menu-item" type="button" onClick={() => this.setState({ redirectToRegister: true })}>Sim</button>
              <button className="btn footer-menu-item" type="button" onClick={() => this.setState({ feedBackScreen: true })}>Não</button>
            </div>
          </div>
        )}
        {feedBackScreen && <Redirect to="/feedback" />}
        {redirectToRegister && <Redirect to="/register" />}
        <img src={card} />
      </div>
    );
  }
}

export default Payment;
