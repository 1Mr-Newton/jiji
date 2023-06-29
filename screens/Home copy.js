import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useColorScheme } from "react-native";
import React, { useState, useRef } from "react";
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
const Header_Min_Height = 150;
const Trending_Max_Height = 50;
const Trending_Min_Height = 20;
const DynamicHeader = ({ animHeaderValue }) => {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        height: animateHeaderHeight,
        backgroundColor: "#00b441",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>What are you looking for?</Text>
      <View
        style={{
          height: 42,
          backgroundColor: "white",
          width: "95%",
          borderRadius: 4,
        }}
      >
        <TouchableWithoutFeedback>
          <Text>Type your search here</Text>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};
const Trending = ({ animHeaderValue }) => {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Trending_Max_Height - Trending_Min_Height],
    outputRange: [Trending_Max_Height, Trending_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: "#00b441",
        },
      ]}
    >
      <Text style={styles.headerText}>A List of Books</Text>
    </Animated.View>
  );
};

const Home = () => {
  const theme = useColorScheme();
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <DynamicHeader animHeaderValue={scrollOffsetY} />

      <View
        style={{
          backgroundColor: "purple",
          overflow: "hidden",
          flex: 1,
          paddingBottom: 90,
        }}
      >
        <ScrollView
          style={{ backgroundColor: "blue", flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollOffsetY } },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {data.map((book, index) => {
            return <Text key={book.id}>{book.title}</Text>;
          })}
        </ScrollView>
      </View>
    </>
  );
};

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

export default Home;
