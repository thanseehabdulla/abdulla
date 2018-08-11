import React, {Component} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;

const content = [{
    key: '1',
    name:'tab1',
    value:'Hand on experience in React-Redux-Saga-firebase,Hand on experience in MEAN(Mongodb,Expressjs,Angular,Node)STACK development -Hand on experience in Wordpress-Hand on experience in Android App Developement -Hand on experience Ionic App Developement - Slim3 Oauth2 instant mobile rest API Generation- Hand on experience in Graphic design(Krita)- LibGDX 2D adventure Game Developer -terminal Hand on experience in Linux - Git Hand on experience -Hand on experience in Asterisk free pbx setup - Hand on experience in Godot game engine development'
},
    {
        key: '2',
        name:'tab2',
        value:'description is here'
    }
];

export default class CardComp extends Component {
    constructor(props){
        super(props);
        this.content = this.props.content?this.props.content:content;

    }
    render() {
        return (
            <div className="App">
                <Row>
                {this.content.map(data =>
                    <Col span={6}>
                    <Card
                        hoverable
                        style={{width: 240}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                    >
                        <Meta
                            title={data.name}
                            description={data.value}
                        />
                    </Card></Col>)
                }
                </Row>
            </div>
        );
    }
}