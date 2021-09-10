/**
 * Created by guangqiang on 2017/9/14.
 */
<<<<<<< HEAD
import React, {PureComponent} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {OIcon} from './oneIconFont'
import PropTypes from 'prop-types'
const iconMap = {
  fontAwesome: FontAwesome,
  oneIcon: OIcon
}

class Icon extends PureComponent {
=======
import React, { PureComponent } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { OIcon } from './oneIconFont';
import PropTypes from 'prop-types';
const iconMap = {
  fontAwesome: FontAwesome,
  oneIcon: OIcon
};
>>>>>>> 79f2cdd68d07ea5de450ea78dffa46d79080a294

class Icon extends PureComponent {
  render() {
    const { name, size, color } = this.props;
    if (!name.includes('|')) {
      throw new Error('name 解析错误！');
      return null;
    }
    let nameArr = name.split('|');
    let fontlib = nameArr[0];
    let font = nameArr[1];
    let CustomIcon = iconMap[fontlib];
    if (!CustomIcon) throw new Error('没有找到匹配的font库，请review代码！');
    return <CustomIcon name={font} size={size} color={color} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export { Icon };
