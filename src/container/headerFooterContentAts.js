import {BackTop, Col, Divider, Form, Icon, Layout, Row} from 'antd';
import React, {Component} from 'react';
import AvatarComp from "../component/avatar";
import TopbarComp from "../component/topbar";

const {Header, Content, Footer} = Layout;
const FormItem = Form.Item;


class HeaderCFAppAts extends Component {


    render() {

        return (
            <Layout className="layout">
                <BackTop/>
                <TopbarComp/>
                <Content style={{padding: '0 50px'}}>
                    <br/>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <Divider orientation="left">ATS APP STUDIO'S</Divider>
                        <Row>
                            <Col span={12}>
                                <br/><br/>
                                <AvatarComp/></Col>
                            <Col span={12} className="intro">
                                <h1>ATS STUDIOS'S</h1>
                                <p><a href=""><Icon type="android" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="apple" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="behance" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="youtube" className="fontSizeIcon2"/></a></p>
                                <h4>Cochin,IND <span>https://abdullathanseeh.ga</span></h4>
                                <h4>ATS App Studios is a App store account established since 2015 when Abdulla Thanseeh
                                    got in the field of tech and was inspired by some of the inventive ideas and thought
                                    of his friends to benifit Society, Whether it is expressed in the form of a game or
                                    app.</h4>
                            </Col>
                        </Row>

                        <Divider>KEEP IN TOUCH</Divider>

                    </div>


                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Abdulla Thanseeh ©2018 Created by ATS Studios
                </Footer>
            </Layout>
        );
    }
}

export default HeaderCFAppAts;