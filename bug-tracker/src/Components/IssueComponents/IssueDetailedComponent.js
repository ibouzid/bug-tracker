import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import NavbarComponent from "../MainComponents/NavbarComponent";
import UserOptionComponent from "../UserComponents/UserOptionComponent";
import TokenExpirationInMinutes from "../Helpers/TokenExpirationInMinutes";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function IssueDetailedComponent(props) {

    const [projectId, setProjectId]  = useState("");
    const [title, setTitle] = useState("");
    const [issueDescription, setIssueDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [ticketType, setTicketType] = useState("");
    const [status, setStatus] = useState("");
    const [submittedBy, setSubmittedBy] = useState("");
    const [userId, setUserId] = useState("");
    const [points, setPoints] = useState("");
    //const [attachment, setAttachment] = useState("");
    const [issueData, setIssueData] = useState({});
    const jwt = GetValueFromLocalStorage("token");
    const param = useParams();
    TokenExpirationInMinutes();

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${param.projectId}/issues/${param.issueId}`,{
            method: 'GET',
                headers : {
                authorization: `Bearer ${jwt}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.status >= 200 && response.status <=299) {
                    return response.json();
                } else {
                    return null;
                }
            }).then(data => {
                if(data){
                    setIssueData(...data.data);
                }else{
                   console.log("No Data Retrieved")
                }
            })
            .then(()=>{
                    setSeverity(issueData.severity);
                    setTicketType(issueData.ticketType);
                    //setAttachment(issueData.attachment);
                    setPoints(issueData.points);
                    setUserId(issueData.userId);
                    setTitle(issueData.title);
                    setIssueDescription(issueData.issueDescription);
                    setSubmittedBy(issueData.submittedBy);
                    setStatus(issueData.status);
                    setProjectId(param.projectId);
                    document.getElementById("issueDescription").value = issueData.issueDescription;
                    document.getElementById("issueTitle").value = issueData.title;
                    document.getElementById("severity").value = issueData.severity;
                    document.getElementById("ticketType").value = issueData.ticketType;
                    document.getElementById("submittedBy").value = issueData.submittedBy;
                    document.getElementById("assignedTo").value = issueData.userId;
                    document.getElementById("points").value = issueData.points;
                    document.getElementById("status").value = issueData.status;

            });


    },[param.projectId, param.issueId, issueData.title, issueData.issueDescription, issueData.ticketType, issueData.points,
             issueData.submittedBy,issueData.userId, issueData.status, issueData.severity]);


    function handleChange(event) {
        if (event.target.id === "issueTitle") {
            setTitle(event.target.value)
        }
        if (event.target.id === "issueDescription") {
            setIssueDescription(event.target.value)
        }
        if (event.target.id === "severity") {
            setSeverity(event.target.value)
        }
        if(event.target.id === "ticketType") {
            setTicketType(event.target.value)
        }
        if(event.target.id === "status"){
            setStatus(event.target.value)
        }
        if(event.target.id === "submittedBy") {
            setSubmittedBy(event.target.value)
        }
        if(event.target.id === "assignedTo"){
            setUserId(event.target.value)
        }
        if(event.target.id === "points"){
            setPoints(event.target.value)
        }
        if(event.target.id === "attachment"){
            //setAttachment(event.target.value)
            let files = event.target.files;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            //reader.onload = (file) => {setAttachment(file.target.result)}

        }
    }
    function handleSubmit() {
        let issue = {
            title:title,
            issueDescription: issueDescription,
            severity: severity,
            ticketType: ticketType,
            status: status,
            submittedBy: submittedBy,
            userId: userId,
            points: points,
            projectId: projectId,
            lastUpdated: Date().toString()

        };
        fetch(`http://localhost:5000/issues/${param.issueId}`, {
            method: 'PUT',
            body: JSON.stringify(issue),
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
        alert("Issue Successfully Updated!");


    }

        return(
            <div>
                <NavbarComponent/>
                <div>
                    <div className="container board">
                    <div className="">
                        <div className="row">
                            <h2 className="col-xl-8 col-sm-7"> Edit Issue: </h2>

                            <h2 className="col-xl-4 col-sm-3" id="project"
                                value={props.projectId}>Project: {issueData.projectName} </h2><br/>
                        </div>

                        <form className="issueInputForm">

                            <div className="row">

                                <div className="form-group col-xl-12 col-lg-11 col-md-11 col-sm-10">
                                    <label htmlFor="issueTitle">Title</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        id="issueTitle"
                                        placeholder="Describe the issue..."/>
                                </div>

                            </div>

                            <div className="row">
                                <div className="form-group col-8">
                                    <label htmlFor="issueDescription">Description</label>
                                    <textarea
                                        onChange={handleChange}
                                        rows="16"
                                        cols="100"
                                        className="form-control"
                                        id="issueDescription"/>
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-2">
                                    <div className="form-group">
                                        <label htmlFor="severity">Severity</label>
                                        <select id="severity" className="form-control" onChange={handleChange}>
                                            <option>Select Severity</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
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

                                <div className="form-group col-6">
                                    <label htmlFor="points">Points</label>
                                    <input type="text" id="points" className="form-control" onChange={handleChange}/>
                                </div>
                                <div className="form-group  col-4">
                                    <label htmlFor="attachment">Attachment:</label>
                                    <input type="file" id="attachment" onChange={handleChange}/>
                                </div>


                            </div><br/>
                            <Link to={`/projects/${projectId}/${issueData.projectName}`}>
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add
                                </button>
                            </Link>
                            <Link to={`/projects/${projectId}/${issueData.projectName}`}>
                                <button type="cancel" className="btn btn-light col-1">Cancel</button>
                            </Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
}

export default IssueDetailedComponent