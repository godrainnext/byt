import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

class App extends Component {
  state = {
    modalVisible: true
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
zzz=()=>{
   return (

      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image />
          </View>
        </View>
      </Modal>
    </View>

       

    );
}
  render() {
    const { modalVisible } = this.state;
   return(
     <View>
       <TouchableHighlight onPress={this.zzz}>
         <Text>1111111111111111111111</Text>
       </TouchableHighlight>

     </View>
   )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    height:'75%',
    width:'90%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;