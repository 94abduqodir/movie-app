import { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type:"all"
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.serachMovie(this.state.search, this.state.type);
      this.setState({ search: "" });
    }
  };

  hadnlerType = (e)=>{
    this.setState(()=>({type: e.target.dataset.type}), ()=>{
      this.props.serachMovie(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="email_inline"
              type="email"
              className="validate"
              name="search"
              value={this.state.search}
              onChange={this.handleSearch}
              onKeyDown={this.handleKeyDown}
              placeholder="Search"
            />
            <button
              onClick={() => this.props.serachMovie(this.state.search, this.state.type)}
              className="btn search__btn"
            >
              Serach
            </button>
          </div>
          <label>
            <input 
              className="with-gap" 
              name="type" type="radio" 
              data-type="all"  
              onChange={this.hadnlerType} 
              checked={this.state.type ==='all'}/>
            <span>All</span>
          </label>
          <label>
            <input 
              className="with-gap" 
              name="type" type="radio" 
              data-type = 'movie' 
              onChange={this.hadnlerType} 
              checked={this.state.type ==='movie'}  
            />
            <span>Movie</span>
          </label>
          <label>
            <input 
              className="with-gap" 
              name="type" 
              type="radio"  
              data-type = 'series' 
              checked={this.state.type ==='series'}
              onChange={this.hadnlerType}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
