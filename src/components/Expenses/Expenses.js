import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses=(props) =>{

  const [filteredYear, setFilterdYear]=useState("2022");

  const filterChangeHandler= (selectedYear) =>{
    setFilterdYear(selectedYear);
  };

  const filterdExpenses=props.items.filter((item)=>{
    return item.date.getFullYear().toString() ===filteredYear;
  });

  
  return (
    <div>
      <div className="expenses">

      <ExpensesFilter
       filterSelectedYear={filteredYear} 
       onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdExpenses}/>
      <ExpenseList items={filterdExpenses} />


    </div>
  </div>
    
  );
  }
export default Expenses;
