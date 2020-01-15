import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import IssueCardsComponent from "./IssueCardsComponent";
import PaginationComponent from "../Helpers/PaginationComponent";
import NavbarComponent from "../MainComponents/NavbarComponent";

function AllIssuesComponent() {

    const jwt = GetValueFromLocalStorage("token");
    const [issues, setIssues] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [issuesPerPage] = useState(9);
    const indexOfLastPage = currentPageNumber * issuesPerPage;
    const indexOfFirstPage = indexOfLastPage - issuesPerPage;
    const issuesOnCurrentPage = issues.slice(indexOfFirstPage, indexOfLastPage);
    const history = useHistory();

    function handlePageClick(number){
        setCurrentPageNumber(number);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/issues`,
            {headers: {authorization: `Bearer ${jwt}`}})
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
                setIssues(data.data);
            }
        }).catch(err=>console.log(err));

    },[jwt]);

    return(
        <div>
            <NavbarComponent/>
            <h1 className="board pl-4">All Issues</h1>
            <div className="board row">
                <IssueCardsComponent data={issuesOnCurrentPage}/>
                <div className="ml-2">
                    <PaginationComponent  totalItems={issues.length} itemsPerPage ={issuesPerPage} handlePageClick={handlePageClick} />
                </div>
            </div>
        </div>

    )

}

export default AllIssuesComponent