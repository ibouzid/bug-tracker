import React, {useEffect, useState} from "react";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../NavbarComponent";


function ProjectsComponent() {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/projects")
            .then(response =>  response.json())
            .then(data => {setProjects(data.data)});
    },[])


    return(
        <div>
            <NavbarComponent/>
            <div className="board row">
                <ProjectCardComponent data={projects}/>
            </div>
        </div>

    )

}

export default ProjectsComponent