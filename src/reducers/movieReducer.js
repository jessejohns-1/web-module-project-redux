import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_MOVIE:
                return{//spread operator to save movies array and adds the new movie to the end of the existing array.
                    movies:[...state.movies,{
                        id: state.movies.length,// adds id based on length
                        title:action.payload.title,
                        director:action.payload.director,
                        genre:action.payload.genre,
                        metascore:action.payload.metascore,
                        description:action.payload.description
                        
                    }]
                    }
                    default:
                        return state;
                    }
                }
                
                export default reducer;