import { StyleSheet ,Dimensions} from 'react-native'

const styles = StyleSheet.create({
  danmuWrapper: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  danmuItem: {
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  danmuItemContent: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 15,
    textAlign: 'center',
    color: '#fff'
  }
})

export default styles