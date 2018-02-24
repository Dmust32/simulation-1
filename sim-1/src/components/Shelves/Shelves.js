import React, { Component } from 'react';
import Shelf from './Shelf';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Shelves extends Component {
    constructor(props){
        super(props);
        this.state ={
            shelves: [],
        }
    }
    componentDidMount = () => {
        axios.get('http://localhost:5050/api/shelves').then(response => {
            this.setState({shelves: response.data})
            console.log('these are the shelves', this.state.shelves)
        })
    }

    render(){
        return(
            <div className= "shelf-container">
            {this.state.shelves.map(shelf => {
                const shelfName= shelf.shelf_name;
                const shelfId= shelf.shelf_id;
                return <Shelf shelfName= {shelfName} shelfId= {shelf.Id}/>
                    
            })}

            </div>
        )
    }
}

export default Shelves