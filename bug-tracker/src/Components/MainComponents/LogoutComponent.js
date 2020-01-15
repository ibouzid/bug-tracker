import React from "react";
import {Link} from "react-router-dom";

function LogoutComponent() {

    return(
            <div className="jumbotron text-center logout">
                <h1 className="mt-5">The page isn't available</h1>
                <p className="mt-5"> The link may be broken, or the page may have been removed</p>
                <i className="fas fa-unlink logout-img mt-5"></i>
                <Link to="/">
                    <p className="mt-5">Click here to go to login page</p>
                </Link>

            </div>

    )

}
export default LogoutComponent