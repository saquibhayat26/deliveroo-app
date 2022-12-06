import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CategoryCard = ({ image, title }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{ uri: image }} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 4,

    position: "relative",
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  cardText: {
    position: "absolute",
    bottom: 8,
    left: 6,
    color: "white",
  },
});
