import React from "react";
import {Link} from  "react-router-dom";

function IssueCardComponent(props){

    if(props.data != null){
        let data = props.data.map(item=>{
            let severityClass ="";
            switch(item.severity) {
                case "low":
                    severityClass = "badge-info";
                    break;
                case "medium":
                    severityClass = "badge-warning";
                    break;
                case "high":
                    severityClass = "badge-danger";
                    break;
                default:
                    severityClass = "";
            }

            return(

                    <div className="col-4" key={item.issueId} value={item.issueId} >
                        <div className="card issue-card">
                            <div className="card-body row">
                                <Link className="card-body row" to={`/projects/${item.projectId}/issues/${item.issueId}`}>
                                    <h5 className="card-title col-12">{item.title}</h5>
                                </Link>
                                <div className="row ml-1">
                                    <p className={`col-6 ${severityClass}`}><i className="mt-2 fas fa-exclamation-triangle issue-icon"></i>Severity: {item.severity}</p>
                                    <p className="col-6"><i className="fas fa-ticket-alt issue-icon"></i>Ticket Type: {item.ticketType}</p>
                                    <p className="col-6"><i className="fas fa-hand-point-right issue-icon"></i>Points: {item.points}</p>
                                    <p className="col-6"><i className="fas fa-edit issue-icon"></i>Last Updated: {item.lastUpdated}</p>
                                </div>

                            </div>
                        </div>
                    </div>


            )

        });

        return(data);
    }
    else{
        return(
            <div className="display-2">No Data</div>
        )
    }
}

export default IssueCardComponent