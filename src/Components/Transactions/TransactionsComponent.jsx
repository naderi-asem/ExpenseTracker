import { useEffect, useState } from "react";
import "./transactions.css";

const TransactionsComponent = ({ transactions}) => {

    const [searched, setSearched] = useState([]);

    useEffect(() => {
        setSearched([...transactions]);
    }, [transactions]);

    const searchHandler = (e) => {
        const userInput = e.target.value.toLowerCase();
        setSearched(transactions.filter(t => t.describe.toLowerCase().includes(userInput)));
    }

    return (
        <section className="transactions">
            {Boolean(transactions.length) && <h3>transactions</h3>}
            {Boolean(transactions.length) && <input type="text" onChange={searchHandler} placeholder="search for transaction" />}
            {searched.map(transaction => (
                <div key={transaction.id} className={transaction.type === "income"? "incomes": "expenses"}>
                    <p>{transaction.describe}</p>
                    <p>$ {transaction.amount}</p>
                </div>
            ))}
        </section>
    );
}

export default TransactionsComponent;