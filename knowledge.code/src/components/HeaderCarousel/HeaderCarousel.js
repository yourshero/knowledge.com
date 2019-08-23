import React, { Component } from 'react'
import { Carousel } from 'antd'
import './HeaderCarousel.less'
import { Icon } from 'antd'

class HeaderCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            CarouselList:[
                '消息1',
                '消息2',
                '消息3',
                '消息4',
                '消息5',
            ]
         }
    }
    render() { 
        return ( 
            <div className = 'HeaderCarousel'>
                <Icon type="message" />
                <Carousel dotPosition='left' dots='false' autoplay>
                    {
                        this.state.CarouselList.map((item,index)=>
                            <div key={index}>
                                <h3>{item}</h3>
                            </div>
                        )
                    }
                </Carousel>
            </div>
         );
    }
}
 
export default HeaderCarousel;