import React, { PureComponent } from "react";
import { View, Text,Image,ScrollView } from "react-native";
import { pxToDp } from "../../../../utils/styleKits";

class Index extends PureComponent{
    state={ 
        img:[{imguri:''},{imguri:''},{imguri:''},{imguri:''},]
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#E2F4FE'}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
            
               {this.state.img.map((item,id)=>(  
                    <Image 
                    key={id}
                    style={{height:pxToDp(300),width:pxToDp(250),margin:pxToDp(10)}} source={{uri:item.imguri}}/>
               ) )}
               </View>
            </ScrollView>
        );
    }
}
export default Index;