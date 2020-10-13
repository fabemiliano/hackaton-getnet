import React from 'react';
import HeaderImage from './HeaderImage';
import './style_sheets/ProgramConfiguration.css';
import FlowBack from './test-components/FlowBackGuide';

class ProgramConfigurations extends React.Component {
  constructor() {
    super();

      let {start, end, goal, type, reward, alertMsg} = {start: "", end: "", goal: "", type: "", reward: "", alertMsg: ""}

      if(localStorage.programConfig) {
        start = JSON.parse(localStorage.programConfig).start;
        end = JSON.parse(localStorage.programConfig).end;
        goal = JSON.parse(localStorage.programConfig).goal;
        type = JSON.parse(localStorage.programConfig).type;
        reward = JSON.parse(localStorage.programConfig).reward;
      }
        
    this.state = {
      start: start,
      end: end,
      goal: goal,
      reward: reward,
      type: type,
      alertMsg: alertMsg,
    };
    this.saveOnStorage = this.saveOnStorage.bind(this);
    this.handleState = this.handleState.bind(this);
    this.verifyProgramViability = this.verifyProgramViability.bind(this);
  }

  verifyProgramViability() {
    const { goal } = this.state;
    let { start, end } = this.state;
    const { averageTicket, recurrenceCycle } = JSON.parse(localStorage.businessConfig);
    const estimatedVisits = goal/averageTicket;
    
    const endDateComponents = end.split('-');
    let newEndDate = new Date();
    newEndDate.setDate(endDateComponents[2]);
    newEndDate.setMonth(endDateComponents[1]-1);
    newEndDate.setYear(endDateComponents[0]);
    end = newEndDate;
    const startDateComponents = start.split('-');
    let newStartDate = new Date();
    newStartDate.setDate(startDateComponents[2]);
    newStartDate.setMonth(startDateComponents[1]-1);
    newStartDate.setYear(startDateComponents[0]);
    start = newStartDate;
    const programDuration = (end.getTime() - start.getTime())/(24*3600*1000);

    const estimatedRecurrenceCycle = programDuration/estimatedVisits;
    const proportion = (recurrenceCycle-estimatedRecurrenceCycle)/recurrenceCycle * 100;
    let msg = '';
    if(proportion > 40) {
      msg = `Curto circuito! O ciclo de recorrência está muito curto (${Math.round(estimatedRecurrenceCycle)} dias).     
      Então como você pode ajustar?
      No caso você pode ajustar tanto o prazo do programa alterando a data de térmio, quanto ajustar a meta de consumo do cliente. Opção 1 - Caso queira manter a data de término e alterar somente a meta, a meta deve ser menor que R$ ${Math.round((programDuration/(0.6*recurrenceCycle))*averageTicket)}. Opção 2 - Caso queira manter a meta de consumo, a duração do programa deve ser maior que ${Math.round(0.6*recurrenceCycle*estimatedVisits)} dias.`;
    } else {
      msg = 'Programa cadastrado com sucesso';
    }
    this.setState({ alertMsg: msg });
  }

  handleState({ target }) {
    const { name } = target;
    let { value } = target;
    this.setState({[name]: value});
  }

  componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
  }

  // Implementation learned from StackOverflow and adapted to our application
  // The objective is to save the products on cart on localStorage to recover after
  // https://stackoverflow.com/questions/36355093/reactjs-browser-tab-close-event/53865567
  // Setup the `beforeunload` event listener
  setupBeforeUnloadListener() {
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      return this.saveOnStorage();
    });
  }

  saveOnStorage() {
    const {       
      start,
      end,
      goal,
      reward,
      type,
    } = this.state;
    
    const newObject = {
      start: start,
      end: end,
      goal: goal,
      reward: reward,
      type: type,
    }

    localStorage.programConfig = JSON.stringify(newObject);
  }

  render() {
    const { alertMsg } = this.state;
    return (
      <div className="program-config-page">
        <div>
        <HeaderImage size="150px" />
        <div className="program-input-container">
          <h1>Configurações de Programa Fidelidade</h1>
          <form className="program-input-form">
            <div>
              <label htmlFor="type">Tipo do programa: </label>
              <select className="form-control" id="type" type="number" value={this.state.type} name="type" onChange={this.handleState}>
                <option >Selecione</option>
                <option value="valor-acumulado" >Valor Acumulado</option>
                <option value="compras-acima" >Compras Acima</option>
                </select>
            </div>
            <div>
              <label htmlFor="goal">Meta de consumo</label>
              <input className="form-control" id="goal" type="number" placeholder="Insira o valor em reais" value={this.state.goal} name="goal" onChange={this.handleState} />
            </div>
            <div>
              <label htmlFor="start">Data de início: </label>
              <input className="form-control" id="start" type="date" value={this.state.start} name="start" onChange={this.handleState} />
            </div>
            <div>
              <label htmlFor="end">Data de término: </label>
              <input className="form-control" id="end" type="date" value={this.state.end} name="end" onChange={this.handleState} />
            </div>
            <div>
              <label htmlFor="reward">Prêmio: </label>
              <input className="form-control" id="reward" type="text" placeholder="Insira o prêmio" value={this.state.reward} name="reward" onChange={this.handleState} />
            </div>
            {(localStorage.programConfig) ? '' : <button className="footer-menu-item" onClick={() => this.verifyProgramViability()}>Salvar</button> }
          </form>
        </div>
        </div>
        {alertMsg !== "" ? alert(alertMsg) : null}
        <FlowBack path="/business-configurations"/>
      </div>
    );
  }
}

export default ProgramConfigurations;