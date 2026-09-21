import React, { useEffect, useState } from 'react'
import './TransactionForm.css'

const TransactionForm = ({ addTransaction, editingTransaction, updateTransaction }) => {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title)
      setAmount(editingTransaction.amount)
      setType(editingTransaction.type)
    } else {
      setTitle("")
      setAmount("")
      setType("income")
    }
  }, [editingTransaction])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title || !amount || Number(amount) <= 0) {
      alert("Please enter a valid title and amount")
      return
    }

    const newTransaction = {
      id: editingTransaction ? editingTransaction.id : Date.now(),
      title: title,
      amount: amount,
      type: type
    }

    if (editingTransaction) {
      updateTransaction(newTransaction)
    } else {
      addTransaction(newTransaction)
    }

    setTitle("")
    setAmount("")
    setType("income")
  }

  return (
    <div className='form-wrapper'>
      <form className="transaction-form" onSubmit={handleSubmit}>

  <div className="form-field">
    <label htmlFor="title">Title</label>
    <input
      id="title"
      type="text"
      value={title}
      onChange={(event) => {
        setTitle(event.target.value)
      }}
    />
  </div>

  <div className="form-field">
    <label htmlFor="amount">Amount</label>
    <input
      id="amount"
      type="number"
      value={amount}
      onChange={(event) => {
        setAmount(event.target.value)
      }}
    />
  </div>

  <div className="form-field">
    <label htmlFor="type">Type</label>
    <select
      name="type"
      id="type"
      value={type}
      onChange={(event) => {
        setType(event.target.value)
      }}
    >
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  </div>

  <button>
    {editingTransaction ? "Update Transaction" : "Add Transaction"}
  </button>

</form>
    </div>
  )
}

export default TransactionForm
