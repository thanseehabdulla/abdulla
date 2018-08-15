import {BackTop, Button, Col, Divider, Form, Icon, Input, Layout, Row} from 'antd';
import React, {Component} from 'react';
import AvatarComp from "../component/avatar";
import TopbarComp from "../component/topbar";
import {connect} from "react-redux";
import {DATA_ACTIONS} from './../redux/data/actions'
import Portfolio from "../component/portfolio";

const {get_data} = DATA_ACTIONS
const {Header, Content, Footer} = Layout;
const FormItem = Form.Item;


class HeaderCFAppSignIn extends Component {

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {

        alert(this.state.username)
        if (this.state.username === 'ats' && this.state.password === 'atsstudios') {
            localStorage.setItem('status', 'loggedinAdmin');
            this.props.history.push('/admindashboard');
        }
    }

    componentDidMount() {
        if (localStorage.getItem('status') === 'loggedinAdmin' || localStorage.getItem('status') === 'loggedinUser') {
            this.props.history.push('/');
        }

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
            <Layout className="layout">
                <BackTop/>
                <TopbarComp/>
                <Content style={{padding: '0 50px'}}>
                    <br/>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <Divider orientation="left">LOGIN</Divider>

                        <Row type="flex" style={{padding: '10px 0px'}} justify="center" align="top">
                            <Col span={12}>
                                <Input name="username" onBlur={this.handleChange.bind(this)}
                                       prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="Username"/>
                            </Col>
                        </Row>
                        <Row type="flex" style={{padding: '10px 0px'}} justify="center" align="top">
                            <Col span={12}>

                                <Input name="password" onBlur={this.handleChange.bind(this)}
                                       prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       type="password" placeholder="Password"/>
                            </Col>
                        </Row>
                        <Row type="flex" style={{padding: '10px 0px'}} justify="center" align="top">
                            <Col span={12}>
                                <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}
                                        className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Col>
                        </Row>

                        <Divider>KEEP IN TOUCH</Divider>
                        <Row>
                            <Col span={12}>
                                {datas && <AvatarComp data1={datas.image1} data2={datas.image2} data3={datas.image3}
                                                      data4={datas.image4} data5={datas.image5} data6={datas.image6}
                                                      data7={datas.image7} data8={datas.image8} /> }</Col>
                            <Col span={12} className="intro">
                                <h1>ABDULLA THANSEEH</h1>
                                <p><a href=""><Icon type="github" className="fontSizeIcon"/></a><a href=""><Icon
                                    type="github" className="fontSizeIcon"/></a><a href=""><Icon type="github"
                                                                                                 className="fontSizeIcon"/></a><a
                                    href=""><Icon type="github" className="fontSizeIcon"/></a></p>
                                <h4>Cochin,IND <span>https://abdullathanseeh.ga</span></h4>
                                <h4>+91 9847444106</h4>
                                <h4>thanseehabdulla@gmail.com</h4>
                            </Col>
                        </Row>
                    </div>


                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Abdulla Thanseeh ©2018 Created by ATS Studios
                </Footer>
            </Layout>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {
    get_data
})(HeaderCFAppSignIn)
