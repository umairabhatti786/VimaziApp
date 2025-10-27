import { ScrollView, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import sizeHelper, { screenWidth, screentHeight } from "../Helpers";
import { appStyles } from "../GlobalStyles";

export const RecipientsCardLayout = ({}) => {
  return (
    <>
      <SkeletonPlaceholder>
        <View style={{gap:sizeHelper.calHp(20)}}>
          {[1, 2, 3, 4,5,6].map((item, index) => {
            return (
              <View style={appStyles.rowjustify}>
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                  <View
                    style={{
                      width: sizeHelper.calWp(80),
                      height: sizeHelper.calWp(80),
                      borderRadius: sizeHelper.calWp(80),
                    }}
                  />
                  <View
                    style={{
                      height: sizeHelper.calHp(17),
                      width: sizeHelper.calWp(180),
                      borderRadius: sizeHelper.calWp(10),
                    }}
                  />
                </View>

                <View
                  style={{
                    width: sizeHelper.calWp(35),
                    height: sizeHelper.calWp(35),
                    borderRadius: sizeHelper.calWp(10),
                  }}
                />
              </View>
            );
          })}
        </View>
      </SkeletonPlaceholder>
    </>
  );
};
