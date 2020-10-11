import React, { Component } from 'react';
import './style_sheets/UserRegister.css'

function register(name, cpf, email, whatsapp) {
  const obj = {
    name, cpf, email, whatsapp, purchases: [],
  };
  const storage = JSON.parse(localStorage.getItem('customerPurchases')) || [];
  localStorage.setItem('customerPurchases', JSON.stringify([...storage, obj]));
}

export default class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      whatsapp: '',
      isRegistered: false,
    };
  }

  changeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, cpf, email, whatsapp, isRegistered,
    } = this.state;
    return (
      <div className="mobile-page">
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
            <p>Email</p>
            <input name="email" onChange={(e) => this.changeInput(e)} value={email} />
          </div>
          <button className="btn-filled" type="button" onClick={() => { register(name, cpf, whatsapp, email); this.setState((state) => ({ isRegistered: !state.isRegistered })); }}>Cadastrar</button>
          {isRegistered && <p>Usuário Cadastrado com Sucesso</p>}
        </form>
      </div>
    );
  }
}
