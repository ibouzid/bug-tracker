import React, {useState} from "react";
import IssueCardComponent from "./IssueCardComponent";
import PaginationComponent from "../Helpers/PaginationComponent";

function IssuesByStatusComponent(props) {

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [issuesPerPage] = useState(9);
    const indexOfLastPage = currentPageNumber * issuesPerPage;
    const indexOfFirstPage = indexOfLastPage - issuesPerPage;
    const issuesOnCurrentPage = props.issues.slice(indexOfFirstPage, indexOfLastPage);

    function handlePageClick(number){
        setCurrentPageNumber(number);
    }

if(props.issues!==0){
    return(
        <div className="container">
            <div className="row ml-2">
                {(issuesOnCurrentPage.length>0) ? <h3>{props.title}</h3> : <></>}

            </div>
            <div className="row">
                <IssueCardComponent data={issuesOnCurrentPage}/>
            </div>
            <div className="ml-2">
                <PaginationComponent  totalItems={props.issues.length} itemsPerPage ={issuesPerPage} handlePageClick={handlePageClick} />
            </div>
        </div>

    )
} else{
    return <div>No {props.title} Issues</div>
}


}
export default IssuesByStatusComponent