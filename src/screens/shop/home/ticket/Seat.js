import React, { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { pxToDp } from '@utils/styleKits';
import { seat1, seat2, seat3 } from '@components/common/iconSvg';
export default memo(function Seat(props) {
  const [choose, setchoose] = useState(false);
  const item = props.item;
  const seat = item.seat;
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={item.id}
      onPress={() => setchoose(!choose)}
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: pxToDp(16),
        marginLeft: pxToDp(12)
      }}
    >
      <SvgUri
        svgXmlData={seat === seat1 ? seat1 : choose ? seat2 : seat3}
        width="30"
        height="30"
      />
    </TouchableOpacity>
  );
});
