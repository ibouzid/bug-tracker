import React from "react"

function IssueCardComponent(props){
    if(props.data != null){
        let data = props.data.map(item=>{
            return(
                <div className="col-4" key={item.issueId} value={item.issueId} >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title row">{item.projectName}</h5>
                            <p className="card-text row">{item.description}</p>
                            <div className="row">
                                <p className="col-1">{item.severity}</p>
                                <p className="col-1">{item.status}</p>
                            </div>
                            <div className="row">
                                <p className="col-1">{item.points}</p>
                                <p className="col-1">{item.assignedTo}</p>
                            </div>
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