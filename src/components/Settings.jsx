import React, { Component } from 'react';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byValue: false,
      byPoints: false,
      byItems: false,
      valueGoal: '',
      pointsGoal: '',
      conversionFactor: '',
      item: '',
      itemGoal: '',
    };
  }

  componentDidUpdate() {
    localStorage.setItem('promoSettins', JSON.stringify(this.state));
  }

  renderScoresDefinition() {
    return (
      <div>
        <p>Defina o modelo de Bonificação</p>
        <div>
          <button type="button" onClick={() => this.setState({ byValue: true, byPoints: false, byItems: false })}>Acúmulo de Valor</button>
          <button type="button" onClick={() => this.setState({ byValue: false, byPoints: true, byItems: false })}>Acúmulo de Pontos</button>
          <button type="button" onClick={() => this.setState({ byValue: false, byPoints: false, byItems: true })}>Acúmulo de Items</button>
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

  renderItemsSettings(item, itemGoal) {
    return (
      <div>
        <div>
          <p>Defina o Produto da campanha</p>
          <input onChange={(e) => { this.setState({ item: e.target.value }); }} value={item} />
        </div>
        <div>
          <p>Defina o número de items da Campanha</p>
          <input onChange={(e) => { this.setState({ itemGoal: e.target.value }); }} value={itemGoal} />
        </div>
      </div>
    );
  }

  render() {
    const {
      byItems, byValue, byPoints, valueGoal, pointsGoal, conversionFactor, item, itemGoal,
    } = this.state;
    return (
      <div>
        {this.renderScoresDefinition()}
        {byValue && this.renderValueSettings(valueGoal)}
        {byPoints && this.renderPointsSettings(pointsGoal, conversionFactor)}
        {byItems && this.renderItemsSettings(item, itemGoal)}
      </div>
    );
  }
}

export default Settings;
