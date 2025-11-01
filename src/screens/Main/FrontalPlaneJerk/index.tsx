import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Platform,
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
import CustomHeader from "../../../components/CustomHeader";

const FrontalPlaneJerkScreen = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back_container}
        >
          <Image
            style={{ ...styles.icon, tintColor: theme.colors.text_gray }}
            source={images.back_arrow}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <CustomText
            text={"Report view"}
            fontWeight={"700"}
            style={{ textAlign: "center" }}
            fontFam={fonts.SF_Pro_Bold}
            size={25}
          />
        </View>
        <View style={{ width: 60 }} />
      </View>
    );
  };

  const ReportDetailCard = ({ width, title, label, alignItems }: any) => {
    return (
      <View
        style={{
          ...styles.license_infoDetail,
          width: width || "32%",
          alignItems: alignItems || "flex-start",
        }}
      >
        <CustomText
          text={title}
          size={17}
          color={theme.colors.text_gray}
          fontFam={fonts.SF_Pro_Medium}
          fontWeight={"600"}
        />

        <CustomText
          text={label}
          fontFam={fonts.SF_Pro_Semibold}
          fontWeight={"600"}
        />
      </View>
    );
  };

  return (
    <>
      <ScreenLayout>
        <CustomHeader
          onPress={() => navigation.goBack()}
          title={"Frontal Plane Jerk"}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(300),
          }}
        >
          <View
            style={{
              ...styles.box,
              alignItems: "center",
              padding: sizeHelper.calWp(20),
            }}
          >
            <View
              style={{
                width: sizeHelper.calWp(180),
                height: sizeHelper.calWp(180),
                borderRadius: sizeHelper.calWp(180),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={images.user1}
              />
            </View>

            <CustomText
              text={"Esther Howard"}
              size={25}
              fontFam={fonts.SF_Pro_Semibold}
              fontWeight={"600"}
            />

            <CustomText
              text={`Age : 28`}
              fontWeight="600"
              size={18}
              color={theme.colors.text_gray}
              fontFam={fonts.SF_Pro_Medium}
            />

            <View
              style={{
                flexDirection: "row",
                gap: sizeHelper.calWp(15),
                alignItems: "center",
              }}
            >
              <CustomText
                text={`Weight : 68 KG`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
              <View style={styles.line} />

              <CustomText
                text={`Height : $5’6`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
              <View style={styles.line} />
              <CustomText
                text={`DOB : 25 Dec 2025`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
            </View>
          </View>

          <View style={appStyles.rowjustify}>
            <View
              style={{
                width: "48%",
                borderWidth: 1,
                borderColor: theme.colors.border,
                alignItems: "center",
                borderRadius: sizeHelper.calWp(30),
                overflow: "hidden",
              }}
            >
              <CustomText
                text={"Left"}
                size={23}
                style={{ paddingVertical: sizeHelper.calHp(20) }}
                fontFam={fonts.SF_Pro_Semibold}
                fontWeight={"600"}
              />
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#28CBFF",
                  gap: sizeHelper.calWp(20),
                  borderTopRightRadius: sizeHelper.calWp(30),
                  borderTopLeftRadius: sizeHelper.calWp(30),
                  paddingVertical: sizeHelper.calHp(30),
                }}
              >
                <CustomText
                  text={"12.4"}
                  size={40}
                  fontFam={fonts.SF_Pro_Bold}
                  color={theme.colors.white}
                  fontWeight={"700"}
                />
                <CustomText
                  text={"Jerk Units"}
                  size={25}
                  fontFam={fonts.SF_Pro_Semibold}
                  color={theme.colors.white}
                  fontWeight={"600"}
                />
              </View>

              <View
                style={{
                  ...appStyles.rowjustify,
                  padding: sizeHelper.calWp(15),
                  width: "100%",
                  backgroundColor: theme.colors.gray,
                }}
              >
                <CustomText
                  text={"SD"}
                  fontFam={fonts.SF_Pro_Medium}
                  color={theme.colors.text_gray}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"± 1.3 (12)"}
                  size={23}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
              </View>
            </View>

            <View
              style={{
                width: "48%",
                borderWidth: 1,
                borderColor: theme.colors.border,
                alignItems: "center",
                borderRadius: sizeHelper.calWp(30),
                overflow: "hidden",
              }}
            >
              <CustomText
                text={"Left"}
                size={23}
                style={{ paddingVertical: sizeHelper.calHp(20) }}
                fontFam={fonts.SF_Pro_Semibold}
                fontWeight={"600"}
              />
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.colors.primary,
                  gap: sizeHelper.calWp(20),
                  borderTopRightRadius: sizeHelper.calWp(30),
                  borderTopLeftRadius: sizeHelper.calWp(30),
                  paddingVertical: sizeHelper.calHp(30),
                }}
              >
                <CustomText
                  text={"12.4"}
                  size={40}
                  fontFam={fonts.SF_Pro_Bold}
                  color={theme.colors.white}
                  fontWeight={"700"}
                />
                <CustomText
                  text={"Jerk Units"}
                  size={25}
                  fontFam={fonts.SF_Pro_Semibold}
                  color={theme.colors.white}
                  fontWeight={"600"}
                />
              </View>

              <View
                style={{
                  ...appStyles.rowjustify,
                  padding: sizeHelper.calWp(15),
                  width: "100%",
                  backgroundColor: theme.colors.gray,
                }}
              >
                <CustomText
                  text={"SD"}
                  fontFam={fonts.SF_Pro_Medium}
                  color={theme.colors.text_gray}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"± 1.3 (12)"}
                  size={23}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.box,
              padding: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(30),
            }}
          >
            <View style={{ gap: sizeHelper.calHp(20), width: "100%" }}>
              <View style={appStyles.rowjustify}>
                <CustomText
                  text={"Metrics"}
                  size={17}
                  style={{ width: "50%" }}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"Left"}
                  size={17}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"Right"}
                  size={17}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />
              </View>
              <View
                style={{
                  ...styles.line,
                  width: "100%",
                  height: sizeHelper.calHp(1.5),
                }}
              />

              <View style={appStyles.rowjustify}>
                <CustomText
                  text={"Δy (mm)"}
                  size={17}
                  style={{ width: "50%" }}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"23.1"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"24.2"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
              </View>

              <View
                style={{
                  ...styles.line,
                  width: "100%",
                  height: sizeHelper.calHp(1.5),
                }}
              />

              <View style={appStyles.rowjustify}>
                <CustomText
                  text={"Foot abduction angle"}
                  size={17}
                  style={{ width: "50%" }}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"3.1"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"4.2"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
              </View>

              <View
                style={{
                  ...styles.line,
                  width: "100%",
                  height: sizeHelper.calHp(1.5),
                }}
              />

              <View style={appStyles.rowjustify}>
                <CustomText
                  text={"Cadence (spm)"}
                  size={17}
                  style={{ width: "50%" }}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"172"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"172"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
              </View>
            </View>
          </View>

          {/* <CustomButtom
            borderWidth={1}
            borderColor={theme.colors.ruby_pink}
            bgColor={"transparent"}
            textColor={theme.colors.ruby_pink}
            text="Logout"
          /> */}
        </ScrollView>
      </ScreenLayout>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: theme.colors.white,
          width: "100%",
          padding: sizeHelper.calHp(30),

          shadowOffset: {
            width: 0,
            height: Platform.OS == "ios" ? -2 : -40,
          },
          shadowOpacity: Platform.OS == "ios" ? 0.5 : 4,
          shadowColor: theme.colors.black,
          shadowRadius: 20,
          elevation: 40,
          gap: sizeHelper.calWp(30),
        }}
      >
        <CustomButtom
          text="Save Result"
          height={65}
          textColor={theme.colors.white}
          bgColor={theme.colors.primary}
          borderWidth={1}
          fontFam={fonts.SF_Pro_Semibold}
          borderColor={theme.colors.border}
          //    onPress={() => navigation.navigate("BottomTab")}
        />

        <View style={appStyles.rowjustify}>
          <CustomButtom
            text="Export csv"
            height={65}
            textColor={theme.colors.primary}
            bgColor={"transparent"}
            borderWidth={1}
            fontFam={fonts.SF_Pro_Semibold}
            borderColor={theme.colors.primary}
            //    onPress={() => navigation.navigate("BottomTab")}
            width={"32%"}
          >
            <Image style={styles.icon} source={images.download} />
          </CustomButtom>

          <CustomButtom
            text="Export pdf"
            height={65}
            textColor={theme.colors.primary}
            bgColor={"transparent"}
            borderWidth={1}
            fontFam={fonts.SF_Pro_Semibold}
            borderColor={theme.colors.primary}
            //    onPress={() => navigation.navigate("BottomTab")}
            width={"32%"}
          >
            <Image style={styles.icon} source={images.download} />
          </CustomButtom>

          <CustomButtom
            text="Delete"
            height={65}
            textColor={theme.colors.primary}
            bgColor={"transparent"}
            borderWidth={1}
            fontFam={fonts.SF_Pro_Semibold}
            borderColor={theme.colors.primary}
            //    onPress={() => navigation.navigate("BottomTab")}
            width={"32%"}
          >
            <Image style={styles.icon} source={images.delete} />
          </CustomButtom>
        </View>
      </View>
    </>
  );
};

export default FrontalPlaneJerkScreen;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    borderRadius: sizeHelper.calWp(80),
    alignItems: "center",
    justifyContent: "center",
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
