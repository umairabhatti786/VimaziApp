import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { images } from "../../../assets/images";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";
import { theme } from "../../../utils/Themes";
const PasswordResetScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <Pressable
          onPress={() => Keyboard.dismiss()}
          style={{
            flex: 1,

            paddingTop: sizeHelper.calHp(50),
          }}
        >
          <Image style={appStyles.logo_img} source={images.logo} />
          <View style={styles.inner_container}>
            <CustomText
              text={`Password reset`}
              size={30}
              fontFam={fonts.SF_Pro_Semibold}
              style={{
                textAlign: "center",
              }}
              fontWeight={"600"}
            />

            <View style={{ alignItems: "center" }}>
              <CustomText
                text={`Please enter the code what we have send to`}
                size={20}
                color={theme.colors.text_gray}
              />
              <CustomText text={`muraddc0@gmail.com`} size={20} />
            </View>

            <CustomInput label="Enter Code"
            keyboard={"number-pad"}
             placeholder="Type here" />

            <CustomButtom
              text="Continue"
              onPress={() => navigation.navigate("CreateNewPasswordScreen")}
              width={"100%"}
            />
          </View>
          <View
            style={{
              ...appStyles.rowjustify,
              width: "100%",
              paddingVertical: sizeHelper.calHp(20),
            }}
          ></View>
        </Pressable>

        <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
          style={styles.bottom_container}
        >
          <Image
            source={images.back_arrow}
            style={{
              width: sizeHelper.calWp(25),
              height: sizeHelper.calWp(25),
            }}
            resizeMode={"contain"}
          />
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <CustomText
              text={"Back to Login"}
              fontWeight="600"
              size={20}
              color={theme.colors.primary}
              fontFam={fonts.SF_Pro_Semibold}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScreenLayout>
    </>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
  logo_img: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    alignSelf: "center",
  },
  inner_container: {
    gap: sizeHelper.calHp(20),
    backgroundColor: theme.colors.gray,
    paddingHorizontal: sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(25),
    paddingVertical: sizeHelper.calHp(30),
    marginTop: "30%",
  },
  bottom_container: {
    alignItems: "center",
    gap: sizeHelper.calWp(15),
    alignSelf: "center",
    paddingBottom: "8%",
    flexDirection: "row",
  },
});
