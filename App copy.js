import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
} from "react-native";

import { DATA } from "./data";
function generateArrayOfObjects(length) {
  var arr = [];

  for (var i = 1; i <= length; i++) {
    var obj = {
      id: i,
      title: `Card ${i}`,
    };
    arr.push(obj);
  }

  return arr;
}
const data = generateArrayOfObjects(100);

const Header_Max_Height = 200;
const Header_Min_Height = 100;
const Footer_Max_Height = 50;
const Footer_Min_Height = 0;

const DynamicHeader = ({ animHeaderValue }) => {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ["blue", "red"],
    extrapolate: "clamp",
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}
    >
      <Text style={styles.headerText}>A List of Books</Text>
    </Animated.View>
  );
};

const DynamicFooter = ({ animHeaderValue }) => {
  const animateFooterHeight = animHeaderValue.interpolate({
    inputRange: [0, Footer_Max_Height - Footer_Min_Height],
    outputRange: [Footer_Max_Height, Footer_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        {
          height: animateFooterHeight,
          backgroundColor: "blue",
        },
      ]}
    >
      <Text style={styles.headerText}>A List of Books</Text>
    </Animated.View>
  );
};

export default function App() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        {data.map((book, index) => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
      </ScrollView>
      <DynamicFooter animHeaderValue={scrollOffsetY} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0,
  },
  scrollText: {
    fontSize: 19,
    textAlign: "center",
    padding: 20,
    color: "#000",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
