export const WATCHLIST="WATCHLIST"
export function addWishList(payload={}){
   console.log("payload",payload)
    return {
        type:'WATCHLIST',
        payload
    }
}