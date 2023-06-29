import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
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

const Home = () => {
  const theme = useColorScheme();

  return (
    <>
      {/* <StatusBar style="light" /> */}

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

export default Home;
