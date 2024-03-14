import React, { useState, useContext } from "react";
import { UserContext ,Card} from "./context";

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;

    function makeWithdraw(e) {
        e.preventDefault();
        if (withdrawAmount > 0 && withdrawAmount <= activeUser.balance) {
            const newBalance = activeUser.balance - withdrawAmount;
            activeUser.balance = newBalance;
            const newTransaction = { type: "Withdraw", amount: withdrawAmount, date: new Date().toLocaleString(),accountnumber:activeUser.accountNumber };
            ctx.setTransactionHistory([...ctx.transactionHistory, newTransaction]);
            console.log(newTransaction);
            setWithdrawAmount(0);
            document.getElementById('withdraw').value = ' ';
            alert('The withdraw was processed.');
        } else if (withdrawAmount <= 0) {
            alert('Enter a positive number.');
        } else {
            alert('Insufficient funds.');
        }
    }

    return (
        <div className="container3">
            <Card
                bgcolor="info"
                body={
                    <>
                        <h4>Withdraw</h4>
                        Account Balance: <br />&#8377; {activeUser ? activeUser.balance : '--'}<br /><br />
                        Withdraw Amount<br />
                        <input type="number" id="withdraw" placeholder="Enter amount" onChange={e => setWithdrawAmount(Number(e.currentTarget.value))} /><br />
                        <button type="submit" onClick={makeWithdraw} disabled={withdrawAmount <= 0}>Withdraw</button>
                    </>
                }
            />
        </div>
    );
}

export default Withdraw;
