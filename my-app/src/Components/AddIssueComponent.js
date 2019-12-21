import React from 'react';
import '../App.css';
import UserOptionComponent from "./UserOptionComponent";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AddIssueComponent() {

  return (
    <div>
      <body className="container">
          <h1>BUG TRACKER <small>by Izzeddine Bouzid</small></h1>
      <div className="jumbotron">
          <div className="row">
              <h2 className="col-10"> Add New Issue: </h2>

              <h2 className="col-2"> Sample Project </h2><br/>
          </div>

          <form className="issueInputForm">

              <div className="row">
                  <div className="form-group col-2">
                      <label htmlFor="datePicker">Created On:</label>
                      <DatePicker id="datePicker"/>
                  </div>
                  <div className="form-group col-12">
                      <label for="issueDescInput">Title</label>
                      <input type="text"
                          className="form-control"
                          id="issueDescInput"
                          placeholder="Describe the issue..."/>
                  </div>

              </div>

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
                  <div className="form-group col-4">
                      <label htmlFor="issueSeverityInput">Severity</label>
                      <select id="issueSeverityInput" className="form-control">
                          <option>Select Severity</option>
                          <option value="low">Low</option>
                          <option value="meduim">Medium</option>
                          <option value="high">High</option>
                      </select>
                  </div>
                  <div className="form-group col-4">
                      <label htmlFor="issueTicketTypeInput">Ticket Type</label>
                      <select id="issueTicketTypeInput" className="form-control">
                          <option>Select Ticket Type</option>
                          <option value="bug">Bug</option>
                          <option value="feature">Feature</option>
                          <option value="suggestion">Suggestion</option>
                      </select>
                  </div>
                  <div className="form-group col-4">
                      <label htmlFor="issueStatusInput">Status</label>
                      <select id="issueStatusInput" className="form-control">
                          <option>Select Ticket Status</option>
                          <option value="open">Open</option>
                          <option value="inProgress">In Progress</option>
                          <option value="underReview">Under Review</option>
                          <option value="completed">Completed</option>
                      </select>
                  </div>

                  <div className="form-group col-4">
                      <label for="issueTicketTypeInput">Submitted By:</label>
                      <select id="issueTicketTypeInput" className="form-control">
                          <UserOptionComponent/>
                      </select>
                  </div>
                  <div className="form-group col-4">
                      <label for="issueStatusInput">Assigned To:</label>
                      <select id="issueStatusInput" className="form-control">
                          <UserOptionComponent/>
                      </select>
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
