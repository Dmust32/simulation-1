import React, { Component } from 'react';

class Shelf extends Component{
    render(){
        return(
            <div className="shelf">
                <h2>Shelf {this.props.shelfName}</h2>
            </div>
        )
    }
}

export default Shelf