import { WISHLIST } from "../actions/addwishlist";

const initialState = {
   wishlists:[],
}

export default function(state = initialState,action){
    switch (action.type) {
        case WISHLIST:
            state.wishlists.push(action.payload); 
            
            return state
            
    
        default:
            return state
    }
}

