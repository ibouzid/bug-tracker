import React from "react";
import IssueCardComponent from "./IssueCardComponent";

function IssueBoardColumnComponent(props) {


    return(
        <div className="container">
            <div className="row">
                <h3>{props.title}</h3>
            </div>
            <div className="row">
                <IssueCardComponent
                    data={props.issues}
                />
            </div>

        </div>

    )

}
export default IssueBoardColumnComponent