import React, {Component} from 'react';
import { Row, Col, Button, Icon, Layout, Menu, Breadcrumb } from 'antd';
import ExpandButton from './ExpandButton.js'
import SliderMap from './Slider.js'
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'antd/dist/antd.css';
import MapGL, {Marker, NavigationControl, FullscreenControl, FlyToInterpolator} from 'react-map-gl';

const { Sider } = Layout;
const { SubMenu } = Menu;
const TOKEN = 'pk.eyJ1Ijoiam9zaDV0byIsImEiOiJjanowYmFpa2EwYXE1M2hxZ2c4cXltbjgyIn0.Nkx7iWv8YwpjfHnW4OOpnA';
const DemoBox = props => <p className={`height-${props.value} id-${props.id}`}>{props.children}</p>;

const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};
  
const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
};

/*

this.props.openExp = expandRight from base.js
this.props.closeExp = closeExpand from base.js
this.props.whichMap = state.whichMap from base.js, controlled by both expand modules

*/


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        viewport: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0
            },
        popupInfo: null,
        collapsed: false
        };
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    _onViewportChange = viewport =>
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });

    /*
        Futrure me, This is how it works:
        22 columns are allocated for the Map and the sidebar to the right.
        mapSize is either 23 (mapLarge), or 19 (mapSmall), this is passed from Base.js
        menuEx is either 1 columns or 5.

    */
    /*<ExpandButton 
        openExp={this.props.openExp}
        closeExp={this.props.closeExp}
        whichMap={this.props.whichMap}
        <Col span={this.props.mapSize}>
                    <MapGL
                        {...viewport}
                        width="100%"
                        height="85vh"
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        onViewportChange={this._onViewportChange}
                        mapboxApiAccessToken={TOKEN}
                    >
                    </MapGL>
                </Col>
                <Col span={this.props.menuEx}>
                    <DemoBox value={100} id={12}>
                    <SliderDemo />
                    </DemoBox>
                </Col>
    />*/
    render() {
        const {viewport} = this.state;
        const {expand} = this.state;

        return(
            <Row type="flex" justify="center" align="top">
                <SliderMap />
            </Row>
        );
    }
}