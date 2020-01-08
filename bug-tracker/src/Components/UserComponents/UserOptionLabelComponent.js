import React from "react"
import {Link} from "react-router-dom";

function UserOptionLabelComponent(props) {

    if(props.data != null){
        let data = props.data.map(item=>{
            return(
                    <div value={item.projectId} >
                        <div className="card">
                            <div className="card-body row">
                                <h5 className="card-title col-12">{item.projectName}</h5>
                                <p className="card-text col-12"> {item.projectDescription}</p>
                                <p className="col-6">Created: {item.createDate}</p>
                                <p className="col-6">Project Manager: {item.projectManager}</p>
                            </div>
                        </div>
                    </div>

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
export default UserOptionLabelComponent