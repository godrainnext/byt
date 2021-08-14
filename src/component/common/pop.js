import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import Model from './Modal';
import { TouchableOpacity } from 'react-native';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import { pxToDp } from '@utils/styleKits';

class index extends PureComponent {
  // const [isModalVisible, setModalVisible] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  // <Zujian arr={}/>
  // const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { item } = this.props;
    return (
      <View>
        <View
          key={index}
          style={{
            height: pxToDp(150),
            justifyContent: 'center',
            marginLeft: pxToDp(12)
          }}
        >
          {/* <Button title="我打开了" onPress={toggleModal} /> */}
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={this.toggleModal}
          >
            <View>
              <ImageBackground
                style={{ width: pxToDp(110), height: pxToDp(150) }}
                source={{ uri: item.uriFace }}
                imageStyle={{ borderRadius: pxToDp(10) }}
              >
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: pxToDp(150)
                  }}
                >
                  <Text
                    style={{
                      fontSize: pxToDp(18),
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.teaname}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Model
            item={item}
            isModalVisible={this.state.isModalVisible}
            toggleModalProps={this.toggleModal}
          />
        </View>
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  scrollableModal: {
    height: pxToDp(300)
  },
  scrollableModalContent1: {
    height: pxToDp(200),
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollableModalText1: {
    fontSize: pxToDp(20),
    color: 'white'
  },
  scrollableModalContent2: {
    height: pxToDp(200),
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollableModalText2: {
    fontSize: pxToDp(20),
    color: 'white'
  }
});
