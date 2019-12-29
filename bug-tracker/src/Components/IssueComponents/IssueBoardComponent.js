import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import IssueBoardColumnComponent from "./IssueBoardColumnComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";

function IssueBoardComponent() {

    const [issues, setIssues] = useState([])
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${params.projectId}/issues`)
            .then(response =>  response.json())
            .then(data => {setIssues(data.data)});

    },[])

        return(
            <div>
                <NavbarComponent/>
                    <div className="board">

                            <IssueBoardColumnComponent
                                title="Open"
                                issues={issues.filter(item=>item.status==="open")}/>

                            <IssueBoardColumnComponent
                                title="In Progress"
                                issues={issues.filter(item=>item.status==="inProgress")}/>

                            <IssueBoardColumnComponent
                                title="Under Review"
                                issues={issues.filter(item=>item.status ==="underReview")}/>

                            <IssueBoardColumnComponent
                                title="Complete"
                                issues={issues.filter(item=>item.status==="completed")}/>

                    </div>

            </div>
        )



}

export default IssueBoardComponent