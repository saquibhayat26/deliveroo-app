import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useFonts } from "expo-font";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
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

      {/* SEARCH BOX */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icons.MagnifyingGlassIcon
            color={"gray"}
            size={20}
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <View>
          <Icons.AdjustmentsVerticalIcon color={"#00ccbb"} size={22} />
        </View>
      </View>

      {/* BODY */}
      <ScrollView>
        {/* CATEGORIES */}
        <Categories />

        {/* FEATURED */}
        <FeaturedRow
          title={"Offers near you!"}
          desc={"why not support your local restaurant tonight"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
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
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  searchBox: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
});
