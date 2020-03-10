
//function to retrieve information saved in local storage

export default function GetValueFromLocalStorage(key) {

    return localStorage.getItem(key);

}