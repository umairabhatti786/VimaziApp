import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import ProgressHeader from "../../../components/SendMoney/ProgressHeader";
import CustomInput from "../../../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions, setTransactionAmount } from "../../../redux/reducers/transactionsReducer";
import { getUserData } from "../../../redux/reducers/authReducer";
import { GetUserCountry } from "../../../utils/CommonHooks";

const EnterAmount = ({ navigation }: any) => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState<any>("");
  const auth = useSelector(getUserData);
  const dispatch=useDispatch()
  const TransactionsState: any =
    useSelector(getTransactions)?.sendTransactionsState;
  const checkDisable = () => {
    if (!fromAmount) {
      return false;
    }
    if (!toAmount) {
      return false;
    }

    return true;
  };

  const onNext=()=>{

    let param={
      from:fromAmount,
      to:toAmount
    }
    dispatch(setTransactionAmount(param))
     navigation.navigate("ReviewPaymentDetails")
  }

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          gap: sizeHelper.calWp(30),
        }}
      >
        <KeyboardAwareScrollView style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
          <ProgressHeader label={"2/4 Delivery Method"} progress={100} />

          <View
            style={{
              flex: 1,
              gap: sizeHelper.calWp(20),
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            <CustomText
              text={"Enter amount"}
              fontWeight="700"
              fontFam={fonts.PlusJakartaSans_Bold}
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={21}
              text={"Enter the amount you like to send "}
            />
            <View style={{ height: sizeHelper.calHp(10) }} />

            <View
              style={{
                ...styles.box,
                borderWidth: -1,
                paddingBlock: sizeHelper.calWp(30),
              }}
            >
              <View
                style={{
                  ...styles.box,
                  borderRadius: sizeHelper.calWp(20),
                  gap: sizeHelper.calHp(10),
                }}
              >
                <View style={appStyles.rowjustify}>
                  <CustomText
                    color={theme.colors.input_field_stroke}
                    text={"From"}
                  />
                  <CustomText
                    color={theme.colors.black}
                    text={GetUserCountry(auth?.user?.country)?.currency}
                  />
                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}>
                    <Image
                      style={{
                        width: sizeHelper.calWp(30),
                        height: sizeHelper.calWp(30),
                      }}
                      source={GetUserCountry(auth?.user?.country)?.icon}
                    />
                    <CustomText
                      color={theme.colors.black}
                      text={GetUserCountry(auth?.user?.country)?.code}
                    />
                  </View>
                </View>

                <CustomInput
                  placeholder="Amount"
                  textAlign={"center"}
                  fontWeight={"600"}
                  keyboard={"number-pad"}
                  fontFamily={fonts.PlusJakartaSans_SemiBold}
                  fontSize={25}
                  value={fromAmount}
                  onChangeText={(txt: any) => {
                    setToAmount(
                      String(TransactionsState?.exchangeRate?.rate * txt)
                    );

                    setFromAmount(txt);
                  }}
                  backgroundColor={theme.colors.white}
                />
              </View>
              <View style={styles.switchContainer}>
                <Image
                  source={icons.arrow_switch_vertical}
                  style={{
                    width: sizeHelper.calWp(38),
                    height: sizeHelper.calWp(38),
                  }}
                  resizeMode={"contain"}
                />
              </View>
              <View
                style={{
                  ...styles.box,
                  borderRadius: sizeHelper.calWp(20),
                  gap: sizeHelper.calHp(10),
                }}
              >
                <View style={appStyles.rowjustify}>
                  <CustomText
                    color={theme.colors.input_field_stroke}
                    text={"To"}
                  />
                  <CustomText
                    color={theme.colors.black}
                    text={TransactionsState?.country?.currency}
                  />
                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}>
                    <Image
                      style={{
                        width: sizeHelper.calWp(30),
                        height: sizeHelper.calWp(30),
                      }}
                      source={TransactionsState?.country?.icon}
                    />
                    <CustomText
                      color={theme.colors.black}
                      text={TransactionsState?.country?.code}
                    />
                  </View>
                </View>

                <CustomInput
                  textAlign={"center"}
                  placeholder=""
                  editable={false}
                  fontWeight={"600"}
                  keyboard={"number-pad"}
                  fontFamily={fonts.PlusJakartaSans_SemiBold}
                  fontSize={25}
                  value={toAmount}
                  backgroundColor={theme.colors.white}
                />
              </View>
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
                backgroundColor: theme.colors.green100,
                padding: sizeHelper.calWp(15),
                borderRadius: sizeHelper.calWp(20),
              }}
            >
              <View style={{ flexDirection: "row", gap: sizeHelper.calWp(10) }}>
                <CustomText
                  color={theme.colors.white}
                  size={21}
                  text={"Exchange rate"}
                />
                <Image
                  source={icons.info}
                  style={{
                    width: sizeHelper.calWp(38),
                    height: sizeHelper.calWp(38),
                  }}
                  resizeMode={"contain"}
                />
              </View>

              <CustomText
                color={theme.colors.white}
                size={22}
                fontWeight="700"
                text={`1 ${TransactionsState?.country?.code} = ${
                  1 / TransactionsState?.exchangeRate?.rate
                } ${auth?.user.country}`}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              paddingBottom: sizeHelper.calHp(60),
              paddingTop: "60%",
            }}
          >
            <CustomButton
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
        </KeyboardAwareScrollView>
      </ScreenLayout>
    </>
  );
};

export default EnterAmount;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.input_field_stroke,
    padding: sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(30),
    gap: sizeHelper.calHp(20),
  },
  switchContainer: {
    width: sizeHelper.calWp(70),
    height: sizeHelper.calWp(70),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.input_field_stroke,
    borderRadius: sizeHelper.calWp(70),
    alignSelf: "center",
  },
});
