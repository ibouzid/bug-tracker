import React, {useEffect, useState} from "react"
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import TokenExpirationInMinutes from "../Helpers/TokenExpirationInMinutes";
import {Link} from "react-router-dom";

function MyProjectsComponent(props) {

    const userId = JSON.parse(GetValueFromLocalStorage("user"))[0].userId
    const token = GetValueFromLocalStorage("token")
    const [jwt] = useState(token)
    const [projects, setProjects] = useState([])
    TokenExpirationInMinutes()

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${userId}/projects`,
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setProjects(data.data)});
    },[])
    return(
        <div>
            <NavbarComponent/>
            <div className="row">
                <h1 className="board col-6">My Projects</h1>
                <Link to="/projects/add">
                    <button className="board btn-primary"> Add Project</button>
                </Link>
            </div><br/>

            <div className="board row">
                <ProjectCardComponent data={projects}/>
            </div>
        </div>
    )

}

export default MyProjectsComponent