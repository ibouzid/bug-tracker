import React from "react"

function MainPageComponent() {

    return(
        <div className="container login">
            <div className="jumbotron">
                <h3 className="display-2 login-header">Issue Tracker</h3>
                <form className="mainPageInput">
                    <div className="row">
                        <div className="form-group col-6 login-item">
                            <label for="userLogin">Username:</label>
                            <input type="text" className="form-control" placeholder="input username..."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6 login-item">
                            <label htmlFor="Password">Password:</label>
                            <input type="password" className="form-control" placeholder="input password..."/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary login-btn">Login</button>

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