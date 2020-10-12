import React from 'react';

class BusinessConfigurations extends React.Component {
  constructor() {
    super();
    this.state = {
      averageTicket: '',
      recurrenceCycle: '',
    };
    this.saveOnStorage = this.saveOnStorage.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({[name]: value});
  }

  saveOnStorage() {
    const businessConfig = {
      averageTicket: this.state.averageTicket,
      recurrenceCycle: this.state.recurrenceCycle,
    };
    localStorage.businessConfig = JSON.stringify(businessConfig);
  }

  render() {
    return (
      <div>
        <h1>Configurações do Negócio</h1>
        <form>
          <div>
            <label htmlFor="recurrenceCycle">Ciclo médio de recorrência</label>
            <input id="recurrenceCycle" type="number" placeholder="Insira o número de dias" value={this.state.recurrenceCycle} name="recurrenceCycle" onChange={this.handleState} />
          </div>
          <div>
            <label htmlFor="averageTicket">Tcket médio</label>
            <input id="averageTicket" type="number" placeholder="Insira o valor em reais" value={this.state.averageTicket} name="averageTicket" onChange={this.handleState} />
          </div>
          <button onClick={this.saveOnStorage}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default BusinessConfigurations;