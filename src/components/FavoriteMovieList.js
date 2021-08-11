import React from 'react';
import {connect} from "react-redux"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteFavorite  } from '../actions/favoriteActions';

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const { id } = useParams();
    const deleteFav = (id) => props.deleteFavorite(parseInt(id));
    console.log(id)
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={deleteFav}class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state)=> {
    return({
        favorites: state.favoritesReducer.favorites,
    })
}

export default connect(mapStateToProps, { deleteFavorite })(FavoriteMovieList);