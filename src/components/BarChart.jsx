import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function convertDate(date) {
  const day = date.substring(8, 10)
  const month = date.substring(5, 7)
  return `${day}/${month}`
}

function calculateDailySales(data) {
  let purchaseDates = []
  data.forEach(({ purchases }) => purchases.forEach(({ purchaseDate, purchaseValue }) => {
    purchaseDates.push({ date: convertDate(purchaseDate.substring(0, 10)), value: purchaseValue })
  }));

  const dailySales = purchaseDates.reduce((acc, e) => {
    const value1 = acc.filter(el => el.date === e.date)[0]
    if (value1) {
      const obb2 = { date: e.date, value: value1.value + e.value }
      return [...acc.filter(el => el.date !== e.date), obb2]
    }
    return [...acc, e]
  }, []);
  console.log(dailySales)
  let dailySalesObject = {}
  dailySales.forEach(e => {
    dailySalesObject[e.date] = e.value
  })
  dailySales.sort((a, b) => a.date > b.date ? 1 : -1)
  return dailySales;
}

const data = calculateDailySales(JSON.parse(localStorage.getItem('customerPurchases')) || [])

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  }
}
