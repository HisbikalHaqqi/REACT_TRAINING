import React, { Component } from 'react'
import IconText from '../../atom/IconText/IconText'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <IconText/>
                <h4>TRAINING REACT JS BATCH 2</h4>
            </div>
        )
    }
   
}

export default Navbar