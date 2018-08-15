import {BackTop, Col, Divider, Form, Icon, Layout, Row} from 'antd';
import React, {Component} from 'react';
import AvatarComp from "../component/avatar";
import TopbarComp from "../component/topbar";
import {DATA_ACTIONS} from './../redux/data/actions'
import Portfolio from "../component/portfolio";
import {connect} from "react-redux";

const {get_data} = DATA_ACTIONS
const {Header, Content, Footer} = Layout;
const FormItem = Form.Item;


class HeaderCFAppAts extends Component {

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
                                {datas &&
                                <AvatarComp data1={datas.imagebats1} data2={datas.imagebats2} data3={datas.imagebats3}
                                            data4={datas.imagebats4} data5={datas.imagebats5} data6={datas.imagebats6}
                                            data7={datas.imagebats7} data8={datas.imagebats8}/>}</Col>
                            <Col span={12} className="intro">
                                <h1>{datas? datas.brandname : "ATS STUDIOS'S"}</h1>
                                <p><a href=""><Icon type="android" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="apple" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="behance" className="fontSizeIcon2"/></a><a href=""><Icon
                                    type="youtube" className="fontSizeIcon2"/></a></p>
                                <h4>Cochin,IND <span>https://abdullathanseeh.ga</span></h4>
                                <h4>{datas? datas.brandcontent : "ATS App Studios is a App store account established since 2015 when Abdulla Thanseeh got in the field of tech and was inspired by some of the inventive ideas and thought of his friends to benifit Society, Whether it is expressed in the form of a game or app."}</h4>
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


export default connect(state => ({
    data: state.data
}), {
    get_data
})(HeaderCFAppAts)

