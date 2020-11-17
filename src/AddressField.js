import React, {PureComponent} from 'react';
import { Row, Col, Button, Input } from 'antd';

const { Search } = Input;

export default class AddressField extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {input: ''};

    }
    //Keeps input updated
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    //Sends text value to array
    handleClick = async (value) => {
        //Add address can throw a couple errors, mainly typeerrors from broken coordinates, this waits for correct callback from calcCord
        try {
            await this.props.addAddress(value, this.props.id)
        }
        catch (e) {
            console.log(e)
        }
    }

    render() {
        const idVal = `textInput${this.props.idVal}`;

        return (
            <div className="address">
                <div className="p-grid no-height p-nogutter">
                    <Row type="flex" justify="center" align="top">
                        <Search
                            placeholder="Location"
                            enterButton="Plot"
                            size="large"
                            onChange={this.handleChange}
                            //Sends to PopCard
                            onSearch={this.handleClick}
                        />
                    </Row>
                </div>
            </div>
        );
    }
    
}