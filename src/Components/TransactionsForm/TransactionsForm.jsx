import { useState } from "react";
import "./form.css"

const TransactionsForm = ({addTransaction}) => {

    // const [describe, setDescribe] = useState("");
    // const [amount, setAmount] = useState(0);
    // const [type, setType] = useState("");
    const [formData, setFormData] = useState(
        {
            type: "expense",
            describe: "",
            amount: 0
        }
    );

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTransaction(formData);
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <input
                type="text"
                name="describe"
                value={formData.describe}
                onChange={changeHandler}
                placeholder="your transaction..."
            />

            <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={changeHandler}
                placeholder="The amount of your expenses and income"
            />

            <div>

                <input
                    type="radio"
                    value="expense"
                    checked={formData.type === "expense"}
                    name="type"
                    id="expense"
                    onChange={changeHandler}
                />
                <label htmlFor="expense">expense</label>

                <input
                    type="radio"
                    value="income"
                    checked={formData.type === "income"}
                    name="type"
                    id="income"
                    onChange={changeHandler}
                />
                <label htmlFor="income">income</label>

            </div>
            <button type="submit">Add transaction</button>
        </form>
    );
}

export default TransactionsForm;