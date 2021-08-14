import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { pxToDp } from '../../../utils/styleKits';
import Top from '../../../component/common/top'

class Index extends PureComponent {
    render() {
        return (
            <View>
                <Top icon1="arrow-back" title="双人剧本" />
                <ScrollView>
                    <View style={styles.topbox}>
                        <Image style={styles.image1} source={require('../../../res/1.jpg')} />
                        <View style={{ marginLeft: pxToDp(10) }}>
                            <Image style={styles.image2} source={require('../../../res/3.jpg')} />
                            <Image style={styles.image3} source={require('../../../res/8.jpg')} />
                        </View>
                    </View>
                    <Text style={styles.text1}>经典剧本</Text>
                    <View style={styles.botbox}>
                        <Image style={styles.image4} source={require('../../../res/play/1.jpg')} />
                        <View style={{ marginLeft: pxToDp(10) }}>
                            <Text style={styles.text2}>追鱼</Text>
           
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    topbox: {
        flexDirection: 'row',
        margin: pxToDp(10)
    },
    image1: {
        height: pxToDp(180),
        width: pxToDp(180),
        borderRadius: pxToDp(20)
    },
    image2: {
        height: pxToDp(85),
        width: pxToDp(165),
        borderRadius: pxToDp(10)
    },
    image3: {
        height: pxToDp(85),
        width: pxToDp(165),
        borderRadius: pxToDp(10),
        marginTop: pxToDp(10)
    },
    text1: {
        fontSize: pxToDp(20),
        fontWeight: 'bold',
        marginLeft: pxToDp(10)
    },
    image4: {
        height: pxToDp(120),
        width: pxToDp(120),
        borderRadius: pxToDp(10)
    },
    text2: {
        fontSize: pxToDp(18),
        fontWeight: 'bold',
        marginTop: pxToDp(10)
    },
    touch: {
        backgroundColor: '#B0E0E6',
        borderRadius: pxToDp(10),
        height: pxToDp(20),
        width: pxToDp(50),
        alignItems: 'center',
        marginTop: pxToDp(50)
    },
    botbox: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: pxToDp(0.5),
        margin: pxToDp(10),
        height: pxToDp(130)
    }
})
export default Index;