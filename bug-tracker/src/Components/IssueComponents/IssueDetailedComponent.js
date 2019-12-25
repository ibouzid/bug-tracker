import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import NavbarComponent from "../NavbarComponent";
import UserOptionComponent from "../UserOptionComponent";
import DatePicker from "react-datepicker";

function IssueDetailedComponent(props) {

    const [issueData, setIssueData] = useState([])
    const param = useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/issues/${param.issueId}`)
            .then(response =>  response.json())
            .then(data => {setIssueData(data.data)});
    },[])

    function handleChange(){

    }
    function handleDate(){

    }
    function handleSubmit(){

    }

    console.log(issueData)
        return(
            <div>
                <NavbarComponent/>
                <div>
                    <body className="container board">
                    <div className="">
                        <div className="row">
                            <h2 className="col-9"> Add New Issue: </h2>

                            <h2 className="col-2" id="project"
                                value={props.projectId}>Project: {issueData.projectName} </h2><br/>
                        </div>

                        <form className="issueInputForm">

                            <div className="row">

                                <div className="form-group col-12">
                                    <label htmlFor="issueDescInput">Title</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Describe the issue..."/>
                                </div>

                            </div>

                            <div className="row">
                                <div className="form-group col-8">
                                    <label htmlFor="issueDescInput">Description</label>
                                    <textarea
                                        onChange={handleChange}
                                        rows="16"
                                        cols="100"
                                        className="form-control"
                                        id="description"
                                        placeholder="Describe the issue..."/>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="severity">Severity</label>
                                        <select id="severity" className="form-control" onChange={handleChange}>
                                            <option>Select Severity</option>
                                            <option value="low">Low</option>
                                            <option value="meduim">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ticketType">Ticket Type</label>
                                        <select id="ticketType" className="form-control" onChange={handleChange}>
                                            <option>Select Ticket Type</option>
                                            <option value="bug">Bug</option>
                                            <option value="feature">Feature</option>
                                            <option value="suggestion">Suggestion</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="submittedBy">Submitted By:</label>
                                        <select id="submittedBy" className="form-control" onChange={handleChange}>
                                            <option>Select User</option>
                                            <UserOptionComponent/>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="assignedTo">Assigned To:</label>
                                        <select id="assignedTo" className="form-control" onChange={handleChange}>
                                            <option>Select User</option>
                                            <UserOptionComponent/>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>
                                        <select id="status" className="form-control" onChange={handleChange}>
                                            <option>Select Ticket Status</option>
                                            <option value="open">Open</option>
                                            <option value="inProgress">In Progress</option>
                                            <option value="underReview">Under Review</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-2">
                                    <label htmlFor="datePicker">Created On:</label>
                                    <DatePicker id="datePicker" className="form-control" onChange={handleDate}/>
                                    <label id="dateLabel"></label>
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="points">Points</label>
                                    <input type="text" id="points" className="form-control" onChange={handleChange}/>
                                </div>
                                <div className="form-group  col-4">
                                    <label htmlFor="attachment">Attachment:</label>
                                    <input type="file" id="attachment" onChange={handleChange}/>
                                </div>


                            </div>
                            <Link to="/">
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add
                                </button>
                            </Link>
                            <Link to="/">
                                <button type="cancel" className="btn btn-light col-1">Cancel</button>
                            </Link>
                        </form>
                        <div className="col-lg-12">
                            <div id="issuesList ">
                            </div>

                        </div>
                    </div>
                    <div className="footer-nav">
                        <p>Izzeddine Bouzid</p>
                    </div>
                    </body>
                </div>
            </div>
        )

}

export default IssueDetailedComponent