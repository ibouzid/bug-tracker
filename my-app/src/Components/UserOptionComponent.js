import React, {useEffect, useState} from "react";

function UserOptionComponent(){

    const [users, setUsers]  = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/users")
            .then(response =>  response.json())
            .then(data => {setUsers(data.data)});
    },[])
    console.log(users)
    let data = users.map(item=>{
        return(
            <option className="form-control" key={item.userId} value={item.userId} >
                {item.firstName} {item.lastName}
            </option>)

    })

    return(data)
}

export default UserOptionComponent