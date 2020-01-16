import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function UserOptionComponent(){

    const [users, setUsers]  = useState([]);
    const jwt = GetValueFromLocalStorage("token");
    const history = useHistory();
    const GET_USERS_URL = "http://localhost:5000/users";

    useEffect(()=>{
        fetch(GET_USERS_URL,
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response => {
                if (response.status >= 200 && response.status <=299) {
                    return response.json();
                } else {
                    localStorage.clear();
                    history.push("/logout");
                    return null;
                }
            })
            .then(data => {
                if(data){
                setUsers(data.data)
            }});
    },[jwt, history]);

    let data = users.map(item=>{
        return(
            <option className="form-control" id={item.userId} key={item.userId} value={item.userId} name={`${item.firstName} ${item.lastName}`}>
                {item.firstName} {item.lastName}
            </option>)

    });

    return(data);
}

export default UserOptionComponent