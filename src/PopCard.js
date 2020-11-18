import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import React, {Component} from 'react';
import AddressField from './AddressField';
import calcCoord from './CoordinateFetcher'
import Pin from './pin';


export default class PopCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numAddress: [0],
            addresses: []
        };
    }

    //Accepts address and id of the AddressField it was recieved from
    _addAddress = async (address, id) => {
        var x = this.state.numAddress.length;
        //If there are less than six address fields, add another whenever bottom one is used
        if (x < 6) {
            //if ID of AddressField is the last field, add another addressField whenever point is plotted
            if (id === x - 1) {
                //Sends to js file that handles google geo api
                let cord = await calcCoord(address)
                //Adds id field to coordinate object.
                cord.id = id
                //Send cordinate object to Slider.js
                this.props.addLoc(cord)
                //Add another thing to array
                this.setState({
                    numAddress: this.state.numAddress.concat(x)
                });
            }
            //If it aint, dont
            if (id < x - 1) {
                let cord = await calcCoord(address)
                cord.id = id
                this.props.addLoc(cord)
            }
        }
        //If there are six fields, do not add anymore. 
        if (x===6) {
            let cord = await calcCoord(address)
            cord.id = id
            this.props.addLoc(cord)
        }
        else {
            return;
        }
    }

    //Handles clear button click
    //Needs to first clear "numAddresses"
    //Second invoke prop function from Slider
    handleClick = () => {
        this.setState({
            numAddress: [0]
        });
        this.props.clearPoints();
    }


    render() {
        //This is why numAddress is an array, that way this simple function controls number of AddressFields
        const addList = this.state.numAddress.map((cur, ind) =>
            <AddressField
                id={ind}
                addAddress={this._addAddress}
            />
        );
        return (
            <div className="PopCard">
                <Card title="Points of Interest:" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    {addList}
                    <Button onClick={this.props.centerPoint}>Save</Button><Button onClick={this.handleClick}>Clear</Button>
                </Card>
            </div>
    );
    }
}