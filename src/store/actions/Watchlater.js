export const watchlater = (data) =>{
    console.log('added to watch later through action', data)
    return {
        type: 'add_to_watchlater',
        data
    }
}