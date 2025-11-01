import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { useTheme } from "@react-navigation/native";
import { theme } from "../../utils/Themes";
import { appStyles } from "../../utils/GlobalStyles";
import { images } from "../../assets/images";
import CustomButtom from "../../components/Button";

const PatientsCard = ({ item, borderWidth }: any) => {
  return (
    <View
      style={{
        padding: sizeHelper.calWp(30),
        borderRadius: sizeHelper.calWp(30),
        backgroundColor: theme.colors.white,
        gap: sizeHelper.calHp(20),
        borderWidth: borderWidth,
        borderColor: theme.colors.border,
      }}
    >
     
      <View style={{ ...appStyles.rowjustify }}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <Image
            style={{
              width: sizeHelper.calWp(70),
              height: sizeHelper.calWp(70),
              borderRadius: sizeHelper.calWp(70),
            }}
            resizeMode="contain"
            source={item?.img}
          />
          <View style={{ gap: sizeHelper.calHp(5) }}>
            <View style={{ ...appStyles.rowjustify, width: "91%" }}>
              <CustomText
                text={item?.name}
                fontWeight="600"
                size={22}
                fontFam={fonts.SF_Pro_Semibold}
              />

              <CustomText
                text={`Age : ${item?.age}`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: sizeHelper.calWp(15),
                alignItems: "center",
              }}
            >
             
             
              <CustomText
                text={`Weight : ${item?.weight}`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
               <View
                    style={styles.line}
                  />
               <CustomText
                text={`Height : ${item?.height}`}
                fontWeight="600"
                size={18}
                color={theme.colors.text_gray}
                fontFam={fonts.SF_Pro_Medium}
              />
              {item?.dob && (
                <View
                  style={{
                    flexDirection: "row",
                    gap: sizeHelper.calWp(15),
                    alignItems: "center",
                  }}
                >
                  <View
                    style={styles.line}
                  />
                  <CustomText
                    text={`DOB : ${item?.dob}`}
                    fontWeight="600"
                    size={18}
                    color={theme.colors.text_gray}
                    fontFam={fonts.SF_Pro_Medium}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={appStyles.rowjustify}>
        <View style={styles.detail_card}>
          <CustomText
            text={"Last Session date"}
            fontWeight="600"
            color={theme.colors.text_gray}
            fontFam={fonts.SF_Pro_Medium}
          />
          <CustomText
            text={"11 Sep 2025, 10:30 am"}
            fontWeight="700"
            size={18}
            fontFam={fonts.SF_Pro_Bold}
          />
        </View>

         <View style={styles.detail_card}>
          <CustomText
            text={"Patient Added"}
            fontWeight="600"
            color={theme.colors.text_gray}
            fontFam={fonts.SF_Pro_Medium}
          />
          <CustomText
            text={"11 Sep 2025"}
            fontWeight="700"
            size={18}
            fontFam={fonts.SF_Pro_Bold}
          />
        </View>
      </View>

      <View style={appStyles.rowjustify}>
        <CustomButtom
          text="View Report"
          height={62}
          textColor={theme.colors.primary}
          bgColor={"transparent"}
          borderWidth={1}
          borderColor={theme.colors.border}
          //    onPress={() => navigation.navigate("BottomTab")}
          width={"48%"}
        />

        <CustomButtom
          text="New Trial"
          height={62}
          //    onPress={() => navigation.navigate("BottomTab")}
          width={"48%"}
        />
      </View>
    </View>
  );
};
export default PatientsCard;

const styles = StyleSheet.create({
  detail_card: {
    width: "48%",
    borderRadius: sizeHelper.calWp(25),
    justifyContent: "space-between",
    padding: sizeHelper.calWp(20),
    backgroundColor: theme.colors.gray,
    gap: sizeHelper.calHp(10),
  },
  line:{
     width: sizeHelper.calWp(2),
                  height: sizeHelper.calHp(20),
                  backgroundColor: theme.colors.border,
  }
});
