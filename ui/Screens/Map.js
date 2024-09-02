import React from 'react';
import {View, Text, ActivityIndicator, StatusBar} from 'react-native';
import styles from '../Styles';
import MapView, {Marker, Polygon} from "react-native-maps"

StatusBar.setBarStyle("dark-content")

const ipaRegion = {
    coordinates: [
        { latitude: 43.8486744, longitude: -79.0695283 },
        { latitude: 43.8537168, longitude: -79.0700046 },
        { latitude: 43.8518394, longitude: -79.0725697 },
        { latitude: 43.8481651, longitude: -79.0716377 },
        { latitude: 43.8486744, longitude: -79.0695283 },
    ],
    strokeColor: "coral",
    strokeWidth: 4,
};
const initialRegion={
    latitude: 43.8486744,
    longitude: -79.0695283,
    latitudeDelta: 0.002,
    longitudeDelta: 0.04,
}

const stoutRegion = {
    coordinates: [
        { latitude: 43.8486744, longitude: -79.0693283 },
        { latitude: 43.8517168, longitude: -79.0710046 },
        { latitude: 43.8518394, longitude: -79.0715697 },
        { latitude: 43.8491651, longitude: -79.0716377 },
        { latitude: 43.8486744, longitude: -79.0693283 },
    ],
    strokeColor: "firebrick",
    strokeWidth: 4,
};

export default function Map(){

    const [ipaStyles,setIpaStyles] = React.useState([styles.ipaText,styles.boldText]);
    const [stoutStyles,setStoutStyles] = React.useState([styles.stoutText]);
    const [overlays, setOverlays] = React.useState([ipaRegion]);


    function onClickIPA(){
        setIpaStyles([...ipaStyles,styles.boldText]);
        setStoutStyles([stoutStyles[0]]);
        setOverlays([ipaRegion]);
    }
    function onClickStout(){
        setStoutStyles([...stoutStyles,styles.boldText]);
        setIpaStyles([ipaStyles[0]]);
        setOverlays([stoutRegion]);
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={ipaStyles} onPress={onClickIPA}>IPA FANS</Text>
                <Text style={stoutStyles} onPress={onClickStout}>STOUT FANS</Text>
            </View>
            <MapView style={styles.mapView} showsPointsOfInterest={false}
                     showsUserLocation
                     followUserLocation
                     zoomControlEnabled={true}
                     initialZoom={9}
                     initialRegion={initialRegion}>
                {overlays.map((v, i) => (
                    <Polygon coordinates={v.coordinates}
                             key={i}
                             strokeColor={v.strokeColor}
                             strokeWidth={v.strokeWidth}/>
                ))}
                {/*<Marker coordinate={{*/}
                {/*    latitude: 37.785834,*/}
                {/*    longitude: -122.406417,*/}
                {/*}} description={"test description"} title="Test Title1" />*/}
            </MapView>
           {/*<ActivityIndicator size="large" color="#000" animating={true} />*/}
        </View>
    )
}