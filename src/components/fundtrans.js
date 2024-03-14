import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function FundTransfer() {
    const [recipientAccount, setRecipientAccount] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);
    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);
    const activeUser = ctx.activeUser;

    function handleTransfer() {
        if (recipientAccount.trim() === '' || transferAmount <= 0) {
            setStatus('Please enter recipient account number and valid transfer amount.');
            return;
        }
        const recipientUser = ctx.users.find(user => user.accountNumber === Number(recipientAccount));
        console.log("detail",typeof(recipientUser));
        if (!recipientUser) {
            setStatus('Recipient account not found.');
            return;
        }

        if (transferAmount > activeUser.balance) {
            setStatus('Insufficient balance.');
            return;
        }

        activeUser.balance -= transferAmount;
        recipientUser.balance += transferAmount;

        // Update transaction history for both sender and recipient
        const senderTransaction = { type: 'Transfer Sent', amount: transferAmount, date: new Date().toLocaleString(), email: activeUser.email,accountnumber:activeUser.accountNumber};
        const recipientTransaction = { type: 'Transfer Received', amount: transferAmount, date: new Date().toLocaleString(), email: recipientUser.email ,accountnumber:recipientUser.accountNumber};

        ctx.setTransactionHistory([...ctx.transactionHistory, senderTransaction, recipientTransaction]);

        // Update user data
        ctx.setUsers(prevUsers => {
            return prevUsers.map(user => {
                if (user.email === activeUser.email) {
                    return activeUser;
                } else if (user.email === recipientUser.email) {
                    return recipientUser;
                }
                return user;
            });
        });

        setStatus('Funds transferred successfully.');
        setRecipientAccount('');
        setTransferAmount(0);
    }

    return (
        <div className="container5">
            <h4>Fund Transfer</h4>
            <label>balance:&#8377; {activeUser ? activeUser.balance : '--'}</label><br/><br/>
            <div>
                <label className="lab">Recipient Account Number:</label>
           
                <input type="text" value={recipientAccount} onChange={e => setRecipientAccount(e.target.value)} />
            </div><br/>
            <div>
                <label className="lab">Transfer Amount:</label>
                <input type="number" value={transferAmount} onChange={e => setTransferAmount(Number(e.target.value))} />
            </div>
            <button onClick={handleTransfer}>Transfer</button>
            {status && <div>{status}</div>}
        </div>
    );
}

export default FundTransfer;
