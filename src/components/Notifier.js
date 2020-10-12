import React from 'react';

class Notifier extends React.Component {
  constructor() {
    super();
    this.state = {msgToCustomer: ''};
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({[name]: value });
  }

  render() {
    const customers = JSON.parse(localStorage.base);
    const cpfReceived = this.props.match.params.cpf;
    const customer = customers.find(customer => customer.cpf === cpfReceived);
    const { name, temperature, whatsapp, isWhatsapp } = customer;
    let status;
    if (temperature === 'heated') { 
      status = 'aquecido'
    } else if (temperature === 'warm') {
      status = 'morno'
    } else {
      status = 'frio' 
    };

    return(
      <div>
      <h1>Gerenciador de notificações</h1>
      <p>{`${name} está ${status}!`}</p>
      <p>{`Total de pontos ${name} está ${status}!`}</p>
      { (customer.whatsapp != '' && customer.isWhatsapp != false)
        ? <label htmlFor="msg-notifier">Mensagem de notificação: 
          <textarea id="msg-notifier" name="msgToCustomer" onChange={this.handleState} placeholder="Insira aqui uma mensagem para seu cliente" />
        </label> : <p>Não é possível notificar este cliente pois não possui contatos cadastrados.</p>
      }
      <div>
      {(customer.whatsapp != '' && customer.isWhatsapp != false) ? <button onClick={() => window.open(`https://api.whatsapp.com/send?phone=55${whatsapp}&text=${this.state.msgToCustomer}`,'_blank')} >Enviar via whatsapp</button> : ''}
      </div>
      </div>
    );
  }
}

export default Notifier;