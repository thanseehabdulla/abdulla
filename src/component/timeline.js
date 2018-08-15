import React, {Component} from 'react';
import { Timeline } from 'antd';

const timelineValues = [{
    title: 'First value',
}
];

export default class TimelineComp extends Component {

    constructor(props){
        super(props)
        this.timelineValues = this.props.timelineValues?this.props.timelineValues:timelineValues
    }
    render() {
        return (
            <div className="App">

                <Timeline>
                    {this.timelineValues.map(data =>
                        <Timeline.Item><b>{data.title}</b></Timeline.Item>)
                    }
                    </Timeline>
            </div>
        );
    }
}