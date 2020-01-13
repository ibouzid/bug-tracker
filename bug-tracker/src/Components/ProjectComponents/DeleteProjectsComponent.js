import React from "react"
import {useParams, useHistory} from "react-router-dom"
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function DeleteProjectsComponent(props) {
    const params = useParams();
    const history = useHistory();
    const jwt = GetValueFromLocalStorage("token");

    function handleClick() {

         fetch("http://localhost:5000/projects", {
            method: 'DELETE',
            body: JSON.stringify({projectId:params.projectId}),
            headers : {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
             .then(res => console.log(res))
             .catch(err=>console.log(err));
        history.push("/projects/all")
    }
    function handleCancel() {
        history.push("/projects/all")
    }
    return(
            <div className="text-center delete-confirmation">
                <h1> Are you sure you want to delete {props.location.state.projectName}?</h1>
                <button className="btn-danger" onClick={handleClick}>Yes</button>
                <button className="btn-primary" onClick={handleCancel}>No</button>
            </div>

    )

}

export default DeleteProjectsComponent