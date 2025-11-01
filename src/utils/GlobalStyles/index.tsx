import {StyleSheet } from 'react-native';
import sizeHelper from '../Helpers';
export const appStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowjustify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

   logo_img: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    alignSelf: "center",
  },
});
