import React, { Component } from 'react';
import './style_sheets/Settings.css';
import HeaderImage from './HeaderImage';

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
        <HeaderImage size="150px" />
        <p>Defina o modelo de Bonificação</p>
        <div className="settings-button-container">
          <button className="settings-btn" type="button" onClick={() => this.setState({ byValue: true, byPoints: false, byItems: false })}>Acúmulo de Valor</button>
          <button className="settings-btn" type="button" onClick={() => this.setState({ byValue: false, byPoints: true, byItems: false })}>Acúmulo de Pontos</button>
          <button className="settings-btn" type="button" onClick={() => this.setState({ byValue: false, byPoints: false, byItems: true })}>Acúmulo de Items</button>
        </div>
      </div>
    );
  }

  renderValueSettings(valueGoal) {
    return (
      <div>
        <input placeholder="Defina o valor da meta" className="form-control" onChange={(e) => this.setState({ valueGoal: e.target.value })} value={valueGoal} />
      </div>
    );
  }

  renderPointsSettings(pointsGoal, conversionFactor) {
    return (
      <div className="point-model-container">
        <div>
          <p>Defina o fator de convesão:</p>
          <span>1 ponto para cada</span>
          <input placeholder="R$" className="form-control" onChange={(e) => { this.setState({ conversionFactor: e.target.value }); }} value={conversionFactor} />
          <span>Reais</span>
        </div>
        <input placeholder="Defina o valor da meta" className="form-control" onChange={(e) => { this.setState({ pointsGoal: e.target.value }); }} value={pointsGoal} />
      </div>
    );
  }

  renderItemsSettings(item, itemGoal) {
    return (
      <div>
        <div>
          <input placeholder="Qual o produto da campanha" className="form-control settings-input-fullsize" onChange={(e) => { this.setState({ item: e.target.value }); }} value={item} />
        </div>
        <div>
          <input placeholder="Qual a meta de nº de produtos?" className="form-control settings-input-fullsize"onChange={(e) => { this.setState({ itemGoal: e.target.value }); }} value={itemGoal} />
        </div>
      </div>
    );
  }

  render() {
    const {
      byItems, byValue, byPoints, valueGoal, pointsGoal, conversionFactor, item, itemGoal,
    } = this.state;
    return (
      <div className="settings-page-top-section">
        {this.renderScoresDefinition()}
        {byValue && this.renderValueSettings(valueGoal)}
        {byPoints && this.renderPointsSettings(pointsGoal, conversionFactor)}
        {byItems && this.renderItemsSettings(item, itemGoal)}
      </div>
    );
  }
}

export default Settings;
