function handleChange(event, options){

    const [name, setFunction] = options

    if(event.target.id === name){
        setFunction(event.target.value)
    }

}
export default handleChange