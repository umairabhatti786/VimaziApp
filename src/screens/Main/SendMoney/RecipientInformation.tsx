import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { appStyles } from "../../../utils/GlobalStyles";
import icons from "../../../utils/Constants/icons";
import CustomHeader from "../../../components/Header";
import images from "../../../utils/Constants/images";
import AnimatedProgressBar from "../../../components/AnimatedProgressBar";
import CustomSearch from "../../../components/Search";
import CustomInput from "../../../components/Input";
import CustomToast from "../../../components/CustomToast";
import ScreenLoader from "../../../components/ScreenLoader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ApiServices } from "../../../api/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { getToken, setAuthData } from "../../../redux/reducers/authReducer";
import { StorageServices } from "../../../utils/StorageService";
import { CommonActions } from "@react-navigation/native";
import { setTransactionRecipient } from "../../../redux/reducers/transactionsReducer";
import { RecipientsCardLayout } from "../../../utils/Layouts/RecipientsCardLayout";

const RecipientInformation = ({ navigation }: any) => {
  const [isAddNewRecipient, setIsAddNewRecipient] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isMessage, setIsMessage] = useState<any>(false);
  const [message, setMessage] = useState<any>("");
  const [messageColor, setMessageColor] = useState(theme.colors.primary);
  const [loading, setLoading] = useState(false);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [actionLoading, setActionLoading] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState<any>({});
  const [addRecipientValue, setAddRecipientValue] = useState({
    full_name: "",
    bank_name: "",
    account_number: "",
    sort_code: "",
    IBAN: "",
  });

  console.log("recipients", recipients);

  const [contactData, setContactData] = useState([
    { icon: images.user5, name: "Barry Hauck", selected: false },
    { icon: images.user1, name: "Dianna Carroll", selected: false },
    { icon: images.user2, name: "Garry Hagenes", selected: false },

    { icon: images.user7, name: "Lee Cronin", selected: false },
    { icon: images.user6, name: "Bernard Emmerich", selected: false },
    { icon: images.user2, name: "Hope Hane", selected: false },
  ]);

  const RecentContactData = [
    { icon: images.user5, name: "Kobe" },
    { icon: images.user1, name: "Bay" },
    { icon: images.user2, name: "James" },

    { icon: images.user7, name: "Billie" },
    { icon: images.user6, name: "Luke" },
    { icon: images.user2, name: "James" },
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

  useEffect(() => {
    if(isAddNewRecipient==false){
          GetAllRecipients();


    }
  }, [isAddNewRecipient]);

  const GetAllRecipients = () => {
    setLoading(true);
    ApiServices.GetRecipients(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        console.log("response", response);
        let result = JSON.parse(response);
        if (result.length >= 0) {
          setLoading(false);

          setRecipients(result);
        } 
        else if (result?.errors) {
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
        }
      } else {
        setLoading(false);

        Alert.alert("Alert!", "Something want wrong");
      }
    });
  };

  const RecentContactCard = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={{ alignItems: "center", gap: sizeHelper.calHp(5) }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(90),
            height: sizeHelper.calWp(90),
            borderRadius: sizeHelper.calWp(90),
          }}
          source={item?.icon}
        />

        <CustomText text={item?.name} size={18} />
      </TouchableOpacity>
    );
  };

  const ContactCard = ({
    item,
    onPress,
    selectedRecipient,
    setSelectedRecipient,
  }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={appStyles.rowjustify}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(75),
              height: sizeHelper.calWp(75),
              borderRadius: sizeHelper.calWp(75),
            }}
            source={item?.img ? { uri: item?.img } : images.image_placeholder}
          />

          <CustomText text={item?.full_name} size={21} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={{
            borderColor:
              selectedRecipient?.id == item?.id
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
              tintColor:selectedRecipient?.id == item?.id
                ? theme.colors.primary
                : theme.colors.input_field_stroke,
            }}
            source={icons.check}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const onAddRecipient = () => {
    Keyboard.dismiss();
    if (!addRecipientValue?.full_name) {
      setMessage("Recipient name is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }
    if (addRecipientValue?.full_name.length < 3) {
      setMessage("Recipient name must be at least 3 character");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }

    if (!addRecipientValue?.bank_name) {
      setMessage("Recipient name is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }
    if (addRecipientValue?.bank_name.length < 3) {
      setMessage("Recipient name must be at least 2 characters");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }

    if (!addRecipientValue?.sort_code) {
      setMessage("Sort Code is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }

    if (addRecipientValue?.sort_code.length < 10) {
      setMessage("Sort Code must be at least 10 characters");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }

    if (!addRecipientValue?.account_number) {
      setMessage("Account number is required");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }
    if (addRecipientValue?.account_number.length < 6) {
      setMessage("Account number must be at least 6 characters");
      setIsMessage(true);
      setMessageColor(theme.colors.red);

      return false;
    }

    setActionLoading(true);

    const raw = JSON.stringify({
      full_name: addRecipientValue?.full_name,
      bank_name: addRecipientValue?.bank_name,
      account_number: addRecipientValue?.account_number,
      sort_code: addRecipientValue?.sort_code,
    });
    let param = {
      raw: raw,
      token: token,
    };

    ApiServices.AddRecipients(param, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.id) {
          setMessageColor(theme.colors.primary);
          setMessage("Recipient add successfully");
          setIsMessage(true);
          setActionLoading(false);
          setIsAddNewRecipient(false);
          setAddRecipientValue({})
        } else if (result?.errors) {
          setMessageColor(theme.colors.red);
          setMessage(result?.errors[0]?.message);
          setIsMessage(true);
          setActionLoading(false);
        } else if (result?.message == "Unauthorized") {
          setIsMessage(true);
          setMessageColor(theme.colors.red);
          setActionLoading(false);
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
          setActionLoading(false);
          setMessage(result?.message);
          setIsMessage(true);
        }
      } else {
        setMessageColor(theme.colors.red);
        setActionLoading(false);
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
          gap: sizeHelper.calWp(30),
        }}
      >
        <View style={{ flex: 1, gap: sizeHelper.calHp(20) }}>
          <View style={{ gap: sizeHelper.calHp(15) }}>
            <View style={{ paddingHorizontal: sizeHelper.calWp(30) }}>
              <CustomHeader
                textColor={theme.colors.gray100}
                fontWeight="500"
                fontFam={fonts.PlusJakartaSans_Regular}
                label={"1/4 Recipient Information"}
                title={"Send money"}
              />
            </View>
            <AnimatedProgressBar progress={30} />
          </View>

          <View
            style={{
              flex: 1,
              paddingHorizontal: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(20),
            }}
          >
            <CustomText
              text={"Recipient Information"}
              fontWeight="700"
              fontFam={fonts.PlusJakartaSans_Bold}
              size={33}
            />
            <CustomText
              color={theme.colors.gray}
              size={21}
              text={"Pick Recipient to send money"}
            />
            <CustomSearch height={85} placeholder="Search recipient" />
            <View
              style={{
                ...styles.box,
                height: isAddNewRecipient ? "71%" : "65%",
              }}
            >
              {!isAddNewRecipient ? (
                <View style={{ gap: sizeHelper.calHp(20), flex: 1 }}>
                  <View
                    style={{
                      ...appStyles.row,
                      gap: sizeHelper.calWp(20),
                      paddingHorizontal: sizeHelper.calWp(30),
                      paddingTop: sizeHelper.calHp(20),
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setIsAddNewRecipient(true)}
                      style={{
                        ...styles.circle,
                        borderWidth: 1,
                        borderStyle: "dotted",
                        borderColor: theme.colors.primary,
                        backgroundColor: theme.colors.white,
                      }}
                    >
                      <Image
                        style={{
                          width: sizeHelper.calWp(25),
                          height: sizeHelper.calWp(25),
                          tintColor: theme.colors.primary,
                        }}
                        source={icons.plus}
                      />
                    </TouchableOpacity>
                    <CustomText text={"Add New Recipient"} size={23} />
                  </View>

                  <View
                    style={{
                      width: "100%",
                      height: sizeHelper.calHp(1.5),
                      backgroundColor: theme.colors.input_field_stroke,
                    }}
                  />

                  {/* <View style={{ gap: sizeHelper.calHp(20) }}>
                    <View
                      style={{
                        paddingHorizontal: sizeHelper.calWp(30),
                      }}
                    >
                      <CustomText
                        text={"Recent"}
                        color={theme.colors.gray}
                        size={23}
                      />
                    </View>
                    <FlatList
                      data={RecentContactData}
                      horizontal
                      style={{ paddingLeft: sizeHelper.calWp(30) }}
                      contentContainerStyle={{
                        gap: sizeHelper.calWp(30),
                        paddingRight: sizeHelper.calWp(60),
                        // justifyContent: "space-between",
                      }}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, index }: any) => {
                        return (
                          <>
                            <RecentContactCard item={item} />
                          </>
                        );
                      }}
                    />
                  </View> */}

                  <View
                    style={{
                      gap: sizeHelper.calHp(20),
                      flex: 1,
                      paddingHorizontal: sizeHelper.calWp(30),
                    }}
                  >
                    <CustomText
                      text={"Your contacts"}
                      color={theme.colors.gray}
                      size={23}
                    />
                    {loading ? (
                      <>
                      <RecipientsCardLayout/>
                      </>
                    ) : (
                      <FlatList
                        data={recipients}
                        scrollEnabled={true}
                        contentContainerStyle={{
                          gap: sizeHelper.calWp(30),
                          paddingBottom: sizeHelper.calHp(30),
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }: any) => {
                          return (
                            <>
                              <ContactCard
                                selectedRecipient={selectedRecipient}
                                setSelectedRecipient={setSelectedRecipient}
                                onPress={() => {
                                  setSelectedRecipient(item);
                                  // setContactData((prevData) =>
                                  //   prevData.map((item, i) =>
                                  //     i === index
                                  //       ? { ...item, selected: !item.selected }
                                  //       : item
                                  //   )
                                  // );
                                }}
                                item={item}
                              />
                            </>
                          );
                        }}
                        ListEmptyComponent={() => {
                          return (
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: "40%",
                              }}
                            >
                              <CustomText
                                text={"No contacts available"}
                                fontWeight="600"
                                style={{ textAlign: "center" }}
                                fontFam={fonts.PlusJakartaSans_Medium}
                                color={theme.colors.primary}
                                size={25}
                              />
                            </View>
                          );
                        }}
                      />
                    )}
                  </View>
                </View>
              ) : (
                <KeyboardAwareScrollView
                  enableOnAndroid={true} // Enable scroll on Android
                  enableAutomaticScroll={true} // Scroll to focused input
                  extraScrollHeight={120} // Space above keyboard
                  keyboardOpeningTime={0} // Remove delay
                  keyboardShouldPersistTaps="handled"
                  contentContainerStyle={{
                    paddingBottom: sizeHelper.calHp(60),
                    gap: sizeHelper.calHp(20),
                    paddingHorizontal: sizeHelper.calWp(20),
                    paddingTop: sizeHelper.calHp(20),
                    flexGrow: 1,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setIsAddNewRecipient(false)}
                    style={{
                      ...appStyles.row,
                      gap: sizeHelper.calWp(20),
                    }}
                  >
                    <Image
                      style={{
                        width: sizeHelper.calWp(25),
                        height: sizeHelper.calWp(25),
                      }}
                      source={icons.back}
                      resizeMode="contain"
                    />
                    <CustomText
                      text={"Add New Recipient"}
                      fontWeight="700"
                      fontFam={fonts.PlusJakartaSans_Bold}
                      size={26}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      ...appStyles.row,
                      gap: sizeHelper.calWp(30),
                      padding: sizeHelper.calWp(20),
                      backgroundColor: "#EBF1F6",
                      borderRadius: sizeHelper.calWp(20),
                    }}
                  >
                    <TouchableOpacity style={styles.editImgContainer}>
                      <Image
                        style={{
                          width: sizeHelper.calWp(45),
                          height: sizeHelper.calWp(45),
                        }}
                        source={images.img_placeholder}
                        resizeMode="contain"
                      />

                      <View style={styles.editImgAbsolute}>
                        <Image
                          source={icons.edit}
                          style={{
                            width: sizeHelper.calWp(21),
                            height: sizeHelper.calWp(21),
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={{ gap: sizeHelper.calHp(10) }}>
                      <CustomText
                        text={"Upload Profile Picture"}
                        fontWeight="700"
                        fontFam={fonts.PlusJakartaSans_Bold}
                        size={24}
                      />
                      <CustomText
                        text={"JPEG or PNG fromat up to 3MB"}
                        color={theme.colors.gray100}
                      />
                    </View>
                  </View>
                  <CustomInput
                    backgroundColor={theme.colors.white}
                    value={addRecipientValue.full_name}
                    onChangeText={(txt: string) => {
                      setAddRecipientValue({
                        ...addRecipientValue,
                        full_name: txt,
                      });
                    }}
                    placeholder="Recipient name"
                  />
                  <CustomInput
                    backgroundColor={theme.colors.white}
                    placeholder="Bank Name"
                    value={addRecipientValue.bank_name}
                    onChangeText={(txt: string) => {
                      setAddRecipientValue({
                        ...addRecipientValue,
                        bank_name: txt,
                      });
                    }}
                  />
                  <CustomInput
                    backgroundColor={theme.colors.white}
                    placeholder="Sort Code"
                    keyboard={"number-pad"}
                    value={addRecipientValue.sort_code}
                    onChangeText={(txt: string) => {
                      setAddRecipientValue({
                        ...addRecipientValue,
                        sort_code: txt,
                      });
                    }}
                  />
                  <CustomInput
                    backgroundColor={theme.colors.white}
                    placeholder="Account number"
                    value={addRecipientValue.account_number}
                    onChangeText={(txt: string) => {
                      setAddRecipientValue({
                        ...addRecipientValue,
                        account_number: txt,
                      });
                    }}
                  />
                  <CustomInput
                    backgroundColor={theme.colors.white}
                    placeholder="IBAN (Optional)"
                    value={addRecipientValue.IBAN}
                    onChangeText={(txt: string) => {
                      setAddRecipientValue({
                        ...addRecipientValue,
                        IBAN: txt,
                      });
                    }}
                  />
                </KeyboardAwareScrollView>
              )}
            </View>
          </View>
          {!keyboardVisible && (
            <View
              style={{
                paddingHorizontal: sizeHelper.calWp(30),
                paddingBottom: sizeHelper.calHp(50),
              }}
            >
              <CustomButton
                onPress={() => {
                  if (isAddNewRecipient) {
                    onAddRecipient();

                    return;
                  }
                  dispatch(setTransactionRecipient(selectedRecipient));

                  navigation.navigate("DeliveryMethod");
                }}
                disable={
                  !isAddNewRecipient
                    ? !selectedRecipient.id
                      ? true
                      : false
                    : false
                }
                textColor={
                  !isAddNewRecipient
                    ? !selectedRecipient.id
                      ? theme.colors.icon_gray
                      : theme.colors.white
                    : theme.colors.white
                }
                bgColor={
                  !isAddNewRecipient
                    ? !selectedRecipient.id
                      ? theme.colors.input_field_stroke
                      : theme.colors.primary
                    : theme.colors.primary
                }
                text={isAddNewRecipient ? "Add New Recipient" : "Next"}
                width={"100%"}
              />
            </View>
          )}
        </View>
      </ScreenLayout>

      <CustomToast
        isVisable={isMessage}
        backgroundColor={messageColor}
        setIsVisable={setIsMessage}
        message={message}
      />
      {actionLoading && <ScreenLoader />}
    </>
  );
};

export default RecipientInformation;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.input_field_stroke,
    borderRadius: sizeHelper.calWp(30),
    gap: sizeHelper.calHp(20),
    overflow: "hidden",
  },

  circle: {
    height: sizeHelper.calWp(75),
    width: sizeHelper.calWp(75),
    backgroundColor: theme.colors.light_blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(75),
  },
  editImgAbsolute: {
    position: "absolute",
    bottom: sizeHelper.calHp(-5),
    width: sizeHelper.calWp(45),
    height: sizeHelper.calWp(45),
    borderRadius: sizeHelper.calWp(45),
    backgroundColor: theme.colors.primary,
    borderWidth: sizeHelper.calWp(3),
    right: sizeHelper.calWp(-5),
    borderColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  editImgContainer: {
    width: sizeHelper.calWp(130),
    height: sizeHelper.calWp(130),
    borderRadius: sizeHelper.calWp(130),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: sizeHelper.calWp(5),
    borderColor: theme.colors.white,
    backgroundColor: "#D4E7F7",
  },
});
