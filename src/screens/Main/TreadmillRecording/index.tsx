import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/images";
import { theme } from "../../../utils/Themes";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";

const TreadmillRecordingScreen = ({ navigation }: any) => {
  const [isRecord, setIsRecord] = useState(false);
  const [isPreparingVisible, setIsPreparingVisible] = useState(false);

  const CheckBoxCard = ({ onPress, isEnable, title }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={{
            ...styles.checkBoxContainer,
            backgroundColor: theme.colors.green,
          }}
        >
          <Image
            source={images.check}
            style={{
              width: sizeHelper.calWp(25),
              height: sizeHelper.calWp(25),
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>

        <CustomText
          text={title}
          fontWeight="600"
          color={theme.colors.primary}
          fontFam={fonts.SF_Pro_Medium}
        />
      </TouchableOpacity>
    );
  };

  const PlayButton = ({ width, title, label, alignItems }: any) => {
    return (
      <LinearGradient
        colors={["#000000", "#939393", "#939393"]} // Adjust colors to your needs
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: sizeHelper.calWp(150),
          height: sizeHelper.calWp(150),
          borderRadius: sizeHelper.calWp(150),
          borderWidth: 1,
          borderColor: theme.colors.white,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          alignSelf: "center",
          top: "40%",
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(45),
            height: sizeHelper.calWp(45),
          }}
          source={images.play}
          resizeMode="contain"
        />
      </LinearGradient>
    );
  };

  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={images.treadmill}
            //   resizeMode="contain"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ position: "absolute", top: "5%", left: "38%" }}
          >
            <View
              style={{
                position: "absolute",
                top: sizeHelper.calHp(-40),
                backgroundColor: theme.colors.ruby_pink,
                paddingHorizontal: sizeHelper.calWp(35),
                borderRadius: 999,
                paddingVertical: sizeHelper.calHp(10),
              }}
            >
              <CustomText
                text={`00:00:06`}
                fontWeight="600"
                size={18}
                color={theme.colors.white}
                fontFam={fonts.SF_Pro_Semibold}
              />
            </View>
          </TouchableOpacity>
          {
            isRecord&&(
          <PlayButton />

            )
          }
        </View>

        <Modal
          isVisible={isPreparingVisible}
          onBackButtonPress={() => setIsPreparingVisible(false)}
          onBackdropPress={() => setIsPreparingVisible(false)}
          backdropColor="transparent"
        >
          <View
            style={{
              borderRadius: sizeHelper.calWp(30),
              padding: sizeHelper.calWp(20),
              width: "95%",
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 8,
              elevation: 5,
              alignSelf: "center",
              backgroundColor: theme.colors.white,
              gap: sizeHelper.calHp(20),
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(100),
                height: sizeHelper.calWp(100),
              }}
              source={images.logo}
            />
            <CustomText
              text={`Preparing Your Result`}
              fontWeight="600"
              size={27}
              fontFam={fonts.SF_Pro_Bold}
            />

            <CustomText
              text={`Please wait while we prepare your results. It may take a little time to provide the best outcome.`}
              fontWeight="600"
              style={{ textAlign: "center" }}
              size={23}
              color={theme.colors.text_gray}
              fontFam={fonts.SF_Pro_Medium}
            />

            <CheckBoxCard title={"Foot Position"} />

            <CheckBoxCard title={"Frontal Adduction"} />

            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              {/* <LottieView
                source={require("../../../assets/json/loading.json")}
                autoPlay
                loop
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                }}
              /> */}

              <CustomText
                text={"Transverse Abduction"}
                fontWeight="600"
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
            </View>

            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
              <View
                style={{
                  ...styles.checkBoxContainer,
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                }}
              ></View>

              <CustomText
                text={"Cadence"}
                fontWeight="600"
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
            </View>
          </View>
        </Modal>
      </ScreenLayout>
      {!isRecord && (
        <View
          style={{
            ...appStyles.rowjustify,
            position: "absolute",
            bottom: sizeHelper.calHp(100),
            paddingHorizontal: sizeHelper.calWp(20),
            backgroundColor: theme.colors.white + "90",
            paddingVertical: sizeHelper.calHp(10),
            alignSelf: "center",
            gap: sizeHelper.calWp(30),
            borderRadius: 999,
          }}
        >
          <View style={styles.circle}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 999 }}
              source={images.exercise}
            />
          </View>
          <View
            style={{
              padding: sizeHelper.calWp(10),
              borderWidth: sizeHelper.calWp(2),
              backgroundColor: theme.colors.white + "40",
              borderColor: theme.colors.ruby_pink,
              borderRadius: 999,
            }}
          >
            <TouchableOpacity
              style={{
                ...styles.circle,
                backgroundColor: theme.colors.ruby_pink,
              }}
              onPress={() => setIsRecord(true)}
            ></TouchableOpacity>
          </View>

          <View
            style={{
              ...styles.circle,
              backgroundColor: theme.colors.white,
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
              }}
              source={images.flash}
            />
          </View>
        </View>
      )}
      {isRecord && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: theme.colors.white + "80",
            width: "100%",
            padding: sizeHelper.calHp(30),

            shadowOffset: {
              width: 0,
              height: -40,
            },
            shadowOpacity: 4,
            shadowColor: theme.colors.black,
            shadowRadius: 40,
            elevation: 40,
            gap: sizeHelper.calWp(30),
            borderTopWidth: 1,
            borderTopColor: theme.colors.white,
          }}
        >
          <View style={appStyles.rowjustify}>
            <View
              style={{
                ...styles.circle,
                //   backgroundColor: theme.colors.white,
                borderWidth: 1,
                borderColor: theme.colors.ruby_pink,
              }}
            >
              <Image
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                }}
                source={images.reload}
              />
            </View>

            <CustomButtom
              text="Analyze Video"
              height={65}
              textColor={theme.colors.white}
              bgColor={theme.colors.ruby_pink}
              fontFam={fonts.SF_Pro_Semibold}
              onPress={() => {
                setIsPreparingVisible(true);

                setTimeout(() => {
                  setIsPreparingVisible(false);
                  navigation.navigate("ReportViewScreen",{analyze_Result:true});
                }, 2000);
              }}
              width={"80%"}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default TreadmillRecordingScreen;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calWp(90),
    borderRadius: sizeHelper.calWp(90),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  icon: {
    width: sizeHelper.calWp(30),
    height: sizeHelper.calWp(30),
    resizeMode: "contain",
  },
  notification_alert: {
    position: "absolute",
    width: sizeHelper.calWp(20),
    height: sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(20),
    backgroundColor: theme.colors.ruby_pink,
    right: 0,
  },
  box: {
    borderRadius: sizeHelper.calWp(25),
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: "hidden",
    gap: sizeHelper.calHp(15),
  },

  checkBoxContainer: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
    backgroundColor: theme.colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(40),
  },

  license_infoDetail: {
    backgroundColor: theme.colors.gray,
    gap: sizeHelper.calHp(10),
    padding: sizeHelper.calHp(15),
    borderRadius: sizeHelper.calWp(20),
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  line: {
    width: sizeHelper.calWp(2),
    height: sizeHelper.calHp(20),
    backgroundColor: theme.colors.border,
  },
  Ankle_container_img: {
    width: "48%",
    height: sizeHelper.calHp(250),
    borderRadius: sizeHelper.calWp(30),
  },
  back_container: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(80),
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
  },
});
