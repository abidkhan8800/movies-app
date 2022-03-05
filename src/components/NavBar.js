import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav">
          <div className="search-container">
              <input />
              <button id="search-btn">search</button>
          </div>
      </div>
    )
  }
}
