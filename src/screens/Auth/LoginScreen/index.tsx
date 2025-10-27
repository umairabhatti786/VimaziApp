import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Keyboard,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomInput from "../../../components/Input";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import CustomHeader from "../../../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomToast from "../../../components/CustomToast";
import ScreenLoader from "../../../components/ScreenLoader";
import { emailRegex } from "../../../utils/Regex";
import { ApiServices } from "../../../api/ApiServices";
import { CommonActions } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../../redux/reducers/authReducer";
import {
  AUTH_DATA,
  StorageServices,
  TOKEN,
} from "../../../utils/StorageService";

const LoginScreen = ({ navigation }: any) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [securePassword, setSecurePassword] = useState(true);
  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [messageColor, setMessageColor] = useState(theme.colors.primary);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email_error: "",
    password_error: "",
  });

  const OnLogin = async () => {
    Keyboard.dismiss();
    if (!values?.email) {
      setMessage("Email is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }
    if (values?.email) {
      if (!emailRegex.test(values?.email)) {
        setMessage("Invalid Email Address");
        setIsMessage(true);
        setMessageColor(theme.colors.red);

        return;
      }
    }
    if (!values?.password) {
      setMessage("Password is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return;
    }

    setLoading(true);

    

    const raw = JSON.stringify({
      email: values?.email,
      password: values?.password,
    });
    let param = {
      raw: raw,
    };

    ApiServices.Login(param, async ({ isSuccess, response }: any) => {
      console.log("ckdnk",response)
      if (isSuccess) {
        let result = JSON.parse(response);

        if (result?.message == "Invalid credentials.") {
          setMessageColor(theme.colors.red);
          setIsMessage(true);
          setMessage(result?.message);
          setLoading(false);
        } else if (result?.errors) {
          setMessageColor(theme.colors.red);
          setMessage(result?.errors[0]?.message);
          setIsMessage(true);
          setLoading(false);
        } else {
          setMessageColor(theme.colors.primary);
          setMessage("Login Successfully");
          setIsMessage(true);
          setLoading(false);
          // setTimeout(() => {
          //   setIsMessage(false);
          //   dispatch(setAuthData(result));
          //   StorageServices.setItem(TOKEN, result?.token);
          //   StorageServices.setItem(AUTH_DATA, result);

          //   navigation.dispatch(
          //     CommonActions.reset({
          //       index: 0,
          //       routes: [{ name: "BottomTab" }],
          //     })
          //   );
          // }, 500);
        }
      } else {
        setMessageColor(theme.colors.red);
        setLoading(false);
        setMessage(response?.message);
        setIsMessage(true);
      }
    });
  };

  return (
    <>
      <ScreenLayout style={appStyles.screenLayout}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
            <CustomHeader />
            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText text={"Login"} fontWeight="700" size={33} />
              <CustomText
                color={theme.colors.gray}
                style={{ marginRight: sizeHelper.calWp(30) }}
                size={21}
                text={
                  "Login to access your account and take control of your finances"
                }
              />
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ gap: sizeHelper.calWp(25) }}>
                <CustomInput
                  label={"Email"}
                  value={values.email}
                  leftSource={icons.email}
                  placeholder="Email address"
                  focusedInput={focusedInput}
                  onChangeText={(txt: string) => {
                    setValues({ ...values, email: txt });

                    if (txt.trim().length === 0) {
                      setErrors({ ...errors, email_error: "" });
                      return;
                    }

                    if (!emailRegex.test(txt.trim())) {
                      setErrors({
                        ...errors,
                        email_error: "Invalid Email Address",
                      });
                      return;
                    }

                    // If valid email, clear error
                    setErrors({ ...errors, email_error: "" });
                  }}
                  setFocusedInput={setFocusedInput}
                  inputKey="email"
                />
                <View>
                  <CustomInput
                    label={"Password"}
                    value={values.password}
                    placeholder="Password"
                    leftSource={icons.lock}
                    rightSource={securePassword ? icons.eye_off : icons.eye}
                    secureTextEntry={securePassword}
                    onRightSource={() => setSecurePassword(!securePassword)}
                    onChangeText={(txt: string) =>
                      setValues({ ...values, password: txt })
                    }
                    focusedInput={focusedInput}
                    setFocusedInput={setFocusedInput}
                    inputKey="password"
                  />

                  <TouchableOpacity
                    onPress={() => navigation.navigate("EnterEmailScreen")}
                    style={{
                      flexDirection: "row",
                      alignSelf: "flex-end",
                      paddingVertical: sizeHelper.calHp(5),
                    }}
                  >
                    <CustomText
                      text={"Forgot Password?"}
                      fontWeight="600"
                      fontFam={fonts.PlusJakartaSans_SemiBold}
                      color={theme.colors.gray}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.botttom}>
              <CustomButton onPress={OnLogin} text="Login" width={"100%"} />

              <CustomText
                text={"Or login with"}
                color={theme.colors.gray100}
                style={{ textAlign: "center" }}
              />
              <TouchableOpacity style={styles.biomatric_btn}>
                <Image
                  source={icons.fingerpint}
                  style={{
                    width: sizeHelper.calWp(50),
                    height: sizeHelper.calWp(50),
                    resizeMode: "contain",
                  }}
                />
                <CustomText
                  text={"Biometric"}
                  fontWeight="600"
                  fontFam={fonts.PlusJakartaSans_SemiBold}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignupScreen")}
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  text={"Don't have an account?"}
                  fontWeight="600"
                  fontFam={fonts.PlusJakartaSans_Medium}
                />
                <CustomText
                  text={"Register"}
                  fontWeight="700"
                  fontFam={fonts.PlusJakartaSans_Bold}
                  textDecorationLine="underline"
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScreenLayout>
      <CustomToast
        isVisable={isMessage}
        backgroundColor={messageColor}
        setIsVisable={setIsMessage}
        message={message}
      />
      {loading && <ScreenLoader />}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: Platform.OS == "ios" ? "67%" : "70%",
  },
  biomatric_btn: {
    width: "100%",
    height: sizeHelper.calHp(80),
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizeHelper.calHp(18),
    flexDirection: "row",
    gap: sizeHelper.calWp(15),
  },
});
