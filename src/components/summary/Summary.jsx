import React from 'react'
import './Summary.css'

const Summary = ({income, expense, balance}) => {
  return (
    <div className="summary">

  <div className="balance-card">
    <h3>Balance</h3>
    <p>₹{balance.toLocaleString("en-IN")}</p>
  </div>

  <div className="summary-row">

    <div className="summary-card">
      <h3>Income</h3>
      <p>₹{income.toLocaleString("en-IN")}</p>
    </div>

    <div className="summary-card">
      <h3>Expenses</h3>
      <p>₹{expense.toLocaleString("en-IN")}</p>
    </div>

  </div>

</div>
  )
}

export default Summary
