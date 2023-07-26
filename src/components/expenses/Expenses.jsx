import "./expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
export default function Expenses(props){

    const[filterYear,setFilterYear]=useState('2020');

    function filterChangeHandler(selectedYear){
        setFilterYear(selectedYear);
    }

    const filterExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() ===  filterYear;
    })

    
    return (
        <Card className="expenses">
            <ExpensesFilter  selected = {filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filterExpense}/>
            <ExpensesList items={filterExpense}/>
        </Card>
    )
}