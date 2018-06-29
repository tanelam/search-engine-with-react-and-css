import React, { Component } from 'react';
import GifListContainer from "./GifListContainer.js"

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Search for your fav Gif's</h1>
        <GifListContainer/>
      </div>
    );
  }
}

export default App;
