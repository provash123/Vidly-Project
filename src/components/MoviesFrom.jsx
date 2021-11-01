import React, { Component } from 'react';

class MoviesFrom extends Component {
     
    handleSave=()=>{
        this.props.history.push("/movies")

    }
    
    render() {
        return ( 
            <div>
            
        <h1>MoviesFrom - {this.props.match.params.id}</h1>
        <button className="btn btn-secondary btn-sm" onClick={this.handleSave} >Save</button>
        </div>
         );
    }
}
 
export default MoviesFrom;