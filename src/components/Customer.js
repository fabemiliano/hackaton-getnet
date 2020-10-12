import React from 'react';
import { Link } from 'react-router-dom';

function Customer(customer) {
  const { name, cpf, purchases, temperature } = customer;
  const { goal } = JSON.parse(localStorage.programConfig);
  const amount = purchases.reduce((sum, purchase) => sum + purchase.purchaseValue, 0);
  const goalPercentage = Math.round(amount/goal * 100);
  
  return (
    <div>
      <Link to={`/customer-management/notifer/${cpf}`} style={{textDecoration: 'none', color: 'black'}}> 
      <div key={cpf} className={`customer-${temperature}`}>
        <h1>{name}</h1>
        <p>{ cpf }</p>
        <p>Total acumulado: {amount}</p>
        <p>{goalPercentage} % da meta batida</p>
      </div>
      </Link>
    </div>
  );
}

export default Customer;