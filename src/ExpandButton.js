import React, {Component} from 'react';
import {Button} from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import './App.css';
import 'antd/dist/antd.css';


export default class ExpandButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    whichButton = ()  => {
        //Closed side
        if(this.props.whichMap === "large") {
            return(
            <Button type="primary" onClick={this.props.openExp}>
                <LeftOutlined />
            </Button>
            );
         }
         //Open side
        if(this.props.whichMap === "small") {
            return(
                <Button type="primary" onClick={this.props.closeExp}>
                    <RightOutlined />
                </Button>
            );
        }
    }


    render() {
        return(
            <this.whichButton/>
        );
    }
}