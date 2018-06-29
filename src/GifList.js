import React from "react"

class GifList extends React.Component{

  renderGifs = () => this.props.gifs.map( gif => (
     // console.log("id:", gif.id)
    <img className="image" alt="" key={gif.id} src={"https://media.giphy.com/media/"+gif.id+"/giphy.gif"}></img>
  ))

  render(){
    let gifs = this.renderGifs()

    return(
      <div className="images">
        {gifs}
      </div>
    )
  }
}

export default GifList
