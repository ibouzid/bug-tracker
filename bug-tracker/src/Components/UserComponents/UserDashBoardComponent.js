import React from "react";
import NavbarComponent from "../MainComponents/NavbarComponent";
import {Link, useHistory} from "react-router-dom";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function UserDashboardComponent() {
    const jwt = GetValueFromLocalStorage("token");
    const history = useHistory();
    if(!jwt){
        history.push("/logout")
        return null;
    }else{
        return(
            <div>
                <NavbarComponent/>
                <div className="board jumbotron dashboard-body text-center">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/">
                                <div className="card row dashboard-card">
                                    <h3 className="card-title col-12">
                                        Recent Projects
                                    </h3>
                                    <i className="dashboard-icon fas fa-history col-12"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to="/">
                                <div className="card row dashboard-card">
                                    <h3 className="card-title col-12">
                                        Recent Issues
                                    </h3>
                                    <i className="dashboard-icon fas fa-bug col-12"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/">
                                <div className="card row dashboard-card">
                                    <h3 className="card-title col-12">
                                        Reports
                                    </h3>
                                    <i className="dashboard-icon fas fa-chart-bar col-12"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to="/users">
                                <div className="card row dashboard-card">
                                    <h3 className="card-title col-12">
                                        Users
                                    </h3>
                                    <i className="dashboard-icon fas fa-id-card col-12"></i>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        )
    }


}

export default UserDashboardComponent