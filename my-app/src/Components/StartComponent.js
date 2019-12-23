import React, {useEffect, useState} from "react";
import {Switch,Route} from "react-router-dom";
import MainPageComponent from "./MainPageComponent";
import AddIssueComponent from "./IssueComponents/AddIssueComponent";
import BoardComponent from "./BoardComponents/BoardComponent";
import ProjectsComponent from "./ProjectComponents/ProjectsComponent";

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
                <Route path="/add" exact component={AddIssueComponent}/>
                <Route path="/projects" exact component={ProjectsComponent}/>
                <Route path="/user" exact render={()=>{
                    return(
                        <BoardComponent data={issues}/>
                    )
                }}/>

            </Switch>
        </div>
    )

}

export default StartComponent