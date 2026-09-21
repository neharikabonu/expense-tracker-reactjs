import React from 'react'
import './TransactionItem.css'

const TrasactionItem = (props) => {
  return (
    <div className='transaction-item'>
      <div className='transaction-details'>

        <ul>
          <li className="transaction-title">{props.item.title}</li>
          <p className={`transaction-amount ${props.item.type}`}>
            ₹{Number(props.item.amount).toLocaleString("en-IN")}
          </p>
          <span className={`transaction-type ${props.item.type}`}>
            {props.item.type}
          </span>
        </ul>
      </div>

      <div className="transaction-actions">

        <button onClick={() => props.editTransaction(props.item.id)}>Edit</button>
        <button onClick={() => props.deleteTransaction(props.item.id)} >Delete</button>
      </div>
    </div>
  )
}

export default TrasactionItem
