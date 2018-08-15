import React, {Component} from 'react';
import {Menu} from 'antd';
import {Layout} from "antd/lib/index";
import {connect} from "react-redux";
import {DATA_ACTIONS} from './../redux/data/actions'
import Portfolio from "../component/portfolio";

const {get_data} = DATA_ACTIONS
const {Header, Content, Footer} = Layout;

class TopbarComp extends Component {

    logout() {
        localStorage.setItem('status', 'loggedout');
        window.location.href = "/";
    }

    componentDidMount() {
        const {get_data} = this.props;
        get_data();
        console.log(this.props.data)
    }


    splitdataToArray(d) {
        let data = d.split('&');
        let arr = [];
        for (let j = 0; j < data.length; j++) {
            let finaldat = data[j].split('%');
            console.log(finaldat[j])
            let jsn = {}
            for (let i = 0; i < finaldat.length; i++) {
                jsn[finaldat[i].split('$')[0]] = finaldat[i].split('$')[1]
            }
            arr.push(jsn)
        }
        // alert(arr[2])
        console.log("big split");
        console.log(data)
        return arr;
    }

    render() {
        const datas = this.props.data ? this.props.data.get('webdata') : {}
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
                        <Menu.Item key="8"><a href="/https://github.com/thanseehabdulla">GITHUB</a></Menu.Item>
                        <Menu.Item key="5"><a href={datas?datas.cv:"https://www.slideshare.net/slideshow/embed_code/key/BSM5vh02t9pUMl"}>GENERATE MY CV</a></Menu.Item>
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


export default connect(state => ({
    data: state.data
}), {
    get_data
})(TopbarComp)