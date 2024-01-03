export const watchlater = (data = [], action) =>{
    console.log('reducer called', action)
    switch(action.type){
        case 'add_to_watchlater':
            console.log('added to watch later from reducer ', action.data)
            return [action.data, ...data];
        default :
            return ''
    }
    return "";
}