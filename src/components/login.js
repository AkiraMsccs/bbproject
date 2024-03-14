import React,  { useState, useContext} from "react";
import { UserContext, Card } from "./context";
import "./style.css";


function Login(){
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('')
    const ctx = useContext(UserContext);


    function findUser(){
        let data = ctx.users;
        let matchingUser = data.find(user => loginEmail === user.email && loginPassword === user.password);
        ctx.setActiveUser(matchingUser);   
        if(matchingUser == undefined){
            alert('User not found.')
        };   
    }

    const logoutUser = () => {
        ctx.setActiveUser(null);
        setLoginEmail('');
        setLoginPassword('');
        
    };


    return(
        <div >
            <Card 
                bgcolor="info"
                
                body={!ctx.activeUser ? (
                    <>
                    <div className="container1">
                    <h4>Login</h4>
                    Email address<br/> 
                    <input type="email"  id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
                    Password<br/> 
                    <input type="password" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
                    <button type="submit"  onClick={findUser}>Login</button><br/>
                    <span id="hy"> If You Don't Have Any Account? <a href="#/CreateAccount">Create Account</a></span>
                    </div>
                    </>
                ) : (
                    <>
                        <div className="tain">
                    <b>Welcome {ctx.activeUser.name} !</b><br/><br/>
                    <p>This hub is designed to help members of the public interested in our services interact with the Banco de España. 
                        Here, You can  carry out procedures such as opening a direct account, exchanging unfit banknotes and requesting reports from the Central Credit Register. This section also provides
                      access to information from the Bank’s Official Registers and to our virtual office, where all our online procedures can be performed.</p>
                    <button type="submit" className="but" onClick={logoutUser}>Logout</button>
                    </div>
                    </>
                )
                } 
            />
        </div>
    );
}

export default Login;