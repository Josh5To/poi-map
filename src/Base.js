import React, {Component} from 'react';
import {HeatMapOutlined} from '@ant-design/icons'
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
                <Col className="test" span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={4}>
                    <p className="midCol">
                    <HeatMapOutlined />
                    </p>
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                    
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