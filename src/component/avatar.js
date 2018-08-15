import React, {Component} from 'react';
import { Avatar } from 'antd';

export default class AvatarComp extends Component {
    constructor(props){
        super(props);
        this.data1 = this.props.data1
        this.data2 = this.props.data2
        this.data3 = this.props.data3
        this.data4 = this.props.data4
        this.data5 = this.props.data5
        this.data6 = this.props.data6
        this.data7 = this.props.data7
        this.data8 = this.props.data8
    }
    render() {
        return (
            <div className="App">
                <div>
                    <Avatar size={64} src={this.data1} />
                    <Avatar size="large" src={this.data2} />
                    <Avatar src={this.data3} />
                    <Avatar size="small" src={this.data4} />
                    <Avatar size="small" src={this.data5} />
                    <Avatar src={this.data6} />
                    <Avatar size="large" src={this.data7} />
                    <Avatar size={64} src={this.data8} />
                </div>

            </div>
        );
    }
}