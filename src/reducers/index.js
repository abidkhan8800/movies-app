import {combineReducers} from 'redux';
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, ACTIVE_TAB } from '../actions'
const initialMoviesState = {
    list: [],
    favourites:[],
    activeTab: "Movies"
}
export function movies (state=initialMoviesState, action) {
    console.log("MOVIES REDUCER")
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter((m)=> m !== action.movie)
            }
        case ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.tab
            }
        default:
            return state
    }
}

const initialSearchState = {
    result: {}
}

export function search(state=initialSearchState, action){
    console.log('SEARCH REDUCER');
    return state;
}

// const initialRootState ={
//     movies: initialMoviesState,
//     search: initialSearchState
// }

// export default function rootReduc(state=initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
})