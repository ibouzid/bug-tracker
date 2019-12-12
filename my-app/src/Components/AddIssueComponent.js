import React, {useState, useEffect} from 'react';
import '../App.css';

function AddIssueComponent() {

    const [issues, setIssues] = useState("");

    //chance.guid()

    useEffect(()=>{
        //TODO
        //fetchIssues
        //setIssues(fetched issues)
    },[])

  return (
    <div>
      <body className="container">
          <h1>BUG TRACKER <small>by Izzeddine Bouzid</small></h1>
      <div className="jumbotron">
          <h3>Add New Issue: </h3>
          <form className="issueInputForm">
              <div className="row">
              <div className="form-group col-12">
                  <label for="issueDescInput">Description</label>
                  <textarea
                         rows="10"
                         cols="50"
                         className="form-control"
                         id="issueDescInput"
                         placeholder="Describe the issue..."/>
              </div>
              </div>
              <div className="row">
              <div className="form-group col-2">
                  <label for="issueSeverityInput">Severity</label>
                  <select id="issueSeverityInput" className="form-control">
                      <option value="low">Low</option>
                      <option value="meduim">Medium</option>
                      <option value="high">High</option>
                  </select>
              </div>
              <div className="form-group col-12">
                  <label for="issueAssignedInput">Assigned To</label>
                  <input type="text"
                         className="form-control"
                         id="issueAssignedInput"
                         placeholder="Enter Responsible..."/>
              </div>
              </div>
              <button type="submit" className="btn btn-primary col-1">Add</button>
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
  );
}

export default AddIssueComponent;
