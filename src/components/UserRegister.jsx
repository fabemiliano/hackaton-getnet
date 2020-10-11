import React, { Component } from 'react';

function register(name, cpf, email, whatsapp, isWhatsapp) {
  const obj = {
    name, cpf, email, whatsapp, isWhatsapp, purchases: [],
  };
  const storage = JSON.parse(localStorage.getItem('customerPurchases')) || [];
  localStorage.setItem('customerPurchases', JSON.stringify([...storage, obj]));
}

const initialState = {
  name: '',
  cpf: '',
  email: '',
  whatsapp: '',
  isWhatsapp: true,
  isRegistered: false,
}

export default class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  changeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      isRegistered: false,
    });
  }

  render() {
    const {
      name, cpf, email, whatsapp, isRegistered, isWhatsapp,
    } = this.state;
    return (
      <div>
        <form>
          <div>
            <p>Nome</p>
            <input name="name" onChange={(e) => this.changeInput(e)} value={name} />
          </div>
          <div>
            <p>CPF</p>
            <input name="cpf" onChange={(e) => this.changeInput(e)} value={cpf} />
          </div>
          <div>
            <p>Whatsapp</p>
            <input name="whatsapp" onChange={(e) => this.changeInput(e)} value={whatsapp} />
          </div>
          <div>
            <p>Whatsapp</p>
            <input type="checkbox" onChange={() => this.setState((state) => ({ isWhatsapp: !state.isWhatsapp }))} checked={isWhatsapp} />
          </div>
          <div>
            <p>Email</p>
            <input name="email" onChange={(e) => this.changeInput(e)} value={email} />
          </div>
          <button type="button" onClick={() => { register(name, cpf, whatsapp, email, isWhatsapp); this.setState({...initialState, isRegistered: true}); }}>Cadastrar</button>
          {isRegistered && <p>Usuário Cadastrado com Sucesso</p>}
        </form>
      </div>
    );
  }
}
