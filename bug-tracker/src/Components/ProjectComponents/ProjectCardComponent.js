import React, {useState} from "react";
import {Link} from "react-router-dom";

function ProjectCardComponent(props) {

    if(props.data != null){
        let data = props.data.map(item=>{
            return(
                <div className="col-3">
                         <div value={item.projectId} >
                            <div className="card">
                                <div className="card-body row">
                                    <Link to={`/projects/${item.projectId}/${item.projectName}`}>
                                    <h3 className="card-title col-12">{item.projectName}</h3>
                                    </Link>
                                    <p className="card-text col-12 card-description"> {item.projectDescription}</p>
                                    <p className="col-6">Created: {item.createDate}</p>
                                    <p className="col-6">Project Manager: {item.projectManager}</p>
                                </div>
                                <div>
                                    <Link>
                                        <button className="col-6 btn-outline-secondary">Edit</button>
                                    </Link>

                                    <Link to={{pathname: `/projects/${item.projectId}/delete`, state:{projectName: item.projectName}}}>
                                        <button className="col-6 btn-danger">Delete</button>
                                    </Link>
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
            <div className="display-2">No Data</div>
        )
    }

}

export default ProjectCardComponent