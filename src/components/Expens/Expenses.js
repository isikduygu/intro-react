import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props){
  const [filterYear, setFilterYear] = useState("2020")

  function filterChangeHandler(filterData){
    setFilterYear(filterData)
  }
  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })
      return(
        <div>
           <Card className="expenses">
           <ExpensesFilter onFilterChange= {filterChangeHandler} selected= {filterYear} />
           {filterExpenses.map(expenses =>
             <ExpenseItem
             key = {expenses.id}
              title = {expenses.title}
              amount = {expenses.amount}
              date = {expenses.date}
             />)}
           </Card>
           </div>
    )
}
export default Expenses;