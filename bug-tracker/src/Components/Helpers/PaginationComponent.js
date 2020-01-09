import React,{useState} from "react"

function PaginationComponent(props) {
    let pages = []

    for(let i = 1; i<= Math.ceil(props.totalIssues/props.issuesPerPage); i++){
        pages.push(i)
    }


    return(
        <nav>
            <ul className="pagination">
            {pages.map(pageNumber=> (
                <li key={pageNumber} className="page-item">
                    <a className="page-link" onClick={()=>props.handlePageClick(pageNumber)}>{pageNumber}</a>
                </li>
            ))}

        </ul>

        </nav>

    )

}
export default PaginationComponent