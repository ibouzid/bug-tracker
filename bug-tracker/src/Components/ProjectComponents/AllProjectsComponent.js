import React, {useEffect, useState} from "react";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import TokenExpiration from "../Helpers/TokenExpirationInMinutes";


function AllProjectsComponent() {

    const [projects, setProjects] = useState([])
    const jwt = GetValueFromLocalStorage("token")
    TokenExpiration(30)

    useEffect(()=>{
        fetch("http://localhost:5000/projects",
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setProjects(data.data)});
    },[])


    return(
        <div>
            <NavbarComponent/>
            <div className="row">
                <h1 className="board col-6">Projects</h1>
                <button className="board btn-primary"> Add Project</button>

            </div><br/>

            <div className="board row">
                <ProjectCardComponent data={projects}/>
            </div>
        </div>

    )

}

export default AllProjectsComponent