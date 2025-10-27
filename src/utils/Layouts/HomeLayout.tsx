import { ScrollView, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import sizeHelper, { screenWidth, screentHeight } from "../Helpers";
import { appStyles } from "../GlobalStyles";

export const HomeLayout = ({}) => {
  return (
    <>
      <SkeletonPlaceholder>
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(30),
            gap: sizeHelper.calHp(30),
          }}
        >
          <View style={appStyles.rowjustify}>
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <View
                style={{
                  width: sizeHelper.calWp(100),
                  height: sizeHelper.calWp(100),
                  borderRadius: sizeHelper.calWp(100),
                }}
              />
              <View style={{ gap: sizeHelper.calHp(25) }}>
                <View
                  style={{
                    height: sizeHelper.calHp(17),
                    width: sizeHelper.calWp(200),
                    borderRadius: sizeHelper.calWp(10),
                  }}
                />

                <View
                  style={{
                    height: sizeHelper.calHp(17),
                    width: sizeHelper.calWp(150),
                    borderRadius: sizeHelper.calWp(10),
                  }}
                />
              </View>
            </View>

            <View
              style={{
                width: sizeHelper.calWp(80),
                height: sizeHelper.calWp(80),
                borderRadius: sizeHelper.calWp(80),
              }}
            />
          </View>

          <View
            style={{
              height: sizeHelper.calHp(300),
              borderRadius: sizeHelper.calWp(30),
            }}
          />

          <View style={appStyles.rowjustify}>
            <View
              style={{
                height: sizeHelper.calHp(17),
                width: sizeHelper.calWp(200),
                borderRadius: sizeHelper.calWp(10),
              }}
            />
            <View
              style={{
                height: sizeHelper.calHp(17),
                width: sizeHelper.calWp(200),
                borderRadius: sizeHelper.calWp(10),
              }}
            />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
            <View
              style={{
                height: sizeHelper.calHp(180),
                borderRadius: sizeHelper.calWp(30),
                width: sizeHelper.calWp(240),
              }}
            />
            <View
              style={{
                height: sizeHelper.calHp(180),
                borderRadius: sizeHelper.calWp(30),
                width: sizeHelper.calWp(240),
              }}
            />
            <View
              style={{
                height: sizeHelper.calHp(180),
                borderRadius: sizeHelper.calWp(30),
                width: sizeHelper.calWp(240),
              }}
            />
          </View>

          <View
            style={{
              height: sizeHelper.calHp(17),
              width: sizeHelper.calWp(200),
              borderRadius: sizeHelper.calWp(10),
            }}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(30) }}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <View
                  style={{ alignItems: "center", gap: sizeHelper.calHp(10) }}
                >
                  <View
                    style={{
                      width: sizeHelper.calWp(100),
                      height: sizeHelper.calWp(100),
                      borderRadius: sizeHelper.calWp(100),
                    }}
                  />
                  <View
                    style={{
                      height: sizeHelper.calHp(17),
                      width: sizeHelper.calWp(100),
                      borderRadius: sizeHelper.calWp(10),
                    }}
                  />
                </View>
              );
            })}
          </View>

          <View style={appStyles.rowjustify}>
            <View
              style={{
                height: sizeHelper.calHp(17),
                width: sizeHelper.calWp(200),
                borderRadius: sizeHelper.calWp(10),
              }}
            />
            <View
              style={{
                height: sizeHelper.calHp(17),
                width: sizeHelper.calWp(200),
                borderRadius: sizeHelper.calWp(10),
              }}
            />
          </View>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <View
                style={{
                  height: sizeHelper.calHp(120),
                  borderRadius: sizeHelper.calWp(30),
                }}
              />
            );
          })}
        </View>
      </SkeletonPlaceholder>
    </>
  );
};
