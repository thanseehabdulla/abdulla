import React, {Component} from 'react';
import { Tabs, Radio } from 'antd';
import {Card} from "antd/lib/index";
import { Row, Col } from 'antd';
const { Meta } = Card;
const TabPane = Tabs.TabPane;

const content = [{
    key: '1',
    name:'tab1',
    value:'description is here'
},
    {
        key: '1',
        name:'tab1',
        value:'description is here'
    }
];

export default class AutoAdjustTabComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
        this.content = this.props.content?this.props.content:content;
    }

    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }

    render() {
        const { mode } = this.state;
        return (
            <div>
                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                    <Radio.Button value="top">Horizontal</Radio.Button>
                    <Radio.Button value="left">Vertical</Radio.Button>
                </Radio.Group>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={mode}
                    style={{ height: 'auto' }}
                >
                    {this.content.map(data =>
                        <TabPane tab={data.name} key={data.key}>
                            <Row>
                                <Col span={6}> <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                    />
                                </Card></Col>
                                <Col span={18}>
                                    <h1>{data.name}</h1>
                                    <p style={{textAlign:'justify'}}>{data.value}</p></Col>
                            </Row>

                            </TabPane>)
                    }
                    </Tabs>
            </div>
        );
    }
}