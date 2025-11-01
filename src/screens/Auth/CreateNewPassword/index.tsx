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
const CreateNewPasswordScreen = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [reTypePassowrd, setReTypePassowrd] = useState(false);

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
              text={`Create a new password`}
              size={30}
              fontFam={fonts.SF_Pro_Semibold}
              style={{
                textAlign: "center",
              }}
              fontWeight={"600"}
            />

            <CustomText
              text={`Must be in 8 character.`}
              size={20}
              color={theme.colors.text_gray}
              style={{
                textAlign: "center",
              }}
            />

            <CustomInput
              label="Enter Password"
              secureTextEntry={showPassowrd}
              onRightSource={() => setShowPassowrd(!showPassowrd)}
              rightSource={!showPassowrd ? images.eye : images.eye_off}
              placeholder="Type here"
            />

            <CustomInput
              label="Retype New Password"
              secureTextEntry={reTypePassowrd}
              onRightSource={() => setReTypePassowrd(!reTypePassowrd)}
              rightSource={!reTypePassowrd ? images.eye : images.eye_off}
              placeholder="Type here"
            />

            <CustomButtom
              text="Save Password"
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

export default CreateNewPasswordScreen;

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
