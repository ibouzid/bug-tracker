import React from "react"

function IssueCardComponent(props){
    if(props.data != null){
        let data = props.data.map(item=>{
            return(
                <div className="col-3" key={item.issueId} value={item.issueId} >
                    <div className="card">
                        <div className="card-body row">
                            <h5 className="card-title col-12">{item.projectName}</h5>
                            <p className="card-text col-12">Description: {item.issueTitle}</p>
                                <p className="col-6">Severity: {item.severity}</p>
                                <p className="col-6">Ticket Type: {item.ticketType}</p>
                                <p className="col-6">Points: {item.points}</p>
                                <p className="col-6">Last Updated: {item.lastUpdated}</p>
                        </div>
                    </div>
                </div>
            )

        })

        return(data)
    }
    else{
        return(
            <div>no data</div>
        )
    }
}

export default IssueCardComponent