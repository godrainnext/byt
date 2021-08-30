import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    BVLinearGradient,
    TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp, screenWidth } from '../../utils/styleKits';
import LinearGradient from 'react-native-linear-gradient';
export default class HeaderHaveBack extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: true,
        };
    }

    static contextType = NavigationContext;
    render() {
        const { showTitle } = this.state;
        return (
            <LinearGradient
                style={styles.box}
                colors={['#62bfad', '#62bfad']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0 }}
            >
                <View style={styles.textview}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(345), height: pxToDp(38), borderRadius: pxToDp(8), backgroundColor: "white" }}>
                        <TextInput placeholder={"搜索"} style={{ fontSize: pxToDp(14), width: pxToDp(305), marginLeft: pxToDp(32) }} />
                        <TouchableOpacity style={{ marginRight: pxToDp(32) }}>
                            <Ionicons name='search' size={23} color="#999999" />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        width: screenWidth,
        flexDirection: 'row',
        // backgroundColor: '#e0f3fe',
        height: pxToDp(56)
    },
    icon1: {
        width: pxToDp(45),
        left: 16,
        bottom: 8
    },
    icon2: {
        width: pxToDp(45),
        bottom: 8
    },
    textview: {
        flex: 1,
        alignItems: 'center'
    },
    textstyle: {
        fontSize: pxToDp(18),
        color: '#468cd3'
    }
});
