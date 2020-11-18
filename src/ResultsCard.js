import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import React, {Component} from 'react';
import GridCard from './GridCard.js'
import Grid from 'antd/lib/card/Grid';

export default class ResultsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: {
                marginLeft: '-14.2em',
                open: false
            }

        };
    }

    toggleSlide = () => {
        if (this.state.slide.open) {
            this.setState({
                slide: {marginLeft: '-14.2em', open: false}
            })
        }
        if (!this.state.slide.open) {
            this.setState({
                slide: {marginLeft: '5.7em', open: true}
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
        const Results = this.props.nearPlaces.map((cur, ind) =>
            <GridCard
                name={cur.venue.name}
                address={cur.venue.location.address}
                key={ind}
            />
        );
        return (
            <div className="resWrap">
                <a className="trigger" onClick={this.toggleSlide}><this.resIcon /></a>
                <div className="resCard" style={slideStyle}>
                    
                    <Card title="Results:">
                        {Results}
                    </Card>
                </div>
            </div>
    );
    }
}