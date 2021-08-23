import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { pxToDp } from "../../utils/styleKits";
import Ionicons from 'react-native-vector-icons/Ionicons';

class List extends PureComponent {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: pxToDp(8) }}>
                <Text style={{ fontSize: pxToDp(18), margin: pxToDp(4), color: '#000000' }}>{this.props.title}</Text>
                <Ionicons name="chevron-forward" size={24} color="#666666" />
            </View>
        )
    }
}


export default List;