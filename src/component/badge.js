import React, {Component} from 'react';
import {Badge} from "antd";

export default class BadgeComp extends Component {
    render() {
        return (
            <div className="App">

                <a href="#">
                    <Badge count={5}>
                        <span className="head-example" />
                    </Badge>
                </a>
            </div>
        );
    }
}