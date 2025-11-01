import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../assets/images';
import { theme } from '../../utils/Themes';
import { appStyles } from '../../utils/GlobalStyles';
import CustomText from '../Text';
import CustomHeader from '../CustomHeader';

const AddNewPatientSheet = ({ onPress, disableLeftSource }: any) => {
  const navigation = useNavigation();
  return (
     <View
           style={{
          padding:sizeHelper.calWp(30)
           }}
         >
          <CustomHeader/>
          
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

export default AddNewPatientSheet;
