import React, { Component } from 'react';
import Bin from './Bin';
import axios from 'axios';

class Bins extends Component {
    constructor(props){
        super(props);
        this.state = {
            bins: []
        }
    }
    componentDidMount = (id) => {
        axios.get(`http://localhost:5050/api/shelf/${id}`).then(response => {
            this.setState({shelves: response.data})
            console.log('these are the bins', this.state.bins)
        })
    }

    render(){
        return(
            <div className="bin-container">
                {this.state.bins.map(bin => {
                    const binId = bin.bin_id;
                    const binName = bin.bin_name;
                    const binFull = bin.item_name;
                    return <Bin binId={binId} binFull={binFull} binName={binName}/>
                })}
            </div>
        )
    }
}

export default Bins