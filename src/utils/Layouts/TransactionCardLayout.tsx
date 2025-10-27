import {ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import sizeHelper, {screenWidth, screentHeight} from '../Helpers';
import {appStyles} from '../GlobalStyles';

export const TransactionCardLayout = ({}) => {
  const DEVICE_WIDTH = screenWidth - 40;

  return (
    <>
      <SkeletonPlaceholder>
        <View style={{gap: sizeHelper.calHp(20),}}>
        
          {[1, 2, 3, 4, 5, 6,7,8].map((item, index) => {
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
