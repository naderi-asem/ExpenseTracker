import { useState } from "react";
import TransactionsForm from "../TransactionsForm/TransactionsForm";
import "./OVCStyle.css"

const OverViewComponent = ({ income, expense, addTransaction }) => {

    const [isShow, setIsShow] = useState(false);

    return (
        <section className="over-view">

            <h3>expense app</h3>
            <section>

                <div className="balance">
                    <p>balance: <span>$ {income - expense}</span></p>
                    <button
                        onClick={() => setIsShow(prevState => !prevState)}
                        className={isShow ? "cancel": "add"}
                    >
                        {isShow ? "cancel" : "Add"}
                    </button>
                </div>

                {isShow && <TransactionsForm addTransaction={addTransaction} />}

            </section>
            <section>
                <p>income: <span className="income">$ {income}</span></p>
                <p>expense: <span className="expense">$ {expense}</span></p>
            </section>

        </section>
    );
}

export default OverViewComponent;