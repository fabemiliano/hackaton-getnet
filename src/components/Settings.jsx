import React, { Component } from 'react';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byValue: false,
      byPoints: false,
      valueGoal: '',
      pointsGoal: '',
      conversionFactor: '',
    };
  }

  componentDidUpdate() {
    localStorage.setItem('promoSettings', JSON.stringify(this.state));
  }

  renderScoresDefinition() {
    return (
      <div>
        <p>Defina o modelo de Bonificação</p>
        <div>
          <button type="button" onClick={() => this.setState({ byValue: true, byPoints: false,  })}>Acúmulo de Valor</button>
          <button type="button" onClick={() => this.setState({ byValue: false, byPoints: true,  })}>Acúmulo de Pontos</button>
        </div>
      </div>
    );
  }

  renderValueSettings(valueGoal) {
    return (
      <div>
        <p>Defina o valor da Meta</p>
        <input onChange={(e) => this.setState({ valueGoal: e.target.value })} value={valueGoal} />
      </div>
    );
  }

  renderPointsSettings(pointsGoal, conversionFactor) {
    return (
      <div>
        <div>
          <p>defina o fator de convesão</p>
          <span>1 ponto para cada</span>
          <input onChange={(e) => { this.setState({ conversionFactor: e.target.value }); }} value={conversionFactor} />
          <span>Reais</span>
        </div>
        <p>Defina o valor da Meta</p>
        <input onChange={(e) => { this.setState({ pointsGoal: e.target.value }); }} value={pointsGoal} />
      </div>
    );
  }

  render() {
    const {
      byValue, byPoints, valueGoal, pointsGoal, conversionFactor,
    } = this.state;
    return (
      <div>
        {this.renderScoresDefinition()}
        {byValue && this.renderValueSettings(valueGoal)}
        {byPoints && this.renderPointsSettings(pointsGoal, conversionFactor)}
      </div>
    );
  }
}

export default Settings;
