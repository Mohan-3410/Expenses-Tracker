import { useState } from "react";
import ExpenseForm from "./ExpenseForm"
import "./newExpense.css"

export default function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    const[isEditing, setIsEditing]=useState(false)

    function startEditingHandler(){
        setIsEditing(true)
    }
    function stopEditingHandler(){
        setIsEditing(false)
    }
    return(
        <div className="new-expense">
        { !isEditing
            ?  <button onClick={startEditingHandler}>Add New Expense</button>
            :  <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseSave={saveExpenseDataHandler}/>
        }
        </div>
        
    )
}