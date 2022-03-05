
// {
//     type: ADD_MOVIES;
//     movie: [m1, m2, m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const ACTIVE_TAB = "ACTIVE_TAB";

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