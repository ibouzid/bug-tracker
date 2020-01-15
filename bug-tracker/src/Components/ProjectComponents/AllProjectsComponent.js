import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import ProjectCardComponent from "./ProjectCardComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import PaginationComponent from "../Helpers/PaginationComponent";


function AllProjectsComponent() {

    const [projects, setProjects] = useState([]);
    const [projectsPerPage] = useState(9);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const indexOfLastPage = currentPageNumber * projectsPerPage;
    const indexOfFirstPage = indexOfLastPage - projectsPerPage;
    const projectsOnCurrentPage = projects.slice(indexOfFirstPage, indexOfLastPage);
    const history = useHistory();

    function handlePageClick(number){
        setCurrentPageNumber(number);
    }
    const jwt = GetValueFromLocalStorage("token");

    useEffect(()=>{
        fetch("http://localhost:5000/projects",
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
                }}).catch(err=>console.log(err));;
    },[jwt, history])


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
            <div className="board row">
                <PaginationComponent  totalItems={projects.length} itemsPerPage ={projectsPerPage} handlePageClick={handlePageClick} />
            </div>
        </div>

    )

}

export default AllProjectsComponent