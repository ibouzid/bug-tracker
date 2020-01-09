import GetValueFromLocalStorage from "./GetValueFromLocalStorage";

import { useHistory} from "react-router-dom";

export default function TokenExpirationInMinutes() {

    const history = useHistory()
    //first number is the number of minutes it will allow a user to stay logged in before expiring
    if(Date.now() - GetValueFromLocalStorage("timeStamp") > 100*60000){
        localStorage.clear()
        history.push("logout")
    }
}