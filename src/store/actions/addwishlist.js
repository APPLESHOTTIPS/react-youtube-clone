export const WISHLIST="WISHLIST"


export function AddWishList(payload){
   
    return {
        type:'WISHLIST',
        payload
    }
}