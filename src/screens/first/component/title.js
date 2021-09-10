import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
export default class HeaderHaveBack extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.box}>
                <LinearGradient
                    style={styles.blue}
                    colors={['#D5E8E6', 'white']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 2 }}
                >
                </LinearGradient>
                <Text style={styles.text}>{this.props.title}</Text>
                <View style={styles.line}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        marginTop: pxToDp(24)
    },
    blue: {
        height: pxToDp(30),
        width: pxToDp(70),
        backgroundColor: '#95D4D6',
        marginRight: pxToDp(30),
        marginBottom: pxToDp(-15)
    },
    text: {
        fontSize: pxToDp(18),
        color: '#000000',
        fontWeight: 'bold'
    },
    line: {
        width: pxToDp(80),
        height: pxToDp(1),
        backgroundColor: '#000000',
        marginTop: pxToDp(4)
    }
});
