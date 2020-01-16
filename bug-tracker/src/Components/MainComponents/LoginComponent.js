import React, {useState, useRef, useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../Helpers/UserContextProvider";

function LoginComponent() {

    const history = useHistory()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectUserInput, setIncorrectUserInput] = useState(false);
    const passwordRef = useRef(null);
    const {setUser} = useContext(UserContext);
    const LOGIN_URL = `http://localhost:5000/login`;

    function handleChange(event) {
        if (event.target.id === "userName") {
            setUserName(event.target.value)
        }
        if (event.target.id === "current-password") {
            setPassword(event.target.value)
        }

    }

    function handleSubmit(event) {
        event.preventDefault()
        const user = {
            userName: userName,
            password: password
        }
       fetch(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
       }).then(response => {
            if (response.status >= 200 && response.status <=299) {
                return response.json();
            } else {
                setIncorrectUserInput(true);
                passwordRef.current.select();
                return null;
            }
       }).then(data=>{
                if(data){
                    localStorage.setItem("token", data.token);
                    setUser(data.user);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    history.push({
                        pathname: '/home'
                    });
                }
       }).catch(err=>console.log(err));
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
                            <label htmlFor="current-password">Password:</label>
                            <input id="current-password"
                                   ref={passwordRef}
                                   type="password"
                                   className="form-control"
                                   placeholder="input password..."
                                   onChange={handleChange
                                   }/>
                        </div>
                    </div>{incorrectUserInput? <label className="alert-warning incorrect-password">Incorrect Username or Password</label> : <></>}

                    <button type="submit" onClick={handleSubmit}
                                className="btn btn-primary login-btn">Login</button>


                </form>
                <div className="row login-item">
                    <p className="login-link">Forgot your <a href="/password">Password?</a> </p>
                </div>
                <div className="row login-item">
                    <p className="login-link">Create an Account: <a href="/register">Sign Up</a> </p>
                </div>
            </div>
        </div>
    )

}

export default LoginComponent