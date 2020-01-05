import React from "react";
import izzy from "../../Images/izzy.png"
import {Link} from "react-router-dom"
import AllProjectsComponent from "../ProjectComponents/AllProjectsComponent";


function NavbarComponent() {

    return(
        <div className="wrapper">

            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3 className="display-4">Issue Tracker</h3>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img className="profile-pic" src={izzy}/>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled personal-info">
                            <li>
                                <p> Izzy</p>
                            </li>
                            <li>
                                <p> Software Developer</p>
                            </li>
                        </ul>
                    </div>

                </div>

                <ul className="list-unstyled">

                    <li className="dash-link">
                        <i className="fas fa-clipboard-list dash-icon"></i>
                        <a href="/home">DashBoard</a>
                    </li>
                    <li className="dash-link active">
                        <i className="fas fa-project-diagram dash-icon"></i>
                        <a className="dropdown-toggle"
                           data-toggle="collapse"
                           href="#proj-Submenu">Projects</a>
                            <ul className="collapse list-unstyled" id="proj-Submenu">
                                <Link to="/allProjects" >
                                <li className="sub-item"> All Projects</li>
                                </Link>
                                <Link to="/user/projects">
                                <li className="sub-item"> My Projects</li>
                                </Link>
                            </ul>
                    </li>
                    <li className="dash-link active">
                        <i className="fas fa-bug dash-icon"></i>
                        <a className="dropdown-toggle"
                           data-toggle="collapse"
                           href="#issue-Submenu">Issues</a>
                        <ul className="collapse list-unstyled" id="issue-Submenu">
                            <li className="sub-item"> All Issues</li>
                            <li className="sub-item"> My Issues</li>
                        </ul>
                    </li>
                    <li className="dash-link">
                        <i className="fas fa-cogs dash-icon"></i>
                        <a href="#">Settings</a>
                    </li>
                </ul>

            </nav>

            <div id="content">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fas fa-align-left"></i>
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )

}

export default NavbarComponent