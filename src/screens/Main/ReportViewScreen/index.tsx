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

const ReportViewScreen = ({ navigation,route }: any) => {
  const analyze_Result=route?.params?.analyze_Result
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
          size={15}
          color={theme.colors.text_gray}
          fontFam={fonts.SF_Pro_Medium}
          fontWeight={"600"}
        />

        <CustomText
          text={label}
          size={16}
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
        onPress={()=>navigation.goBack()}
        title={analyze_Result?"Analyze Result":"Report view"}
         />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(250),
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

            <View style={{ ...appStyles.rowjustify, width: "100%" }}>
              <ReportDetailCard
                title={"Trial Date"}
                width={"67%"}
                label={"12 sep 2025, 03:30 PM"}
              />

              <ReportDetailCard
                title={"Gait Type"}
                width={"30%"}
                label={"Run"}
              />
            </View>

            <View style={{ ...appStyles.rowjustify, width: "100%" }}>
              <ReportDetailCard title={"Cadence"} label={"Spm"} />
              <ReportDetailCard title={"Footwear"} label={"Barefoot"} />

              <ReportDetailCard title={"Treadmill Speed"} label={"3km"} />
            </View>

            <View style={{ flexDirection: "row", gap: sizeHelper.calWp(10) }}>
              <CustomText
                text={`Report NO : `}
                fontWeight="600"
                fontFam={fonts.SF_Pro_Medium}
                size={25}
              />
              <CustomText
                text={"2345"}
                style={{ marginTop: sizeHelper.calHp(3) }}
                fontWeight="700"
                fontFam={fonts.SF_Pro_Bold}
                size={25}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: sizeHelper.calHp(550),
              borderRadius: sizeHelper.calWp(30),
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={images.exercise}
              resizeMode="contain"
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ position: "absolute", top: "40%", alignSelf: "center" }}
            >
              <LinearGradient
                colors={["#000000", "#939393", "#939393"]} // Adjust colors to your needs
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: sizeHelper.calWp(170),
                  height: sizeHelper.calWp(170),
                  borderRadius: sizeHelper.calWp(170),
                  borderWidth: 1,
                  borderColor: theme.colors.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: sizeHelper.calHp(-40),
                    backgroundColor: theme.colors.ruby_pink,
                    paddingHorizontal: sizeHelper.calWp(30),
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
                <Image
                  style={{
                    width: sizeHelper.calWp(45),
                    height: sizeHelper.calWp(45),
                  }}
                  source={images.play}
                  resizeMode="contain"
                />
              </LinearGradient>
              {/* <View
                style={{
                  width: sizeHelper.calWp(170),
                  height: sizeHelper.calWp(170),
                  borderRadius: sizeHelper.calWp(170),
                  backgroundColor: "red",
                  borderWidth: 1,
                  borderColor: theme.colors.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: sizeHelper.calHp(-40),
                    backgroundColor: theme.colors.ruby_pink,
                    paddingHorizontal: sizeHelper.calWp(30),
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
                <Image
                  style={{
                    width: sizeHelper.calWp(45),
                    height: sizeHelper.calWp(45),
                  }}
                  source={images.play}
                  resizeMode="contain"
                />
              </View> */}
            </TouchableOpacity>
          </View>

          <View
            style={{
              ...styles.box,
              padding: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={"Ankle Eversion (°)"}
              size={23}
              fontFam={fonts.SF_Pro_Semibold}
              fontWeight={"600"}
            />
            <View style={appStyles.rowjustify}>
              <Image
                style={styles.Ankle_container_img}
                source={images.ankle_eversion}
              />

              <Image
                style={styles.Ankle_container_img}
                source={images.combined}
              />
            </View>

            <View style={{ ...appStyles.rowjustify, width: "100%" }}>
              <ReportDetailCard
                alignItems={"center"}
                title={"Left Mean ± SD"}
                label={"12.4 ± 1.3 (12)"}
              />
              <ReportDetailCard
                alignItems={"center"}
                title={"Right Mean ± SD"}
                label={"14.1 ± 1.5 (12)"}
              />

              <ReportDetailCard
                alignItems={"center"}
                title={"Δ / Combined"}
                label={"+1.7"}
              />
            </View>
          </View>


            <View
            style={{
              ...styles.box,
              padding: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={"Ankle Eversion (°)"}
              size={23}
              fontFam={fonts.SF_Pro_Semibold}
              fontWeight={"600"}
            />

            <Image
              style={{
                height: sizeHelper.calHp(270),
                borderRadius: sizeHelper.calWp(30),
                width: "100%",
              }}
              source={images.combined}
            />

            <View style={{ ...appStyles.rowjustify, width: "100%" }}>
              <ReportDetailCard
                alignItems={"center"}
                title={"Left Mean ± SD"}
                label={"12.4 ± 1.3 (12)"}
              />
              <ReportDetailCard
                alignItems={"center"}
                title={"Right Mean ± SD"}
                label={"14.1 ± 1.5 (12)"}
              />

              <ReportDetailCard
                alignItems={"center"}
                title={"Δ / Combined"}
                label={"+1.7"}
              />
            </View>
          </View>

          <View
            style={{
              ...styles.box,
              padding: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={"Plane adduction"}
              size={23}
              fontFam={fonts.SF_Pro_Semibold}
              fontWeight={"600"}
            />

            <Image
              style={{
                height: sizeHelper.calHp(270),
                borderRadius: sizeHelper.calWp(30),
                width: "100%",
              }}
              source={images.plane}
            />

            <View style={{ ...appStyles.rowjustify, width: "100%" }}>
              <ReportDetailCard
                alignItems={"center"}
                title={"Left Mean ± SD"}
                label={"12.4 ± 1.3 (12)"}
              />
              <ReportDetailCard
                alignItems={"center"}
                title={"Right Mean ± SD"}
                label={"14.1 ± 1.5 (12)"}
              />

              <ReportDetailCard
                alignItems={"center"}
                title={"Δ / Combined"}
                label={"+1.7"}
              />
            </View>
          </View>

        

          <View
            style={{
              ...styles.box,
              padding: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={"Transverse Plane abduction"}
              size={23}
              fontFam={fonts.SF_Pro_Semibold}
              fontWeight={"600"}
            />

            <Image
              style={{
                height: sizeHelper.calHp(270),
                borderRadius: sizeHelper.calWp(30),
                width: "100%",
                resizeMode: "contain",
                borderWidth: 1,
                borderColor: theme.colors.border,
              }}
              source={images.plane_abduction}
            />

            <View style={{ ...appStyles.rowjustify, width: "100%" }}>
              <ReportDetailCard
                alignItems={"center"}
                title={"Left Mean ± SD"}
                label={"12.4 ± 1.3 (12)"}
              />
              <ReportDetailCard
                alignItems={"center"}
                title={"Right Mean ± SD"}
                label={"14.1 ± 1.5 (12)"}
              />

              <ReportDetailCard
                alignItems={"center"}
                title={"Δ / Combined"}
                label={"+1.7"}
              />
            </View>
          </View>

        
          <View
            style={{
              ...styles.box,
              padding: sizeHelper.calWp(20),
              gap: sizeHelper.calHp(30),
            }}
          >
            <CustomText
              text={"Cadence (spm)"}
              size={23}
              fontFam={fonts.SF_Pro_Semibold}
              fontWeight={"600"}
            />
            <View style={{ gap: sizeHelper.calHp(20), width: "100%" }}>
              <View style={appStyles.rowjustify}>
                <CustomText
                  text={"Step/Min"}
                  size={17}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"Speed"}
                  size={17}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"Stride Length"}
                  size={17}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"Weight"}
                  size={17}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"Gait"}
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
                  text={"50 /min"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"2 m/s"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"45 (m)"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
                <CustomText
                  text={"65 (KG)"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />

                <CustomText
                  text={"Run"}
                  size={17}
                  fontFam={fonts.SF_Pro_Semibold}
                  fontWeight={"600"}
                />
              </View>
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
                width: "100%",
                padding: sizeHelper.calWp(15),
                borderWidth: 1,
                borderColor: theme.colors.border,
                borderRadius: sizeHelper.calWp(15),
                backgroundColor: theme.colors.gray,
              }}
            >
              <CustomText
                text={"Pace"}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Semibold}
                fontWeight={"600"}
              />
              <CustomText
                text={"34"}
                fontFam={fonts.SF_Pro_Bold}
                fontWeight={"700"}
              />
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
        {
          analyze_Result&&(

              <View style={appStyles.rowjustify}>
          <CustomButtom
            text="Save Result"
            height={65}
            textColor={theme.colors.primary}
            bgColor={"transparent"}
            borderWidth={1}
            fontFam={fonts.SF_Pro_Semibold}
            borderColor={theme.colors.border}
            //    onPress={() => navigation.navigate("BottomTab")}
            width={"49%"}
          />

          <CustomButtom
            text="Frontal Plane Jerk"
            height={65}
            textColor={theme.colors.white}
            bgColor={theme.colors.primary}
            borderWidth={1}
            fontFam={fonts.SF_Pro_Semibold}
            borderColor={theme.colors.border}
            onPress={() => navigation.navigate("FrontalPlaneJerkScreen")}
            width={"49%"}
          />
        </View>

          )
        }
      

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

export default ReportViewScreen;

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
    gap: sizeHelper.calHp(25),
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
