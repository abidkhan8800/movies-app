import React from 'react';

import { data } from './data';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import { addMovies, setActiveTab } from './actions';

class App extends React.Component { 

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(()=>{
      console.log('updated')
      this.forceUpdate();
    })
    // make api call
    // dispatch action to
    store.dispatch(addMovies(data))
  }

  isMovieFavourite = (movie) =>{
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }

    return false
  }

  activeTab = (e) =>{
    console.log(e.target.innerHTML)
    const {store} = this.props;

    store.dispatch(setActiveTab(e.target.innerHTML));
  }
  render(){
    console.log("RENDER", this.props.store.getState())

    const { movies } = this.props.store.getState();
    const list = movies.activeTab === "Movies" ?  movies.list : movies.favourites;
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${movies.activeTab === "Movies" ? 'active-tabs': ""}`} onClick={this.activeTab}>Movies</div>
            <div className={`tab ${movies.activeTab === "Favourites" ? 'active-tabs': ""}`} onClick={this.activeTab}>Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, ind)=>(
              <MovieCard key={ind} movie={movie} dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}/>
            ))}
          </div>
  
        </div>
      </div>
    );
  }
}

export default App;
