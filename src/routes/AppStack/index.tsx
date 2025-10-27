import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../utils/Types";
import GetStarted from "../../screens/Auth/GetStarted";
import LoginScreen from "../../screens/Auth/LoginScreen";
import SignupScreen from "../../screens/Auth/SignupScreen";
import YourIdentity from "../../screens/Auth/YourIdentity";
import ProofOfResidency from "../../screens/Auth/ProofOfResidency";
import PassportPhotoInstruction from "../../screens/Auth/PassportPhotoInstruction";
import BottomTab from "../BottomTab";
import AddScreen from "../../screens/Main/Add";
import ProfileScreen from "../../screens/Main/Profile";
import TransactionHistory from "../../screens/Main/TransactionHistory";
import SendMoneyScreen from "../../screens/Main/SendMoney/SendMoney";
import RecipientInformation from "../../screens/Main/SendMoney/RecipientInformation";
import DeliveryMethod from "../../screens/Main/SendMoney/DeliveryMethod";
import EnterAmount from "../../screens/Main/SendMoney/EnterAmount";
import ReviewPaymentDetails from "../../screens/Main/SendMoney/ReviewPaymentDetails";
import PaymentComplete from "../../screens/Main/SendMoney/PaymentComplete";
import CapturedIDCard from "../../screens/Auth/CapturedIDCard";
import CapturedYourImage from "../../screens/Auth/CapturedYourImage";
import YouVerified from "../../screens/Auth/YouVerified";
import PhotoIDCard from "../../screens/Auth/PhotoIDCard";
import TakeSelfie from "../../screens/Auth/TakeSelfie";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_DATA, StorageServices } from "../../utils/StorageService";
import { getToken, setAuthData } from "../../redux/reducers/authReducer";
import ScreenLoader from "../../components/ScreenLoader";
import { theme } from "../../utils/Themes";

const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  const token = useSelector(getToken);
  const [isLoading, setIsLoading] = useState(true); // NEW

  const dispatch = useDispatch();
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const userInfo = await StorageServices.getItem(AUTH_DATA);
    dispatch(setAuthData(userInfo));
    setIsLoading(false); // mark done loading
  };
 if (isLoading) {
  return <ScreenLoader backgroundColor={theme.colors.white} />; // render loader while checking token
}
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={token ? "BottomTab" : "GetStarted"}
    >
      <Stack.Screen name={"GetStarted"} component={GetStarted} />
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"SignupScreen"} component={SignupScreen} />
      <Stack.Screen name={"YourIdentity"} component={YourIdentity} />
      <Stack.Screen name={"ProofOfResidency"} component={ProofOfResidency} />
      <Stack.Screen
        name={"PassportPhotoInstruction"}
        component={PassportPhotoInstruction}
      />
      <Stack.Screen name={"PhotoIDCard"} component={PhotoIDCard} />
      <Stack.Screen name={"TakeSelfie"} component={TakeSelfie} />

      <Stack.Screen name={"CapturedIDCard"} component={CapturedIDCard} />
      <Stack.Screen name={"CapturedYourImage"} component={CapturedYourImage} />
      <Stack.Screen name={"YouVerified"} component={YouVerified} />

      <Stack.Screen name={"BottomTab"} component={BottomTab} />

      <Stack.Screen name={"AddScreen"} component={AddScreen} />
      <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Stack.Screen name={"SendMoneyScreen"} component={SendMoneyScreen} />
      <Stack.Screen
        name={"RecipientInformation"}
        component={RecipientInformation}
      />
      <Stack.Screen name={"DeliveryMethod"} component={DeliveryMethod} />
      <Stack.Screen name={"PaymentComplete"} component={PaymentComplete} />

      <Stack.Screen name={"EnterAmount"} component={EnterAmount} />
      <Stack.Screen
        name={"ReviewPaymentDetails"}
        component={ReviewPaymentDetails}
      />

      <Stack.Screen
        name={"TransactionHistory"}
        component={TransactionHistory}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
