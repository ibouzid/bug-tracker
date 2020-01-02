import GetValueFromLocalStorage from "./GetValueFromLocalStorage";

import { useHistory} from "react-router-dom";

export default function TokenExpiration(time) {
    const history = useHistory()
    if(Date.now() - GetValueFromLocalStorage("timeStamp") > time){
        localStorage.clear()
        history.push("logout")
    }
}