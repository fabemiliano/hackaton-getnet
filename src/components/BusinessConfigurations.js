import React from 'react';
import './style_sheets/BusinessConfiguration.css'

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
      <div className="business-config-page">
        <h1>Configurações do Negócio</h1>
        <form>
          <div className="business-config-form-item">
            <label htmlFor="recurrenceCycle">Ciclo médio de recorrência</label>
              <input className="form-control" id="recurrenceCycle" type="number" placeholder="Insira o número de dias" value={this.state.recurrenceCycle} name="recurrenceCycle" onChange={this.handleState} />
          </div>
          <div className="business-config-form-item">
            <label htmlFor="averageTicket">Ticket médio</label>
            <input className="form-control" id="averageTicket" type="number" placeholder="Insira o valor em reais" value={this.state.averageTicket} name="averageTicket" onChange={this.handleState} />
          </div>
          <button className="btn" onClick={this.saveOnStorage}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default BusinessConfigurations;