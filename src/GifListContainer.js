import React from "react"
import GifSearch from "./GifSearch.js"
import GifList from "./GifList.js"


class GifListContainer extends React.Component {
  state = {
    gifs: [],
    input: ""
  }

  fetchGifs = (input) => (
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(gifs => this.handleResponse(gifs))
  )

  handleResponse = (gifs) => {
    // console.log(gifs.data.slice(0, 3))
    let popularGifs = gifs.data.slice(0, 18)

    this.setState({
      gifs: [...popularGifs],
      input: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
    // console.log(event.target.value)
  }

  handleSubmit = (event) => {
    // console.log(event)
    event.preventDefault()

    this.fetchGifs(this.state.input)
  }


  render(){
    return(
      <div>
        <GifSearch
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          input={this.state.input}
          />
        <GifList
          gifs={this.state.gifs}
          />
      </div>
    )
  }
}


export default GifListContainer
