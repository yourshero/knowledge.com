import React, { Component, Fragment } from 'react';
import HomeBannerIndex from './homeBanner/index'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <HomeBannerIndex />
            </Fragment>
         );
    }
}
 
export default Home;