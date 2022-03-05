
// {
//     type: ADD_MOVIES;
//     movie: [m1, m2, m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const ACTIVE_TAB = "ACTIVE_TAB";
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';

// actions creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
} 

export function addFavourites(movie){
    return {
        type: ADD_FAVOURITE,
        movie
    }
} 

export function removeFavourites(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
} 

export function setActiveTab(tab){
    return {
        type: ACTIVE_TAB,
        tab
    }
} 


export function addMoviesToList(movie){
    return {
        type: ADD_MOVIES_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${movie}`;
    return function (dispatch){
        fetch(url).then(response => response.json()).then(movie => {
            console.log("movie",movie)

            // dispatch the actions
            dispatch(addMovieSearchResult(movie))
        })
    }
}

export function addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}