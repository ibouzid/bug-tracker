import React, {useEffect, useState} from "react";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function UserOptionComponent(){

    const [users, setUsers]  = useState([]);
    const jwt = GetValueFromLocalStorage("token")

    useEffect(()=>{
        fetch("http://localhost:5000/users",
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setUsers(data.data)});
    },[])

    let data = users.map(item=>{
        return(
            <option className="form-control" id={item.userId} key={item.userId} value={item.userId} name={`${item.firstName} ${item.lastName}`}>
                {item.firstName} {item.lastName}
            </option>)

    })

    return(data)
}

export default UserOptionComponent