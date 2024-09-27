


const initialState = {
    favorites:[],
    displayFavorites:false,
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
            case "ADD_FAVORITE":
            return({...state,
                favorites: [...state.favorites, action.payload]
                
            })
            case "DELETE_FAVORITE":
            return {...state.favoritesReducer,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
            
                    default:
                        return state;
                    }
                }
                
                export default favoritesReducer;