import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '30px' }}>{text}</div >;

class SimpleMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 0,
                lng: 0
            }
        };
    }

    componentWillMount() {
        const setPosition = (position) => {
            let center = { lat: position.coords.latitude, lng: position.coords.longitude }
            this.setState({ center: center });
            console.log(center)
        }
        const option = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        }
        const err = () => {
            console.log("Sorry, no position available.")
        }
        navigator.geolocation.watchPosition(setPosition, err, option);
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCDHLnS_ZtxpF_oE6v6XhUszSp9-MVYPvo' }}
                    defaultCenter={this.state.center}
                    defaultZoom={11}
                >
                    <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="😆"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;