import React, { useEffect} from "react";
import { View, StyleSheet, Image } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { images } from "../../../assets/images";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("LoginScreen")
      
    }, 4000);
  },[])
  return (
    <>
      <ScreenLayout
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: sizeHelper.calHp(50),
        }}
      >
        <View style={styles.inner_container}>
          <Image style={styles.logo_img}
          resizeMode="contain"
           source={images.waves} />
        </View>
        {/* <LottieView
          source={require("../../../assets/json/loading.json")}
          autoPlay
          loop
          style={styles.lotti_img}
        /> */}
      </ScreenLayout>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  lotti_img: {
    width: sizeHelper.calWp(100),
    height: sizeHelper.calWp(100),
  },
  logo_img: {
    width: sizeHelper.calWp(500),
    height: sizeHelper.calWp(500),
  },
  inner_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: sizeHelper.calHp(50),
  },
});
