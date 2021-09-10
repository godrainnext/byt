import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
export default class HeaderHaveBack extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.line}></View>
                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: pxToDp(16),
        marginTop: pxToDp(8)
    },
    line: {
        height: pxToDp(1),
        width: pxToDp(110),
        backgroundColor: '#000000',
        marginRight: pxToDp(16)
    },
    circle1: {
        height: pxToDp(30),
        width: pxToDp(30),
        borderRadius: pxToDp(15),
        borderColor: '#000000',
        borderWidth: pxToDp(1),
        zIndex: 9999
    },
    circle2: {
        height: pxToDp(30),
        width: pxToDp(30),
        borderRadius: pxToDp(15),
        backgroundColor: '#D5E8E6',
        marginLeft: pxToDp(-35),
        marginTop: pxToDp(-10)
    }
});
