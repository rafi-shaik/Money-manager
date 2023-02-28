import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

// eslint-disable-next-line no-unused-vars
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
    transactionList: [],
  }

  onDeleteTransaction = (uniqueId, type, amount) => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(each => each.id !== uniqueId)
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    } else if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income - parseInt(amount),
        balance: prevState.balance - parseInt(amount),
      }))
    }
    this.setState({transactionList: filteredList})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))
    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    }
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
        balance: prevState.balance - parseInt(amount),
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    const typeId = event.target.value
    if (typeId === 'INCOME') {
      this.setState({type: 'Income'})
    } else {
      this.setState({type: 'Expenses'})
    }
  }

  render() {
    const {
      balance,
      income,
      expenses,
      transactionList,
      title,
      amount,
    } = this.state
    return (
      <div className="bg-container">
        <div className="transactions-container">
          <div className="name-card">
            <h1 className="name">Hi, Richard</h1>
            <p className="description">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
          <div className="bottom-container">
            <form
              onSubmit={this.addTransaction}
              className="add-transaction-container"
            >
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>

              <input
                value={title}
                onChange={this.onChangeTitle}
                type="text"
                id="title"
                className="input"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>

              <input
                value={amount}
                onChange={this.onChangeAmount}
                type="text"
                id="amount"
                className="input"
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>

              <select
                defaultValue="INCOME"
                id="type"
                onChange={this.onChangeType}
              >
                <option value="INCOME">Income</option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="transaction-history-list">
              <h1 className="transaction-heading">History</h1>
              <ul className="history-table">
                <li className="table-header">
                  <p className="table-heading">Title</p>
                  <p className="table-heading">Amount</p>
                  <p className="table-heading">Type</p>
                </li>
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
