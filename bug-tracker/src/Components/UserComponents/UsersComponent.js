import React, {useEffect, useState} from "react"
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import TokenExpiration from "../Helpers/TokenExpirationInMinutes";
import UserCardComponent from "./UserCardComponent";

function UsersComponent(){
    const [users, setUsers] = useState([])
    const jwt = GetValueFromLocalStorage("token")
    TokenExpiration()

    useEffect(()=>{
        fetch("http://localhost:5000/users",
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response => {
                if (response.status >= 200 && response.status <=299) {
                    return response.json();
                } else {
                    return null;
                }
            }).then(data => {
                if(data){
                    setUsers(data.data);
                }}).catch(err=>console.log(err));
    },[jwt])

    return(
        <div>
            <NavbarComponent/>
            <h1 className="board">Users</h1><br/>
            <div className="board row">
                <UserCardComponent data={users}/>
            </div>
        </div>
    )

}

export default UsersComponent