import React, {Component} from 'react';
import './App.css';
import Map from './Map.js'
import { Row, Col, Button, Icon } from 'antd';
import 'antd/dist/antd.css';

const DemoBox = props => <p className={`height-${props.value} id-${props.id}`}>{props.children}</p>;

export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: 1,
            map: 23,
            mapLarge: 23,
            mapSmall: 19,
            whichMap: "large"
        };
    }
    
    expandRight = () => {
        this.setState({
            expand: 5,
            map: this.state.mapSmall,
            whichMap: "small"
        });
    }

    closeExpand = () => {
        this.setState({
            expand: 1,
            map: this.state.mapLarge,
            whichMap: "large"
        });
    }

    render() {
        return(
        <div className="base">
            <Row type="flex" justify="center" align="top">
                <Col span={2}>
                    <DemoBox value={150} id={1}>col-1</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={2}>col-2</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={3}>col-3</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={4}>col-4</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={5}>col-5</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={6}>col-6</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={7}>col-7</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100}id={8}>col-8</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={9}>col-9</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={10}>col-10</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={11}>col-11</DemoBox>
                </Col>
                <Col span={2}>
                    <DemoBox value={100} id={12}>col-12</DemoBox>
                </Col>
            </Row>
            <Row type="flex" justify="start">
                <Col span={24}>
                    <DemoBox value={100} id={0}> 
                    <Map 
                        openExp={this.expandRight}
                        closeExp={this.closeExpand}
                        menuEx={this.state.expand}
                        mapSize={this.state.map} 
                        whichMap={this.state.whichMap}
                         /> 
                    </DemoBox>
                </Col>

            </Row>
        </div>
        );
    }
}