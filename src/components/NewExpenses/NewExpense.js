import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense=(props)=>{

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseHandler = (enterdExpenseData) =>{
        const expenseData={
            ...enterdExpenseData,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseData);  //function creatred in app.js
        setIsEditing(false);
    };

    const handelClick = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler =() =>{
        setIsEditing(false);
    };

return <div className="new-expense">
{!isEditing && <button onClick={handelClick}>Add New Expense</button>}
{isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditingHandler} />}
</div>
}

export default NewExpense;