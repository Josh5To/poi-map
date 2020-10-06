import React, {PureComponent} from 'react';
import { Row, Col, Button, Input } from 'antd';

const { Search } = Input;

export default class AddressField extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {input: ''};

    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    //Sends text value to array
    handleClick = () => {
        //this.props.sendToGeo(this.state.input, this.props.idVal);
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
                            onSearch={value => this.props.addAddress(value, this.props.id)}
                        />
                    </Row>
                </div>
            </div>
        );
    }
    
}