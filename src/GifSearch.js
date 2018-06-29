import React from "react"

class GifSearch extends React.Component {
  render(){
    return(
      <div>
        <form className="form" onSubmit={this.props.handleSubmit}>
          <input className="input" type="text" value={this.props.input} onChange={this.props.handleChange} placeholder="search"/>
          <input type="submit" className="button"/>
        </form>
      </div>
    )
  }

}

export default GifSearch
