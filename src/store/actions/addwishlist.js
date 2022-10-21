export const WISHLIST="WISHLIST"


export function addWishList(payload={}){
   console.log("payload",payload)
    return {
        type:'WISHLIST',
        payload
    }
}