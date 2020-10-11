import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style_sheets/HomePage.css';
import HeaderImage from './HeaderImage';

class HomePage extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: '',
      amount: 0,
    };
  }

  handleChange = ({ target }) => {
    this.setState(
      {
        inputValue: target.value,
      }
    );
  }

  fetchh = async (URL) => {
    const fetchAmout = await fetch(URL);
  }
  
  render() {
    return (
      <section>
        <HeaderImage size="150px" />
        <h1>Obrigado Por Estar de Volta!</h1>
        <div className="buy-option-container">
          <input placeholder="Insira seu CPF" onChange={this.handleChange} className='form-control' />
          <input type="button" value="Comprar!" className="btn"/>
        </div>
        <button className="btn footer-menu-item">
          <Link to="/clientsList">
            Lista de Clientes
          </Link>
        </button>
      </section>
    )
  }
}

export default HomePage;
