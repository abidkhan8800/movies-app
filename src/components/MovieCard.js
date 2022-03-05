import React, { Component } from 'react';
import { addFavourites,removeFavourites } from '../actions'

export default class MovieCard extends Component {
  handleFavouriteClick = () =>{
      console.log("Hello World")
      const {movie} = this.props;
      console.log("dispatched return", this.props.dispatch(addFavourites(movie)))
  }
  handleUnfavouriteClick = () => {
    console.log("Hello World")
    const {movie} = this.props;
   console.log("dispatched return", this.props.dispatch(removeFavourites(movie)))
  }
  render() {
    const { movie, isFavourite } = this.props;
    return (
        <div className="movie-card">
            <div className="left">
                <img alt="movie-poster" src={movie.Poster}/>
            </div>
            <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {isFavourite ? 
                    <button className="unfavourite-btn" onClick={this.handleUnfavouriteClick}>Unfavourites</button> :
                    <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourites</button>
                    }
                </div>
            </div>
        </div>
    )
  }
}
