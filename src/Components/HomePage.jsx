import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const 
  }
  
  render() {
    return (
      <section>
        <h1>Obrigado Por Estar de Volta!</h1>
        <label>
          Insira seu CPF:
          <input onChange={this.handleChange} />
        </label>
        <input type="button" value="Comprar!"/>
        <button>
          <Link to="/clientsList">
            Lista de Clientes
          </Link>
        </button>
      </section>
    )
  }
}

export default HomePage;
