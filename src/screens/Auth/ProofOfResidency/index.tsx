import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import CustomHeader from "../../../components/Header";
import CountryDropdown from "../../../components/CountryDropdown";
import { countryData } from "../../../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import {
  getSignupState,
  setAuthData,
} from "../../../redux/reducers/authReducer";
import CustomToast from "../../../components/CustomToast";
import ScreenLoader from "../../../components/ScreenLoader";
import { ApiServices } from "../../../api/ApiServices";
import { CommonActions } from "@react-navigation/native";
import {
  AUTH_DATA,
  StorageServices,
  TOKEN,
} from "../../../utils/StorageService";

type SelectedCountryType = {
  icon: string;
  name: string;
  id: number;
  code: string;
};

const ProofOfResidency = ({ navigation }: any) => {
  const [verificationMethod, setVerificationMethod] = useState("");
  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [messageColor, setMessageColor] = useState(theme.colors.primary);
  const [isDisable, setIsDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState<
    SelectedCountryType | undefined
  >(undefined);
  const signupState: any = useSelector(getSignupState);
  const VerificationMethodBox = ({ title, selected, onPress }: any) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.verificationBox}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              borderColor:
                selected == title
                  ? theme.colors.primary
                  : theme.colors.input_field_stroke,
              width: sizeHelper.calWp(32),
              height: sizeHelper.calWp(32),
              borderRadius: sizeHelper.calWp(7),
              borderWidth: 1,

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Image
              style={{
                width: "50%",
                height: "50%",
                tintColor:
                  selected == title
                    ? theme.colors.primary
                    : theme.colors.input_field_stroke,
              }}
              source={icons.check}
            />
          </TouchableOpacity>

          <CustomText size={22} text={title} />
        </View>
      </TouchableOpacity>
    );
  };

  const disableBtn = () => {
    if (verificationMethod.length == 0 || !selectedCountry?.id) {
      return true;
    }

    return false;
  };

  const OnHandleSignup = () => {
    setLoading(true);
    setIsDisable(true);

    const raw = JSON.stringify({
      full_name: signupState?.name,
      email: signupState?.email,
      password: signupState?.password,
      phone_number: signupState?.phone_number || "343434343",
      country: selectedCountry?.code,
    });
    console.log("signupState",signupState)
    let param = {
      raw: raw,
    };

    ApiServices.Register(param, async ({ isSuccess, response }: any) => {
      console.log("response",response)
      if (isSuccess) {
        let result = JSON.parse(response);

        if (result?.message == "Email already exists") {
          setMessageColor(theme.colors.red);
          setIsMessage(true);
          setMessage(result?.message);
          setLoading(false);
          setIsDisable(false);
        } else if (result?.errors) {
          setMessageColor(theme.colors.red);
          setMessage(result?.errors[0]?.message);
          setIsMessage(true);
          setLoading(false);
          setIsDisable(false);
        } else {
          setMessageColor(theme.colors.primary);
          setMessage(result?.message);
          setIsMessage(true);
          setLoading(false);
          setIsDisable(false);
          setTimeout(() => {
            setIsMessage(false);
            dispatch(setAuthData(result));
            StorageServices.setItem(TOKEN, result?.token);
            StorageServices.setItem(AUTH_DATA, result);

            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "BottomTab" }],
              })
            );

            setIsDisable(false);
          }, 500);
        }
      } else {
        setMessageColor(theme.colors.red);
        setLoading(false);
        setIsDisable(false);
        setMessage(response?.message);
        setIsMessage(true);
      }
    });
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(30),
        }}
      >
        <View style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
          <CustomHeader />
          <View style={{ gap: sizeHelper.calHp(20) }}>
            <CustomText
              text={"Proof of Residency"}
              fontWeight="700"
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={21}
              text={
                "Take a clear photo of your ID. Make sure all details are visible, and the image is not blurry or cropped."
              }
            />
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ gap: sizeHelper.calWp(25) }}>
              <CountryDropdown
                placeholder={"Select country"}
                value={selectedCountry}
                backgroundColor={theme.colors.white}
                setValue={setSelectedCountry}
                data={countryData}
                label={"Nationality"}
                top={150}
              />

              <View style={{ gap: sizeHelper.calHp(20) }}>
                <CustomText
                  text={"Verification Method"}
                  fontWeight="700"
                  style={{
                    marginBottom: sizeHelper.calHp(10),
                    marginTop: sizeHelper.calHp(25),
                  }}
                  fontFam={fonts.PlusJakartaSans_Bold}
                  size={23}
                />
                <VerificationMethodBox
                  selected={verificationMethod}
                  onPress={() =>
                    setVerificationMethod("National Identity Card")
                  }
                  title={"National Identity Card"}
                />
                <VerificationMethodBox
                  title={"Passport"}
                  selected={verificationMethod}
                  onPress={() => setVerificationMethod("Passport")}
                />
                <VerificationMethodBox
                  title={"Driver License"}
                  selected={verificationMethod}
                  onPress={() => setVerificationMethod("Driver License")}
                />
              </View>
            </View>
          </View>

          <CustomButton
            style={{ bottom: "3%" }}
            onPress={OnHandleSignup}
            disable={disableBtn()}
            text="Continue"
            textColor={
              !disableBtn() ? theme.colors.white : theme.colors.icon_gray
            }
            bgColor={
              !disableBtn()
                ? theme.colors.primary
                : theme.colors.input_field_stroke
            }
            width={"100%"}
          />
        </View>
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

export default ProofOfResidency;

const styles = StyleSheet.create({
  verificationBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizeHelper.calWp(25),
    height: sizeHelper.calHp(80),
    alignItems: "center",
    borderColor: theme.colors.input_field_stroke,
    gap: sizeHelper.calWp(10),
    borderWidth: 1,
    borderRadius: sizeHelper.calWp(15),
    backgroundColor: theme.colors.white,
  },
});
