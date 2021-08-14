import React, { PureComponent } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends PureComponent {
    state={
        zzz:[
        {id:1,title:'全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演',Imguri:''},
        {id:2,title:'全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演',Imguri:''},
        {id:3,title:'全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演',Imguri:''},
        {id:4,title:'全国越剧汇演之上海越剧院《双珠凤》，方亚芬徐标新主演',Imguri:''},
    
    ]
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
                {this.state.zzz.map((item,id)=>(
                <View  key={id} style={{margin:pxToDp(10),flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:pxToDp(1),height:pxToDp(110)}}>
                    <View style={{ width: pxToDp(220) }}>
                        <Text style={{ fontSize: pxToDp(17),marginTop:pxToDp(5) }}>{item.title}</Text>
                    </View>
                    <Image style={{width:pxToDp(135),height:pxToDp(90)}} source={{uri:item.Imguri}} />
              </View>) )}
            </ScrollView>
        )
    }
}
export default Index;