import React from "react";
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import MainPageComponent from "./MainPageComponent";
import AddIssueComponent from "./AddIssueComponent";
import BoardComponent from "./BoardComponent";

function StartComponent() {


    return(
        <div>
            <Router>
                <Route path="/" exact component={MainPageComponent}/>
                <Route path="/add" exact component={AddIssueComponent}/>
                <Route path="/sidenav" exact component={BoardComponent}/>

            </Router>
        </div>
    )

}

export default StartComponent