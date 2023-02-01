import { useEffect, useState } from "react";
import OverViewComponent from "../OverViewComponent/OverViewComponent";
import TransactionsComponent from "../Transactions/TransactionsComponent";
import "./expenseStyle.css"

const ExpenseApp = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (formData) => {
        setTransactions([...transactions, { ...formData, id: Date.now() }]);
        // if (formData.type === "income")
        //     setIncome(Number(formData.amount));
        // else
        //     setExpense(Number(formData.amount));

    }

    useEffect(() => {

        let inc = 0;
        let exp = 0;
        transactions.forEach(t => {

            if (t.type === "income") {
                inc += Number(t.amount);
                setIncome(inc);
            } else {
                exp += Number(t.amount);
                setExpense(exp);
            }

        });

    }, [transactions])

    return (
        <section className="expense-app">
            <OverViewComponent
                income={income}
                expense={expense}
                addTransaction={addTransaction}
            />
            <TransactionsComponent transactions={transactions} />
        </section>
    );
}

export default ExpenseApp;