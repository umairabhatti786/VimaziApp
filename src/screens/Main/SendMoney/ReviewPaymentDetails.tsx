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
import ProgressHeader from "../../../components/SendMoney/ProgressHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactions,
  setUpdateTransaction,
} from "../../../redux/reducers/transactionsReducer";
import { GetUserCountry } from "../../../utils/CommonHooks";
import {
  getToken,
  getUserData,
  setAuthData,
} from "../../../redux/reducers/authReducer";
import { ApiServices } from "../../../api/ApiServices";
import { StorageServices } from "../../../utils/StorageService";
import { CommonActions } from "@react-navigation/native";
import ScreenLoader from "../../../components/ScreenLoader";
import CustomToast from "../../../components/CustomToast";

const ReviewPaymentDetails = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const token = useSelector(getToken);
  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [messageColor, setMessageColor] = useState(theme.colors.primary);
  const dispatch = useDispatch();
  const TransactionsState: any =
    useSelector(getTransactions)?.sendTransactionsState;
  const auth = useSelector(getUserData);
  // `${GetUserCountry(auth?.user?.country)?.code}`
  const TransferDetailsData = [
    {
      title: "Amount Sent",
      des: `${GetUserCountry(auth?.user?.country)?.code} ${Number(
        TransactionsState?.send_amount?.from
      ).toLocaleString()}`,
    },
    {
      title: "Amount will Receive",
      des: `${TransactionsState?.country?.code} ${
        TransactionsState?.country?.symbol
      }${Number(TransactionsState?.send_amount?.to).toLocaleString()}`,
    },
    { title: "Delivery Method", des: TransactionsState?.bank?.bank },
    { title: "Fee", des: "0.00" },
    {
      title: "Exchange Rate",
      // des:`0.00`
      des: `${TransactionsState?.exchangeRate?.rate} ${TransactionsState?.country?.code}`,
    },
    { title: "Estimated Delivery", des: "24hr" },
  ];

  // `${GetUserCountry(auth?.user?.country)?.code}`

  const onSend = () => {
    setLoading(true);

    const raw = JSON.stringify({
      recipient_id: TransactionsState?.recipient?.id,
      amount_sent: Number(TransactionsState?.send_amount?.from),
      currency_from: GetUserCountry(auth?.user?.country)?.code,
    });
    let param = {
      raw: raw,
      token: token,
    };

    console.log("payload",raw)

    ApiServices.CreateTransactions(param, async ({ isSuccess, response }: any) => {
      console.log("responsePayment",response)
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.transaction?.id) {
          setLoading(false);
          navigation.navigate("PaymentComplete", {
            data: {
              result: result,
              transaction: TransactionsState,
            },
          });
          dispatch(setUpdateTransaction({}));
        } else if (result?.errors) {
          setMessageColor(theme.colors.red);
          setMessage(result?.errors[0]?.message);
          setIsMessage(true);
          setLoading(false);
        } else if (result?.message == "Unauthorized") {
          setIsMessage(true);
          setMessageColor(theme.colors.red);
          setLoading(false);
          setMessage(result?.message);
          setTimeout(() => {
            dispatch(setAuthData(null));
            StorageServices.removeAll();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "GetStarted" }],
              })
            );
          }, 1000);
        } else {
          setMessageColor(theme.colors.red);
          setLoading(false);
          setMessage(result?.message);
          setIsMessage(true);
        }
      } else {
        setMessageColor(theme.colors.red);
        setLoading(false);
        setMessage(response?.message);
        setIsMessage(true);
      }
    });
  };

  const TransferDetails = ({ item }: any) => {
    return (
      <View style={{ ...appStyles.rowjustify }}>
        <View style={{ width: "50%" }}>
          <CustomText
            text={item?.title}
            numberOfLines={1}
            size={23}
            color={theme.colors.light_black}
          />
        </View>

        <CustomToast
          isVisable={isMessage}
          backgroundColor={messageColor}
          setIsVisable={setIsMessage}
          message={message}
        />

        <CustomText
          text={item?.des}
          numberOfLines={1}
          color={theme.colors.light_black}
          size={23}
        />
      </View>
    );
  };

  const PaymentSendContainer = () => {
    return (
      <View
        style={{
          padding: sizeHelper.calWp(20),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(35),
          borderWidth: 1,
          borderColor: theme.colors.input_field_stroke,
        }}
      >
        <View style={{ flexDirection: "row", gap: sizeHelper.calWp(25) }}>
          <View
            style={{
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
              borderRadius: sizeHelper.calWp(100),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FBD9E4",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(27),
                height: sizeHelper.calWp(27),
              }}
              source={icons.up_arrow}
            />
          </View>
          <View style={{ gap: sizeHelper.calHp(5) }}>
            <CustomText
              text={"Sending to"}
              size={25}
              color={theme.colors.text_gray100}
            />
            <CustomText
              text={TransactionsState?.recipient?.full_name}
              fontWeight="700"
              // textTransform={"capitalize"}
              size={25}
              fontFam={fonts.PlusJakartaSans_Bold}
            />
          </View>
        </View>
        <View style={{ alignItems: "flex-end", gap: sizeHelper.calHp(10) }}>
          <CustomText
            text={`${GetUserCountry(auth?.user?.country)?.code} ${Number(
              TransactionsState?.send_amount?.from
            ).toLocaleString()}`}
            size={23}
            color={theme.colors.gray100}
          />
          <CustomText
            text={`${TransactionsState?.country?.code} ${
              TransactionsState?.country?.symbol
            }${Number(TransactionsState?.send_amount?.to).toLocaleString()}`}
            fontWeight="700"
            size={25}
            color={theme.colors.warning}
            fontFam={fonts.PlusJakartaSans_SemiBold}
          />
        </View>
      </View>
    );
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
          <ProgressHeader label={"3/4 Review & Confirm"} progress={150} />

          <View
            style={{
              flex: 1,
              gap: sizeHelper.calWp(20),
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            <CustomText
              text={"Review payment details"}
              fontWeight="700"
              fontFam={fonts.PlusJakartaSans_Bold}
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={21}
              text={"Review your transaction details before you send"}
            />
            <View style={{ height: sizeHelper.calHp(10) }} />
            <PaymentSendContainer />

            <View
              style={{
                ...styles.box,
                borderWidth: -1,
                paddingBlock: sizeHelper.calWp(30),
              }}
            >
              <View style={{ gap: sizeHelper.calHp(20) }}>
                <View style={appStyles.rowjustify}>
                  <CustomText
                    text={"Transfer details"}
                    fontWeight="700"
                    size={27}
                    fontFam={fonts.PlusJakartaSans_Bold}
                  />
                  <CustomText
                    color={theme.colors.primary}
                    textDecorationLine="underline"
                    size={23}
                    text={"Change"}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(1.5),
                    backgroundColor: theme.colors.input_field_stroke,
                  }}
                />
              </View>
              {TransferDetailsData.map((item, index) => {
                return <TransferDetails item={item} />;
              })}
            </View>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            paddingBottom: sizeHelper.calHp(60),
          }}
        >
          <CustomButton
            onPress={onSend}
            // onPress={() => navigation.navigate("PaymentComplete")}
            text="Confirm and Send"
            width={"100%"}
          />
          <TouchableOpacity
          onPress={()=>{
            dispatch(setUpdateTransaction({}))
            navigation.navigate("BottomTab")

          }}
            style={{ padding: sizeHelper.calWp(20), alignSelf: "center",}}
          >
            <CustomText
              text={"Cancel Payment"}
              
              color={theme.colors.gray100}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </ScreenLayout>
      {loading && <ScreenLoader />}
    </>
  );
};

export default ReviewPaymentDetails;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.input_field_stroke,
    padding: sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(30),
    gap: sizeHelper.calHp(20),
  },
});
