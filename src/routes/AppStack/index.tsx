import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Auth/LoginScreen";
import ForgotPasswordScreen from "../../screens/Auth/ForgotPassword";
import PasswordResetScreen from "../../screens/Auth/PasswordReset";
import SignupScreen from "../../screens/Auth/SignupScreen";
import CreateNewPasswordScreen from "../../screens/Auth/CreateNewPassword";
import VerificationScreen from "../../screens/Auth/VerificationScreen";
import SplashScreen from "../../screens/Auth/SplashScreen";
import HomeScreen from "../../screens/Main/HomeScreen";
import BottomTab from "../BottomTab";
import ReportViewScreen from "../../screens/Main/ReportViewScreen";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import sizeHelper from "../../utils/Helpers";
import CustomHeader from "../../components/CustomHeader";
import { theme } from "../../utils/Themes";
import { images } from "../../assets/images";
import CustomText from "../../components/Text";
import CustomButton from "../../components/Button";

import { fonts } from "../../utils/Themes/fonts";
import { appStyles } from "../../utils/GlobalStyles";
import CustomInput from "../../components/Input";
import FrontalPlaneJerkScreen from "../../screens/Main/FrontalPlaneJerk";
import TreadmillRecordingScreen from "../../screens/Main/TreadmillRecording";

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="PasswordResetScreen"
          component={PasswordResetScreen}
        />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />

        <Stack.Screen
          name="CreateNewPasswordScreen"
          component={CreateNewPasswordScreen}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />

        <Stack.Screen name="BottomTab" component={BottomTab} />

        <Stack.Screen name="ReportViewScreen" component={ReportViewScreen} />
        <Stack.Screen
          name="FrontalPlaneJerkScreen"
          component={FrontalPlaneJerkScreen}
        />
        <Stack.Screen
          name="TreadmillRecordingScreen"
          component={TreadmillRecordingScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default AppStack;
