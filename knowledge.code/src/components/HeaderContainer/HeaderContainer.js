import React, { Component, Fragment } from 'react'
import HeaderTop from '../HeaderTop/HeaderTop'
import HeaderSearch from '../HeaderSearch/HeaderSearch'
import './HeaderContainer.less'

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <HeaderTop />
                <HeaderSearch />
            </Fragment>
         );
    }
}
 
export default HeaderContainer;