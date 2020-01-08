import React from "react";
import {Switch,Route} from "react-router-dom";
import MainPageComponent from "./MainPageComponent";
import AddIssueComponent from "../IssueComponents/AddIssueComponent";
import IssueBoardComponent from "../IssueComponents/IssueBoardComponent";
import AllProjectsComponent from "../ProjectComponents/AllProjectsComponent";
import IssueDetailedComponent from "../IssueComponents/IssueDetailedComponent";
import UserDashboardComponent from "../UserComponents/UserDashBoardComponent";
import MyProjectsComponent from "../ProjectComponents/MyProjectsComponent";
import UsersComponent from "../UserComponents/UsersComponent";
import AddProjectsComponent from "../ProjectComponents/AddProjectsComponent";
import DeleteProjectsComponent from "../ProjectComponents/DeleteProjectsComponent";

function StartComponent() {



    return(
        <div>

            <Switch>
                <Route path="/" exact component={MainPageComponent}/>
                <Route path="/home" exact component={UserDashboardComponent}/>
                <Route path="/users" exact component={UsersComponent}/>
                <Route path="/issues/add" exact component={AddIssueComponent}/>
                <Route path="/projects/add" exact component={AddProjectsComponent}/>
                <Route path="/projects/all" exact component={AllProjectsComponent}/>
                <Route path="/projects/user" exact component={MyProjectsComponent}/>
                <Route path="/projects/:projectId/delete" exact component={DeleteProjectsComponent}/>
                <Route path="/projects/:projectId/issues/:issueId" exact component={IssueDetailedComponent}/>
                <Route path="/projects/:projectId" exact render={()=>{
                    return(
                        <IssueBoardComponent/>
                    )
                }}/>
            </Switch>
        </div>
    )

}

export default StartComponent