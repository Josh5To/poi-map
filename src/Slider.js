/* eslint-disable import/first */
import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BranchesOutlined, DesktopOutlined, FileOutlined } from '@ant-design/icons'
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import PopCard from './PopCard.js'
import ResultsCard from './ResultsCard'
import getPlaces from './GetPlaces.js'
import 'antd/dist/antd.css';
import MapGL, {Marker, NavigationControl, FullscreenControl, FlyToInterpolator} from 'react-map-gl';
import Pin from './pin';
import { TOKEN_MAP } from './secret.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
//Add mapbox api token here
const TOKEN = TOKEN_MAP;

export default class SliderMap extends Component {
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
      collapsed: true,
      center: null,
      addresses: [],
      places: []
      };
  }

  _goToViewport = ({lat, lng}) => {
    var longitude = lng;
    var latitude = lat;
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 5,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    });
  };

  _onViewportChange = viewport =>
  this.setState({
    viewport: {...this.state.viewport, ...viewport}
  });

  //when called, flips the "collapsed" boolean, opening or closing the slider on left side.
  onCollapse = collapsed => {
      this.setState({ collapsed });
  };

  

  //Plots center point calculated from current locations
  plotCenter = (centx, centy) => {
    if(centx !== undefined) {  
      this.setState({
        center:
          <Marker
          longitude={centy}
          latitude={centx}
          offsetTop={-20}
          offsetLeft={-10}
          key={'99'}
          >
          <Pin size={20} fill={'#d52a50'} />
          </Marker>
      });
    }
    else {
      return;
    }
  }

  //Calculates center point
  _centerPoint = async () => {
    var x = 0;
        var y = 0;
        var z = 0;
        this.state.addresses.map((cur, ind) =>
            {
                if(cur.lng !== undefined) {
                    x += cur.lat;
                    y += cur.lng;
                    z++;
                }
                else {
                    throw Error(`No location entered in field ${ind}`);
                }
            }
        );
        console.log(x, y, z);
        var xx = (x/z);
        var yy = (y/z);
        this.plotCenter(xx, yy);
        this.setState({
          places: await getPlaces(xx, yy)
        })
        
  }

  _clearMap = () => {
    this.setState({
      addresses: [],
      places: [],
      center: null
    })
  }

  //Should recieve object of lat/long coordinates and add them to an array of objects
  _addLocationToArray = async (location) => {
    let addObj = location;
    console.log("ID of object sent to main:" + addObj.id)
    let oldArray = this.state.addresses;
    //id here is the ID of the addressField the location is coming from, 
    //if the id is larger than the array that means it has not been added yet,
    //so it can safely be added to rear
    if (addObj.id > (oldArray.length - 1)) {
      this.setState({
        addresses: oldArray.concat(addObj)
      });
      return;
    }

    else {
      let oldArray = this.state.addresses
      let i = addObj.id
      let bef= i-1
      let aft= i+1
      let newArray = oldArray.slice(0,i)
      newArray = newArray.concat(addObj)
      let b = oldArray.slice(aft)
      newArray = newArray.concat(b)
      this.setState({
        addresses: newArray
      });

    }
  }

  render() {
    const {viewport} = this.state;
    const Center = this.state.center;
    const Places = this.state.places;
    const MapPoints = this.state.addresses.map((cur, ind) =>
      <Marker
        longitude={cur.lng}
        latitude={cur.lat}
        offsetTop={-20}
        offsetLeft={-10}
        key={ind}
      >
      <Pin size={20} fill={'#11c888'} />
      </Marker>
    );
    const PlacePoints = this.state.places.map((cur, ind) =>
      <Marker
        longitude={cur.venue.location.lng}
        latitude={cur.venue.location.lat}
        offsetTop={-20}
        offsetLeft={-10}
        key={ind}
      >
      <Pin size={20} fill={'#1890ff'} />
      </Marker>
    );

    return (
      <Layout style={{ minHeight: '90vh', zindex: '1' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" style={{marginTop: 0}}>
              <BranchesOutlined />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <FileOutlined />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        
        <Layout>
          <MapGL
                {...viewport}
                width="100%"
                height="90vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={TOKEN}
            >
          {PlacePoints}
          {MapPoints}
          {Center}
          </MapGL>
          <PopCard 
            addLoc={this._addLocationToArray}
            centerPoint={this._centerPoint}
            clearPoints={this._clearMap}
          />
          <ResultsCard
            nearPlaces={Places}
          />
        </Layout>
      </Layout>
    );
  }
}