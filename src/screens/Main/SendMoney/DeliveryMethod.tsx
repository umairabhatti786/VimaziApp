import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform, Keyboard } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CountryDropdown from "../../../components/CountryDropdown";
import images from "../../../utils/Constants/images";
import ProgressHeader from "../../../components/SendMoney/ProgressHeader";
import CustomInput from "../../../components/Input";
import { emailRegex } from "../../../utils/Regex";
import CustomToast from "../../../components/CustomToast";
import { useDispatch, useSelector } from "react-redux";
import { setTransactionBank } from "../../../redux/reducers/transactionsReducer";
import { countryData } from "../../../utils/Data";
import { getUserData } from "../../../redux/reducers/authReducer";

const DeliveryMethod = ({ navigation }: any) => {
  const [selectedMethod, setSelectedMethod] = useState<any>({});
  const [accountName, setAccountName] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
    const auth = useSelector(getUserData);


  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email_error: "",
    name_error: "",
  });

  const MethodData = [
    { icon: images.bank_transfer, name: "Bank Transfer", id: 1 },
    { icon: images.wise, name: "Wise", id: 2 },
    { icon: images.taptap_send, name: "Taptap Send", id: 3 },
    { icon: images.ace_money, name: "ACE Money Transfer", id: 4 },
  ];

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const GetAuthCountry=()=>{

    let authCountry=countryData.find((it)=>it?.code==auth?.user?.country)
    console.log("authCountry",authCountry)


  }

  GetAuthCountry()
  

  const checkDisable = () => {
    if (!values.email) {
      return false;
    }
    if (!values.name) {
      return false;
    }

    return true;
  };

  const onNext = async () => {
    Keyboard.dismiss();
    if (!values?.name) {
      setMessage("Name is required");
      setIsMessage(true);
      return false;
    }
    if (!values?.email) {
      setMessage("Email is required");
      setIsMessage(true);
      return false;
    }
    if (values?.email) {
      if (!emailRegex.test(values?.email)) {
        setMessage("Invalid Email Address");
        setIsMessage(true);
        return;
      }
    }
    if (Object.keys(selectedMethod).length == 0) {
      setMessage("Select delivery method");
      setIsMessage(true);
      return;
    }
    let param: any = {
      bank: selectedMethod?.name,
      email: values?.email,
      name: values?.name,
    };
    navigation.navigate("EnterAmount")
    dispatch(setTransactionBank(param));
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          gap: sizeHelper.calWp(30),
        }}
      >
        <View style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
          <ProgressHeader label={"2/4 Delivery Method"} progress={100} />

          <View
            style={{
              flex: 1,
              gap: sizeHelper.calWp(20),
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            <CustomText
              text={"Delivery Method"}
              fontWeight="700"
              fontFam={fonts.PlusJakartaSans_Bold}
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={21}
              text={"Select a method you like to payout"}
            />
            <View style={{ height: sizeHelper.calHp(10) }} />
            <CountryDropdown
              iconSize={70}
              placeholder={"Choose a delivery method"}
              value={selectedMethod}
              backgroundColor={theme.colors.white}
              setValue={setSelectedMethod}
              data={MethodData}
            />
            {Object.keys(selectedMethod).length > 0 && (
              <View
                style={{
                  backgroundColor: theme.colors.white,
                  borderWidth: 1,
                  borderColor: theme.colors.input_field_stroke,
                  padding: sizeHelper.calWp(20),
                  borderRadius: sizeHelper.calWp(30),
                  gap: sizeHelper.calHp(20),
                }}
              >
                <CustomText
                  color={theme.colors.black}
                  size={27}
                  fontWeight="700"
                  fontFam={fonts.PlusJakartaSans_Bold}
                  text={`${selectedMethod?.name} account details` }
                />
                <View style={{ gap: sizeHelper.calWp(20) }}>
                  <CustomInput
                    placeholder="Name"
                    value={values.name}
                    // error={errors.email_error}
                    backgroundColor={theme.colors.white}
                    onChangeText={(txt: string) => {
                      setValues({ ...values, name: txt });
                    }}
                  />
                  <CustomInput
                    placeholder="Email"
                    value={values.email}
                    // error={errors.email_error}
                    backgroundColor={theme.colors.white}
                    onChangeText={(txt: string) => {
                      setValues({ ...values, email: txt });
                    }}
                  />
                </View>
              </View>
            )}
          </View>
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              paddingBottom: sizeHelper.calHp(keyboardVisible ? 30 : 60),
            }}
          >
            <CustomButton
              // onPress={() => navigation.navigate("EnterAmount")}
              onPress={onNext}
              text="Next"
              textColor={
                checkDisable() ? theme.colors.white : theme.colors.icon_gray
              }
              bgColor={
                checkDisable()
                  ? theme.colors.primary
                  : theme.colors.input_field_stroke
              }
              width={"100%"}
            />
          </View>
        </View>
      </ScreenLayout>
      <CustomToast
        isVisable={isMessage}
        backgroundColor={theme.colors.red}
        setIsVisable={setIsMessage}
        message={message}
      />
    </>
  );
};

export default DeliveryMethod;

const styles = StyleSheet.create({});
