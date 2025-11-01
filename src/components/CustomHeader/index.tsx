import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../assets/images';
import { theme } from '../../utils/Themes';
import { appStyles } from '../../utils/GlobalStyles';
import CustomText from '../Text';
import { fonts } from '../../utils/Themes/fonts';

const CustomHeader = ({ onPress, title,navigation }: any) => {
  return (
     <View
           style={{
             ...appStyles.rowjustify,
           }}
         >
           <TouchableOpacity
             onPress={onPress}
             style={styles.back_container}
           >
             <Image
               style={{ ...styles.icon, tintColor: theme.colors.text_gray }}
               source={images.back_arrow}
             />
           </TouchableOpacity>
           <View style={{ flex: 1, alignItems: "center" }}>
             <CustomText
               text={title}
               fontWeight={"700"}
               style={{ textAlign: "center" }}
               fontFam={fonts.SF_Pro_Bold}
               size={25}
             />
           </View>
           <View style={{ width: 60 }} />
         </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

   back_container: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(80),
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
  },

   icon: {
    width: sizeHelper.calWp(30),
    height: sizeHelper.calWp(30),
    resizeMode: "contain",
  },
});

export default CustomHeader;
