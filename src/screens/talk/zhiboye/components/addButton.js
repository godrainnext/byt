import React ,{ useRef }from 'react'
import {View,Text,StyleSheet,TouchableHighlight,TouchableOpacity ,Animated,Alert} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
export default function AddButton(){
   const state = {
    show : 0
  }
   const test = () => {
     Alert.alert("ddfdfdas")
   }
  const  mode = useRef(new Animated.Value(0)).current;
  const   buttonSize = useRef(new Animated.Value(1)).current 
  const itemSize = useRef(new Animated.Value(2)).current
  const hanldePress = () => {
    state.show === 0 ? state.show = 1 : state.show = 0
    Animated.sequence([
      Animated.timing(buttonSize, {
          toValue: 0.8,
          duration: 100,
          useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        useNativeDriver: true,
          toValue: 1
      }),
      Animated.timing(itemSize,{
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(itemSize, {
        useNativeDriver: true,
          toValue: 2
      }),
      Animated.timing(mode, {
        useNativeDriver: true,
        duration: 200,
          toValue: state.show === 0 ? 1 : 0
      })
  ]).start();
}
 const thermometerX = mode.interpolate({
  inputRange: [0, 1],
  outputRange: [-12, -100]
});

const thermometerY = mode.interpolate({
  inputRange: [0, 1],
  outputRange: [-50, -88]
});

const timeX = mode.interpolate({
  inputRange: [0, 1],
  outputRange: [-12, 0]
});

const timeY = mode.interpolate({
  inputRange: [0, 1],
  outputRange: [-50, -150]
});

const pulseX = mode.interpolate({
  inputRange: [0, 1],
  outputRange: [-12, 100]
});

const pulseY = mode.interpolate({
  inputRange: [0, 1],
  outputRange: [-50, -88]
});
 const   rotation = mode.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "45deg"]
  });
  

 const itemStyle = {
   transform:[{scale: itemSize}]
 }
  const   sizeStyle = {
      transform: [{ scale: buttonSize }]
    };

      return (
        <View style={{position: "absolute",alignItems:"center"}}>

                       <TouchableHighlight  onPress={()=>{
                              Alert.alert("dddddd")
                            }} style={{position:"absolute",justifyContent:"center", alignItems:"center",width:50,height:50}}>
                          <Animated.View style={{ transform: [{translateX: thermometerX,translateY:thermometerY }]}}>
                            
                            <View  style={styles.secondaryButton} >
                              <Icon name="ios-cafe" size={20} color="#FFFFFF" />
                            </View>
                    
                      
                        </Animated.View>
                       </TouchableHighlight>

                       <View style={{position:"absolute",justifyContent:"center", alignItems:"center",width:50,height:50}}>
                        <Animated.View style={{ transform: [{translateX: timeX,translateY:timeY }]}}>
                          
                          <View style={styles.secondaryButton} >
                            <Icon name="ios-clock" size={20} color="#FFFFFF" />
                          </View>
                  
                    
                      </Animated.View>
                       </View>

                       <View style={{position:"absolute",justifyContent:"center", alignItems:"center",width:50,height:50}}>
                        <Animated.View style={{ transform: [{translateX: pulseX,translateY:pulseY }]}}>
                          
                          <View style={styles.secondaryButton} >
                            <Icon name="ios-bus" size={20} color="#FFFFFF" />
                          </View>
                  
                    
                      </Animated.View>
                       </View>
                       <TouchableHighlight  onPress={hanldePress} style={styles.button} >
              <Animated.View style={[ sizeStyle]} >
                <View  underlayColor="#7F85FF">
                  <Animated.View  style={{ transform: [{ rotate: rotation }] }}>
                  {/* <Animated.View  > */}
                    <Icon name="ios-add" size={60} color="#CDCCCE" />
                  </Animated.View>
                </View>
              </Animated.View>
            </TouchableHighlight>  
                        {/* <Animated.View style={{ transform: [{translateX: thermometerX,translateY:thermometerY }]}}>
                      
                          <View style={styles.secondaryButton} >
                            <Icon name="ios-cafe" size={20} color="#FFFFFF" />
                          </View>
                  
                      
                        </Animated.View>
                 
                        <Animated.View style={{ transform: [{translateX: timeX,translateY:timeY}]}}>
                        <View style={styles.secondaryButton} >
                          <Icon name="ios-clock" size={20} color="#FFFFFF" />
                        </View>
                        </Animated.View>
                   
                   
                        <Animated.View style={{ transform: [{translateX: pulseX,translateY:pulseY}]}}>
                        <View style={styles.secondaryButton} >
                          <Icon name="ios-bus" size={20} color="#FFFFFF" />
                        </View>
                        </Animated.View> */}
                    
      
                      {/* <View style={{position:"absolute",transform: [{translateX: timeX,translateY:timeY }]}}>
                        <Animated.View style={{ transform: [{translateX: thermometerX,translateY:thermometerY }]}}>
                        <View style={styles.secondaryButton} >
                          <Icon name="ios-clock" size={24} color="#FFFFFF" />
                        </View>
                        </Animated.View>
                      </View>
      
                      <View style={{position:"absolute",transform:[{translateX: state.show === 0 ? -12 : 0}]}}>
                        <Animated.View style={{ transform: [{translateX: pulseX,translateY:pulseY }]}}>
                        <View style={styles.secondaryButton} >
                          <Icon name="ios-bus" size={24} color="#FFFFFF" />
                        </View>
                        </Animated.View>
                      </View>
       */}
  
                        

  
        </View>
      )
    

  
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#7F58FF",
    position: "absolute",
    marginTop: -60,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFFFFF"
  },
  secondaryButton: {

    // backgroundColor:'transparent',
    // marginTop:-24,
    // transform:[
    //   {
    //     translateX:12,
   
    //   }
    // ] ,
    // marginLeft: -20,
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    
    borderRadius: 24,
  
    
    backgroundColor: "#7F58FF"
}
})