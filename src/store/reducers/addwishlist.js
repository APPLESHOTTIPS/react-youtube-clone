import { WATCHLIST } from "../actions/addwishlist";

const initialState = {
   wishlists:[],
}

export default function(state = initialState,action){
    switch (action.type) {
        case WATCHLIST:
         console.log("actionData",action.payload)
            let data=action.payload
            let wishlists=[...state.wishlists,data]
            localStorage.setItem("videos",JSON.stringify(wishlists))
            return {wishlists}
    
        default:
            return {...state}
    }
}

export const getwishlists = (state) => state.wishlists.wishlists.length
