import React, { Component } from 'react';
import HeaderImage from './HeaderImage';

import CountUp from 'react-countup';
import './style_sheets/FeedBackPage.css';


class FeedbackPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastPurchase: '',
      sumOfPurchase: 0,
      sucessGoal: false,
    }
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('customerPurchases'));
    const purchase = storage.pop();
    const { purchases, name } = purchase;
    this.setState({
      sumOfPurchase: purchases.reduce((acc, value) => acc + Number(value.purchaseValue), 0),
      lastPurchase: purchases.pop().purchaseValue,
      name,
    }, () => {
      this.changeToButtonRescueAwards();
    });
  }

  renderGoal() {
    const promoSettings = JSON.parse(localStorage.getItem('promoSettings'));
    const { byPoints, byValue, pointsGoal, valueGoal, conversionFactor } = promoSettings;
    const { sumOfPurchase } = this.state;
    const convertMoneyToPoints = sumOfPurchase / conversionFactor;
    const controlMoneyGoal = valueGoal - sumOfPurchase;
    const controlPointsGoal = pointsGoal - convertMoneyToPoints;
    if (byPoints) return this.chooseByPoints(controlPointsGoal, convertMoneyToPoints);
    if (byValue) return this.chooseByMoney(controlMoneyGoal, sumOfPurchase);
  }

  chooseByPoints(controlPointsGoal, convertMoneyToPoints) {
    const { sucessGoal } = this.state;
    return (
      <span>
        <p className="paragraph-3 feedbackpage-line">
          Você tem {convertMoneyToPoints} pontos acumulados.
        </p>
        {(sucessGoal && <button className="btn">RESGATAR PRÊMIO</button>) ||
          <div className="paragraph-4 feedbackpage-line">
            <p>
              Faltam apenas 
            </p>
            <div className="counter-container">
              <CountUp end={controlPointsGoal} duration={5} />
            </div>
            <p>pontos para você resgatar seu prêmio.</p>
          </div>
        }
      </span>
    )
  }

  chooseByMoney(controlMoneyGoal, sumOfPurchase) {
    const { sucessGoal } = this.state;
    return (
      <span>
        <p className="paragraph-3 feedbackpage-line">
          Você consumiu o total de R$ {sumOfPurchase} reais.
        </p>
        {(sucessGoal && <button className="btn">RESGATAR PRÊMIO</button>) ||
          <div>
            <p className="paragraph-4 feedbackpage-line">
              Faltam apenas
            </p>
            <div className="counter-container">
              R$ <CountUp end={controlMoneyGoal} duration={5} />
            </div>
            <p>para você resgatar seu prêmio.</p>
          </div>
        }
      </span>
    )
  }

  changeToButtonRescueAwards() {
    const promoSettings = JSON.parse(localStorage.getItem('promoSettings'));
    const { byPoints, byValue, pointsGoal, valueGoal, conversionFactor } = promoSettings;
    const { sumOfPurchase } = this.state;
    const convertMoneyToPoints = sumOfPurchase / conversionFactor;
    if (byPoints) {
      if (pointsGoal <= convertMoneyToPoints) {
        this.setState({
          sucessGoal: true,
        })
      }
    }
    if (byValue) {
      if (valueGoal <= sumOfPurchase) {
        this.setState({
          sucessGoal: true,
        })
      }
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div className="feedback-page">
        <p className="paragraph-1 feedbackpage-line"><b>
          Parabéns {name}!
          </b></p>
        <p className="paragraph-2 feedbackpage-line">
          Muito obrigado pela preferência!
        </p>
        <div className="feedback-bottom-container">
          <span>
            {this.renderGoal()}
          </span>
          <HeaderImage size="150px"/>
        </div>
      </div>
    )
  }
}

export default FeedbackPage;
