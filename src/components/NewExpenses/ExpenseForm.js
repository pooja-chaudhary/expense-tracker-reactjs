import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm =(props) =>{

    const [enterdtitle, setEnterdTitle]=useState("");
    const [enterdAmount, setEnterdAmount]=useState("");
    const [enterdDate, setEnteredDate] =useState("");

    // const [userInput, setUserInput]= useState({
    //     enterdTitle:"",
    //     enterdAmount:"",
    //     enterdDate:""
    // });

    const TitleChangehandler=(event) =>{
        // setUserInput((prevState)=>{
        //     return{...prevState, enterdTitle:event.target.value };
        // });
        setEnterdTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>{
        setEnterdAmount(event.target.value);
    };

    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler =(event)=>{
        event.preventDefault(); //to prevent reloding of page on click of submit button

        const expenseData={
            title: enterdtitle,
            amount: +enterdAmount,
            date: new Date(enterdDate)
        };
        

       props.onSaveExpense(expenseData);
       setEnterdTitle("");
       setEnterdAmount("");
       setEnteredDate("");
    };

return( 
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={enterdtitle} onChange={TitleChangehandler} />
        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enterdAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enterdDate}  onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__controls">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </div>
    
</form>);
}

export default ExpenseForm;