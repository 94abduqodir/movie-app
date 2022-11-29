import React, { Component } from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search'

export default class Main extends Component {
  state ={
    movies:[]
  }

  
  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=329ffa13&s=panda')
      .then(response =>response.json())
      .then(data => this.setState({movies:data.Search}))
  
    
    }

    serachMovie = (str, type='all')=>{
      fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !=='all' ? `&type=${type}`: ''}`)
      .then(response =>response.json())
      .then(data => this.setState({movies:data.Search}))
    }

  render() {
    return (
      <div className='container content'>
        <Search serachMovie = {this.serachMovie}/>
        <div className="row">
          {!this.state.movies.length ?
             <div className="progress">
                <div className="indeterminate"></div>
             </div>: 
         (<Movies movies ={this.state.movies}/>)}
          
        </div>
      </div>
    )
  }
}

