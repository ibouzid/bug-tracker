import React, {useEffect, useState} from "react";
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import MainPageComponent from "./MainPageComponent";
import AddIssueComponent from "./IssueComponents/AddIssueComponent";
import BoardComponent from "./BoardComponents/BoardComponent";

function StartComponent() {

    const [issues, setIssues] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/issues")
            .then(response =>  response.json())
            .then(data => {setIssues(data.data)});
    },[])


    return(
        <div>
            <Router>
                <Route path="/" exact component={MainPageComponent}/>
                <Route path="/add" exact component={AddIssueComponent}/>
                <Route path="/user" exact render={()=>{
                    return(
                        <BoardComponent data={issues}/>
                    )
                }}/>

            </Router>
        </div>
    )

}

export default StartComponent