import React, { useState} from 'react';
import '../../App.css';
import UserOptionComponent from "../UserComponents/UserOptionComponent";
import DatePicker from "react-datepicker";
import {Link, useHistory} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import handleChange from "../EventHandlers/handleChange";


function AddProjectsComponent() {

    const [createDate, setCreateDate] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectManager, setProjectManager] = useState("");
    const jwt = GetValueFromLocalStorage("token");
    const history = useHistory();
    const POST_PROJECT_URL = `http://localhost:5000/projects`


    function handleSubmit(event) {
        event.preventDefault();
        let project = {
            createDate: createDate,
            projectName:projectName,
            projectDescription: projectDescription,
            projectManager: projectManager
        }; console.log(project)
        fetch(POST_PROJECT_URL, {
            method: 'POST',
            body: JSON.stringify(project),
            headers : {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.status >= 200 && response.status <=299) {
                return response.json();
            } else {
                return null;
            }
        }).then(data=>console.log(data))
            .catch(err=>console.log(err));
        alert("Project Successfully Added!");
        history.push("/projects/all");


    }

    function handleDate(event) {
        document.getElementById("dateLabel").innerText = event
        setCreateDate(event)

    }
    return (
        <div>
            <div className="container">
            <h1>BUG TRACKER <small>by Izzeddine Bouzid</small></h1>
            <div className="jumbotron">
                <div className="row">
                    <h2 className="col-9"> Add New Project: </h2><br/>
                </div>

                <form className="issueInputForm">

                    <div className="row">

                        <div className="form-group col-12">
                            <label htmlFor="projectName">Project Name</label>
                            <input
                                onChange={(event => handleChange(event, ["projectName", setProjectName]))}
                                type="text"
                                className="form-control"
                                id="projectName"
                                placeholder="Name the project..."/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="projectDescription">Description</label>
                            <textarea
                                onChange={(event => handleChange(event, ["projectDescription", setProjectDescription]))}
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
                                <select id="projectManager"
                                        className="form-control"
                                        onChange={(event => handleChange(event, ["projectManager", setProjectManager]))}>
                                            <option>Select Project Manager</option>
                                            <UserOptionComponent/>
                                </select>
                            </div>
                        </div>
                    <div className="row">
                        <div className="form-group col-2">
                            <label htmlFor="datePicker">Created On:</label>
                                <DatePicker id="datePicker"
                                            className="form-control"
                                            onChange={handleDate}/>
                                <label id="dateLabel"></label>
                        </div>


                    </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add Project</button>
                    <Link to={`/projects/all`}>
                        <button type="cancel" className="btn btn-light col-1">Cancel</button>
                    </Link>
                </form>
            </div>
            </div>
        </div>
    );
}

export default AddProjectsComponent;
