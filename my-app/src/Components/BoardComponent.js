import React from "react";
import BoardColumnComponent from "./BoardColumnComponent";
import NavbarComponent from "./NavbarComponent";

function BoardComponent(props) {

    return(
        <div>
            <NavbarComponent/>
            <div className="board">
                <BoardColumnComponent
                    title="Open"
                    //data={props.openData}
                      data={props.data}/>
                <BoardColumnComponent
                    title="In Progress"
                    //data={props.inProgressData}/>
                    data={props.data}/>
                <BoardColumnComponent
                    title="Under Review"
                    //data={props.underReviewData}/>
                    data={props.data}/>
                <BoardColumnComponent
                    title="Complete"
                    //data={props.completeData}/>
                    data={props.data}/>
            </div>
        </div>
    )

}

export default BoardComponent