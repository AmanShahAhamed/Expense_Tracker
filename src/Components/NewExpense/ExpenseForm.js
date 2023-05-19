import React, {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm=(props)=>{
    const [enteredTittle,setEnteredTittle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const tittleChangeHandler=(event)=>{
      setEnteredTittle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }


    const resetFormData=()=>{
      setEnteredAmount('');
      setEnteredDate('');
      setEnteredTittle('');
    }

    const formHandler=(event)=>{
       event.preventDefault();
       const expenseData={title:enteredTittle,amount:enteredAmount,date:new Date(enteredDate)};
       if(expenseData.amount && expenseData.date && expenseData.title)
       props.onSaveExpense(expenseData);
       resetFormData();
    }
    
   return (
     <form onSubmit={formHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
         <label>Tittle</label>
         <input type="text" value={enteredTittle} onChange={tittleChangeHandler}/>
        </div>

        <div className="new-expense__control">
         <label>Amount</label>
         <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
         <label>Date</label>
         <input type="date" min="2019-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
     </div>
       <div className="new-expense__actions">
         <button>Add Expense</button>
       </div>
     </form>
   )
}

export default ExpenseForm;