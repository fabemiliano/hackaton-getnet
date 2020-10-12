import React, { Component } from 'react';
import './style_sheets/SendPromo.css'
import HeaderImage from './HeaderImage';

export class SendPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPromo: true,
      renderEmailList: false,
      renderWhatsappList: false,
      listOfContacts: [],
      listOfEmails: [],
      messageSent: false,
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('customerPurchases'));
    const listOfContacts = storage.map(({ whatsapp, name }) => ({ whatsapp, name }));
    const listOfEmails = storage.map(({ email, name }) => ({ email, name }));
    this.setState({ listOfContacts, listOfEmails });
  }

  renderListToSendByWhatsapp(listOfContacts, messageSent) {
    return (
      <div>
        <p>Lista de Contatos</p>
        {listOfContacts.map(({ whatsapp, name }) => (
          <div className="client-list-item">
            <label class="checkbox-label">
              <input className="checkbox-control" type="checkbox" />
              <div class="custom-checkbox" />
            </label>
            <span>{`${whatsapp} - ${name}`}</span>
          </div>
        ))}
        <button type="button" onClick={() => this.setState({ messageSent: true })}>Enviar Mensagem</button>
        {messageSent && <p>Mensagem Enviada</p>}
      </div>
    );
  }

  renderListToSendByEmail(listOfEmails, messageSent) {
    return (
      <div className="client-list-item">
        <p><b>Lista de Contatos</b></p>
        {listOfEmails.map(({ email, name }) => (
          <div className="client-list-item">
            <label class="checkbox-label">
              <input className="checkbox-control" type="checkbox" />
              <div class="custom-checkbox" />
            </label>
            <span>{`${email} - ${name}`}</span>
          </div>
        ))}
        <button type="button" onClick={() => this.setState({ messageSent: true })}>Enviar Mensagem</button>
        {messageSent && <p>Mensagem Enviada</p>}
      </div>
    );
  }

  renderPromoInfo() {
    return (
      <div>
        <label htmlFor="promo-send"><b>Envie uma promoção:</b></label>
        <textarea className="sendpromo-textarea" placeholder="Digite o conteúdo a ser enviado" id="promo-send" />
        <p>Enviar por</p>
        <div className="buttons-section">
          <button type="button" className="btn" onClick={() => this.setState({ renderPromo: false, renderEmailList: true })}>Email</button>
          <button type="button" className="btn" onClick={() => this.setState({ renderPromo: false, renderWhatsappList: true })}>Whatsapp</button>
        </div>
      </div>
    );
  }

  render() {
    const {
      renderPromo, renderEmailList, renderWhatsappList, listOfContacts, listOfEmails, messageSent
    } = this.state;
    return (
      <div className="promoinfo-page">
        <HeaderImage size="150px" />
        {renderPromo && this.renderPromoInfo()}
        {renderEmailList && this.renderListToSendByEmail(listOfEmails, messageSent)}
        {renderWhatsappList && this.renderListToSendByWhatsapp(listOfContacts, messageSent)}
        {}
      </div>
    );
  }
}

export default SendPromo;
