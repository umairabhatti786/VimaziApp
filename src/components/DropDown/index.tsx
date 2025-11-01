import { Image, TouchableOpacity, View, ScrollView } from "react-native";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { useState } from "react";
import { appStyles } from "../../utils/GlobalStyles";
import { images } from "../../assets/images";
import { DropDownProps } from "../../utils/Types";
import { fonts } from "../../utils/Themes/fonts";

const Dropdown = ({
  height,
  width,
  borderRadius,
  backgroundColor,
  onRightSource,
  placeholder,
  value,
  data,
  top,
  label,
  onActions,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setIsOpen(!isOpen)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: sizeHelper.calWp(20),
          paddingRight: sizeHelper.calWp(30),
          height: sizeHelper.calHp(height || 73),
          alignItems: "center",
          gap: sizeHelper.calWp(10),
          borderRadius: borderRadius || sizeHelper.calWp(25),
          backgroundColor: backgroundColor || theme.colors.dark_grey,
        }}
      >
        {value?.name ? (
          <View style={{ ...appStyles.row }}>
            <CustomText
              text={value?.name}
              color={theme.colors.black}
              size={24}
            />
          </View>
        ) : (
          <CustomText
            text={placeholder}
            color={theme.colors.text_gray}
            size={21}
          />
        )}

        <TouchableOpacity
          onPress={onRightSource}
          disabled={!onRightSource}
          activeOpacity={0.3}
        >
          <Image
            source={isOpen?images.drop_up: images.down_arrow}
            style={{
              width: sizeHelper.calWp(27),
              height: sizeHelper.calWp(27),
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            width: "100%",
            borderRadius: sizeHelper.calWp(30),
            borderColor: theme.colors.border,
            maxHeight: sizeHelper.calWp(300),
            backgroundColor: theme.colors.gray,
            position: "absolute",
            zIndex: 999,
            top: sizeHelper.calHp(top || 120),
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {data?.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => {
                      onActions?.(item);
                      setIsOpen(false);
                    }}
                    style={{
                      gap: sizeHelper.calHp(20),
                      borderBottomWidth: index === data.length - 1 ? 0 : 0.5,
                      borderBottomColor: theme.colors.border,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        onActions?.(item);
                        setIsOpen(false);
                      }}
                      style={{
                        ...appStyles.row,
                        gap: sizeHelper.calWp(20),
                        padding: sizeHelper.calWp(25),
                      }}
                    >
                      <CustomText
                        text={item?.name}
                        color={theme.colors.black}
                        size={22}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default Dropdown;
