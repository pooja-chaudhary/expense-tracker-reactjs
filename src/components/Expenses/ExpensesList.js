import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props =>{
    
    if(props.items.length===0){
      return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
      }
    
return(
<ul className="expense-list">
{ props.items.map((item) => 
      <ExpenseItem 
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />)
}
</ul>);
};

export default ExpenseList;