import React, {useEffect, useState} from "react"
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import TokenExpirationInMinutes from "../Helpers/TokenExpirationInMinutes";

function MyProjectsComponent() {

    const userId = JSON.parse(GetValueFromLocalStorage("user"))[0].userId
    const jwt = GetValueFromLocalStorage("token")
    const [projects, setProjects] = useState([])
    TokenExpirationInMinutes(30)


    useEffect(()=>{
        fetch(`http://localhost:5000/users/${userId}/projects`,
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setProjects(data.data)});
    },[])
console.log(projects)
    return(
        <div>
            <NavbarComponent/>
            <h1 className="board">Projects</h1><br/>
            <div className="board row">
                <ProjectCardComponent data={projects}/>
            </div>
        </div>
    )

}

export default MyProjectsComponent