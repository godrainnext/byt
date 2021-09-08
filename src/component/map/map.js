import React, { Component } from "react";
import { StyleSheet, View, Text, Switch, Platform, TouchableOpacity, Image } from "react-native";
import { MapType, MapView } from "react-native-amap3d";
import commonStyles from "./mapStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from "../../utils/styleKits";
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationContext } from '@react-navigation/native';

const styles = {
    ...commonStyles,
    map: [
        commonStyles.map,
        {
            ...Platform.select({
                ios: {
                    marginBottom: 54
                }
            })
        }
    ],
    controls: [
        commonStyles.controls,
        {
            height: 54
        }
    ],
    control: [
        commonStyles.control,
        {
            flexDirection: "row"
        }
    ],
    label: {
        marginRight: 5
    }
};

export default class Layers extends Component {
    static navigationOptions = { title: "图层的显示" };
    static contextType = NavigationContext;

    state = {
        showsLabels: true,
        showsTraffic: false,
        showsBuildings: false,
        showMarker: true,
    };
    
    // componentWillUnmount() {
    //     let seconds = 2;
    //     let timeId = setInterval(() => {
    //         seconds--;
    //         if (seconds === 0) {
    //             clearInterval(timeId);
    //             this.setState({ showMarker: true });        
    //             this.forceUpdate();
    //         }
    //     }, 1000);
    // }

    render() {
        const coordinate = {
            longitude: 120.177968,
            latitude: 30.24365,
        }
        const { showMarker } = this.state;
        return (
            <View style={StyleSheet.absoluteFill}>
                <View style={{
                    height: pxToDp(56),
                    width: '100%',
                    backgroundColor: '#62bfad',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    zIndex: 999999
                }}>
                    <TouchableOpacity
                        style={{
                            width: pxToDp(45),
                            left: pxToDp(16)
                        }}
                        onPress={() => this.context.goBack()}>
                        <Ionicons name='arrow-back' size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: pxToDp(18),
                        color: 'white'
                    }}>地图
                    </Text>
                    <View style={{
                        width: pxToDp(40),
                        right: pxToDp(16)
                    }}></View>
                </View>
                <View style={styles.controls}>
                    <View style={styles.control}>
                        <Text style={styles.label}>建筑</Text>
                        <Switch
                            onValueChange={showsBuildings => this.setState({ showsBuildings })}
                            value={this.state.showsBuildings}
                        />
                    </View>
                    <View style={styles.control}>
                        <Text style={styles.label}>路况</Text>
                        <Switch
                            onValueChange={showsTraffic => this.setState({ showsTraffic })}
                            value={this.state.showsTraffic}
                        />
                    </View>
                    <View style={styles.control}>
                        <Text style={styles.label}>标签</Text>
                        <Switch
                            onValueChange={showsLabels => this.setState({ showsLabels })}
                            value={this.state.showsLabels}
                        />
                    </View>
                </View>
                <MapView
                    mapType={MapType.Standard}
                    zoomLevel={19}
                    tilt={60}
                    showsLabels={this.state.showsLabels}
                    showsTraffic={this.state.showsTraffic}
                    showsBuildings={this.state.showsBuildings}
                    style={styles.map}
                    center={{
                        longitude: 120.177968,
                        latitude: 30.24365,
                    }}
                >
                    {/* <MapView.Marker
                        draggable
                        title="杭州鼓楼剧场"
                        // onDragEnd={({ nativeEvent }) =>
                        //     console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)
                        // }
                        coordinate={{
                            longitude: 120.177968,
                            latitude: 30.24365,
                        }}
                    /> */}
                    <MapView.Marker
                        icon={() => <Image style={{ width: pxToDp(32), height: pxToDp(32), }} source={require('../../res/logo.png')} />}
                        image='flag'
                        active={showMarker}
                        coordinate={coordinate}
                    >
                        <View style={{ height: pxToDp(68), justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ zIndex: 99, width: pxToDp(128), height: pxToDp(50), backgroundColor: '#62bfad', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(8) }}>
                                <View style={{ width: pxToDp(128), height: pxToDp(60), justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ color: 'white', fontSize: pxToDp(15), fontWeight: 'bold' }}>杭州鼓楼剧场</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: pxToDp(24),
                                    height: pxToDp(24),
                                    backgroundColor: '#62bfad',
                                    transform: [{ rotate: '135deg' }],
                                    marginTop: pxToDp(-16),
                                    borderRadius: pxToDp(2)
                                }}
                            ></View>
                        </View>
                    </MapView.Marker>
                </MapView>
                <View style={{ height: pxToDp(120), width: pxToDp(320), backgroundColor: 'white', borderTopRightRadius: pxToDp(16), borderTopLeftRadius: pxToDp(16), padding: pxToDp(16), marginTop: pxToDp(-120) }}>
                    <View style={{ marginBottom: pxToDp(8) }}>
                        <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>杭州鼓楼剧场</Text>
                        <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>浙江省杭州市上城区中山南路501号</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.Scrollable3.open()} style={{ marginLeft: pxToDp(16), marginRight: pxToDp(16), backgroundColor: '#62bfad', height: pxToDp(40), borderRadius: pxToDp(20), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: 'white' }}>到这去</Text>
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={(ref) => {
                        this.Scrollable3 = ref;
                    }}
                    height={120}
                    width={375}
                    closeOnDragDown
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }
                    }}
                >
                    <TouchableOpacity onPress={() => this.context.navigate('MapToGo')} style={{ marginLeft: pxToDp(32), marginRight: pxToDp(32), marginBottom: pxToDp(8), height: pxToDp(40), backgroundColor: '#62bfad', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(20) }}>
                        <Text style={{ fontSize: pxToDp(18), color: 'white' }}>高德地图</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.Scrollable3.close()} style={{ marginLeft: pxToDp(32), marginRight: pxToDp(32), height: pxToDp(40), backgroundColor: '#62bfad', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(20) }}>
                        <Text style={{ fontSize: pxToDp(18), color: 'white' }}>取消</Text>
                    </TouchableOpacity>
                </RBSheet>
            </View>
        );
    }
}