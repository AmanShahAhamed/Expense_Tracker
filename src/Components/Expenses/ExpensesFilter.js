import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
   const [selectedYear,setSelectedYear]=useState('2022')
  const dropDownChangeHandler=(event)=>{
    setSelectedYear(event.target.value)
    props.onSaveFilterDate(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year {selectedYear} </label>
        <select value={selectedYear} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;