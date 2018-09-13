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
import Portfolio from "../component/portfolio";
import Avatar from "antd/es/avatar/index";
import Button from "antd/es/button/button";
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
            <div className="container">
            <Layout className="layout">
                <BackTop/>
                {window.innerWidth > 768 && <TopbarComp/>}
                <Content style={{padding: '0 50px'}}>
                    <br/>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <Divider orientation="left">ABOUT MYSELF</Divider>
                        <Row align="middle" justify="center">
                            <Col sm={24} lg={12}>
                                {/*<BadgeComp/>*/}
                                <br/>
                                {window.innerWidth > 768 && datas && <AvatarComp data1={datas.image1} data2={datas.image2} data3={datas.image3}
                                                      data4={datas.image4} data5={datas.image5} data6={datas.image6}
                                                      data7={datas.image7} data8={datas.image8} /> }

                                {window.innerWidth <= 768 && datas && <Avatar size={164} src={datas.image1} /> }


                                                      </Col>
                                    <Col sm={24} lg={12} className="intro">
                                    <h1>{datas ? datas.username : 'ABDULLA THANSEEH'}</h1>
                                    <p><a href="https://github.com/thanseehabdulla" ><Icon type="github" className="fontSizeIcon"/></a><a href="https://www.linkedin.com/in/thanseeh-abdulla-ab78aba2/"><Icon
                                    type="linkedin" className="fontSizeIcon"/></a><a
                                    href=""><Icon type="skype" className="fontSizeIcon"/></a><a href="https://www.facebook.com/thanseeh.abdulla.35"><Icon
                                    type="facebook"
                                    className="fontSizeIcon"/></a><a
                                    href="https://www.instagram.com/thanseeh_abdulla/?hl=en"><Icon type="instagram" className="fontSizeIcon"/></a></p>
                                    <h4>{datas ? datas.address : 'Cochin,IND'} <span>{datas ? datas.website : 'https://abdullathanseeh.ga'}</span></h4>
                                    <h2>{datas ? datas.position : 'Software Developer (3+ exp)'}</h2>
                                    <h4>{datas ? datas.worksAt : 'WORKS AT SIME LABS'}</h4>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=ATSSTUDIOS&body=GREETINGFROMATS&bcc=thanseehabdulla@gmail.com">{datas ? datas.email : 'WORKS AT SIME LABS'}</a>


                                    </Col>
                            {window.innerWidth <= 768 && <Button onClick={()=>{window.location.href = datas?datas.cv:"https://www.slideshare.net/slideshow/embed_code/key/BSM5vh02t9pUMl"}}>GENERATE MY CV</Button>}
                                    </Row>

                                    <Divider orientation="right">Overview</Divider>
                        <Col sm={24} lg={24}>
                                {datas && <StepComp steps={this.splitdataToArray((datas.overview))}/>}
                                <Portfolio/>
                        </Col>
                        <Col sm={24} lg={24} className="intro">
                                    <Divider orientation="left">WORK HISTORY</Divider>
                                {datas && <TimelineComp timelineValues={this.splitdataToArray((datas.workhistory))}/>}
                        </Col>

                                    <Divider orientation="left">TOP 5 FREELANCE WORK</Divider>
                                {datas && <TimelineComp timelineValues={this.splitdataToArray((datas.topfreelance))}/>}
                                    <Divider orientation="left">APPRECIATIONS</Divider>
                                {datas && <CarousalComp contents={this.splitdataToArray((datas.appreciation))}/>}
                        <Col sm={24} lg={24}>
                            <br/>
                                    <Divider orientation="left">PROJECT WORKS</Divider>
                                {datas && <AutoAdjustTabComp content={this.splitdataToArray((datas.project))}/>}
                        </Col>
                        <br/>
                        {window.innerWidth > 768 && <Divider orientation="left">TOP PROJECT LINKS</Divider>}
                        {window.innerWidth > 768 &&  <Col sm={24} lg={24}>
                                {datas &&<CardComp content={this.splitdataToArray((datas.topproject))}/>}
                        </Col>}
                        <br/>
                                <Divider>KEEP IN TOUCH</Divider>
                        {window.innerWidth > 768 && <Row>
                                    <Col span={12}>
                                        {datas && <AvatarComp data1={datas.imageb1} data2={datas.imageb2} data3={datas.imageb3}
                                                              data4={datas.imageb4} data5={datas.imageb5} data6={datas.imageb6}
                                                              data7={datas.imageb7} data8={datas.imageb8} /> } </Col>
                                    <Col span={12} className="intro">
                                    <h1>{datas ? datas.username : 'ABDULLA THANSEEH'}</h1>
                                    <p><a href="https://github.com/thanseehabdulla" ><Icon type="github" className="fontSizeIcon"/></a><a href="https://www.linkedin.com/in/thanseeh-abdulla-ab78aba2/"><Icon
                                    type="linkedin" className="fontSizeIcon"/></a><a
                                    href=""><Icon type="skype" className="fontSizeIcon"/></a><a href="https://www.facebook.com/thanseeh.abdulla.35"><Icon
                                    type="facebook"
                                    className="fontSizeIcon"/></a><a
                                    href="https://www.instagram.com/thanseeh_abdulla/?hl=en"><Icon type="instagram" className="fontSizeIcon"/></a></p>
                                    <h4>{datas ? datas.address : 'Cochin,IND'} <span>{datas ? datas.website : 'https://abdullathanseeh.ga'}</span></h4>
                                    <h2>{datas ? datas.position : 'Software Developer (3+ exp)'}</h2>
                                    <h4>{datas ? datas.worksAt : 'WORKS AT SIME LABS'}</h4>
                                    <h4>{datas ? datas.mobile : 'WORKS AT SIME LABS'}</h4>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=ATSSTUDIOS&body=GREETINGFROMATS&bcc=thanseehabdulla@gmail.com">{datas ? datas.email : 'WORKS AT SIME LABS'}</a>
                                    </Col>
                                    </Row>}
                                    </div>


                                    </Content>
                                    <Footer style={{textAlign: 'center'}}>
                                    Abdulla Thanseeh ©2018 Created by ATS Studios
                                    </Footer>
                                    </Layout>
            </div>
                                    );
                                }
                                }

                                export default connect(state => ({
                                data: state.data
                            }), {
                                get_data
                            })(HeaderCFApp)