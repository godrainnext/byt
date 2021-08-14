import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { pxToDp } from '../utils/styleKits';

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
                        <Image style={styles.image} source={require('../res/1.jpg')}/>
                            <Text style={styles.text1}>zhaowumian</Text>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        margin: pxToDp(10),
        alignItems:'center'
    },
    image: {
        height: pxToDp(90),
        width: pxToDp(90),
        borderRadius: pxToDp(45),
        margin: pxToDp(10)
    },
    text1: {
        fontSize: pxToDp(17),
        fontWeight: 'bold',
    }
})
export default Index;