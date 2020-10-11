import React, { Component } from 'react';

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
            <input type="checkbox" />
            <span>{`${whatsapp} - ${name}`}</span>
          </div>
        ))}
      </div>
    );
  }

  static renderListToSendByEmail(listOfEmails) {
    return (
      <div>
        <p>Lista de Contatos</p>
        {listOfEmails.map(({ email, name }) => (
          <div>
            <input type="checkbox" />
            <span>{`${email} - ${name}`}</span>
          </div>
        ))}
      </div>
    );
  }

  renderPromoInfo() {
    return (
      <div>
        <p>Digite o conteúdo a ser Enviado</p>
        <textarea />
        <p>Enviar por</p>
        <div>
          <button type="button" onClick={() => this.setState({ renderPromo: false, renderEmailList: true })}>Email</button>
          <button type="button" onClick={() => this.setState({ renderPromo: false, renderWhatsappList: true })}>Whatsapp</button>
        </div>
      </div>
    );
  }

  render() {
    const {
      renderPromo, renderEmailList, renderWhatsappList, listOfContacts, listOfEmails,
    } = this.state;
    return (
      <div>
        {renderPromo && this.renderPromoInfo()}
        {renderEmailList && SendPromo.renderListToSendByEmail(listOfEmails)}
        {renderWhatsappList && SendPromo.renderListToSendByWhatsapp(listOfContacts)}
      </div>
    );
  }
}

export default SendPromo;
