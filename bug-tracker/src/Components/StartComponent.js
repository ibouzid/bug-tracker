import React, {useEffect, useState} from "react";
import {Switch,Route} from "react-router-dom";
import MainPageComponent from "./MainPageComponent";
import AddIssueComponent from "./IssueComponents/AddIssueComponent";
import IssueBoardComponent from "./IssueComponents/IssueBoardComponent";
import ProjectsComponent from "./ProjectComponents/ProjectsComponent";
import IssueDetailedComponent from "./IssueComponents/IssueDetailedComponent";
import UserDashboardComponent from "./UserDashBoardComponent";

function StartComponent() {

    const [issues, setIssues] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/issues")
            .then(response =>  response.json())
            .then(data => {setIssues(data.data)});
    },[])


    return(
        <div>

            <Switch>
                <Route path="/" exact component={MainPageComponent}/>
                <Route path="/user" exact component={UserDashboardComponent}/>
                <Route path="/add" exact component={AddIssueComponent}/>
                <Route path="/projects" exact component={ProjectsComponent}/>
                <Route path="/projects/:projectId/issues/:issueId" component={IssueDetailedComponent}/>
                <Route path="/projects/:projectId" render={()=>{
                    return(
                        <IssueBoardComponent/>
                    )
                }}/>
            </Switch>
        </div>
    )

}

export default StartComponent