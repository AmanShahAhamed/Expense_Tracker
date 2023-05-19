import { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];
const App=()=> {
  const [expenseArray,setExpenseArray]=useState(dummyExpenses);

  const filterDateHandler=date=>setExpenseArray(expenseArray.filter((el)=>el.date.getFullYear().toString()===date));

  let content=<p style={{color:'red'}}>No Expense Found</p> ;

  if(expenseArray.length>0){
    content=expenseArray.map((exp)=><ExpenseItem key={exp.id} title={exp.title} date={exp.date} 
    amount={exp.amount} />)
  }

const addExpenseHandler=expense=>{
  setExpenseArray(prev=>[expense,...prev])
}

  return (
    <>

    <NewExpense onAddExpense={addExpenseHandler} onDateFilter={filterDateHandler}/>
    {
      content
    }
   
    </>
  );
}

export default App;
