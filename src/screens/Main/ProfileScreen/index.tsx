import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
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
import CustomInput from "../../../components/Input";
import ReportCard from "../../../components/ReportCard";
import Collapsible from "react-native-collapsible";

const ProfileScreen = ({ navigation }: any) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [showCurrentPassowrd, setShowCurrentPassowrd] = useState(false);

  const [reTypePassowrd, setReTypePassowrd] = useState(false);
  const [collapsibles, setCollapsibles] = useState({
    isPersonalInfo: true,
    isChangePassword: true,
    isLicenseInformation: true,
    isSample: true,
    isPrivacyPolicy: true,
  });

  return (
    <>
      <ScreenLayout>
        <View style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}>
          <View
            style={{
              width: sizeHelper.calWp(180),
              height: sizeHelper.calWp(180),
              borderRadius: sizeHelper.calWp(180),
              borderWidth: 2,
              borderColor: theme.colors.white,

              shadowOffset: {
                width: 0,
                height: -40,
              },
              shadowOpacity: 4,
              shadowColor: theme.colors.black,
              shadowRadius: 20,
              elevation: 20,
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={images.user3}
            />
          </View>

          <CustomText
            text={"Dr. Elisa Breth"}
            size={25}
            fontFam={fonts.SF_Pro_Semibold}
            fontWeight={"600"}
          />
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <CustomText
              text={"examples@gmail.com"}
              size={20}
              fontFam={fonts.SF_Pro_Medium}
              color={theme.colors.text_gray}
              fontWeight={"600"}
            />
            <View
              style={{
                width: sizeHelper.calWp(8),
                height: sizeHelper.calWp(8),
                backgroundColor: theme.colors.text_gray,
                borderRadius: sizeHelper.calWp(8),
              }}
            />
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}>
              <Image
                style={{
                  width: sizeHelper.calWp(28),
                  height: sizeHelper.calWp(28),
                  tintColor: theme.colors.text_gray,
                  resizeMode: "contain",
                }}
                source={images.location}
              />
              <CustomText
                text={"eNew York, NY"}
                size={20}
                fontFam={fonts.SF_Pro_Medium}
                color={theme.colors.text_gray}
                fontWeight={"600"}
              />
            </View>
          </View>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: sizeHelper.calHp(30),
            paddingBottom: sizeHelper.calHp(40),
          }}
        >
          <View style={{ ...styles.box }}>
            <TouchableOpacity
              onPress={() =>
                setCollapsibles({
                  ...collapsibles,
                  isPersonalInfo: !collapsibles?.isPersonalInfo,
                })
              }
              style={{
                ...appStyles.rowjustify,
                padding: sizeHelper.calWp(20),
                borderBottomWidth: collapsibles?.isPersonalInfo ? -1 : 1,
                borderBottomColor: theme.colors.border,
                backgroundColor: collapsibles?.isPersonalInfo
                  ? theme.colors.white
                  : theme.colors.ruby_pink + "15",
              }}
            >
              <CustomText
                text={`Personal Info`}
                size={23}
                fontFam={fonts.SF_Pro_Medium}
                fontWeight={"600"}
              />
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                  resizeMode: "contain",
                  tintColor: theme.colors.text_gray,
                }}
                source={
                  collapsibles?.isPersonalInfo
                    ? images.down_arrow
                    : images.drop_up
                }
              />
            </TouchableOpacity>
            <Collapsible collapsed={collapsibles?.isPersonalInfo}>
              <View
                style={{
                  padding: sizeHelper.calWp(20),
                  gap: sizeHelper.calHp(20),
                }}
              >
                <CustomInput
                  label="Name of Your Clinic"
                  height={68}
                  backgroundColor={theme.colors.gray}
                  placeholder="Type here"
                />

                <CustomInput
                  label="Location"
                  rightSource={images.location}
                  rightSourceSize={30}
                  height={68}
                  backgroundColor={theme.colors.gray}
                  placeholder="Enter Location"
                />
                <View style={appStyles.rowjustify}>
                  <CustomInput
                    label="First Name"
                    height={68}
                    width={"48%"}
                    backgroundColor={theme.colors.gray}
                    placeholder="Type here"
                  />

                  <CustomInput
                    label="Last Name"
                    height={68}
                    width={"48%"}
                    backgroundColor={theme.colors.gray}
                    placeholder="Type here"
                  />
                </View>

                <CustomInput
                  label="Email"
                  height={68}
                  backgroundColor={theme.colors.gray}
                  placeholder="Type here"
                />

                <CustomButtom text="Save Changes" />
              </View>
            </Collapsible>
          </View>

          <View style={{ ...styles.box }}>
            <TouchableOpacity
              onPress={() =>
                setCollapsibles({
                  ...collapsibles,
                  isChangePassword: !collapsibles?.isChangePassword,
                })
              }
              style={{
                ...appStyles.rowjustify,
                padding: sizeHelper.calWp(20),
                borderBottomWidth: collapsibles?.isChangePassword ? -1 : 1,
                borderBottomColor: theme.colors.border,
                backgroundColor: collapsibles?.isChangePassword
                  ? theme.colors.white
                  : theme.colors.ruby_pink + "15",
              }}
            >
              <CustomText
                text={`Change Password`}
                size={23}
                fontFam={fonts.SF_Pro_Medium}
                fontWeight={"600"}
              />
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                  resizeMode: "contain",
                  tintColor: theme.colors.text_gray,
                }}
                source={
                  collapsibles?.isChangePassword
                    ? images.down_arrow
                    : images.drop_up
                }
              />
            </TouchableOpacity>
            <Collapsible collapsed={collapsibles?.isChangePassword}>
              <View
                style={{
                  padding: sizeHelper.calWp(20),
                  gap: sizeHelper.calHp(20),
                }}
              >
                <CustomInput
                  label="Current Password"
                  secureTextEntry={showCurrentPassowrd}
                  height={68}
                  backgroundColor={theme.colors.gray}
                  onRightSource={() =>
                    setShowCurrentPassowrd(!showCurrentPassowrd)
                  }
                  rightSource={
                    !showCurrentPassowrd ? images.eye : images.eye_off
                  }
                  placeholder="Type here"
                />

                <CustomInput
                  label="New Password"
                  height={68}
                  secureTextEntry={reTypePassowrd}
                  backgroundColor={theme.colors.gray}
                  onRightSource={() => setReTypePassowrd(!reTypePassowrd)}
                  rightSource={!reTypePassowrd ? images.eye : images.eye_off}
                  placeholder="Type here"
                />

                <CustomInput
                  label="Retype New Password"
                  height={68}
                  secureTextEntry={reTypePassowrd}
                  backgroundColor={theme.colors.gray}
                  onRightSource={() => setReTypePassowrd(!reTypePassowrd)}
                  rightSource={!reTypePassowrd ? images.eye : images.eye_off}
                  placeholder="Type here"
                />

                <CustomButtom text="Save Changes" />
              </View>
            </Collapsible>
          </View>

          <View style={{ ...styles.box }}>
            <TouchableOpacity
              onPress={() =>
                setCollapsibles({
                  ...collapsibles,
                  isLicenseInformation: !collapsibles?.isLicenseInformation,
                })
              }
              style={{
                ...appStyles.rowjustify,
                padding: sizeHelper.calWp(20),
                borderBottomWidth: collapsibles?.isLicenseInformation ? -1 : 1,
                borderBottomColor: theme.colors.border,
                backgroundColor: collapsibles?.isLicenseInformation
                  ? theme.colors.white
                  : theme.colors.ruby_pink + "15",
              }}
            >
              <CustomText
                text={`License Information`}
                size={23}
                fontFam={fonts.SF_Pro_Medium}
                fontWeight={"600"}
              />
              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                  resizeMode: "contain",
                  tintColor: theme.colors.text_gray,
                }}
                source={
                  collapsibles?.isChangePassword
                    ? images.down_arrow
                    : images.drop_up
                }
              />
            </TouchableOpacity>
            <Collapsible collapsed={collapsibles?.isLicenseInformation}>
              <View
                style={{
                  padding: sizeHelper.calWp(20),
                  gap: sizeHelper.calHp(20),
                }}
              >
                <CustomInput
                  label="License Code"
                  secureTextEntry={true}
                  height={68}
                  backgroundColor={theme.colors.gray}
                  placeholder="Type here"
                />
                <View style={appStyles.rowjustify}>

                     <View style={styles.license_infoDetail}>
                  <CustomText
                    text={`Status`}
                    color={theme.colors.text_gray}
                    fontFam={fonts.SF_Pro_Medium}
                    fontWeight={"600"}
                  />

                  <CustomText
                    text={`Active`}
                    size={22}
                    fontFam={fonts.SF_Pro_Semibold}
                    fontWeight={"600"}
                  />
                </View>

                 <View style={styles.license_infoDetail}>
                  <CustomText
                    text={`Expiration Date`}
                    color={theme.colors.text_gray}
                    fontFam={fonts.SF_Pro_Medium}
                    fontWeight={"600"}
                  />

                  <CustomText
                    text={`12/31/2025`}
                    size={22}
                    fontFam={fonts.SF_Pro_Semibold}
                    fontWeight={"600"}
                  />
                </View>

                </View>
               

                <CustomButtom
                  borderWidth={1}
                  borderColor={theme.colors.primary}
                  bgColor={"transparent"}
                  textColor={theme.colors.primary}
                  text="Manage Subscription License"
                />
              </View>
            </Collapsible>
          </View>

          <View style={{ ...styles.box }}>
            <TouchableOpacity
              style={{
                ...appStyles.rowjustify,
                padding: sizeHelper.calWp(20),
                borderBottomColor: theme.colors.border,
                backgroundColor: theme.colors.white,
              }}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                <Image
                  style={{
                    width: sizeHelper.calWp(30),
                    height: sizeHelper.calWp(30),
                  }}
                  source={images.recording}
                  resizeMode="contain"
                />

                <CustomText
                  text={`Sample Images & Training video`}
                  size={23}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />
              </View>

              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                  resizeMode: "contain",
                  tintColor: theme.colors.text_gray,
                }}
                source={
                  collapsibles?.isChangePassword
                    ? images.down_arrow
                    : images.drop_up
                }
              />
            </TouchableOpacity>
          </View>

          <View style={{ ...styles.box }}>
            <TouchableOpacity
              style={{
                ...appStyles.rowjustify,
                padding: sizeHelper.calWp(20),
                borderBottomColor: theme.colors.border,
                backgroundColor: theme.colors.white,
              }}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                <Image
                  style={{
                    width: sizeHelper.calWp(30),
                    height: sizeHelper.calWp(30),
                  }}
                  source={images.info}
                  resizeMode="contain"
                />

                <CustomText
                  text={`Privacy & Data Policy`}
                  size={23}
                  fontFam={fonts.SF_Pro_Medium}
                  fontWeight={"600"}
                />
              </View>

              <Image
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                  resizeMode: "contain",
                  tintColor: theme.colors.text_gray,
                }}
                source={
                  collapsibles?.isChangePassword
                    ? images.down_arrow
                    : images.drop_up
                }
              />
            </TouchableOpacity>
          </View>

          <CustomButtom
            borderWidth={1}
            borderColor={theme.colors.ruby_pink}
            bgColor={"transparent"}
            textColor={theme.colors.ruby_pink}
            text="Logout"
          />
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default ProfileScreen;

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
    borderRadius: sizeHelper.calWp(25),
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: "hidden",
  },

  license_infoDetail: {
    width: "48%",
    backgroundColor: theme.colors.gray,
    alignItems: "center",
    gap: sizeHelper.calHp(10),
    paddingVertical: sizeHelper.calHp(15),
    borderRadius: sizeHelper.calWp(20),
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});
