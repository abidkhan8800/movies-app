import React from 'react';

import { data } from './data';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import { addMovies, setActiveTab } from './actions';
import {connect} from 'react-redux';

class App extends React.Component { 

  componentDidMount() {
    const { dispatch } = this.props;
    // make api call
    // dispatch action to
    dispatch(addMovies(data))
  }

  isMovieFavourite = (movie) =>{
    const { movies } = this.props
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }

    return false
  }

  activeTab = (e) =>{
    const {dispatch} = this.props;
    dispatch(setActiveTab(e.target.innerHTML));
  }
  render(){
    console.log("RENDER", this.props)

    const { movies, search } = this.props;
    const list = movies.activeTab === "Movies" ?  movies.list : movies.favourites;
    return (
      <div className="App">
        <NavBar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${movies.activeTab === "Movies" ? 'active-tabs': ""}`} onClick={this.activeTab}>Movies</div>
            <div className={`tab ${movies.activeTab === "Favourites" ? 'active-tabs': ""}`} onClick={this.activeTab}>Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, ind)=>(
              <MovieCard key={ind} movie={movie} dispatch={this.props.dispatch}
              isFavourite={this.isMovieFavourite(movie)}/>
            ))}
          </div>
  
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render(){
//     return(
//     <StoreContext.Consumer>
//       {(store)=> <App store={store}/>}
//     </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App)
export default connectedAppComponent;
