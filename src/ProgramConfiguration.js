import React from 'react';

class ProgramConfigurations extends React.Component {
  constructor() {
    super();
    this.state = {
      start: '',
      end: '',
      goal: '',
      reward: '',
      type: '',
    };
    this.saveOnStorage = this.saveOnStorage.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({[name]: value});
  }

  saveOnStorage() {
    const programConfig = {
      type: this.state.type,
      goal: this.state.goal,
      start: this.state.start,
      end: this.state.end,
      reward: this.state.reward,
    };
    localStorage.programConfig = JSON.stringify(programConfig);
  }

  render() {
    return (
      <div>
        <h1>Configurações de Programa Fidelidade</h1>
        <form>
          <div>
            <label htmlFor="type">Tipo do programa: </label>
            <select id="type" type="number" value={this.state.type} name="type" onChange={this.handleState}>
              <option >Selecione</option>
              <option value="valor-acumulado" >Valor Acumulado</option>
              <option value="compras-acima" >Compras Acima</option>
              </select>
          </div>
          <div>
            <label htmlFor="goal">Meta de consumo</label>
            <input id="goal" type="number" placeholder="Insira o valor em reais" value={this.state.averageTicket} name="goal" onChange={this.handleState} />
          </div>
          <div>
            <label htmlFor="start">Data de início: </label>
            <input id="start" type="date" value={this.state.averageTicket} name="start" onChange={this.handleState} />
          </div>
          <div>
            <label htmlFor="end">Data de término: </label>
            <input id="end" type="date" value={this.state.averageTicket} name="end" onChange={this.handleState} />
          </div>
          <button onClick={this.saveOnStorage}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default ProgramConfigurations;