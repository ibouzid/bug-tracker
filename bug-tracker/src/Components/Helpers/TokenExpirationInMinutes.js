import GetValueFromLocalStorage from "./GetValueFromLocalStorage";

import { useHistory} from "react-router-dom";

export default function TokenExpirationInMinutes(time) {

    const history = useHistory()
    if(Date.now() - GetValueFromLocalStorage("timeStamp") > time*60000){
        localStorage.clear()
        history.push("logout")
    }
}