import React from "react";
import BoardColumnComponent from "./BoardColumnComponent";
import NavbarComponent from "../NavbarComponent";

function BoardComponent(props) {

    return(
        <div>
            <NavbarComponent/>
            <div className="board">

                {(props.data.filter(item=>item.status =="open").length>0)?
                    <BoardColumnComponent
                        title="Open"
                        data={props.data.filter(item=>item.status =="open")}/> : <></>}

                {(props.data.filter(item=>item.status =="inProgress").length>0)?
                    <BoardColumnComponent
                        title="In Progress"
                        data={props.data.filter(item=>item.status == "inProgress")}/> : <></>}

                {(props.data.filter(item=>item.status =="inProgress").length>0)?
                    <BoardColumnComponent
                        title="In Progress"
                        data={props.data.filter(item=>item.status == "inProgress")}/> : <></>}

                {(props.data.filter(item=>item.status =="completed").length>0)?
                    <BoardColumnComponent
                        title="Complete"
                        data={props.data.filter(item=>item.status == "completed")}/> : <></>}

            </div>
        </div>
    )

}

export default BoardComponent