import React from "react";
import IssueCardComponent from "./IssueCardComponent";

function BoardColumnComponent(props) {
    return(
        <div className="container">
            <div className="row">
                <h3>{props.title}</h3>
            </div>
            <div className="row">
                <IssueCardComponent
                    data={props.data}
                />
            </div>

        </div>

    )

}
export default BoardColumnComponent