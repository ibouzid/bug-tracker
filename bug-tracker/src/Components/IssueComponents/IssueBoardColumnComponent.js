import React, {useState, useEffect} from "react";
import IssueCardComponent from "./IssueCardComponent";
import PaginationComponent from "../Helpers/PaginationComponent";

function IssueBoardColumnComponent(props) {

    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [issuesPerPage] = useState(6)
    const indexOfLastPage = currentPageNumber * issuesPerPage
    const indexOfFirstPage = indexOfLastPage - issuesPerPage
    const issuesOnCurrentPage = props.issues.slice(indexOfFirstPage, indexOfLastPage)

    function handlePageClick(number){
        setCurrentPageNumber(number)
    } console.log(currentPageNumber)

if(props.issues!=0){
    return(
        <div className="container">
            <div className="row ml-2">
                <h3>{props.title}</h3>
            </div>
            <div className="row">
                <IssueCardComponent data={issuesOnCurrentPage}/>
            </div>
            <div className="ml-2">
                <PaginationComponent  totalIssues={props.issues.length} issuesPerPage ={issuesPerPage} handlePageClick={handlePageClick} />
            </div>
        </div>

    )
} else{
    return <div>No {props.title} Issues</div>
}


}
export default IssueBoardColumnComponent