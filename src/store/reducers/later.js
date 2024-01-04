const reducer = (data=[], action)=>{
    console.log(action.type)
    switch(action.type){
        case "WATCH_LATER":
            return [...data, action.payload]
        default:
            return data
    }
}

export default reducer;