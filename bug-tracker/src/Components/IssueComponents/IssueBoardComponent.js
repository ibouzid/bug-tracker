import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import IssueBoardColumnComponent from "./IssueBoardColumnComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function IssueBoardComponent() {

    const [issues, setIssues] = useState([])
    const params = useParams()
    const jwt = GetValueFromLocalStorage("token")

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${params.projectId}/issues`,
                {headers: {authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setIssues(data.data)});

    },[])


        return(
            <div>
                <NavbarComponent/>
                    <div className="board">
                        <Link to={{pathname:"/add", state: {projectId: params.projectId}}}>
                            <button className="board btn-primary add-issue"> Add Issue</button>
                        </Link>


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