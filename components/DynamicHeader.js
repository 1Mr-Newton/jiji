import {
  Animated,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
} from "react-native";

import { useRef } from "react";

const Header_Max_Height = 240;
const Header_Min_Height = 100;
const DynamicHeader = ({ animHeaderValue }) => {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });
  const animatePadding = animHeaderValue.interpolate({
    inputRange: [0, 40 - 5],
    outputRange: [40, 5],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        height: animateHeaderHeight,

        backgroundColor: "#00b441",
        // backgroundColor: "#273227",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: animatePadding,
      }}
    >
      <Text
        style={{
          color: "white",
          marginBottom: 40,
          fontSize: 28,
          fontWeight: "300",
        }}
      >
        What are you looking for?
      </Text>
      <View
        style={{
          height: 50,
          backgroundColor: "white",
          width: "95%",
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={require("../assets/search.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: "#9f9f9f",
                marginRight: 10,
              }}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
            <View>
              <Text
                style={{ color: "#96a8ac", fontSize: 18, fontWeight: "400" }}
              >
                Type your search here
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={() => console.log("image pressed")}>
          <View>
            <Image
              source={require("../assets/filter.png")}
              style={{ height: 20, width: 20, tintColor: "#00b441" }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

export default DynamicHeader;
