import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupScreen = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [reTypePassowrd, setReTypePassowrd] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  return (
    <>
      <ScreenLayout>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableAutomaticScroll
          keyboardShouldPersistTaps="handled"
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            paddingTop: sizeHelper.calHp(30),
          }}
          enableOnAndroid={true}
          extraScrollHeight={sizeHelper.calHp(100)} // give some space above keyboard
        >
          <Image style={appStyles.logo_img} source={images.logo} />
          <View style={styles.inner_container}>
            <CustomText
              text={`Welcome to\nVimazi Create an account !`}
              size={30}
              fontFam={fonts.SF_Pro_Semibold}
              style={{
                textAlign: "center",
              }}
              fontWeight={"600"}
            />

           

            <CustomInput label="Name of Your Clinic" placeholder="Type here" />
            <CustomInput
              label="Location"
              placeholder="Type here"
              rightSource={images.location}
            />
            <View style={appStyles.rowjustify}>
              <CustomInput
                width={"48%"}
                label="First Name"
                placeholder="Type here"
              />
              <CustomInput
                label="Last Name"
                width={"48%"}
                placeholder="Type here"
              />
            </View>
            <CustomInput label="Email" placeholder="Type here" />

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

            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsRemember(!isRemember)}
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                  backgroundColor: theme.colors.green,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: sizeHelper.calWp(10),
                }}
              >
                {isRemember && (
                  <Image
                    source={images.check}
                    style={{
                      width: sizeHelper.calWp(25),
                      height: sizeHelper.calWp(25),
                    }}
                    resizeMode={"contain"}
                  />
                )}
              </TouchableOpacity>
              <View>
                <CustomText
                  text={"By clicking create account you will be agree with"}
                  fontWeight="600"
                  size={20}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                />
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                  <CustomText
                    text={"our"}
                    fontWeight="600"
                    size={20}
                    color={theme.colors.text_gray}
                    fontFam={fonts.SF_Pro_Medium}
                  />
                  <TouchableOpacity>
                    <CustomText
                    text={"Terms & Conditions"}
                    fontWeight="600"
                    size={20}

                    color={theme.colors.primary}
                    fontFam={fonts.SF_Pro_Medium}
                  />
                  </TouchableOpacity>
                  <CustomText
                    text={"and"}
                    fontWeight="600"
                    size={20}
                    color={theme.colors.text_gray}
                    fontFam={fonts.SF_Pro_Medium}
                  />
                  <TouchableOpacity>
                    <CustomText
                    text={"Privacy Policy . "}
                    fontWeight="600"
                    size={20}
                    color={theme.colors.primary}
                    fontFam={fonts.SF_Pro_Medium}
                  />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <CustomButtom
              text="Continue"
              onPress={() => navigation.navigate("VerificationScreen")}
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
                text={"Back to Login"}
                fontWeight="600"
                size={20}
                color={theme.colors.primary}
                fontFam={fonts.SF_Pro_Semibold}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ScreenLayout>
    </>
  );
};

export default SignupScreen;

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
    marginTop: "10%",
  },
  bottom_container: {
    alignItems: "center",
    gap: sizeHelper.calWp(15),
    alignSelf: "center",
    paddingBottom: "8%",
    flexDirection: "row",
  },
});
