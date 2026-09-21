import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Summary from './components/summary/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

const App = () => {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions")

    if (savedTransactions) {
      try {
        return JSON.parse(savedTransactions)
      } catch (error) {
        console.error("Failed to load transactions:", error)
      }
    }

    return []
  })

  const [filter, setFilter] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") {
      return true
    }

    return transaction.type === filter
  })

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => {
      return [...prevTransactions, newTransaction]
    })
  }

  const updateTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.map((transaction) => {
        if (transaction.id === updatedTransaction.id) {
          return updatedTransaction
        }

        return transaction
      })
    })

    setEditingId(null)
  }

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter((transaction) => {
        return transaction.id !== id
      })
    })
  }

  const [editingId, setEditingId] = useState(null)

  const editTransaction = (id) => {
    setEditingId(id)
  }

  const editingTransaction = transactions.find((transaction) => {
    return transaction.id === editingId
  })

  const clearTransactions = () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete all transactions?"
  )

  if (!confirmed) {
    return
  }

  setTransactions([])
}

  const income = transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + Number(transaction.amount)
    }
    return total
  }, 0)

  const expense = transactions.reduce((total, transaction) => {
    if (transaction.type === "expense") {
      return total + Number(transaction.amount)
    }
    return total
  }, 0)

  const balance = income - expense

  return (
  <div className="app">

    <Header />

    <Summary
      income={income}
      expense={expense}
      balance={balance}
    />

    <div className="main-content">

      <div className="left-section">

        <TransactionForm
          addTransaction={addTransaction}
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
        />

      </div>

      <div className="right-section">

        <div className="transaction-controls">

          <div className="filter-buttons">

            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "income" ? "active" : ""}
              onClick={() => setFilter("income")}
            >
              Income
            </button>

            <button
              className={filter === "expense" ? "active" : ""}
              onClick={() => setFilter("expense")}
            >
              Expenses
            </button>

            <button
              className="clear-button"
              onClick={clearTransactions}
            >
              Clear All
            </button>

          </div>

          <p>
            Showing {filteredTransactions.length} transactions
          </p>

        </div>

        <TransactionList
          transactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />

      </div>

    </div>

  </div>
)
}

export default App
