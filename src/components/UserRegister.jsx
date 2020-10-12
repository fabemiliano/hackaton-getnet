import React, { Component } from 'react';
import HeaderImage from './HeaderImage';
import './style_sheets/UserRegister.css'

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
      name: '',
      cpf: '',
      email: '',
      whatsapp: '',
      isWhatsapp: true,
      isRegistered: false,
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
      <div className="mobile-page">
        <HeaderImage size="200px" />
        <form>
          <div>
            <input placeholder="Nome" className="form-control" name="name" onChange={(e) => this.changeInput(e)} value={name} />
          </div>
          <div>
            <input placeholder="CPF" className="form-control" name="cpf" onChange={(e) => this.changeInput(e)} value={cpf} />
          </div>
          <div>
            <p>Whatsapp?</p>
            <input type="checkbox" onChange={() => this.setState((state) => ({ isWhatsapp: !state.isWhatsapp }))} checked={isWhatsapp} />
          </div>
          <div>
            <input placeholder="E-mail" className="form-control" name="email" onChange={(e) => this.changeInput(e)} value={email} />
          </div>
          
          <div className="register-confirmation">
            <button className="btn btn-register-submit" type="button" onClick={() => { register(name, cpf, whatsapp, email, isWhatsapp); this.setState((state) => ({ isRegistered: !state.isRegistered })); }}>Cadastrar</button>
            {isRegistered && <p>Usuário Cadastrado com Sucesso</p>}
          </div>
        </form>
      </div >
    );
  }
}
