import React, {useEffect, useState} from "react";
import BoardColumnComponent from "./BoardColumnComponent";
import NavbarComponent from "./NavbarComponent";

function BoardComponent(props) {

    return(
        <div>
            <NavbarComponent/>
            <div className="board">
                <BoardColumnComponent
                    title="Open"
                     data={props.data.filter(item=>item.status =="open")}/>
                <BoardColumnComponent
                    title="In Progress"
                    data={props.data.filter(item=>item.status == "inProgress")}/>
                <BoardColumnComponent
                    title="Under Review"
                    data={props.data.filter(item=>item.status == "underReview")}/>
                <BoardColumnComponent
                    title="Complete"
                    data={props.data.filter(item=>item.status == "completed")}/>
            </div>
        </div>
    )

}

export default BoardComponent