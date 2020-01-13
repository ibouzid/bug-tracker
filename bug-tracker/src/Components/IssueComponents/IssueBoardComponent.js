import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import IssuesByStatusComponent from "./IssuesByStatusComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function IssueBoardComponent() {

    const [issues, setIssues] = useState([]);
    const params = useParams();
    const jwt = GetValueFromLocalStorage("token");


    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${params.projectId}/issues`,
                {headers: {authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setIssues(data.data)});

    },[params.projectId, jwt]);

        return(
            <div>
                <NavbarComponent/>

                    <div className="row pb-5">
                        <h1 className="board col-4">Project: {params.projectName} </h1>
                        <div className="board col-3">
                            <Link to={{pathname:"/issues/add", state: {projectId: params.projectId}}}>
                                <button className="board btn-primary add-issue"> Add Issue</button>
                            </Link>
                        </div>
                    </div>
                <div className="board">

                <IssuesByStatusComponent
                        title="Open"
                        issues={issues.filter(item=>item.status==="open")}/>

                    <IssuesByStatusComponent
                        title="In Progress"
                        issues={issues.filter(item=>item.status==="inProgress")}/>

                    <IssuesByStatusComponent
                        title="Under Review"
                        issues={issues.filter(item=>item.status ==="underReview")}/>

                    <IssuesByStatusComponent
                        title="Complete"
                        issues={issues.filter(item=>item.status==="completed")}/>
                </div>


            </div>

        )



}

export default IssueBoardComponent