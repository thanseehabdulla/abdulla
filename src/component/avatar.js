import React, {Component} from 'react';
import { Avatar } from 'antd';

export default class AvatarComp extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Avatar size={64} icon="user" />
                    <Avatar size="large" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="small" icon="user" />
                    <Avatar size="small" icon="user" />
                    <Avatar icon="user" />
                    <Avatar size="large" icon="user" />
                    <Avatar size={64} icon="user" />
                </div>

            </div>
        );
    }
}