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

function StartComponent() {



    return(
        <div>

            <Switch>
                <Route path="/" exact component={MainPageComponent}/>
                <Route path="/home" exact component={UserDashboardComponent}/>
                <Route path="/users" exact component={UsersComponent}/>
                <Route path="/add" exact component={AddIssueComponent}/>
                <Route path="/allProjects" exact component={AllProjectsComponent}/>
                <Route path="/user/projects" exact component={MyProjectsComponent}/>
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