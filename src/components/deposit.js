import React,  { useState, useContext } from "react";
import { UserContext, Card } from "./context";

function Deposit(e){
    e.preventDefault();
    const [depositAmount, setDepositAmount] = useState(0)
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;
    // console.log('deposit amount:',typeof depositAmount);

    function makeDeposit() {
        if (depositAmount > 0) {
            const newBalance = activeUser.balance + depositAmount;
            activeUser.balance = newBalance;
            const newTransaction = { type: "Deposit", amount: depositAmount, date: new Date().toLocaleString(), accountnumber: activeUser.accountNumber};
            ctx.setTransactionHistory([...ctx.transactionHistory, newTransaction]); // Add the new deposit transaction
            setDepositAmount(0);
            document.getElementById('deposit').value = '';
            alert('The deposit was successfully received.');
        } else {
            alert('Deposit values cannot be negative or zero.');
        }
    }
    

    return(
        <div className="container2">
            <Card 
                bgcolor="info"
                body={
                    <>
                    <h4>Deposit</h4>
                    Account Balance : <br/>&#8377; {activeUser ? activeUser.balance : '--'}<br/><br/>  
                    Deposit Amount<br/> 
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount" onChange={e => setDepositAmount(Number(e.currentTarget.value))} /><br/>
                    <button type="submit" className="btn btn-light" onClick={makeDeposit} disabled={depositAmount ? false : true}>Deposit</button>
                    </>
                } 
            />
        </div>
    );
}

export default Deposit;
