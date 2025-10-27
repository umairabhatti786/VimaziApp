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
import { emailRegex } from "../../../utils/Regex";
import CustomToast from "../../../components/CustomToast";
import ScreenLoader from "../../../components/ScreenLoader";
import { useDispatch } from "react-redux";
import { setSignupState } from "../../../redux/reducers/authReducer";

const SignupScreen = ({ navigation }: any) => {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureReTypePassword, setSecureReTypePassword] = useState(true);

  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [messageColor, setMessageColor] = useState(theme.colors.primary);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    re_type_password: "",
  });

  const [errors, setErrors] = useState({
    name_error: "",
    phone_error: "",
    email_error: "",
    password_error: "",
    re_type_password_error: "",
  });

  const OnSignup = async () => {
    Keyboard.dismiss();

    if (!values?.name) {
      setMessage("Name is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return;
    }

    if (values?.name.length < 2) {
      setMessage("The Name must be at least 2 characters.");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return;
    }

    // if (!values?.phone) {
    //   setMessage("Phone Number is required");
    //   setIsMessage(true);
    //   setMessageColor(theme.colors.red);

    //   return;
    // }

    // if (values?.phone) {
    //   if (!phoneRegex.test(values?.phone.trim())) {
    //     setMessage("Invalid Phone Number");
    //     setIsMessage(true);
    //     setMessageColor(theme.colors.red);

    //     return;
    //   }
    // }
    if (!values?.email) {
      setMessage("Email is required");
      setIsMessage(true);
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
    if (values.password.length < 8) {
      setMessage("Your password must be at least 8 characters");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return;
    }
    if (values?.password != values.re_type_password) {
      setMessage("Re-type password not match");
      setIsMessage(true);
      setMessageColor(theme.colors.red);
      return;
    }
    dispatch(setSignupState(values));
    navigation.navigate("ProofOfResidency");
  };

  return (
    <>
      <ScreenLayout style={appStyles.screenLayout}>
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
            <CustomHeader />
            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText
                text={"Create Your Free Account"}
                fontWeight="700"
                size={33}
              />
              <CustomText
                color={theme.colors.gray}
                style={{ marginRight: sizeHelper.calWp(30) }}
                size={21}
                text={
                  "Send money in minutes. Safe, secure, and trusted worldwide."
                }
              />
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ gap: sizeHelper.calWp(25) }}>
                <CustomInput
                  label={"Name"}
                  value={values.name}
                  leftSource={icons.user}
                  placeholder="Full name"
                  onChangeText={(txt: string) =>
                    setValues({ ...values, name: txt })
                  }
                />
                <CustomInput
                  label={"Email"}
                  value={values.email}
                  leftSource={icons.email}
                  error={errors.email_error}
                  placeholder="Email address"
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
                />
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
                />
                <CustomInput
                  label={"Re-type password"}
                  value={values.re_type_password}
                  placeholder="Password"
                  error={errors.re_type_password_error}
                  leftSource={icons.lock}
                  rightSource={secureReTypePassword ? icons.eye_off : icons.eye}
                  secureTextEntry={secureReTypePassword}
                  onRightSource={() =>
                    setSecureReTypePassword(!secureReTypePassword)
                  }
                  onChangeText={(txt: string) => {
                    setValues({ ...values, re_type_password: txt });
                    if (!txt) {
                      setErrors({
                        ...errors,
                        re_type_password_error: "",
                      });

                      return;
                    }
                    if (values.password != txt) {
                      setErrors({
                        ...errors,
                        re_type_password_error: "Re-type password not match",
                      });

                      return;
                    }
                    setErrors({ ...errors, re_type_password_error: "" });
                  }}
                />
              </View>
            </View>

            <View style={styles.botttom}>
              <CustomButton
                // onPress={() => navigation.navigate("YourIdentity")}
                onPress={OnSignup}
                text="Signup"
                width={"100%"}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  text={"Already have an account?"}
                  fontWeight="600"
                  fontFam={fonts.PlusJakartaSans_Medium}
                />
                <CustomText
                  text={"Login"}
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

export default SignupScreen;

const styles = StyleSheet.create({
  botttom: {
    gap: sizeHelper.calHp(20),
    paddingTop: Platform.OS == "ios" ? "50%" : "55%",
  },
});
