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

const ReportsScreen = ({ navigation }: any) => {
  const ReportData = [
    {
      name: "Darrell Steward",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28",
      dob: "25 Dec 2025",
    },
    {
      name: "Cody Fisher",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28",
      dob: "25 Dec 2025",
    },
    {
      name: "Jane Cooper",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28",
      dob: "25 Dec 2025",
    },
    {
      name: "Jerome Bell",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28",
      dob: "25 Dec 2025",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28",
      dob: "25 Dec 2025",
    },
  ];

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
        <CustomInput
          height={68}
          rightSourceSize={30}
          rightSource={images.filter}
          backgroundColor={theme.colors.gray}
          leftSource={images.search}
          placeholder="Search"
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={ReportData}
          contentContainerStyle={{ gap: sizeHelper.calHp(20),paddingBottom:sizeHelper.calHp(40) }}
          renderItem={({ item, index }: any) => {
            return (
              <>
                <ReportCard 
                onPress={()=>navigation.navigate("ReportViewScreen")}
                borderWidth={1} item={item} />
              </>
            );
          }}
        />
      </ScreenLayout>
    </>
  );
};

export default ReportsScreen;

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
