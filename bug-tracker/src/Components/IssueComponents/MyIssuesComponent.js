import React, {useContext, useEffect, useState} from "react";
import GetValueFromLocalStorage from "../Helpers/GetValueFromLocalStorage";
import NavbarComponent from "../MainComponents/NavbarComponent";
import { useHistory} from "react-router-dom";
import PaginationComponent from "../Helpers/PaginationComponent";
import IssueCardsComponent from "./IssueCardsComponent";
import {UserContext} from "../Helpers/UserContextProvider";

function MyIssuesComponent() {

    const token = GetValueFromLocalStorage("token");
    const [jwt] = useState(token);
    const [issues, setIssues] = useState([]);
    const history = useHistory();
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [issuesPerPage] = useState(9);
    const indexOfLastPage = currentPageNumber * issuesPerPage;
    const indexOfFirstPage = indexOfLastPage - issuesPerPage;
    const issuesOnCurrentPage = issues.slice(indexOfFirstPage, indexOfLastPage);
    const {user} = useContext(UserContext);

    useEffect(()=>{

        fetch(`http://localhost:5000/users/${user[0].userId}/issues`,
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
                setIssues(data.data)
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
                <h1 className="board col-6">My Issues</h1>
            </div><br/>

            <div className="board row">
                <IssueCardsComponent data={issuesOnCurrentPage}/>
            </div>
            <div className="board p-3 row">
                <PaginationComponent  totalItems={issues.length} itemsPerPage ={issuesPerPage} handlePageClick={handlePageClick} />
            </div>
        </div>
    )

}

export default MyIssuesComponent