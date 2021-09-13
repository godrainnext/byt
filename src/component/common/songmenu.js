import React, { PureComponent, createRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { pxToDp } from '../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

const height = Dimensions.get('screen').height;
export class AlwaysOpen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, song: '祥林嫂-问苍天', singer: '袁雪芬' },
        { id: 2, song: '白蛇传-断桥', singer: '袁雪芬' },
        { id: 3, song: '西厢记-琴心', singer: '袁雪芬' },
        { id: 4, song: '梁祝哀史-哭灵', singer: '袁雪芬' },
        { id: 5, song: '双烈记-夸夫', singer: '袁雪芬' },
        { id: 6, song: '香妃-哭头', singer: '袁雪芬' },
        { id: 7, song: '相思树-绣鱼书', singer: '袁雪芬' },
        { id: 8, song: '梅花魂-堕岩', singer: '袁雪芬' },
        { id: 9, song: '火椰村-夜渡', singer: '袁雪芬' },
        { id: 10, song: '火椰村-战歌', singer: '袁雪芬' }
      ],
      isClick: false
    };
  }
  pause = () => {
    this.setState({ isClick: !this.state.isClick });
  };
  static contextType = NavigationContext;
  modalizeRef = createRef(null);
  renderContent = () => (
    <View>
      {this.state.data.map((item) => (
        <View key={item.id} style={s.song}>
          <View style={s.smallbox}>
            <Text style={{ fontSize: pxToDp(12), color: 'grey' }}>
              {item.id}
            </Text>
            <View style={{ marginLeft: pxToDp(20) }}>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  color: 'black',
                  fontWeight: 'bold'
                }}
              >
                {item.song}
              </Text>
              <Text style={{ fontSize: pxToDp(12), color: 'grey' }}>
                {item.singer}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.changeIndex(item.id);
              this.pause();
            }}
          >
            <Ionicons
              name={
                item.id === this.props.currentIndex && !this.props.ispaused
                  ? 'pause-circle-outline'
                  : 'caret-forward-circle-outline'
              }
              size={28}
              color="grey"
            />
            {item.id === this.props.currentIndex ? (
              <LottieView
                style={{
                  width: pxToDp(50),
                  position: 'absolute',
                  left: pxToDp(-6.5),
                  top: pxToDp(-5.5)
                }}
                source={require('../../../lottie/音乐播放.json')}
                autoPlay={true}
                loop={true}
              />
            ) : (
              <View />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
  render() {
    return (
      <Modalize
        ref={this.modalizeRef}
        modalStyle={s.content__modal}
        alwaysOpen={260}
        handlePosition="inside"
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  content__modal: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16
  },

  content__subheading: {
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc'
  },

  content__heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333'
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666'
  },
  bigbox: {
    height: pxToDp(800),
    marginTop: pxToDp(20)
  },
  song: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: pxToDp(350),
    flexDirection: 'row',
    marginTop: pxToDp(10)
  },
  smallbox: {
    flexDirection: 'row',
    marginLeft: pxToDp(16),
    marginRight: pxToDp(16),
    marginTop: pxToDp(8),
    alignItems: 'center'
  }
});
