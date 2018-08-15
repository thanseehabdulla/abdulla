import {BackTop, Col, Divider, Form, Icon, Layout, Row} from 'antd';
import React, {Component} from 'react';
import AvatarComp from "../component/avatar";
import Input from "antd/es/input/Input";
import {connect} from "react-redux";
import TopbarComp from "../component/topbar";
import {DATA_ACTIONS} from './../redux/data/actions'

const {send_Username, get_data} = DATA_ACTIONS
const {Header, Content, Footer} = Layout;
const FormItem = Form.Item;

class HeaderCFAppDashboard extends Component {

    state = {
        default: ''
    }

    componentDidMount() {
        if (!(localStorage.getItem('status') === 'loggedinAdmin' || localStorage.getItem('status') === 'loggedinUser')) {
            this.props.history.push('/');
        }

        const {get_data} = this.props;
        get_data();


    }

    changeDataName(e) {
        let name = e.target.name;
        let value = e.target.value;

        const {send_Username} = this.props;
        send_Username({username: e.target.value});
    }

    changeDataAddress(e) {
        const {send_Username} = this.props;
        send_Username({address: e.target.value});
    }

    changeDataWebsite(e) {
        const {send_Username} = this.props;
        send_Username({website: e.target.value});
    }

    changeDataPosition(e) {
        const {send_Username} = this.props;
        send_Username({website: e.target.value});
    }

    changeData(e) {
        let name = e.target.name;
        let value = e.target.value;

        const {send_Username} = this.props;
        send_Username({[name]: e.target.value});
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
                        <Divider orientation="left">WELCOME TO ATS APP STUDIO'S</Divider>
                        <Row>
                            <Col span={12}>
                                <br/><br/>
                                {datas && <AvatarComp data1={datas.image1} data2={datas.image2} data3={datas.image3}
                                            data4={datas.image4} data5={datas.image5} data6={datas.image6}
                                            data7={datas.image7} data8={datas.image8} /> }</Col>
                            <Col span={12} className="intro">
                                <h1>HELLO ABDULLA, How is the day going today?</h1>
                                <p><a href=""><Icon type="android" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="apple" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="behance" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="youtube" className="fontSizeIcon2"/></a></p>
                                <h4>Cochin,IND <span>https://abdullathanseeh.ga</span></h4>
                                <h4>Do you remember this ? ATS App Studios is a App store account established since 2015
                                    when Abdulla Thanseeh
                                    got in the field of tech and was inspired by some of the inventive ideas and thought
                                    of his friends to benifit Society, Whether it is expressed in the form of a game or
                                    app.</h4>
                            </Col>
                        </Row>
                        <Divider orientation="left">VIDEO DATA</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="projects json" name="homevideos"
                                                  onBlur={this.changeData.bind(this)} autosize={{minRows: 5}}
                                                  defaultValue={datas ? datas.homevideos : ''} required/></Col>

                        </Row>
                        <Divider orientation="left">CHANGE DATA</Divider>
                        <Row>
                            <Col span={12}><Input placeholder="Name" name="name"
                                                  onBlur={this.changeDataName.bind(this)}
                                                  defaultValue={datas ? datas.username : ''} required/></Col>
                            <Col span={12}><Input placeholder="Address" name="address"
                                                  onBlur={this.changeDataAddress.bind(this)}
                                                  defaultValue={datas ? datas.address : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="Website" name="website"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.website : ''} required/></Col>
                            <Col span={12}><Input placeholder="position" name="position"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.position : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="Email" name="email"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.email : ''} required/></Col>
                            <Col span={12}><Input placeholder="Mobile" name="mobile"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.mobile : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={24}><Input placeholder="Works At" name="worksAt"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.worksAt : ''} required/></Col>
                        </Row>
                        <Divider orientation="left">Overview</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="Project Handled" name="overview"
                                                     onBlur={this.changeData.bind(this)}
                                                     defaultValue={datas ? datas.overview : ''} required/></Col>

                        </Row>
                        <Divider orientation="left">Work History</Divider>

                        <Row>
                            <Col span={24}><Input placeholder="work hsitory json" name="workhistory"
                                                     onBlur={this.changeData.bind(this)} autosize={{minRows: 5}}
                                                     defaultValue={datas ? datas.workhistory : ''} required/></Col>

                        </Row>
                        <Divider orientation="left">TOP 5 FREELANCE WORK</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="top freelance json" name="topfreelance"
                                                     onBlur={this.changeData.bind(this)} autosize={{minRows: 5}}
                                                     defaultValue={datas ? datas.topfreelance : ''} required/></Col>

                        </Row>

                        <Divider orientation="left">APPRECIATIONS</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="Appreciation json" name="appreciation"
                                                     onBlur={this.changeData.bind(this)} autosize={{minRows: 5}}
                                                     defaultValue={datas ? datas.appreciation : ''} required/></Col>

                        </Row>
                        <Divider orientation="left">PROJECT WORKS</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="projects json" name="project"
                                                     onBlur={this.changeData.bind(this)} autosize={{minRows: 5}}
                                                     defaultValue={datas ? datas.project : ''} required/></Col>

                        </Row>
                        <Divider orientation="left">TOP PROJECT LINKS</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="top projects json" name="topproject"
                                                     onBlur={this.changeData.bind(this)} autosize={{minRows: 5}}
                                                     defaultValue={datas ? datas.topproject : ''} required/></Col>

                        </Row>
                        <Divider orientation="left">Images top left</Divider>
                        <Row>
                            <Col span={12}><Input placeholder="image1" name="image1"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image1 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image2" name="image2"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image2 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image3" name="image3"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image3 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image4" name="image4"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image4 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image5" name="image5"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image5 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image6" name="image6"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image6 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image7" name="image7"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image7 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image8" name="image8"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.image8 : ''} required/></Col>
                        </Row>

                        <Divider orientation="left">Images bottom left</Divider>
                        <Row>
                            <Col span={12}><Input placeholder="image1" name="imageb1"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb1 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image2" name="imageb2"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb2 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image3" name="imageb3"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb3 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image4" name="imageb4"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb4 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image5" name="imageb5"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb5 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image6" name="imageb6"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb6 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image7" name="imageb7"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb7 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image8" name="imageb8"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imageb8 : ''} required/></Col>
                        </Row>
                        <Divider orientation="left">Images ats left</Divider>
                        <Row>
                            <Col span={12}><Input placeholder="image1" name="imagebats1"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats1 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image2" name="imagebats2"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats2 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image3" name="imagebats3"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats3 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image4" name="imagebats4"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats4 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image5" name="imagebats5"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats5 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image6" name="imagebats6"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats6 : ''} required/></Col>
                        </Row>
                        <Row>
                            <Col span={12}><Input placeholder="image7" name="imagebats7"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats7 : ''} required/></Col>
                            <Col span={12}><Input placeholder="image8" name="imagebats8"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.imagebats8 : ''} required/></Col>
                        </Row>

                        <Divider orientation="left">CV URL</Divider>
                        <Row>
                            <Col span={24}><Input placeholder="Name" name="cv"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.cv : ''} required/></Col>
                        </Row>

                        <Divider orientation="left">ATS Message</Divider>

                        <Row>
                            <Col span={12}><Input placeholder="Brand Name" name="brandname"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.brandname : ''} required/></Col>
                            <Col span={12}><Input placeholder="content" name="brandcontent"
                                                  onBlur={this.changeData.bind(this)}
                                                  defaultValue={datas ? datas.brandcontent : ''} required/></Col>
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

export default connect(state => ({
    data: state.data
}), {
    send_Username, get_data
})(HeaderCFAppDashboard)