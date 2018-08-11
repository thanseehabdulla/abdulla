import React, {Component} from 'react';
import { Carousel } from 'antd';

const contents = [{
    title: 'First value',
}
];

export default class CarousalComp extends Component {

    constructor(props){
        super(props);
        this.content = this.props.contents?this.props.contents:contents
    }

    render() {
        return (
            <div className="App">
                <Carousel effect="fade" autoplay>
                    { this.content.map(data =>
                        <div><h3>{data.title}</h3></div>)
                    }
                </Carousel>

            </div>
        );
    }
}