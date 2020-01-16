import React from "react"
import {useParams, useHistory} from "react-router-dom"
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";

function DeleteProjectsComponent(props) {
    const params = useParams();
    const history = useHistory();
    const jwt = GetValueFromLocalStorage("token");
    const DELETE_PROJECT_URL = "http://localhost:5000/projects";

    function handleClick() {

         fetch(DELETE_PROJECT_URL, {
            method: 'DELETE',
            body: JSON.stringify({projectId:params.projectId}),
            headers : {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
             if (response.status >= 200 && response.status <=299) {
                 return response.json();
             } else {
                 localStorage.clear();
                 history.push("/logout");
                 return null;
             }
         }).then(res => console.log(res))
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