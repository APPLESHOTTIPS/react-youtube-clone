const reducer = (data=[], action)=>{
    console.log(action.type)
    switch(action.type){
        case "LIKE_VIDEO":
            return [...data, action.payload]
        default:
            return data
    }
}

export default reducer;