import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useFonts } from "expo-font";
import * as Icons from "react-native-heroicons/outline";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
// import { ChevronDown } from "react-native-heroicons/outline";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Regular": require("./../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("./../assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
  });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ paddingTop: 8 }}>
      <View style={{ paddingLeft: 14, paddingRight: 14 }}>
        {/* HEADER */}
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View style={styles.HeadingContainer}>
            <Text style={styles.heading}>Deliver Now!</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.subHeading}>Current Location </Text>
              <Icons.ChevronDownIcon color={"#00ccbb"} size={20} />
            </View>
          </View>
          <Icons.UserIcon color={"#00ccbb"} size={35} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  tinyLogo: {
    height: 28,
    width: 28,
    padding: 10,
    borderRadius: 50,
  },
  HeadingContainer: {
    paddingLeft: 6,
    flex: 1,
  },
  heading: {
    fontSize: 10,
    color: "grey",
    fontFamily: "Ubuntu-Regular",
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Ubuntu-Bold",
  },
});
