import React, { Component } from 'react';

class Bin extends Component {
    render(){
        return(
            <div className="bin">
                {this.props.binFull ? 
                    <div>
                        <h2>+ Add inventory to bin</h2>
                    </div> :
                    this.props.binName
                    }
            </div>
        )
    }
}

export default Bin