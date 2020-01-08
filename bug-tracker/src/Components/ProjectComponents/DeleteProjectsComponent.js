import React from "react"
import {useParams, useHistory} from "react-router-dom"

function DeleteProjectsComponent(props) {
    const params = useParams()
    const history = useHistory()

    function handleSubmit() {

         fetch("http://localhost:5000/projects", {
            method: 'DELETE',
            body: JSON.stringify({projectId:params.projectId}),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(res => console.log(res))
        history.push("/home")
    }
    function handleCancel() {
        history.push("/allProjects")
    }
    return(
        <form>
            <div className="text-center delete-confirmation">
                <h1> Are you sure you want to delete {props.location.state.projectName}?</h1>
                <button className="btn-danger" onSubmit={handleSubmit}>Yes</button>
                <button className="btn-primary" onClick={handleCancel}>No</button>
            </div>

        </form>
    )

}

export default DeleteProjectsComponent