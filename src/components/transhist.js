import React, { useContext } from "react";
import { UserContext } from "./context";

function TransactionHistory() {
    const ctx = useContext(UserContext);
   console.log(ctx);
    const transactions = ctx.transactionHistory;
    const activeUser = ctx.activeUser;
    const userTransactions = ctx.transactionHistory.filter(transaction =>Number(transaction.accountnumber) === activeUser.accountNumber||Number(transaction.uses)===activeUser.accountNumber);
    

    return (
        <div className="con">
            <h2>Transaction History</h2>
            <p>Account Holder:{ctx.activeUser.name}</p>
            <p>Account Number:{ctx.activeUser.accountNumber}</p>
            <p>Account Balance:&#8377;{ctx.activeUser.balance}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date&Time</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {userTransactions.map((transaction, index) => (
                        <tr key={index} style={{color: transaction.type === 'Withdraw' ? 'red' : transaction.type === 'Deposit' ? 'green' : transaction.type === 'Transfer Sent' ? 'red' : 'green'}}>
                            <td>{transaction.date}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.type === 'Withdraw' ? '-' : transaction.type === 'Deposit' ? '+' : transaction.type === 'Transfer Sent' ? '-' : '+'}{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionHistory;
