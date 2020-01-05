import React, {useEffect, useState} from "react"
import NavbarComponent from "../MainComponents/NavbarComponent";
import ProjectCardComponent from "../ProjectComponents/ProjectCardComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import TokenExpiration from "../Helpers/TokenExpirationInMinutes";
import UserCardComponent from "./UserCardComponent";

function UsersComponent(){
    const [users, setUsers] = useState([])
    const jwt = GetValueFromLocalStorage("token")
    TokenExpiration(30)

    useEffect(()=>{
        fetch("http://localhost:5000/users",
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setUsers(data.data)});
    },[])

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