import React from "react"
import {Link} from  "react-router-dom";

function IssueCardComponent(props){
    if(props.data != null){
        let data = props.data.map(item=>{
            return(
                <Link className="card-body" to={`/issues/${item.issueId}`}>
                    <div className="col-3" key={item.issueId} value={item.issueId} >
                        <div className="card">
                            <div className="card-body row">
                                <h5 className="card-title col-12">{item.projectName}</h5>
                                <p className="card-text col-12">{item.title}</p>
                                <p className="col-6">Severity: {item.severity}</p>
                                <p className="col-6">Ticket Type: {item.ticketType}</p>
                                <p className="col-6">Points: {item.points}</p>
                                <p className="col-6">Last Updated: {item.lastUpdated}</p>
                            </div>
                        </div>
                    </div>
                </Link>

            )

        })

        return(data)
    }
    else{
        return(
            <div className="display-2">No Data</div>
        )
    }
}

export default IssueCardComponent