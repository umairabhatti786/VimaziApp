import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Pressable,
  Keyboard,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { images } from "../../../assets/images";
import { useTheme } from "@react-navigation/native";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomInput from "../../../components/Input";
import { theme } from "../../../utils/Themes";
const LoginScreen = ({ navigation }: any) => {
  const { colors }: any = useTheme();
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  return (
    <>
      <ScreenLayout>
        <Pressable
          onPress={() => Keyboard.dismiss()}
          style={{
            flex: 1,
            gap: sizeHelper.calHp(60),
            paddingTop: sizeHelper.calHp(50),
          }}
        >
          <Image style={styles.logo_img} source={images.logo} />
          <View
            style={{
              gap: sizeHelper.calHp(30),
              backgroundColor: theme.colors.gray,
              paddingHorizontal: sizeHelper.calWp(20),
              borderRadius: sizeHelper.calWp(25),
              paddingVertical: sizeHelper.calHp(30),
            }}
          >
            <CustomText
              text={`Welcome to\nVimazi Login now !`}
              size={30}
              fontFam={fonts.SF_Pro_Semibold}
              style={{
                textAlign: "center",
                paddingHorizontal: sizeHelper.calWp(40),
              }}
              fontWeight={"600"}
            />

            <CustomInput label="Enter Email" placeholder="Type here" />

            <CustomInput
              label="Enter Password"
              secureTextEntry={showPassowrd}
              onRightSource={() => setShowPassowrd(!showPassowrd)}
              rightSource={!showPassowrd ? images.eye : images.eye_off}
              placeholder="Type here"
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsRemember(!isRemember)}
              style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}
            >
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

              <CustomText
                text={"Remember Password"}
                fontWeight="600"
                size={21}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
            </TouchableOpacity>
             <CustomButtom
            textColor={colors.forground}
            text="Login"
            onPress={() => navigation.navigate("BottomTab")}
            width={"100%"}
          />

             <TouchableOpacity
             onPress={()=>navigation.navigate("ForgotPasswordScreen")}
             style={{alignSelf:"center",padding:sizeHelper.calWp(10)}}
             >
            <CustomText
              text={"Forgot Password?"}
              fontWeight="600"
              size={21}
              fontFam={fonts.SF_Pro_Medium}
            />
          </TouchableOpacity>
          </View>
          <View
            style={{
              ...appStyles.rowjustify,
              width: "100%",
              paddingVertical: sizeHelper.calHp(20),
            }}
          >
          </View>

        
         

         

         
        </Pressable>

        <View
          style={{
            alignItems: "center",
            gap: sizeHelper.calWp(15),
            alignSelf: "center",
            paddingBottom: "8%",
          }}
        >
          <CustomText
            text={"Don’t have an account?"}
            fontWeight="600"
            size={19}
            color={theme.colors.text_gray}
            fontFam={fonts.SF_Pro_Semibold}
          />

          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <CustomText
              text={"Create an account"}
              fontWeight="600"
              textDecorationLine="underline"
              size={23}
              color={theme.colors.primary}
              fontFam={fonts.SF_Pro_Semibold}
            />
          </TouchableOpacity>
        </View>
      </ScreenLayout>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo_img: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    alignSelf: "center",
  },
  line: {
    flex: 1,
    height: sizeHelper.calHp(2),
  },
});
