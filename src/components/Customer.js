import React from 'react';
import { Link } from 'react-router-dom';
import './style_sheets/ClientsList.css'
import expensesIcon from './style_sheets/images/expenses_icon.png';
import voucherIcon from './style_sheets/images/voucher_icon.png';


function Customer(customer) {
  const { name, cpf, purchases, temperature } = customer;
  const { goal } = JSON.parse(localStorage.programConfig);
  const amount = purchases.reduce((sum, purchase) => sum + purchase.purchaseValue, 0);
  const goalPercentage = Math.round(amount/goal * 100);
  let colorBackground;
  if(temperature === 'cold') {
    colorBackground = 'red';
  } else if (temperature === 'heated') {
    colorBackground = 'green';
  } else {
    colorBackground = 'blue';
  }
  
  return (
    <div className="customer-container" style={{backgroundColor: colorBackground}}>
      <Link to={`/customer-management/notifer/${cpf}`} style={{textDecoration: 'none', color: 'black'}}> 
      <div key={cpf}>
        <h1>{name}</h1>
        <p>{ cpf }</p>
        <div className="client-wallet">
          <div className="wallet-icon-container">
            <img src={expensesIcon} alt="expense icon" width="30px" className="wallet-icon" /> 
          </div>
          <span>R${amount}</span>
        </div>

        
        <div className="client-wallet">
          <div className="wallet-icon-container">
            <img src={voucherIcon} alt="goal icon" width="30px" className="wallet-icon"/> 
          </div>
          <p>{goalPercentage}% da meta batida</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Customer;