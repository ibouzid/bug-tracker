import React, {useEffect, useState} from 'react';
import '../../App.css';
import UserOptionComponent from "../UserComponents/UserOptionComponent";
import DatePicker from "react-datepicker";
import {Link} from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function AddProjectsComponent(props) {

    const [createDate, setCreateDate] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectManager, setProjectManager] = useState("")
    const jwt = GetValueFromLocalStorage("token")


    function handleSubmit(event) {
        event.preventDefault()
        let project = {
            createDate: createDate,
            projectName:projectName,
            projectDescription: projectDescription,
            projectManager: projectManager
        };
        fetch(`http://localhost:5000/projects`, {
            method: 'POST',
            body: JSON.stringify(project),
            headers : {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response=>response.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));
        alert("Project Successfully Added!")


    }
    function handleChange(event) {
        if (event.target.id === "datePicker") {
            setCreateDate(event.target.value)
        }
        if (event.target.id === "projectName") {
            setProjectName(event.target.value)
        }
        if (event.target.id === "projectDescription") {
            setProjectDescription(event.target.value)
        }
        if (event.target.id === "projectManager") {
            setProjectManager(event.target.value)
        }
    }
    function handleDate(event) {
        document.getElementById("dateLabel").innerText = event
        setCreateDate(event)

    }
    return (
        <div>
            <body className="container">
            <h1>BUG TRACKER <small>by Izzeddine Bouzid</small></h1>
            <div className="jumbotron">
                <div className="row">
                    <h2 className="col-9"> Add New Project: </h2><br/>
                </div>

                <form className="issueInputForm">

                    <div className="row">

                        <div className="form-group col-12">
                            <label for="projectName">Project Name</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="projectName"
                                placeholder="Name the project..."/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-12">
                            <label for="projectDescription">Description</label>
                            <textarea
                                onChange={handleChange}
                                rows="16"
                                cols="100"
                                className="form-control"
                                id="projectDescription"
                                placeholder="Describe the issue..."/>
                        </div>

                    </div>
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="projectManager">Project Manager:</label>
                                <select id="projectManager" className="form-control" onChange={handleChange}>
                                    <option>Select Project Manager</option>
                                    <UserOptionComponent/>
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label for="assignedTo">Users:</label>
                                <select id="assignedTo" className="form-control" onChange={handleChange}>
                                    <option>Select Users</option>
                                    <UserOptionComponent/>
                                </select>
                            </div>
                        </div>
                    <div className="row">
                        <div className="form-group col-2">
                            <label for="datePicker">Created On:</label>
                            <DatePicker id="datePicker" className="form-control" onChange={handleDate}/>
                            <label id="dateLabel"></label>
                        </div>


                    </div>
                    <Link to={`/allProjects`}>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add Project</button>
                    </Link>
                    <Link to={`/allProjects`}>
                        <button type="cancel" className="btn btn-light col-1">Cancel</button>
                    </Link>
                </form>
            </div>
            </body>
        </div>
    );
}

export default AddProjectsComponent;
