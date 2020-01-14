function handleSelect(event, setFunction){

    const options = event.target.options

    Array.prototype.forEach.call(options, (option)=>{
        if(option.selected){
            setFunction(option.value)
        }
    });

}
export default handleSelect