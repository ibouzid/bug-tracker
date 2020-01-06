import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import NavbarComponent from "../MainComponents/NavbarComponent";
import UserOptionComponent from "../UserComponents/UserOptionComponent";
import DatePicker from "react-datepicker";

function IssueDetailedComponent(props) {

    const [createDate, setCreateDate] = useState("")
    const [projectId, setProjectId]  = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [severity, setSeverity] = useState("")
    const [ticketType, setTicketType] = useState("")
    const [status, setStatus] = useState("")
    const [submittedBy, setSubmittedBy] = useState("")
    const [userId, setUserId] = useState("")
    const [points, setPoints] = useState("")
    const [attachment, setAttachment] = useState("")
    const [issueData, setIssueData] = useState({})
    const param = useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${param.projectId}/issues/${param.issueId}`)
            .then(response =>  response.json())
            .then(data => {setIssueData(...data.data)});
        document.getElementById("description").value = issueData.description
        document.getElementById("issueTitle").value = issueData.title
        document.getElementById("severity").value = issueData.severity
        document.getElementById("ticketType").value = issueData.ticketType
        document.getElementById("submittedBy").value = issueData.submittedBy
        document.getElementById("assignedTo").value = issueData.userId
        document.getElementById("points").value = issueData.points
        document.getElementById("status").value = issueData.status
        document.getElementById("dateLabel").innerHTML = issueData.createDate
        setCreateDate(issueData.createDate)
        setSeverity(issueData.severity)
        setTicketType(issueData.ticketType)
        setAttachment(issueData.attachment)
        setPoints(issueData.points)
        setUserId(issueData.userId)
        setTitle(issueData.title)
        setDescription(issueData.description)
        setSubmittedBy(issueData.submittedBy)
        setStatus(issueData.status)
        setProjectId(param.projectId)

    },[issueData.title])


    function handleChange(event) {
        if (event.target.id === "datePicker") {
            setCreateDate(event.target.value)
        }
        if (event.target.id === "issueTitle") {
            setTitle(event.target.value)
        }
        if (event.target.id === "description") {
            setDescription(event.target.value)
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
            let files = event.target.files
            let reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = (file) => {setAttachment(file.target.result)}

        }
    }
    function handleDate(event) {
        document.getElementById("dateLabel").innerText = event
        setCreateDate(event)

    }
    function handleSubmit(event) {
        event.preventDefault()
        let issue = {
            createDate: createDate,
            title:title,
            description: description,
            severity: severity,
            ticketType: ticketType,
            status: status,
            submittedBy: submittedBy,
            userId: userId,
            points: points,
            attachment: attachment,
            projectId: projectId

        };
        console.log(issue)
        fetch(`http://localhost:5000/issues/${param.issueId}`, {
            method: 'PUT',
            body: JSON.stringify(issue),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response=>response.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));
        alert("Issue Successfully Updated!")


    }

    console.log(issueData)
        return(
            <div>
                <NavbarComponent/>
                <div>
                    <body className="container board">
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
                                    <label htmlFor="issueDescInput">Description</label>
                                    <textarea
                                        onChange={handleChange}
                                        rows="16"
                                        cols="100"
                                        className="form-control"
                                        id="description"
                                        placeholder="Describe the issue..."/>
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-2">
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


                            </div><br/>
                            <Link to="/home">
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add
                                </button>
                            </Link>
                            <Link to="/home">
                                <button type="cancel" className="btn btn-light col-1">Cancel</button>
                            </Link>
                        </form>
                    </div>
                    </body>
                </div>
            </div>
        )

}

export default IssueDetailedComponent