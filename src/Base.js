import React, {Component} from 'react';
import {HeatMapOutlined} from '@ant-design/icons'
import './App.css';
import SliderMap from './Slider.js'
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
            <Row type="flex" justify="center" align="top">
                <SliderMap />
            </Row>
        </div>
        );
    }
}