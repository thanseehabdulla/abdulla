import React, {Component} from 'react';
import {Menu} from 'antd';
import {Layout} from "antd/lib/index";

const {Header, Content, Footer} = Layout;

export default class TopbarComp extends Component {

    logout() {
        localStorage.setItem('status', 'loggedout');
        window.location.href = "/";
    }


    render() {
        return (
            <Header>
                <div className="Topbar">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="4"><a href="/">HOME</a></Menu.Item>
                        {(localStorage.getItem('status') === 'loggedinAdmin') &&
                        <Menu.Item key="7"><a href="/admindashboard">DASHBOARD</a></Menu.Item>}
                        <Menu.Item key="1"><a href="/ats">ATS</a></Menu.Item>
                        <Menu.Item key="5"><a href="">GENERATE MY CV</a></Menu.Item>
                        {!(localStorage.getItem('status') === 'loggedinAdmin' || localStorage.getItem('status') === 'loggedinUser') &&
                        <Menu.Item key="2"><a href="/signin">SIGN IN</a></Menu.Item>}
                        <Menu.Item key="3">GET YOUR OWN</Menu.Item>
                        {(localStorage.getItem('status') === 'loggedinAdmin' || localStorage.getItem('status') === 'loggedinUser') &&
                        <Menu.Item key="6" onClick={this.logout.bind(this)}>LOG OUT</Menu.Item>}
                    </Menu>
                </div>
            </Header>
        );
    }
}