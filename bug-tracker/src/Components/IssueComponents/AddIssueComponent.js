import React, {useEffect, useState} from 'react';
import '../../App.css';
import UserOptionComponent from "../UserComponents/UserOptionComponent";
import DatePicker from "react-datepicker";
import {Link} from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function AddIssueComponent(props) {

    const [createDate, setCreateDate] = useState("");
    const [title, setTitle] = useState("");
    const [issueDescription, setissueDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [ticketType, setTicketType] = useState("");
    const [status, setStatus] = useState("");
    const [submittedBy, setSubmittedBy] = useState("");
    const [userId, setUserId] = useState("");
    const [projectId] = useState(props.location.state.projectId);
    const [points, setPoints] = useState("");
    const [attachment, setAttachment] = useState("");
    const [projectName, setProjectName] = useState("");
    const jwt = GetValueFromLocalStorage("token");


    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${projectId}`,
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response => {
                if (response.status >= 200 && response.status <=299) {
                    return response.json();
                } else {
                    return null;
                }
            })
            .then(data =>{
                if(data){
                    setProjectName(data.data[0].projectName)
                }
            }).catch(err=>console.log(err));
    },[jwt, projectId])


    function handleSubmit() {
        let issue = {
            createDate: createDate,
            title:title,
            issueDescription: issueDescription,
            severity: severity,
            ticketType: ticketType,
            status: status,
            submittedBy: submittedBy,
            userId: userId,
            projectId: projectId,
            points: points,
            attachment: attachment,
            projectName: projectName,
            lastUpdated: createDate

        };
        fetch(`http://localhost:5000/issues`, {
            method: 'POST',
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
        alert("Issue Successfully Added!");


    }
    function handleChange(event) {
        if (event.target.id === "datePicker") {
            setCreateDate(event.target.value)
        }
        if (event.target.id === "title") {
            setTitle(event.target.value)
        }
        if (event.target.id === "issueDescription") {
            setissueDescription(event.target.value)
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

  return (
      <div className="container">
          <h1>BUG TRACKER <small>by Izzeddine Bouzid</small></h1>
      <div className="jumbotron">
          <div className="row">
              <h2 className="col-9"> Add New Issue: </h2>

              <h2 className="col-2" id="project" value={props.projectId}>Project: {projectName} </h2><br/>
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
                         id="issueDescription"
                         placeholder="Describe the issue..."/>
              </div>
                  <div className="col-4">
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
                          <select id="status" className="form-control"  onChange={handleChange}>
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

                  </div>

                  <div className="form-group col-6">
                      <label htmlFor="points">Points</label>
                      <input type="text" id="points" className="form-control" onChange={handleChange}/>
                  </div>
                  <div className="form-group  col-4">
                      <label htmlFor="attachment">Attachment:</label>
                      <input type="file" id="attachment" onChange={handleChange}/>
                  </div> <label id="dateLabel" className="col"></label>



              </div>
              <Link to={`/projects/${projectId}/${projectName}`}>
              <button onClick={handleSubmit} type="submit" className="btn btn-primary col-1">Add</button>
              </Link>
              <Link to={`/projects/${projectId}/${projectName}`}>
                  <button type="cancel" className="btn btn-light col-1">Cancel</button>
              </Link>
          </form>
      </div>
      </div>
  );
}

export default AddIssueComponent;
