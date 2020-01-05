import React from "react"
import {Link} from "react-router-dom";

function UserCardComponent(props) {
    if(props.data != null){
        let data = props.data.map(item=>{
            return(
                <Link key={item.userId} className="col-3" to={`/users/${item.userId}`}>
                    <div value={item.userId} >
                        <div className="card">
                            <div className="card-body row">
                                <h5 className="card-title col-12">{item.firstName} {item.lastName}</h5>
                                <p className="card-text col-12">UserName: {item.userName}</p>
                                <p className="card-text col-6">Role: {item.role}</p>
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
export default UserCardComponent