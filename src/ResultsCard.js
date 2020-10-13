import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import React, {Component} from 'react';


const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

export default class ResultsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: {
                marginLeft: '5.5vw',
                open: true
            }

        };
    }

    toggleSlide = () => {
        if (this.state.slide.open) {
            this.setState({
                slide: {marginLeft: '-15.5vw', open: false}
            })
        }
        if (!this.state.slide.open) {
            this.setState({
                slide: {marginLeft: '5.5vw', open: true}
            })
        }
    }

    resIcon = () => {
        if (this.state.slide.open) {
            return <LeftOutlined />
        }
        if (!this.state.slide.open) {
            return <RightOutlined />
        }
    }



    render() {
        const slideStyle = this.state.slide
        return (
            <div className="resWrap">
                <a className="trigger" onClick={this.toggleSlide}><this.resIcon /></a>
                <div className="resCard" style={slideStyle}>
                    
                    <Card title="Results:">
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                    </Card>
                </div>
            </div>
    );
    }
}