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

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  fontWeight,
  multiline,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  color,
  maxLength,
  placeholderTextColor,
  borderRadius,
  backgroundColor,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  label,
  borderColor,
  fontFamily,
  width,
  rightSource,
  height,
  onRightSource,
  leftSource,
  rightSourceSize,
}: InputProps) => {
  return (
    <View
      style={{
        width: width || "100%",
      }}
    >
      {label && (
        <View
          style={{
            marginBottom: sizeHelper.calHp(15),
          }}
        >
          <CustomText
            text={label}
            fontWeight="600"
            size={20}
            fontFam={fonts.SF_Pro_Semibold}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: sizeHelper.calWp(20),
          paddingRight: sizeHelper.calWp(20),
          height: sizeHelper.calHp(height || 73),
          alignItems: "center",
          borderRadius: borderRadius || sizeHelper.calWp(25),
          backgroundColor: backgroundColor || theme.colors.white,
        }}
      >
        {leftSource && (
          <Image
            source={leftSource}
            style={{
              width: sizeHelper.calWp(30),
              height: sizeHelper.calWp(30),
              tintColor: theme.colors.text_gray,
            }}
            resizeMode={"contain"}
          />
        )}

        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false} // Disable font scaling
          style={{
            fontSize: sizeHelper.calHp(fontSize || 22),
            width: rightSource ? "85%" : "98%",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            textAlign: textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: fontFamily || fonts.SF_Pro_Regular,
            fontWeight: fontWeight || "500",
            color: color || theme.colors.black,
            paddingRight: sizeHelper.calWp(rightSource ? 10 : 0),
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor || theme.colors.text_gray}
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
        {rightSource && (
          <TouchableOpacity
            onPress={onRightSource}
            disabled={!onRightSource}
            activeOpacity={0.3}
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100%",
              width: sizeHelper.calWp(50),
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(rightSourceSize || 38),
                height: sizeHelper.calWp(rightSourceSize || 38),
                tintColor: theme.colors.text_gray,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* {error && (
        <View
          style={{
            marginTop: sizeHelper.calHp(10),
            alignItems:"flex-end"
          }}>
          <CustomText size={20} text={error} color={theme.colors.red} />
        </View>
      )} */}
    </View>
  );
};
export default CustomInput;
