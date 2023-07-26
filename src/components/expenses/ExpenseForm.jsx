
import "./expenseForm.css"
import {useState} from "react"

export default function ExpenseForm(props){

    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAmount, setEnteredAmount] = useState("");
    const[enteredDate, setEnteredDate] = useState("");

    // const[userInput, setUserInput] = useState({
    //     enteredTitle:"",
    //     enteredAmount: "",
    //     enteredDate:""
    // })


    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: +enteredAmount
        }
        props.onSaveExpenseSave(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("")
    }

    return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2020-01-01" max="2025-01-01" onChange={dateChangeHandler} value={enteredDate}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel} >Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    )
}