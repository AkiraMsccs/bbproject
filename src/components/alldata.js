import React, { useContext } from "react";
import { UserContext } from "./context";

function AllData(){
    const ctx=useContext(UserContext);

    let users = ctx.users
    // users.forEach(user => {
    //     console.log(user.name, user.email, user.password)
    // });


    return(
        <div className="cont">
            <h1>All Data</h1>
                <table className="table">
                    <thead>
                    <tr className="thead">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Account Number</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="data">
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.accountNumber}</td>
                        {/* <td>{user.password}</td> */}
                        <td>{user.balance}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
    </div>
    );
}

export default AllData;