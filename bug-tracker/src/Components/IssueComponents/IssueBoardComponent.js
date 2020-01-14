import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import IssuesByStatusComponent from "./IssuesByStatusComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import handleSelect from "../EventHandlers/HandleSelect";

function IssueBoardComponent() {

    const [openIssues, setOpenIssues] = useState([]);
    const [inProgressIssues, setInProgressIssues] = useState([]);
    const [underReviewIssues, setUnderReviewIssues] = useState([]);
    const [completedIssues, setCompletedIssues] = useState([]);
    const [selectedStatus, setCurrentStatus] = useState("inProgress");
    const [selectedIssues, setSelectedIssues] = useState([])
    const params = useParams();
    const jwt = GetValueFromLocalStorage("token");


    useEffect(()=>{
        switch(selectedStatus) {
            case "open":
                setSelectedIssues(openIssues);
                break;
            case "inProgress":
                setSelectedIssues(inProgressIssues);
                break;
            case "underReview":
                setSelectedIssues(underReviewIssues);
                break;
            case "completed":
                setSelectedIssues(completedIssues);
                break;
            default:
                break;
        }
    },[selectedStatus]);

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${params.projectId}/issues`,
                {headers: {authorization: `Bearer ${jwt}`}})
            .then(response => {
                if (response.status >= 200 && response.status <=299) {
                    return response.json();
                } else {
                    return null;
                }
            }).then(data => {
                if(data){
                    setOpenIssues(data.data.filter(item=>item.status==="open"))
                    setInProgressIssues(data.data.filter(item=>item.status==="inProgress"))
                    setUnderReviewIssues(data.data.filter(item=>item.status==="underReview"))
                    setCompletedIssues(data.data.filter(item=>item.status==="completed"))
                    setSelectedIssues(data.data.filter(item=>item.status==="inProgress"))
                }
            }).catch(err=>console.log(err));

    },[params.projectId, jwt]);

        return(
            <div>
                <NavbarComponent/>

                    <div className="board row pb-5 mb-5">
                        <h1 className="col-3">Project: {params.projectName} </h1>

                            <select className="col-2 select-css" id="selectStatus" onChange={event => {handleSelect(event, setCurrentStatus)}}>
                                <option id="open" value="open">Open Issues</option>
                                <option id="inProgress" selected={true} value="inProgress">In Progress Issues</option>
                                <option id="underReview" value="underReview">Under Review Issues</option>
                                <option id="completed" value="completed">Completed Issues</option>
                            </select>
                            <div>
                                <Link to={{pathname:"/issues/add", state: {projectId: params.projectId}}}>
                                    <button className="board btn-primary btn-lg add-issue"> Add Issue</button>
                                </Link>
                            </div>
                    </div>
                <div className="board">

                <IssuesByStatusComponent
                        title={selectedStatus.toUpperCase()}
                        issues={selectedIssues}/>

                </div>
            </div>

        )

}

export default IssueBoardComponent