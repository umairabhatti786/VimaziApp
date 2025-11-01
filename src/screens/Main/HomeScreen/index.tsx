import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/images";
import { theme } from "../../../utils/Themes";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButtom from "../../../components/Button";
import CustomInput from "../../../components/Input";
import ReportCard from "../../../components/ReportCard";

const HomeScreen = ({ navigation }: any) => {
  const ReportData = [
    {
      name: "Darrell Steward",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
    },
    {
      name: "Cody Fisher",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
    },
    {
      name: "Jane Cooper",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
    },
    {
      name: "Jerome Bell",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
    },
  ];
  const UserDetail = ({ icon, backgroundColor, title, detail }: any) => {
    return (
      <View
        style={{
          width: "48%",
          borderRadius: sizeHelper.calWp(35),
          height: sizeHelper.calHp(190),
          justifyContent: "space-between",
          padding: sizeHelper.calWp(20),
          backgroundColor: backgroundColor + "20",
        }}
      >
        <View
          style={{
            ...styles.circle,
            backgroundColor: backgroundColor,
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(35),
              height: sizeHelper.calWp(35),
            }}
            source={icon}
          />
        </View>
        <View>
          <CustomText
            text={title}
            size={20}
            fontFam={fonts.SF_Pro_Medium}
            color={theme.colors.black}
            fontWeight={"600"}
          />
          <CustomText
            text={detail}
            size={35}
            fontFam={fonts.SF_Pro_Semibold}
            color={theme.colors.black}
            fontWeight={"600"}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout>
        <View style={appStyles.rowjustify}>
          <Image
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
            }}
            source={images.logo}
          />
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <View>
              <View
                style={{
                  ...styles.circle,
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                }}
              >
                <Image
                  style={{
                    width: sizeHelper.calWp(28),
                    height: sizeHelper.calWp(28),
                    tintColor: theme.colors.text_gray,
                  }}
                  source={images.bell}
                />
              </View>
              <View style={styles.notification_alert} />
            </View>

            <View
              style={{
                ...styles.circle,
                backgroundColor: theme.colors.capri_blue,
              }}
            >
              <CustomText
                text={`M`}
                size={25}
                fontFam={fonts.SF_Pro_Semibold}
                style={{
                  textAlign: "center",
                }}
                color={theme.colors.white}
                fontWeight={"600"}
              />
            </View>
          </View>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
         contentContainerStyle={{ gap: sizeHelper.calHp(30),paddingBottom:sizeHelper.calHp(40) }}>
          <View style={appStyles.rowjustify}>
            <UserDetail
              icon={images.total_reports}
              title={"Total Reports"}
              backgroundColor={theme.colors.green}
              detail={"45"}
            />
            <UserDetail
              icon={images.bell}
              title={"Total Patients"}
              detail={"50"}
              backgroundColor={theme.colors.golden_yellow}
            />
          </View>
          <View style={styles.box}>
            <CustomText
              text={`Start a New Session`}
              size={23}
              fontFam={fonts.SF_Pro_Semibold}
              style={{
                textAlign: "center",
              }}
              color={theme.colors.white}
              fontWeight={"600"}
            />
            <CustomText
              text={`To start a session, make sure your setup is ready. You can either add a new patient or continue a session with an existing patient.`}
              style={{
                textAlign: "center",
              }}
              fontFam={fonts.SF_Pro_Light}
              fontWeight={"400"}
              color={theme.colors.white}
            />
            <CustomButtom
              text="Start Now"
              bgColor={theme.colors.white}
              height={65}
              textColor={theme.colors.black}
              onPress={() => navigation.navigate("VerificationScreen")}
              width={"100%"}
            />
          </View>

          <View style={{ ...styles.box, backgroundColor: theme.colors.gray }}>
            <View style={appStyles.rowjustify}>
              <CustomText
                text={`Recent Reports`}
                size={23}
                fontFam={fonts.SF_Pro_Semibold}
                style={{
                  textAlign: "center",
                }}
                fontWeight={"600"}
              />
              <CustomText
                text={`SEE ALL`}
                fontFam={fonts.SF_Pro_Medium}
                color={theme.colors.ruby_pink}
                fontWeight={"600"}
              />
            </View>

            <CustomInput
              height={68}
              rightSourceSize={30}
              rightSource={images.filter}
              leftSource={images.search}
              placeholder="Search"
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              data={ReportData}
              contentContainerStyle={{ gap: sizeHelper.calHp(20) }}
              renderItem={({ item, index }: any) => {
                return (
                  <>
                    <ReportCard item={item} />
                  </>
                );
              }}
            />
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    borderRadius: sizeHelper.calWp(80),
    alignItems: "center",
    justifyContent: "center",
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
    padding: sizeHelper.calWp(30),
    borderRadius: sizeHelper.calWp(30),
    backgroundColor: theme.colors.black,
    gap: sizeHelper.calHp(20),
  },
});
