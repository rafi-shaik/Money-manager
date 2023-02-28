// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo"
        />
        <div className="text-container">
          <p className="para">Your Balance</p>
          <p className="heading" data-testid="balanceAmount">
            {balance}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo"
        />
        <div className="text-container">
          <p className="para">Your Income</p>
          <p className="heading" data-testid="incomeAmount">
            {income}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo"
        />
        <div className="text-container">
          <p className="para">Your Expenses</p>
          <p className="heading" data-testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
