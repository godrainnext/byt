/**
 * Created by guangqiang on 2017/8/27.
 */

import { Platform } from 'react-native'
import { pxToDp } from '../../../utils/styleKits'
export const commonStyle = {

  /** color **/
  // 常用颜色
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#00FF00',
  cyan: '#00FFFF',
  blue: '#0000FF',
  purple: '#800080',
  black: '#000',
  white: '#FFF',
  gray: '#808080',
  drakGray: '#A9A9A9',
  lightGray: '#D3D3D3',
  tomato: '#FF6347',
  PeachPuff: '#FFDAB9',
  clear: 'transparent',

  /** 主题色 **/
  themeColor: '#e74c3c',
  // 默认灰色字体颜色
  textGrayColor: '#989898',
  // 默认黑色字体颜色
  textBlockColor: '#262626',
  // 默认背景颜色
  bgColor: '#E6E6E6',
  // 默认分割线颜色
  lineColor: '#E6E6E6',
  // 默认placeholder颜色
  placeholderColor: '#eee',
  // borderColor
  borderColor: '#808080',
  // 导航title 颜色
  navTitleColor: '#262626',
  // 导航左item title color
  navLeftTitleColor: '#333',
  // 导航右item title color
  navRightTitleColor: '#333',
  navThemeColor: '#FEFEFE',
  iconGray: '#989898',
  iconBlack: '#262626',

  /** space **/
  // 上边距
  marginTop: pxToDp(8),
  // 左边距
  marginLeft: pxToDp(8),
  // 下边距
  marginBotton: pxToDp(8),
  // 右边距
  marginRight: pxToDp(8),
  // 内边距
  padding: pxToDp(8),
  // 导航的leftItem的左间距
  navMarginLeft: pxToDp(8),
  // 导航的rightItem的右间距
  navMarginRight: pxToDp(8),

  /** width **/
  // 导航栏左右按钮image宽度
  navImageWidth: pxToDp(25),
  // 边框线宽度
  borderWidth: pxToDp(1),
  // 分割线高度
  lineWidth: pxToDp(0.8),

  /** height **/
  // 导航栏的高度
  navHeight: Platform.OS === 'ios' ? 64 : 56,
  // 导航栏顶部的状态栏高度
  navStatusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  // 导航栏除掉状态栏的高度
  navContentHeight: Platform.OS === 'ios' ? 44 : 56,
  // tabBar的高度
  tabBar: pxToDp(49),
  // 底部按钮高度
  bottonBtnHeight: pxToDp(44),
  // 通用列表cell高度
  cellHeight: pxToDp(44),
  // 导航栏左右按钮image高度
  navImageHeight: pxToDp(25),

  /** font **/
  // 默认文字字体
  textFont: pxToDp(14),
  // 默认按钮文字字体
  btnFont: pxToDp(15),
  // 导航title字体
  navTitleFont: pxToDp(17),
  // tabBar文字字体
  barBarTitleFont: pxToDp(12),
  // 占位符的默认字体大
  placeholderFont: pxToDp(13),
  // 导航左按钮的字体
  navRightTitleFont: pxToDp(15),
  // 导航右按钮字体
  navLeftTitleFont: pxToDp(15),

  /** opacity **/
  // mask
  modalOpacity: 0.3,
  // touchableOpacity
  taOpacity: 0.1,

  /** 定位 **/
  absolute: 'absolute',

  /** flex **/
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  row: 'row'
}