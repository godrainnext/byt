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
                colors={[ '#37a49f','#AFE0FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0}}
            >
                <View
                    style={{
                        marginTop: pxToDp(16),
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <View style={styles.icon2}>
                        <TouchableOpacity onPress={() => this.setState({ showTitle: !showTitle })}>
                            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                            <Ionicons name={this.props.icon2} size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textview}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(308), height: pxToDp(38), marginTop: pxToDp(-16), borderRadius: pxToDp(8), backgroundColor: "white", }}>
                            <TextInput placeholder={"搜索"} style={{ fontSize: pxToDp(14), width: pxToDp(290), }} />
                        </View>
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
        marginLeft:pxToDp(16),
        bottom: 8
    },
    textview: {
        flex: 1,
        top: pxToDp(3),
        marginLeft:pxToDp(-10)
    },
    textstyle: {
        fontSize: pxToDp(18),
        color: '#468cd3'
    }
});
