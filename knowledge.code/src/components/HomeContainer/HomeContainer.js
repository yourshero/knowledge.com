import React, { Component, Fragment } from 'react';
import Home from 'pages/home/home'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Home />
            </Fragment>
         );
    }
}
 
export default HomeContainer;