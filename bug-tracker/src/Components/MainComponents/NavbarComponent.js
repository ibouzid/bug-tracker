import React,{useState} from "react";
import izzy from "../../Images/izzy.png";
import {Link} from "react-router-dom";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";


function NavbarComponent() {

    const userInfo = GetValueFromLocalStorage("user");
    const [user] = useState(JSON.parse(userInfo));
    function handleLogout() {
        localStorage.clear();
    }
    if(user){
        return(
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3 className="display-4">Issue Tracker</h3>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img alt="" className="profile-pic" src={izzy}/>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled personal-info">
                                <li>
                                    <p> {user[0].firstName} {user[0].lastName}</p>
                                </li>
                                <li>
                                    <p> {user[0].role}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul id="Menu" className="list-unstyled list-inline text-center">

                        <li className="dash-link">
                            {/*<i className="fas fa-clipboard-list dash-icon"></i>*/}
                            <Link to={{
                                pathname: '/home',
                                state: { loading: false }
                            }}>
                                <button className="sub-item btn-primary nav-btn"> Dashboard</button>
                            </Link>
                        </li>
                        <li className="dash-link active">
                            {/*<i className="fas fa-project-diagram dash-icon"></i>*/}
                            <button className="dropdown-toggle btn-primary nav-btn"
                               data-toggle="collapse"
                               href="#proj-Submenu">Projects</button>
                            <ul className="collapse list-unstyled" id="proj-Submenu">
                                <Link to={{
                                    pathname: '/projects/all',
                                    state: { user: user }
                                }}>
                                    <li className="sub-item ml-5"> All Projects</li>
                                </Link>
                                <Link to="/projects/user">
                                    <li className="sub-item ml-5"> My Projects</li>
                                </Link>
                            </ul>
                        </li>
                        <li className="dash-link active">
                            {/*<i className="fas fa-bug dash-icon"></i>*/}
                            <button className="dropdown-toggle btn-primary nav-btn"
                               data-toggle="collapse"
                               href="#issue-Submenu">Issues</button>
                            <ul className="collapse list-unstyled" id="issue-Submenu">
                                <Link to="/issues/all">
                                    <li className="sub-item ml-5"> All Issues</li>
                                </Link>
                                <Link to="/issues/user">
                                <li className="sub-item ml-5"> My Issues</li>
                                </Link>
                            </ul>
                        </li>
                        <li className="dash-link">
                            {/*<i className="fas fa-cogs dash-icon"></i>*/}
                            <button className="btn-primary nav-btn">Settings</button>
                        </li>
                    </ul>
                    <Link to="/">
                        <button className="logout-btn btn-danger" onClick={handleLogout}>Logout</button>
                    </Link>

                </nav>
            </div>
        )
    }else{
        return (
            <div>
                No User Data
            </div>
        )
    }


}

export default NavbarComponent