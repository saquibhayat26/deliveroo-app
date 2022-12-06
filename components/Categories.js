import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 18,
        paddingLeft: 12,
      }}
    >
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing1"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing2"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing3"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing4"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing5"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing5"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing5"}
      />
      <CategoryCard
        image={"https://links.papareact.com/gn7"}
        title={"Testing5"}
      />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
