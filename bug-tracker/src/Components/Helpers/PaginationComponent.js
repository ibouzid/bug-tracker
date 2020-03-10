import React from "react";

function PaginationComponent(props) {

    //page buttons for pagination depending on how many items are on each page
    let pages = [];
    for(let i = 1; i<= Math.ceil(props.totalItems/props.itemsPerPage); i++){
        pages.push(i);
    }

    return(
        <nav>
            <ul className="pagination row m-2 pt-5 pb-5">
                {pages.map(pageNumber=> (
                    <li key={pageNumber} className="page-btn">
                         <button className="page-link page-box" onClick={()=>props.handlePageClick(pageNumber)}>{pageNumber}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default PaginationComponent