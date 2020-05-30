import React, { useState, useEffect } from "react";
import OlMap from "ol/Map";
import ol from "ol";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import { defaults as defaultControls, FullScreen } from 'ol/control';
import OSM from "ol/source/OSM";

interface mapState {
    center: Array<number>,
    zoom: number
};

const Map: React.FC = () => {
    const initialState: mapState = {
        center: [546000, 6868000],
        zoom: 5
    };
    const [state, setstate] = useState(initialState);
    
    const map = new OlMap({
        controls: defaultControls().extend([
            new FullScreen()
        ]),
        interactions: defaultInteractions({
            doubleClickZoom: true,
            dragPan: true,
            altShiftDragRotate: true,
        }),
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        target: undefined,
        view: new View({
            center: state.center,
            zoom: state.zoom
        }),
        moveTolerance: undefined
    });

    const [olMap, setOlMap] = useState(map);
    console.log(olMap);
    useEffect((): void => {
        setstate({ center: [546000, 6868000], zoom: 5})
    }, []);
    
    useEffect(() => {
        olMap.setTarget('map');
        console.log(olMap.getControls());
    })

    olMap.getView().setCenter(state.center);
    olMap.getView().setZoom(state.zoom);

    return (
        <div id="map" style={{ width: "1500px", height: "500px", overflow: "auto" }} />
    )
};

export default Map;