import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../components/Text";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import HomeScreen from "../../screens/Main/HomeScreen";
import PatientsScreen from "../../screens/Main/PatientsScreen";
import ReportsScreen from "../../screens/Main/ReportsScreen";
import ProfileScreen from "../../screens/Main/ProfileScreen";
import { images } from "../../assets/images";
import { fonts } from "../../utils/Themes/fonts";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import CustomHeader from "../../components/CustomHeader";
import { useRef, useState } from "react";
import { appStyles } from "../../utils/GlobalStyles";
import CustomInput from "../../components/Input";
import CustomButton from "../../components/Button";
import Dropdown from "../../components/DropDown";
import Collapsible from "react-native-collapsible";

const BottomTab = ({ navigation }: any) => {
  const Bottom = createBottomTabNavigator();
  const NewSessionSheetModalRef = useRef<any>(null);
  const NewSessionSnapToPoints = ["80%", "90%", "90%"];
  const [isShowSelectStudent, setIsShowSelectStudent] = useState(true);
  const [isAddPatients, setIsAddPatients] = useState(false);

  const SelectPaitentSheetModalRef = useRef<any>(null);

  const [checkBox, setCheckBox] = useState({
    isDevicePlacement: true,
    isTreadmillReadiness: true,
    isPatientPose: false,
  });

  const HeightData = [
    { name: "5.7", id: 1 },
    { name: "6.7", id: 2 },
    { name: "4.7", id: 3 },
    { name: "5.7", id: 4 },
    { name: "6.7", id: 5 },
    { name: "6.7", id: 6 },
  ];

  const PaitentData = [
    {
      name: "Darrell Steward",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      dob: "25 Dec 2025",
      weight: "28 kg",
    },
    {
      name: "Cody Fisher",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
    {
      name: "Jane Cooper",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
    {
      name: "Jerome Bell",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
    {
      name: "Ralph Edwards",
      date: "11 Sep 2025, 10:30 am",
      report_no: "2345",
      img: images.user1,
      age: "Age",
      weight: "28 kg",
      dob: "25 Dec 2025",
    },
  ];

  const TabItem = ({ focused, title, img }: any) => {
    return (
      <View style={[style.itemStyle]}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? theme.colors.primary : theme.colors.text_gray,
          }}
        />
        <CustomText
          text={title}
          fontFam={focused ? fonts.SF_Pro_Semibold : fonts.SF_Pro_Medium}
          fontWeight="600"
          size={18}
          color={focused ? theme.colors.primary : theme.colors.text_gray}
        />
      </View>
    );
  };

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
            ...style.checkBoxContainer,
            borderWidth: isEnable ? 0 : 1,
            borderColor: theme.colors.border,
            backgroundColor: isEnable ? theme.colors.green : "transparent",
          }}
        >
          {isEnable && (
            <Image
              source={images.check}
              style={{
                width: sizeHelper.calWp(25),
                height: sizeHelper.calWp(25),
              }}
              resizeMode={"contain"}
            />
          )}
        </TouchableOpacity>

        <CustomText
          text={title}
          textDecorationLine={isEnable ? "line-through" : "none"}
          fontWeight="600"
          color={isEnable ? theme.colors.text_gray : theme.colors.primary}
          fontFam={fonts.SF_Pro_Medium}
        />
      </TouchableOpacity>
    );
  };

  const ReportDetailCard = ({ width, title, label, alignItems }: any) => {
    return (
      <View
        style={{
          backgroundColor: theme.colors.gray,
          gap: sizeHelper.calHp(10),
          padding: sizeHelper.calHp(15),
          borderRadius: sizeHelper.calWp(20),
          borderWidth: 1,
          borderColor: theme.colors.border,
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

  const AddPatientsCard = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsAddPatients(true);
          SelectPaitentSheetModalRef.current.dismiss();

          setTimeout(() => {
            NewSessionSheetModalRef.current.present();
          }, 1000);
        }}
      >
        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(20),
            padding: sizeHelper.calWp(30),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(70),
              height: sizeHelper.calWp(70),
              borderRadius: sizeHelper.calWp(70),
            }}
            resizeMode="contain"
            source={item?.img}
          />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <CustomText
              text={item?.name}
              fontWeight="600"
              size={22}
              fontFam={fonts.SF_Pro_Semibold}
            />

            <View
              style={{
                flexDirection: "row",
                gap: sizeHelper.calWp(15),
                alignItems: "center",
              }}
            >
              <CustomText
                text={`Age : ${item?.age}`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
              <View
                style={{
                  width: sizeHelper.calWp(2),
                  height: sizeHelper.calHp(20),
                  backgroundColor: theme.colors.border,
                }}
              />
              <CustomText
                text={`Weight : ${item?.weight}`}
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
                <View
                  style={{
                    width: sizeHelper.calWp(2),
                    height: sizeHelper.calHp(20),
                    backgroundColor: theme.colors.border,
                  }}
                />
                <CustomText
                  text={`DOB : ${item?.dob}`}
                  fontWeight="600"
                  size={18}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: sizeHelper.calHp(1),
            width: "100%",
            backgroundColor: theme.colors.border,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Bottom.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          animationEnabled: false,
          gestureEnabled: true,
          keyboardHidesTabBar: true,

          cardStyleInterpolator: ({ current, next, layouts }: any) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
          tabBarStyle: {
            backgroundColor: theme.colors.white,
            justifyContent: "center",
            alignItems: "center",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowColor: theme.colors.black,
            shadowRadius: 4,
            elevation: 10,
            height: sizeHelper.calHp(140),
            borderTopWidth: -1,
            paddingTop: sizeHelper.calHp(30),
          },

          headerShown: false,
        })}
      >
        {/* Home Tab */}
        <Bottom.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  title={"Home"}
                  colors={theme.colors}
                  img={images.home}
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* Calendar Tab */}
        <Bottom.Screen
          name="PatientsScreen"
          component={PatientsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  colors={theme.colors}
                  title={"Patients"}
                  img={images.patients}
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* AddEvent Tab */}

        <Bottom.Screen
          name="camera"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <TouchableOpacity
                  onPress={() => NewSessionSheetModalRef.current.present()}
                  style={{
                    height: sizeHelper.calHp(80),
                    width: sizeHelper.calHp(80),
                    borderRadius: sizeHelper.calWp(80),
                    backgroundColor: "#F1145D",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: sizeHelper.calHp(20),
                    borderWidth: 1,
                    borderColor: theme.colors.white,

                    shadowColor: "#F1145D",
                    shadowOffset: {
                      width: 0,
                      height: Platform.OS == "ios" ? 0 : -40,
                    },
                    shadowOpacity: Platform.OS == "ios" ? 2 : 4,
                    shadowRadius: 20,
                    elevation: 20,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={images.camera}
                    style={{
                      height: sizeHelper.calHp(35),
                      width: sizeHelper.calHp(35),
                      tintColor: theme.colors.white,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />

        <Bottom.Screen
          name="ReportsScreen"
          component={ReportsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  colors={theme.colors}
                  title={"Reports"}
                  img={images.reports}
                  focused={focused}
                />
              );
            },
          }}
        />

        <Bottom.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <TabItem
                  colors={theme.colors}
                  title={"Profile"}
                  img={images.profile}
                  focused={focused}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>

      <CustomBottomSheet
        bottomSheetModalRef={NewSessionSheetModalRef}
        snap={NewSessionSnapToPoints}
      >
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            gap: sizeHelper.calHp(30),
          }}
        >
          <CustomHeader
            title="New Session"
            onPress={() => NewSessionSheetModalRef.current.dismiss()}
          />

          {isAddPatients ? (
            <View
              style={{
                ...style.box,
                alignItems: "center",
                padding: sizeHelper.calWp(20),
                gap: sizeHelper.calHp(20),
                borderColor: theme.colors.border,
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
                <View style={style.line} />

                <CustomText
                  text={`Height : $5’6`}
                  fontWeight="600"
                  size={18}
                  color={theme.colors.text_gray}
                  fontFam={fonts.SF_Pro_Medium}
                />
                <View style={style.line} />
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
          ) : (
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <Dropdown
                backgroundColor={theme.colors.gray}
                label="Select Patients"
                placeholder="Select Patients"
                data={HeightData}
                // onRightSource={()=}
              />
              <TouchableOpacity
                style={{
                  paddingVertical: sizeHelper.calHp(5),
                  alignItems: "flex-end",
                }}
                onPress={() => {
                  NewSessionSheetModalRef.current.dismiss();
                  setTimeout(() => {
                    SelectPaitentSheetModalRef.current.present();
                  }, 1000);
                }}
                // style={{
                //   paddingVertical: sizeHelper.calHp(5),
                //   alignItems: "flex-end",
                // }}
              >
                <CustomText
                  text={"Add New Patient"}
                  fontWeight="600"
                  size={20}
                  color={theme.colors.ruby_pink}
                  fontFam={fonts.SF_Pro_Semibold}
                />
              </TouchableOpacity>
            </View>
          )}

          <View style={appStyles.rowjustify}>
            <CustomInput
              width={"48%"}
              backgroundColor={theme.colors.gray}
              label="Cadence"
              rightSourceSize={30}
              rightSource={images.select_weight}
              placeholder="Select Weight"
            />
            <Dropdown
              width={"48%"}
              backgroundColor={theme.colors.gray}
              label="Footwear"
              placeholder="Select"
              data={HeightData}
              // onRightSource={()=}
            />
          </View>
          <View style={appStyles.rowjustify}>
            <CustomInput
              width={"48%"}
              backgroundColor={theme.colors.gray}
              label="Gait Type"
              rightSourceSize={30}
              rightSource={images.select_weight}
              placeholder="Run"
            />
            <Dropdown
              width={"48%"}
              backgroundColor={theme.colors.gray}
              label="Treadmill Speed"
              placeholder="Select"
              data={HeightData}
              // onRightSource={()=}
            />
          </View>
          <CheckBoxCard
            title={"Device Placement"}
            onPress={() =>
              setCheckBox({
                ...checkBox,
                isDevicePlacement: !checkBox?.isDevicePlacement,
              })
            }
            isEnable={checkBox?.isDevicePlacement}
          />

          <CheckBoxCard
            title={"Treadmill Readiness"}
            onPress={() =>
              setCheckBox({
                ...checkBox,
                isTreadmillReadiness: !checkBox?.isTreadmillReadiness,
              })
            }
            isEnable={checkBox?.isTreadmillReadiness}
          />

          <CheckBoxCard
            title={"Patient pose & camera framing"}
            onPress={() =>
              setCheckBox({
                ...checkBox,
                isPatientPose: !checkBox?.isPatientPose,
              })
            }
            isEnable={checkBox?.isPatientPose}
          />

          <CustomButton
            text="Begin Capture"
            onPress={() => {
              NewSessionSheetModalRef.current.dismiss();

              setTimeout(() => {
                navigation.navigate("TreadmillRecordingScreen");
              }, 1000);
            }}
            width={"100%"}
          >
            <Image
              style={{
                width: sizeHelper.calWp(35),
                height: sizeHelper.calWp(35),
              }}
              source={images.camera}
              resizeMode="contain"
            />
          </CustomButton>
        </View>
        {/* <AddNewPatientSheet /> */}
      </CustomBottomSheet>

      <CustomBottomSheet
        bottomSheetModalRef={SelectPaitentSheetModalRef}
        snap={NewSessionSnapToPoints}
      >
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            gap: sizeHelper.calHp(30),
          }}
        >
          <CustomHeader
            title="New Session"
            onPress={() => SelectPaitentSheetModalRef.current.dismiss()}
          />
          <View style={{ gap: sizeHelper.calHp(10) }}>
            <View
              style={{
                ...style.box,
                borderColor: isShowSelectStudent
                  ? theme.colors.primary
                  : theme.colors.border,
              }}
            >
              <TouchableOpacity
                style={{
                  ...appStyles.rowjustify,
                  padding: sizeHelper.calWp(30),
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.primary,
                  backgroundColor: isShowSelectStudent
                    ? theme.colors.gray
                    : theme.colors.white,
                }}
              >
                <CustomText
                  text={`Select Patients`}
                  size={21}
                  fontFam={fonts.SF_Pro_Medium}
                  color={theme.colors.text_gray}
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
                    isShowSelectStudent ? images.down_arrow : images.drop_up
                  }
                />
              </TouchableOpacity>

              <FlatList
                showsVerticalScrollIndicator={false}
                data={PaitentData}
                // contentContainerStyle={{gap:sizeHelper.calHp(20)}}
                renderItem={({ item, index }: any) => {
                  return (
                    <>
                      <AddPatientsCard item={item} />
                    </>
                  );
                }}
              />
            </View>
          </View>
        </View>
        {/* <AddNewPatientSheet /> */}
      </CustomBottomSheet>
    </>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(130),
    backgroundColor: "transparent", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: sizeHelper.calHp(7),
  },
  img: {
    height: sizeHelper.calHp(33),
    width: sizeHelper.calHp(33),
  },
  checkBoxContainer: {
    width: sizeHelper.calWp(45),
    height: sizeHelper.calWp(45),
    backgroundColor: theme.colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeHelper.calWp(45),
  },

  box: {
    borderRadius: sizeHelper.calWp(25),
    borderWidth: 1,
    overflow: "hidden",
  },
  line: {
    width: sizeHelper.calWp(2),
    height: sizeHelper.calHp(20),
    backgroundColor: theme.colors.border,
  },
  tabBarStyle: {},
});
