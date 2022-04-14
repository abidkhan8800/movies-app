import React, { Component } from 'react';
// import { StoreContext } from '../';
import { handleMovieSearch,addMoviesToList } from '../actions';
import {connect} from 'react-redux';


class NavBar extends Component {

  constructor(props){
    super(props);
    this.state= {
      showSearchResults: false,
      searchText: ""
    }
  }

  handleAddToMovies = (movie) =>{
    this.props.dispatch(addMoviesToList(movie));
    this.setState({showSearchResults: false, searchText:''})
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  handleSearch = () =>{
    this.props.dispatch(handleMovieSearch(this.state.searchText))
    this.setState({
      showSearchResults: true
    })
  }

  render() {
    const {result} = this.props.search;
    return (
      <div className="nav">
          <div className="search-container">
              <input onChange={this.handleChange} value={this.state.searchText}/>
              <button id="search-btn" onClick={this.handleSearch}>search</button>
             { this.state.showSearchResults && <div className="search-results">
                <div className="search-result">
                  <img src={result.Poster} alt="search-pic"/>
                  <div className="movie-info">
                    <span>{result.Title}</span>
                    <button onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                  </div>
                </div>
              </div> }
          </div>
      </div>
    )
  }
}

// export default class NavBarWrapper extends React.Component {
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store) => <NavBar dispatch={store.dispatch} search={this.props.search}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }


function mapStateToProps({search}){
  return {
    search
  }
}

const connectedAppComponent = connect(mapStateToProps)(NavBar)
export default connectedAppComponent;
