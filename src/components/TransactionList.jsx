import React from 'react'
import TrasactionItem from './TransactionItem'
import './TransactionList.css'

const TransactionList = (props) => {
  return (
    <div className='transaction-list'>
      {props.transactions.map((item) => (
        <TrasactionItem key={item.id} item={item} 
        deleteTransaction={props.deleteTransaction} 
        editTransaction={props.editTransaction} />
      ))}
    </div>
  )
}

export default TransactionList
