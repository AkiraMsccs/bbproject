import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./context";
import "./style.css";

function NavBar(){
    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
      navigate('/login');
      ctx.setActiveUser(null);
    }
    
    return(
        <div>
            <nav>
                <div><a className="tees" href="#/home">The Banco de España</a></div>
                <div>
                    {ctx.activeUser ? (
                        <div>
                            <ul>
                           <li><a href="#/deposit">Deposit </a></li>
                           <li> <a href="#/withdraw">Withdraw </a></li>
                           {ctx.activeUser.name === 'akira(admin)' && ctx.activeUser.email === 'akira@gmail.com' && (
                                    <li><a href="#/allData">AllData </a></li>
                            )}
                            <li><a href="#/fundtrans">Fund Transfer </a></li>
                                    <li><a href="#/transhist">Transaction History </a></li>
                            <li><button type="submit" onClick={handleClick}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="set">
                            {/* <a href="#/CreateAccount">Create Account</a> */}
                            <a href="#/login">Login</a>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
