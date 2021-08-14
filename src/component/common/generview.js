import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { pxToDp } from '../../utils/styleKits';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <View style={styles.box}>
                    <Image style={styles.image} source={{ uri: this.props.imguri }} />
                    <View style={{ marginTop: pxToDp(20), width: pxToDp(240) }}>
                        <Text style={styles.text1}>{this.props.name}</Text>
                        <Text style={styles.text2}>{this.props.special}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: pxToDp(110),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginBottom: pxToDp(5),
        marginBottom: pxToDp(5),
        borderRadius: pxToDp(10)
    },
    image: {
        height: pxToDp(90),
        width: pxToDp(90),
        borderRadius: pxToDp(7),
        margin: pxToDp(10)
    },
    text1: {
        fontSize: pxToDp(18),
        fontWeight: 'bold'
    },
    text2: {
        fontSize: pxToDp(12),
        marginTop: pxToDp(10)
    }
})
export default Index;