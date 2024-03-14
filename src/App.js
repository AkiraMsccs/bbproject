import React,  { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes, 
  Route
} from "react-router-dom";
import { UserContext } from "./components/context";
import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import TransactionHistory from "./components/transhist";
// import Balance from "./components/balance";
import FundTransfer from "./components/fundtrans";
import AllData from "./components/alldata";
import './App.css';

// Selga contributed the UserProvider function. This sets up the context with additional state features that are used in other components. 
function UserProvider({children}) {
  let [users, setUsers] = useState([{name:'akira(admin)',id:0, email:'akira@gmail.com',accountNumber:63859924, password:'mmnn', balance:0}]);
  let [activeUser, setActiveUser] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);
  let context = {users, setUsers, activeUser, setActiveUser,transactionHistory,setTransactionHistory};
  // console.log(children);
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
function App() {

  return (
    <HashRouter>
      <UserProvider> 
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />}/>
          <Route path="/deposit/" element={<Deposit />}/>
          <Route path="/withdraw/" element={<Withdraw />}/>
          <Route path="/transhist/" element={<TransactionHistory/>}/>
          {/* <Route path="/balance/" element={<Balance />}/> */}
          <Route path="/AllData/" element={<AllData />} />
          <Route path="/fundtrans/" element={<FundTransfer/>}/>
        </Routes>
      </UserProvider>
    </HashRouter>
);
}

export default App;
