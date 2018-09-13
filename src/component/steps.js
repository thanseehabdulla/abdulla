import React, {Component} from 'react';
import { Steps, Button, message } from 'antd';

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];

export default class StepComp extends Component {
    steps=[];
    constructor(props) {
                super(props);
                this.state = {
                current: 0,
            };
                this.steps = props.steps?props.steps:steps;
            }

                next() {
                const current = this.state.current + 1;
                this.setState({ current });
            }

                prev() {
                const current = this.state.current - 1;
                this.setState({ current });
            }

                render() {
                const { current } = this.state;
                return (
                <div>
                <Steps current={current}>
                {this.steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                    <div className="steps-content"><p>{this.steps[current].content}</p></div>
                <div className="steps-action">
                {
                    current < this.steps.length - 1
                    && <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                    current === this.steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Overview complete!')}>Done</Button>
                }
                {
                    current > 0
                    && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )
                }
                </div>
                </div>
        );
    }
}