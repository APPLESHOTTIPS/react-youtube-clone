export const WISHLIST="WISHLIST"


export function addWishList(payload){
   
    return {
        type:'WISHLIST',
        payload
    }
}