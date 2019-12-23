import React from "react";
import BoardColumnComponent from "./BoardColumnComponent";
import NavbarComponent from "../NavbarComponent";

function BoardComponent(props) {
    let openLength = props.data.filter(item=>item.status =="open").length
    let inProgressLength = props.data.filter(item=>item.status =="inProgress").length
    let underReviewLength = props.data.filter(item=>item.status =="underReview").length
    let completedLength = props.data.filter(item=>item.status =="completed").length

    return(
        <div>
            <NavbarComponent/>
            {(openLength>0 || inProgressLength>0 || underReviewLength>0 || completedLength>0) ?
                <div className="board">

                    {(openLength>0)?
                        <BoardColumnComponent
                            title="Open"
                            data={props.data.filter(item=>item.status =="open")}/> : <></>}

                    {(inProgressLength>0)?
                        <BoardColumnComponent
                            title="In Progress"
                            data={props.data.filter(item=>item.status == "inProgress")}/> : <></>}

                    {(underReviewLength>0)?
                        <BoardColumnComponent
                            title="Under Review"
                            data={props.data.filter(item=>item.status == "underReview")}/> : <></>}

                    {(completedLength>0)?
                        <BoardColumnComponent
                        title="Complete"
                        data={props.data.filter(item=>item.status == "completed")}/> : <></>}

                </div> : <h1 className="board display-2">No Available Issues</h1>}

        </div>
    )

}

export default BoardComponent