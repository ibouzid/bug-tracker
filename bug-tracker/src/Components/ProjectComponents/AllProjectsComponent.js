import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import TokenExpirationInMinutes from "../Helpers/TokenExpirationInMinutes";
import PaginationComponent from "../Helpers/PaginationComponent";


function AllProjectsComponent() {

    const [projects, setProjects] = useState([]);
    const [projectsPerPage] = useState(9);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const indexOfLastPage = currentPageNumber * projectsPerPage;
    const indexOfFirstPage = indexOfLastPage - projectsPerPage;
    const projectsOnCurrentPage = projects.slice(indexOfFirstPage, indexOfLastPage);

    function handlePageClick(number){
        setCurrentPageNumber(number);
    }
    const jwt = GetValueFromLocalStorage("token");
    TokenExpirationInMinutes();

    useEffect(()=>{
        fetch("http://localhost:5000/projects",
            {headers:{authorization: `Bearer ${jwt}`}})
            .then(response =>  response.json())
            .then(data => {setProjects(data.data)});
    },[jwt])


    return(
        <div>
            <NavbarComponent/>
            <div className="row">
                <h1 className="board col-6">All Projects</h1>
                <Link to="/projects/add">
                    <button className="board btn-primary"> Add Project</button>
                </Link>

            </div><br/>

            <div className="board row">
                <ProjectCardComponent data={projectsOnCurrentPage}/>
            </div>
            <div className="board">
                <PaginationComponent  totalIssues={projects.length} issuesPerPage ={projectsPerPage} handlePageClick={handlePageClick} />
            </div>
        </div>

    )

}

export default AllProjectsComponent