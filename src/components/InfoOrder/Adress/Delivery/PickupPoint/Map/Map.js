import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import './Map.css';

const mapData = {
    center: [55.762054, 37.620851],
    zoom: 18,
};


const coordinates = [
    [55.762054, 37.620851]
];

class YandexMap extends React.Component {
    render() {
        return (
            <div className="map">
                <YMaps>
                    <Map defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                    </Map>
                </YMaps>
            </div>
        );
    }
}

export default YandexMap;