import React, {useState} from "react";
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import MainPageComponent from "./MainPageComponent";
import AddIssueComponent from "./AddIssueComponent";
import BoardComponent from "./BoardComponent";

function StartComponent() {

    const [issues, setIssues] = useState([]);


              fetch("http://localhost:5000/issues")
                   .then(response =>  response.json())
                   .then(data => {setIssues(data.data)});


    return(
        <div>
            <Router>
                <Route path="/" exact component={MainPageComponent}/>
                <Route path="/add" exact component={AddIssueComponent}/>
                <Route path="/sidenav" exact render={()=>{
                    return(
                        <BoardComponent data={issues}/>
                    )
                }}/>

            </Router>
        </div>
    )

}

export default StartComponent