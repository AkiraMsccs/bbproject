import React, { useState, useContext } from "react";
import { UserContext, Card } from "./context";

function CreateAccount() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function generateAccountNumber() {
        return Math.floor(10000000 + Math.random() * 90000000);
    }

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label + ' required');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (field === password && field.length < 8) {
            alert('Password must be 8 or more characters long');
            return false;
        }
        if (field === email) {
            var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (field.match(emailFormat)) {
                return true
            } else {
                alert('Enter a valid email address');
                return false;
            }
        }

        return true;
    }

    function handleCreate(e) {
        e.preventDefault();
          if (ctx.users.some(user => user.email === email)) {
            alert('Error: Email already exists');
            return;
        }
        // console.log(name, email, password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        const accountNumber = generateAccountNumber();
        ctx.setUsers((existingState) => [
            ...existingState,
            { name, email, password, balance: 0, accountNumber },
        ]);
        alert('Successfully created account!');
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <div className="container">
            <Card
                bgcolor="info"
                status={status}
                body={show ? (
                    <>
                        <h4>Create Account</h4>
                        Name<br />
                        <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
                        Email address<br />
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
                        Password<br />
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
                        <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={name || email || password ? false : true}>Create Account</button>
                    </>
                ) : (
                    <>
                        <h3>Success</h3>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button><br/><br />
                        <label>Or</label> <br />
                        <button ><a href="#/login">Login</a></button>
                    </>
                )}
            />
        </div>
    );
}

export default CreateAccount;
