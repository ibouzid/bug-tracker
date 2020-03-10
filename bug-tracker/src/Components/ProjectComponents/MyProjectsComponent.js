import React, { useEffect, useState} from "react";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import {Link, useHistory} from "react-router-dom";
import PaginationComponent from "../Helpers/PaginationComponent";

function MyProjectsComponent() {

    const token = GetValueFromLocalStorage("token");
    const [jwt] = useState(token);
    const [projects, setProjects] = useState([]);
    const history = useHistory();
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [projectsPerPage] = useState(9);
    const indexOfLastPage = currentPageNumber * projectsPerPage;
    const indexOfFirstPage = indexOfLastPage - projectsPerPage;
    const projectsOnCurrentPage = projects.slice(indexOfFirstPage, indexOfLastPage);
    const user = JSON.parse(localStorage.getItem("user"));
    const GET_USER_PROJECT_URL = `http://localhost:5000/users/${user[0].userId}/projects`;

    console.log(user[0].userId)
    console.log(user[0])
    useEffect(()=>{

        fetch(GET_USER_PROJECT_URL,
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response => {
                if (response.status >= 200 && response.status <=299) {
                    return response.json();
                } else {
                    localStorage.clear();
                    history.push("/logout");
                    return null;
                }
            }).then(data => {
                if(data){

                    setProjects(data.data)
                }
            }).catch(err=>console.log(err));
    },[jwt, history]);

    function handlePageClick(number){
        setCurrentPageNumber(number);
    }

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
                    <ProjectCardComponent data={projectsOnCurrentPage}/>
                </div>
                <div className="board p-3 row">
                    <PaginationComponent  totalItems={projects.length} itemsPerPage ={projectsPerPage} handlePageClick={handlePageClick} />
                </div>
            </div>
        )

}

export default MyProjectsComponent