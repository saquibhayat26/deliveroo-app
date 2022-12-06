import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import { useFonts } from "expo-font";

const FeaturedRow = ({ title, desc }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Icons.ArrowRightIcon color={"#00ccbb"} size={26} />
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingRight: 18,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Ubuntu-Regular",
  },
  desc: {
    fontSize: 12,
    color: "gray",
    fontFamily: "Ubuntu-Light",
  },
});
