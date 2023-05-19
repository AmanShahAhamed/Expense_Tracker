import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "../Expenses/ExpensesFilter";

const NewExpense=(props)=>{
  const [filteredDate,setFilteredDate]=useState('2022')
  const saveExpenseDataHandler=(saveExpenseData)=>{
      const data={
         ...saveExpenseData,
         id:Math.random().toString()
      }
      props.onAddExpense(data);
  }

  const saveFilterDateHandler=(date)=>{
   setFilteredDate(filteredDate);
   props.onDateFilter(filteredDate)
  }
  return (
    <div>
     <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
    <ExpensesFilter onSaveFilterDate={saveFilterDateHandler} />
    </div>
    
  )
}

export default NewExpense;