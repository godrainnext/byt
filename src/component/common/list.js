import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from "../../utils/styleKits";

class List extends PureComponent {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: pxToDp(8) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name={this.props.icon} size={18} color="#468CD3" />
                    <Text style={{ fontSize: pxToDp(14), margin: pxToDp(4), marginLeft: pxToDp(8), color: '#000000' }}>{this.props.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={15} color="#666666" />
            </View>
        )
    }
}


export default List;
