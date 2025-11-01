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
const VerificationScreen = ({ navigation }: any) => {
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
              text={`License Verification`}
              size={25}
              textTransform={"uppercase"}
              fontFam={fonts.SF_Pro_Medium}
              style={{
                textAlign: "center",
              }}
              color={theme.colors.text_gray}
              fontWeight={"600"}
            />

            <CustomText
            style={{textAlign:"center"}}
              text={`Your license allows access to this app and related services. Billing and subscription are managed externally.`}
              size={23}
            />

            <CustomInput
              label="Clinician License Code"
              keyboard={"number-pad"}
              placeholder="Type here"
            />

            <CustomButtom
              text="Verify License"
              onPress={() => navigation.navigate("LoginScreen")}
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
          onPress={() => navigation.goBack()}
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

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomText
              text={"Back"}
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

export default VerificationScreen;

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
