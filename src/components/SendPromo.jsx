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
          <div>
            <input type="checkbox" />
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
      <div>
        <p>Lista de Contatos</p>
        {listOfEmails.map(({ email, name }) => (
          <div>
            <input type="checkbox" />
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
      renderPromo, renderEmailList, renderWhatsappList, listOfContacts, listOfEmails, messageSent
    } = this.state;
    return (
      <div>
        {renderPromo && this.renderPromoInfo()}
        {renderEmailList && this.renderListToSendByEmail(listOfEmails, messageSent)}
        {renderWhatsappList && this.renderListToSendByWhatsapp(listOfContacts, messageSent)}
        {}
      </div>
    );
  }
}

export default SendPromo;
