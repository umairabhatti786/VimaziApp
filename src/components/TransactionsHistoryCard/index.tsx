import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    StyleProp,
    ViewStyle,
  } from 'react-native';
import sizeHelper, {screenWidth, screentHeight} from '../../utils/Helpers';
import {fonts} from '../../utils/Themes/fonts';
import {theme} from '../../utils/Themes';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../Header';
import AnimatedProgressBar from '../AnimatedProgressBar';
import { appStyles } from '../../utils/GlobalStyles';
import images from '../../utils/Constants/images';
import CustomText from '../Text';
import moment from 'moment';
import icons from '../../utils/Constants/icons';


  const TransactionsHistoryCard = ({item,showSander}: any) => {
    return (
      <>
       <View
        style={{
          padding: sizeHelper.calWp(25),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.colors.white,
          borderRadius: sizeHelper.calWp(30),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
            {showSander?(
                       <View
            style={{
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
              borderRadius: sizeHelper.calWp(100),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E8EFE8",
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                tintColor: "#256B1E",
              }}
              source={icons.request}
            />
          </View>
            ):
              <Image
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
              borderRadius: sizeHelper.calWp(80),
            }}
            source={item?.icon?{uri:item?.icon}:images.image_placeholder}
          />
            }
        
          <View style={{ gap: sizeHelper.calHp(5) }}>
            <CustomText
              text={item?.recipient_name?item?.recipient_name:"N/A"}
              fontWeight="700"
              size={25}
              fontFam={fonts.PlusJakartaSans_Bold}
            />
            <CustomText
              text={moment(item?.created_at).format("MMMM D, YYYY")}
              size={19}
              color={theme.colors.text_gray100}
            />
          </View>
        </View>
        <View style={{ alignItems: "flex-end", gap: sizeHelper.calHp(10) }}>
          <CustomText
            text={`+ ${item?.currency_from}${item?.amount_sent}` }
            fontWeight="700"
            size={25}
            color={
              item?.status == "Failed"
                ? theme.colors.warning
                : theme.colors.green
            }
            fontFam={fonts.PlusJakartaSans_SemiBold}
          />

          <TouchableOpacity
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(20),
              backgroundColor:
                item?.status == "Completed"
                  ? "#E8EFE8"
                  : item?.status == "Pending"
                  ? "#E8E7F5"
                  : item?.status == "Failed"
                  ? "#F4E7E7"
                  : theme.colors.primary,
              paddingHorizontal: sizeHelper.calWp(25),
              paddingVertical: sizeHelper.calHp(8),
              borderRadius: sizeHelper.calWp(18),
            }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(33),
                height: sizeHelper.calWp(33),
                tintColor:
                  item?.status == "Completed"
                    ? theme.colors.dark_green
                    : item?.status == "Pending"
                    ? theme.colors.dark_blue
                    : item?.status == "Failed"
                    ? theme.colors.dark_red
                    : theme.colors.primary,
                marginTop: sizeHelper.calHp(5),
              }}
              resizeMode="contain"
              source={
                item?.status == "Completed"
                  ? icons.check
                  : item?.status == "Pending"
                  ? icons?.clock
                  : item?.status == "Failed"
                  ? icons.cross
                  : icons?.check
              }
            />
            <CustomText
              text={
                item?.status == "Completed"
                  ? "Completed"
                  : item?.status == "Pending"
                  ? "Pending"
                  : item?.status == "Failed"
                  ? "Failed"
                  : "Status"
              }
              fontWeight="600"
              size={21}
              color={
                item?.status == "Completed"
                  ? theme.colors.dark_green
                  : item?.status == "Pending"
                  ? theme.colors.dark_blue
                  : item?.status == "Failed"
                  ? theme.colors.dark_red
                  : theme.colors.primary
              }
              fontFam={fonts.PlusJakartaSans_SemiBold}
            />
          </TouchableOpacity>
        </View>
      </View>
      </>
    );
  };
  export default TransactionsHistoryCard;
  
  const styles = StyleSheet.create({
   
  });
  