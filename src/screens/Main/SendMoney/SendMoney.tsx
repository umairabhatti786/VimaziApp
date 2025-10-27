import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
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
import images from "../../../utils/Constants/images";
import { countryData } from "../../../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactions,
  setExchangeRate,
  setTransactionCountry,
} from "../../../redux/reducers/transactionsReducer";
import { getUserData, setAuthData } from "../../../redux/reducers/authReducer";
import { ApiServices } from "../../../api/ApiServices";
import { StorageServices } from "../../../utils/StorageService";
import { CommonActions } from "@react-navigation/native";

const SendMoneyScreen = ({ navigation }: any) => {
  const [selectedCountry, setSelectedCountry] = useState<any>({});
  const [isShowRate, setIsShowRate] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  console.log("ckldncdknc",auth?.user)
  const TransactionsState: any =
    useSelector(getTransactions)?.sendTransactionsState;

  useEffect(() => {
    if (Object.keys(selectedCountry).length > 0) {
      GetCurrencyExchangeRate();
    }
  }, [selectedCountry]);

 

  const GetCurrencyExchangeRate = () => {
        let authCountry=countryData.find((it)=>it?.code==auth?.user?.country)
    
   
    let param = {
      token: auth?.token,
      from:authCountry?.code,
      to: selectedCountry?.code,
    };

    console.log("param",param)

    dispatch(setTransactionCountry(selectedCountry));
    ApiServices.GetExchangeRate(param, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        console.log("response", response);
        let result = JSON.parse(response);
        if (result) {
          console.log("Excnage rate get successfully");
          dispatch(setExchangeRate(result));
          setIsShowRate(true);
        } else if (result?.errors) {
          console.log("Erroe rate get successfully");
        } else if (result?.message == "Unauthorized") {
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
          Alert.alert("Alert!", "Something want wrong");
        }
      } else {
        Alert.alert("Alert!", "Something want wrong");
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
          <CustomHeader title={"Send money"} />
          <View style={{ gap: sizeHelper.calHp(20) }}>
            <CustomText
              text={"Where are you sending money?"}
              fontWeight="700"
              fontFam={fonts.PlusJakartaSans_Bold}
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              style={{ marginRight: sizeHelper.calWp(30) }}
              size={21}
              text={"Pick a country for transfer"}
            />
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ gap: sizeHelper.calWp(25) }}>
              <CountryDropdown
                placeholder={
                  "Select a country (e.g., India, Pakistan, Nigeria)"
                }
                value={selectedCountry}
                onActions={() => {
                  setIsShowRate(false);
                  console.log("Action");
                }}
                backgroundColor={theme.colors.white}
                setValue={setSelectedCountry}
                data={countryData}
              />
              {isShowRate && (
                <View
                  style={{
                    ...appStyles.rowjustify,
                    backgroundColor: theme.colors.green100,
                    padding: sizeHelper.calWp(15),
                    borderRadius: sizeHelper.calWp(20),
                  }}
                >
                  <View
                    style={{ flexDirection: "row", gap: sizeHelper.calWp(10) }}
                  >
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
              )}
            </View>
          </View>

          <CustomButton
            style={{ bottom: "5%" }}
            onPress={() => {
              dispatch(setTransactionCountry(selectedCountry));
              navigation.navigate("RecipientInformation");
            }}
            text="Next"
            textColor={
              Object.keys(selectedCountry).length > 0
                ? theme.colors.white
                : theme.colors.icon_gray
            }
            bgColor={
              Object.keys(selectedCountry).length > 0
                ? theme.colors.primary
                : theme.colors.input_field_stroke
            }
            width={"100%"}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({});
