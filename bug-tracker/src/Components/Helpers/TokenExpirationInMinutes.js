import GetValueFromLocalStorage from "./GetValueFromLocalStorage";

import { useHistory} from "react-router-dom";

export default function TokenExpirationInMinutes() {

    const history = useHistory();

    //Time in minutes before auth token is removed from local storage
    const sessionTime = 30;

    if(Date.now() - GetValueFromLocalStorage("timeStamp") > sessionTime*60000){
        localStorage.clear();
        history.push("/logout");
    }
}