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
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('customerPurchases'));
    const listOfContacts = storage.map(({ whatsapp, name }) => ({ whatsapp, name }));
    const listOfEmails = storage.map(({ email, name }) => ({ email, name }));
    this.setState({ listOfContacts, listOfEmails });
  }

  static renderListToSendByWhatsapp(listOfContacts) {
    return (
      <div>
        <p>Lista de Contatos</p>
        {listOfContacts.map(({ whatsapp, name }) => (
          <div>
          <label class="checkbox-label">
            <input className="checkbox-control" type="checkbox" />
            <div class="custom-checkbox" />
          </label>
          <span>{`${whatsapp} - ${name}`}</span>
        </div>
        ))}
      </div>
    );
  }

  static renderListToSendByEmail(listOfEmails) {
    return (
      <div>
        <p><b>Lista de Contatos</b></p>
        {listOfEmails.map(({ email, name }) => (
          <div>
            <label class="checkbox-label">
              <input className="checkbox-control" type="checkbox" />
              <div class="custom-checkbox" />
            </label>
            <span>{`${email} - ${name}`}</span>
          </div>
        ))}
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
      renderPromo, renderEmailList, renderWhatsappList, listOfContacts, listOfEmails,
    } = this.state;
    return (
      <div className="promoinfo-page">
        <HeaderImage size="150px" />
        {renderPromo && this.renderPromoInfo()}
        {renderEmailList && SendPromo.renderListToSendByEmail(listOfEmails)}
        {renderWhatsappList && SendPromo.renderListToSendByWhatsapp(listOfContacts)}
        {}
      </div>
    );
  }
}

export default SendPromo;
