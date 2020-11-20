import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import React, {Component} from 'react';

const gridStyle = {
    width: '100%',
    textAlign: 'left'
}


export default function GridCard(props)  {
    
    return(
        <Card.Grid style={gridStyle}>
            <p id="title">
                {props.name}
            </p>
            <p id="address">
                {props.address}
            </p>
        </Card.Grid>
    );
}