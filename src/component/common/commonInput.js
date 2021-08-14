import React,{ PureComponent } from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import { pxToDp } from "../../utils/styleKits";

class CommonInput extends PureComponent{
    render(){
        return(
            <View style={styles.commonInput}>
                <TextInput style={styles.TextInput}  {...this.props}  placeholder={this.props.placeholder||"请输入"}/>
      
            </View>
        )
    }
}
const styles = StyleSheet.create({
 commonInput:{
     flexDirection:"row",
     alignItems:"center",
     backgroundColor:"white",
     borderBottomColor: 'lightgray',
     borderBottomWidth: 1,
     marginLeft:pxToDp(30),
     marginRight:pxToDp(30),
     marginTop:pxToDp(20)
 },
 TextInput:{
     fontSize:pxToDp(18),
     color: "black"
 },
    })

export default CommonInput;

