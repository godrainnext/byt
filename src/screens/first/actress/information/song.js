import React, { PureComponent } from "react";
import { View, Text, Image,ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends PureComponent {
    state={
        song:[{title:'婆婆说话你可听到',people:'方亚芬',imgrui:''},{title:'婆婆说话你可听到',people:'方亚芬',imgrui:''},{title:'婆婆说话你可听到',people:'方亚芬',imgrui:''},]
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
            {this.state.song.map((item,id)=>(  
                <View style={{ margin: pxToDp(10), flexDirection: 'row', borderBottomWidth: pxToDp(1), borderBottomColor: 'grey', height: pxToDp(90) }}>
                    <Image style={{ height: pxToDp(80), width: pxToDp(80), borderRadius: pxToDp(40) }} source={{uri:item.imgrui} }/>
                    <View style={{ marginLeft: pxToDp(10), marginTop: pxToDp(8) }}>
                        <Text style={{ fontSize: pxToDp(18) }}>{item.title}</Text>
                        <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(10) }}>{item.people}</Text>
                    </View>
                </View>
            ))}
                
            </ScrollView>

        );
    }
}
export default Index;