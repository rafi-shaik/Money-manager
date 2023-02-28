// Write your code here

const TransactionItem = props => {
  const {onDeleteTransaction, details} = props
  const {title, amount, type, id} = details

  const deleteClicked = () => {
    onDeleteTransaction(id, type, amount)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-para">{title}</p>
      <p className="transaction-para">Rs {amount}</p>
      <p className="transaction-para">{type}</p>
      <button
        onClick={deleteClicked}
        className="delete-button"
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
