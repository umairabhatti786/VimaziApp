import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/Text";
import CustomHeader from "../../../components/Header";
import CustomSearch from "../../../components/Search";
import { ApiServices } from "../../../api/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { getToken, setAuthData } from "../../../redux/reducers/authReducer";
import { StorageServices } from "../../../utils/StorageService";
import { CommonActions } from "@react-navigation/native";
import TransactionsHistoryCard from "../../../components/TransactionsHistoryCard";
import { TransactionCardLayout } from "../../../utils/Layouts/TransactionCardLayout";
import { fonts } from "../../../utils/Themes/fonts";

const TransactionHistory = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const token = useSelector(getToken);
  const [transactions, setTransactions] = useState([]);
  const [transactionsData, setTransactionsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    GetAllTransactions();
  }, []);

  const GetAllTransactions = () => {
    ApiServices.GetTransactions(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result.length > 0) {
          setTransactions(result);
          setTransactionsData(result);
          setLoading(false);
        } else if (result?.errors) {
          setLoading(false);

          console.log("Erroe rate get successfully");
        } else if (result?.message == "Unauthorized") {
          setLoading(false);

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
          setLoading(false);
        }
      } else {
        setLoading(false);

        Alert.alert("Alert!", "Something want wrong");
      }
    });
  };

  const TabData = [
    { title: "All", id: 1 },
    { title: "Completed", id: 2 },
    { title: "Failed", id: 3 },
    { title: "Pending", id: 4 },
  ];

  const TabCard = ({ selectedTab, item, onPress }: any) => {
    return (
      <>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor:
              selectedTab == item?.id ? theme.colors.primary : "transparent",
            alignItems: "center",
            paddingVertical: sizeHelper.calHp(10),

            width: "25%",
            justifyContent: "center",
            borderRadius: sizeHelper.calWp(12),
          }}
        >
          <CustomText
            text={item?.title}
            color={
              selectedTab == item?.id
                ? theme.colors.white
                : theme.colors.black + "50"
            }
            fontWeight="600"
            size={20}
          />
        </TouchableOpacity>
      </>
    );
  };

  const onSelectedTab = (ite: any) => {
    if (ite?.title == "All") {
      setTransactions(transactionsData);
      return;
    }

    let filterTransaction = transactionsData.filter(
      (item: any) => item?.status == ite?.title
    );
    setTransactions(filterTransaction);
  };

  return (
    <>
      <ScreenLayout
        style={{
          flex: 1,
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calWp(40),
        }}
      >
        <View style={{ flex: 1, gap: sizeHelper.calHp(25) }}>
          <CustomHeader title={"Transaction History"} />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomSearch 
            height={90}
            placeholder="Search recipient" />
            <View style={styles.tabMain}>
              {TabData.map((ite, index) => {
                return (
                  <TabCard
                    onPress={() => {
                      setSelectedTab(ite?.id);
                      onSelectedTab(ite);
                    }}
                    item={ite}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                );
              })}
            </View>
          </View>
          {
            loading?(

               <View
            style={{
              flex: 1,
              gap: sizeHelper.calWp(20),
              marginTop: sizeHelper.calHp(10),
            }}
          >
            <TransactionCardLayout />
          </View>

            ):(
               <FlatList
            data={transactions}
            contentContainerStyle={{
              gap: sizeHelper.calWp(20),
            }}
            showsHorizontalScrollIndicator={false}
              ListEmptyComponent={() => {
                return (
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "70%",
                    }}
                  >
                    <CustomText
                      text={"No transactions are available"}
                      fontWeight="600"
                      style={{ textAlign: "center" }}
                      fontFam={fonts.PlusJakartaSans_Medium}
                      color={theme.colors.primary}
                      size={25}
                    />
                  </View>
                );
              }}
            renderItem={({ item, index }: any) => {
              return (
                <>
                  <TransactionsHistoryCard showSander item={item} />
                </>
              );
            }}
          />

            )
          }

         
        </View>
      </ScreenLayout>
    </>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  tabMain: {
    width: "100%",
    borderRadius: sizeHelper.calWp(15),
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.input_field_stroke,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: sizeHelper.calHp(5),
  },
});
