import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
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
import CustomInput from "../../../components/Input";
import ReportCard from "../../../components/ReportCard";
import PatientsCard from "../../../components/PatientsCard";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import AddNewPatientSheet from "../../../components/Patients/AddNewPatientSheet";
import CustomHeader from "../../../components/CustomHeader";
import Dropdown from "../../../components/DropDown";

const PatientsScreen = ({ navigation }: any) => {
  const AddPaitentSheetModalRef = useRef<any>(null);
  const AddPaitentSnapToPoints = ["80%", "90%", "90%"];

  const HeightData = [
    { name: "5.7", id: 1 },
    { name: "6.7", id: 2 },
    { name: "4.7", id: 3 },
    { name: "5.7", id: 4 },
    { name: "6.7", id: 5 },
    { name: "6.7", id: 6 },
  ];

  const ReportData = [
    {
      name: "Darrell Steward",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      height: "5’6",
      weight: "28 KG",
      dob: "25 Dec 2025",
      age: "Age",
    },
    {
      name: "Cody Fisher",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      height: "5’6",
      weight: "28 KG",
      dob: "25 Dec 2025",
      age: "Age",
    },
    {
      name: "Jane Cooper",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      height: "5’6",
      weight: "28 KG",
      dob: "25 Dec 2025",
      age: "Age",
    },
    {
      name: "Jerome Bell",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      height: "5’6",
      weight: "28 KG",
      dob: "25 Dec 2025",
      age: "Age",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      height: "5’6",
      weight: "28 KG",
      dob: "25 Dec 2025",
      age: "Age",
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
          contentContainerStyle={{
            gap: sizeHelper.calHp(20),
            paddingBottom: sizeHelper.calHp(40),
          }}
          renderItem={({ item, index }: any) => {
            return (
              <>
                <PatientsCard borderWidth={1} item={item} />
              </>
            );
          }}
        />

        <CustomBottomSheet
          bottomSheetModalRef={AddPaitentSheetModalRef}
          snap={AddPaitentSnapToPoints}
        >
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(30),
            }}
          >
            <CustomHeader
              title="New Patient"
              onPress={() => AddPaitentSheetModalRef.current.dismiss()}
            />

            <View
              style={{
                width: "100%",
                height: sizeHelper.calHp(200),
                borderWidth: 1.2,
                borderStyle: "dashed",
                borderColor: theme.colors.ruby_pink,
                borderRadius: sizeHelper.calWp(20),
                alignItems: "center",
                gap: sizeHelper.calHp(20),
                justifyContent: "center",
                backgroundColor: theme.colors.ruby_pink + "20",
              }}
            >
              <TouchableOpacity
                style={{
                  width: sizeHelper.calWp(85),
                  height: sizeHelper.calWp(85),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: sizeHelper.calWp(85),
                  backgroundColor: theme.colors.ruby_pink,
                }}
              >
                <Image
                  style={{
                    width: sizeHelper.calWp(40),
                    height: sizeHelper.calWp(40),
                  }}
                  source={images.upload}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <CustomText
                text={"Upload Image for Patients"}
                fontWeight={"600"}
                style={{ textAlign: "center" }}
                color={theme.colors.ruby_pink}
                fontFam={fonts.SF_Pro_Semibold}
              />
            </View>

            <View style={appStyles.rowjustify}>
              <CustomInput
                width={"48%"}
                backgroundColor={theme.colors.gray}
                label="First Name"
                placeholder="Type here"
              />
              <CustomInput
                width={"48%"}
                backgroundColor={theme.colors.gray}
                label="Last Name"
                placeholder="Type here"
              />
            </View>
            <CustomInput
              backgroundColor={theme.colors.gray}
              label="Date of Birth"
              placeholder="Select Date"
              rightSourceSize={35}
              rightSource={images.delete}
            />

            <CustomInput
              backgroundColor={theme.colors.gray}
              label="Weight"
              placeholder="Select Weight"
              rightSourceSize={35}
              rightSource={images.select_weight}
            />

            <Dropdown
              backgroundColor={theme.colors.gray}
              label="Hight"
              placeholder="Select Hight"
              data={HeightData}
              // onRightSource={()=}
            />

              <CustomButtom
                        text="Add Patient"
                        onPress={() => AddPaitentSheetModalRef.current.dismiss()}
                        width={"100%"}
                      />

          </View>
          {/* <AddNewPatientSheet /> */}
        </CustomBottomSheet>
      </ScreenLayout>
      <TouchableOpacity
        onPress={() => AddPaitentSheetModalRef.current.present()}
        style={styles.absulateAddButton}
      >
        <Image
          style={{
            width: sizeHelper.calWp(40),
            height: sizeHelper.calWp(40),
          }}
          source={images.plus}
        />
      </TouchableOpacity>
    </>
  );
};

export default PatientsScreen;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    borderRadius: sizeHelper.calWp(80),
    alignItems: "center",
    justifyContent: "center",
  },
  absulateAddButton: {
    width: sizeHelper.calWp(120),
    height: sizeHelper.calWp(120),
    borderRadius: sizeHelper.calWp(120),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: sizeHelper.calHp(100),
    right: sizeHelper.calWp(50),
    backgroundColor: theme.colors.primary,
    borderWidth: 2,
    borderColor: theme.colors.white,
    shadowOffset: {
      width: 0,
      height:Platform.OS=="ios"?0: -40,
    },
    shadowOpacity: Platform.OS=="ios"?2: 4,
    shadowColor: "#F1145D",
    shadowRadius: 20,
    elevation: 20,
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
