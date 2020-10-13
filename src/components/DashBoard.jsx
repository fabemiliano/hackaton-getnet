import React, { Component } from 'react';
import BarChart from './BarChart';
import Flow from './test-components/FlowGuide';

export class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('customerPurchases'));
    this.setState({ data });
  }

  calculateSalesTotal(data) {
    const purchases = data.map((e) => e.purchases);
    const total = purchases.reduce((acc, e) => {
      const subtotal = e.reduce((acc2, el) => acc2 + Number(el.purchaseValue), 0);
      return acc + subtotal;
    }, 0);
    return total;
  }

  calculateBestCustomer(data) {
    let topSale;
    data.forEach((e, i) => {
      if (i === 0) {
        topSale = e.purchases.reduce((acc, el) => acc + el.purchaseValue, 0);
      } else {
        const total = e.purchases.reduce((acc, el) => acc + el.purchaseValue, 0);
        if (total > topSale) { topSale = total; }
      }
    });
    const bestBuyer = data.filter((e) => e.purchases.reduce((acc, el) => acc + el.purchaseValue, 0) === topSale);
    return bestBuyer[0];
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Resumo das Vendas</h1>
        <p>
          Total de Vendas: R$
          {(this.calculateSalesTotal(data)).toFixed(2)}
        </p>
        <p>
          Total de Clientes Cadastrados:
          {' '}
          {data.length}
        </p>
        {(data.length > 0) && (
          <p>Cliente com maior consumo:{this.calculateBestCustomer(data).name}
          </p>
        )}
        <p>Gráfico de Venda Diário</p>
        <BarChart />
        {(localStorage.programConfig && localStorage.businessConfig) ? <Flow path="/customer-management"/> : ''}
      </div>
    );
  }
}

export default DashBoard;
