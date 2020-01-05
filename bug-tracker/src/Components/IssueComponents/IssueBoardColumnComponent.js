import React from "react";
import IssueCardComponent from "./IssueCardComponent";

function IssueBoardColumnComponent(props) {

if(props.issues!=0){
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
} else{
    return <></>
}


}
export default IssueBoardColumnComponent