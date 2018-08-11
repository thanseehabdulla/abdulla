import {BackTop, Col, Divider, Layout, Row} from 'antd';
import React, {Component} from 'react';
import TimelineComp from "../component/timeline";
import StepComp from "../component/steps";
import AvatarComp from "../component/avatar";
import CardComp from "../component/card";
import CarousalComp from "../component/carousal";
import AutoAdjustTabComp from "../component/autoAdjustTab";
import Icon from "antd/es/icon/index";
import TopbarComp from "../component/topbar";
import {connect} from "react-redux";
import {DATA_ACTIONS} from './../redux/data/actions'
const {get_data} = DATA_ACTIONS
const {Header, Content, Footer} = Layout;

const contents = [{
    title: 'LOADING DATA',
},
    {
        title: 'LOADING DATA',
    }
];

const tabContent = [{
    key: '1',
    name: 'tab1',
    value: 'Hand on experience in React-Redux-Saga-firebase,Hand on experience in MEAN(Mongodb,Expressjs,Angular,Node)STACK development -Hand on experience in Wordpress-Hand on experience in Android App Developement -Hand on experience Ionic App Developement - Slim3 Oauth2 instant mobile rest API Generation- Hand on experience in Graphic design(Krita)- LibGDX 2D adventure Game Developer -terminal Hand on experience in Linux - Git Hand on experience -Hand on experience in Asterisk free pbx setup - Hand on experience in Godot game engine development'
},
    {
        key: '2',
        name: 'tab2',
        value: 'description is here'
    }
];

const projectContent = [{
    key: '1',
    name: 'tab1',
    value: 'description is here'
},
    {
        key: '2',
        name: 'tab2',
        value: 'description is here'
    },
    {
        key: '2',
        name: 'tab2',
        value: 'description is here'
    }
    ,
    {
        key: '2',
        name: 'tab2',
        value: 'description is here'
    }

];

const steps = [{
    title: 'Technologies Handled',
    content: 'Hand on experience in React-Redux-Saga-firebase,Hand on experience in MEAN(Mongodb,Expressjs,Angular,Node)STACK development -Hand on experience in Wordpress-Hand on experience in Android App Developement -Hand on experience Ionic App Developement - Slim3 Oauth2 instant mobile rest API Generation- Hand on experience in Graphic design(Krita)- LibGDX 2D adventure Game Developer -terminal Hand on experience in Linux - Git Hand on experience -Hand on experience in Asterisk free pbx setup - Hand on experience in Godot game engine development'
}, {
    title: 'Me',
    content: 'Abdulla Thanseeh is a passionate Software Engineer who develops apps on solving the difficulty the society currenty face.Ats App studios (App Store dev account name) was created by Abdulla Thanseeh on 2015. The GitHub repo includes the partial source files of some of the projects handled by Abdulla Thanseeh.\n' +
    '\n' +
    'Whether you\'re a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, Abdulla Thanseeh is the perfect friend to start'
}, {
    title: 'Projects Handled',
    content: 'Invoice billing complete project suite-Ui development for NGO website -Wordpress functionality(membership) extention project -Locator Android complete App-Slim3 instant Api generation with Oauth2 for backend android App - Bug fixes and features added in Expressjs node Application for Machinary website (Prox) -School Attendance system complete android App and website with php (noframework)-Openfire XMPP setup for both android and Ionic App using stophe and smack plugin respectively - MEAN Stack complete suite for gas booking and delievery',
}];


const timelineValues = [{
    title: 'LOADING DATA',
},
    {
        title: 'LOADING DATA',
    },
    {
        title: 'LOADING DATA',
    }
];

class HeaderCFApp extends Component {

    componentDidMount() {
        const {get_data} = this.props;
        get_data();
        console.log(this.props.data)
    }




    splitdataToArray(d){
        let data = d.split(',');
        let arr = [];
        data.map(dat=>{
            arr.push(dat)
        })
        return arr;
    }


    render() {
        const datas = this.props.data ? this.props.data.get('webdata') : {}
        const overview = this.props.data ? this.splitdataToArray(datas.get(overview)) : {}

        return (
            <Layout className="layout">
                <BackTop/>
                <TopbarComp/>
                <Content style={{padding: '0 50px'}}>
                    <br/>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <Divider orientation="left">ABOUT MYSELF</Divider>
                        <Row>
                            <Col span={12}>
                                {/*<BadgeComp/>*/}
                                <br/>
                                <AvatarComp/></Col>
                            <Col span={12} className="intro">
                                <h1>{datas ? datas.username :'ABDULLA THANSEEH'}</h1>
                                <p><a href=""><Icon type="github" className="fontSizeIcon"/></a><a href=""><Icon
                                    type="linkedin" className="fontSizeIcon"/></a><a
                                    href=""><Icon type="skype" className="fontSizeIcon"/></a><a href=""><Icon
                                    type="facebook"
                                    className="fontSizeIcon"/></a><a
                                    href=""><Icon type="instagram" className="fontSizeIcon"/></a></p>
                                <h4>{datas ? datas.address :'Cochin,IND'} <span>{datas ? datas.website :'https://abdullathanseeh.ga'}</span></h4>
                                <h2>{datas ? datas.position :'Software Developer (3+ exp)'}</h2>
                                <h4>{datas ? datas.worksAt :'WORKS AT SIME LABS'}</h4>
                            </Col>
                        </Row>

                        <Divider orientation="right">Overview</Divider>
                        <StepComp steps={overview ? overview:steps}/>

                        <Divider orientation="left">WORK HISTORY</Divider>
                        <TimelineComp timelineValues={timelineValues}/>
                        <Divider orientation="left">TOP 5 FREELANCE WORK</Divider>
                        <TimelineComp timelineValues={timelineValues}/>
                        <Divider orientation="left">APPRECIATIONS</Divider>
                        <CarousalComp contents={contents}/>
                        <Divider orientation="left">PROJECT WORKS</Divider>
                        <AutoAdjustTabComp content={tabContent}/>
                        <Divider orientation="left">TOP PROJECT LINKS</Divider>
                        <CardComp content={projectContent}/>
                        <Divider>KEEP IN TOUCH</Divider>
                        <Row>
                            <Col span={12}>
                                <AvatarComp/></Col>
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
})(HeaderCFApp)