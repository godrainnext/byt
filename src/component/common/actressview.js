import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
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
                        <Image style={styles.image} source={this.props.picture}/>
                            <Text style={styles.text1}>{this.props.name}</Text>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        marginTop:pxToDp(0),
        marginBottom:pxToDp(20),
        marginLeft:pxToDp(0),
        marginRight:pxToDp(3),
        alignItems:'center'
    },
    image: {
        height: pxToDp(80),
        width: pxToDp(80),
        borderRadius: pxToDp(40),
        margin: pxToDp(8)
    },
    text1: {
        fontSize: pxToDp(17)
    }
})
export default Index;