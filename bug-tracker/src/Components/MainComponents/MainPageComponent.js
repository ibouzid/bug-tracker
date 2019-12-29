import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"

function MainPageComponent() {

    const history = useHistory()

    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        fetch("http://localhost:5000/users")
            .then(response =>  response.json())
            .then(data => {setUsers(data.data)});
        //setLoggedIn(false)
    },[])

    function handleChange(event) {
        if (event.target.id === "userName") {
            setUserName(event.target.value)
        }
        if (event.target.id === "password") {
            setPassword(event.target.value)
        }

    }
    function handleClick() {
        let loggedIn = false;
        let userId;

        users.forEach((user)=>{
            console.log(user)
            if(user.userName === userName && user.password === password){
                loggedIn = true
                userId = user.userId

            }
        });

        (loggedIn)? history.push(`user/${userId}`) : history.push("loginFail")
    }


    return(
        <div className="container login">
            <div className="jumbotron">
                <h3 className="display-2 login-header">Issue Tracker</h3>
                <form className="mainPageInput">
                    <div className="row">
                        <div className="form-group col-6 login-item">
                            <label htmlFor="userLogin">Username:</label>
                            <input id="userName"
                                   type="text"
                                   className="form-control"
                                   placeholder="input username..."
                                   onChange={handleChange}
                                   />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6 login-item">
                            <label htmlFor="Password">Password:</label>
                            <input id="password"
                                   type="password"
                                   className="form-control"
                                   placeholder="input password..."
                                   onChange={handleChange
                                   }/>
                        </div>
                    </div>
                        <button type="submit"
                                className="btn btn-primary login-btn"
                                onClick={handleClick}
                                >Login</button>


                </form>
                <div className="row login-item">
                    <p className="login-link">Forgot your <a href="#">Password?</a> </p>
                </div>
                <div className="row login-item">
                    <p className="login-link">Create an Account: <a href="#">Sign Up</a> </p>
                </div>
            </div>


        </div>
    )

}

export default MainPageComponent