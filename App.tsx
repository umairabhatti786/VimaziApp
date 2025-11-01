import React from "react";
import RootNavigator from "./src/routes/RootNavigator";
import { View } from "react-native";
import { Provider } from "react-redux";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";

const App = ({ children, edges }: any) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
