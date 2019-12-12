import React from "react";
import BoardColumnComponent from "./BoardColumnComponent";
import NavbarComponent from "./NavbarComponent";

function BoardComponent(props) {

    return(
        <div>
            <NavbarComponent/>
            <div className="board row">
                <BoardColumnComponent
                    title="Open"
                    data={props.openData}/>
                <BoardColumnComponent
                    title="In Progress"
                    data={props.inProgressData}/>
                <BoardColumnComponent
                    title="Under Review"
                    data={props.underReviewData}/>
                <BoardColumnComponent
                    title="Complete"
                    data={props.completeData}/>
            </div>
        </div>
    )

}

export default BoardComponent