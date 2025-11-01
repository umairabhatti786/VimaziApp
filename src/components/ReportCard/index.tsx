import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { useTheme } from "@react-navigation/native";
import { theme } from "../../utils/Themes";
import { appStyles } from "../../utils/GlobalStyles";
import { images } from "../../assets/images";

const ReportCard = ({item, borderWidth,onPress}: any) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        padding: sizeHelper.calWp(30),
        borderRadius: sizeHelper.calWp(30),
        backgroundColor: theme.colors.white,
        gap: sizeHelper.calHp(20),
        borderWidth:borderWidth,
        borderColor:theme.colors.border
      }}
    >
      <View style={appStyles.rowjustify}>
        <View style={{ gap: sizeHelper.calHp(10) }}>
          <View style={{ flexDirection: "row", gap: sizeHelper.calWp(10) }}>
            <CustomText
              text={`Report Number : `}
              fontWeight="600"
              fontFam={fonts.SF_Pro_Medium}
              size={25}
            />
            <CustomText
              text={item?.report_no}
              style={{ marginTop: sizeHelper.calHp(5) }}
              fontWeight="700"
              fontFam={fonts.SF_Pro_Bold}
              size={25}
            />
          </View>

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
              }}
              source={images.calendar}
            />

            <CustomText
              text={item?.date}
              color={theme.colors.text_gray}
              size={20}
            />
          </View>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(30),
            height: sizeHelper.calWp(30),
          }}
          resizeMode="contain"
          source={images.next_arrow}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: sizeHelper.calHp(1.5),
          backgroundColor: theme.colors.border,
        }}
      />
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
            {
              item?.dob&&(

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

              )
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ReportCard;
