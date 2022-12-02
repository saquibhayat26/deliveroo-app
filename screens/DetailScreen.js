import { Button, Text, View } from "react-native";
import React from "react";

const DetailScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-red-300">
      <Text style={{ color: "blue" }}>DetailScreen</Text>
      <Button title="go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailScreen;
