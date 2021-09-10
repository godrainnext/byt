import React, { Component } from 'react'
import { View, Animated, Text } from 'react-native'

import styles from './styles'

class Danmaku extends Component {
  constructor (props) {
    super(props)
    const { data } = props
    this.animatedValue = []
    data.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount() {
    this.handleAnimated()
  }

  render () {
    const { data } = this.props
    const animations = data.map((item, index) => {
      const animatedItem = this.animatedValue[item]
      const opacityValue = animatedItem.interpolate({
        inputRange: [0, 0.3, 0.7, 1],
        outputRange: [0, 1, 1, 0]
      })
      const transformY = animatedItem.interpolate({
        inputRange: [0, 0.3, 0.7, 1],
        outputRange: [0, -50, -50, -100]
      })
      const transformX = animatedItem.interpolate({
        inputRange: [0, 0.3, 0.7, 1],
        outputRange: [-60, 0, 0, -60]
      })
      const scaleValue = animatedItem.interpolate({
        inputRange: [0, 0.3, 0.7, 1],
        outputRange: [0.5, 1, 1, 0.5]
      })
      return <Animated.View
        key={index}
        style={[
          styles.danmuItem,
          {
            opacity: opacityValue,
            transform: [
              {
                translateY: transformY
              },
              {
                translateX: transformX
              },
              {
                scale: scaleValue
              }
            ]
          }
        ]}>
        <Text style={styles.danmuItemContent}>{item}</Text>
      </Animated.View>
    })
    return (
      <View style={styles.danmuWrapper}>
        { animations }
      </View>
    )
  }

  handleAnimated = () => {
    const { data } = this.props
    data.forEach(item => this.animatedValue[item].setValue(0))
    const animations = data.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }
      )
    })
    Animated.stagger(1500, animations).start(() => this.handleAnimated())
  }
}

export default Danmaku