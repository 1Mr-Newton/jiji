import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { categoryItemPaths, CATEGORIES, TRENDING } from "../constants";

const numColumns = 3;
const WIDTH = Dimensions.get("window").width;

function formatData(dataList, numColumns) {
  const formattedData = [...dataList];
  while (formattedData.length % numColumns !== 0) {
    formattedData.push({ key: "blank", empty: true });
  }
  return formattedData;
}
const CategoryItems = ({ scrollOffsetY, navigateToScreen }) => (
  <View style={styles.flatListContainer}>
    <FlatList
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
        { useNativeDriver: false }
      )}
      style={styles.flatList}
      data={formatData(CATEGORIES, numColumns)}
      numColumns={numColumns}
      renderItem={({ item, index }) => {
        if (item.empty) {
          return <View style={styles.emptyItem} />;
        }
        return (
          <TouchableWithoutFeedback onPress={navigateToScreen}>
            <View style={styles.gridItem}>
              <Image
                source={categoryItemPaths[item.icon + "Icon"]}
                style={styles.categoryItemImage}
              />
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }}
      keyExtractor={(item) => item.key}
      ListFooterComponent={() => {
        return (
          <ScrollView
            style={{ backgroundColor: "#ebf1f7", paddingHorizontal: 10 }}
          >
            <View
              style={{
                height: 30,
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 17,
                }}
              >
                Trending
              </Text>
            </View>

            {/* end of trending */}
            <View
              style={{
                height: 180,
                width: "100%",
                // backgroundColor: "#fdecc1",
                backgroundColor: "#f6f6f6",
                borderRadius: 2,
                shadowColor: "#000000",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "38%",
                    backgroundColor: "purple",
                  }}
                >
                  <Image
                    source={require("../assets/testim.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "cover",
                    }}
                  />
                  <View
                    style={{
                      height: 20,
                      backgroundColor: "'rgba(0, 0, 0, 0.7)'",
                      width: 35,
                      borderRadius: 5,
                      flexDirection: "row",
                      padding: 2,
                      justifyContent: "center",
                      alignItems: "center",
                      bottom: 5,
                      left: 10,
                      position: "absolute",
                    }}
                  >
                    <Text
                      style={{
                        color: "#dfe7ea",
                        fontWeight: "600",
                        fontSize: 16,
                      }}
                    >
                      5
                    </Text>
                    <Image
                      source={require("../assets/camera.png")}
                      style={{
                        height: 12,
                        width: 12,
                        tintColor: "#dfe7ea",
                        marginLeft: 2,
                      }}
                    />
                  </View>
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      width: "100%",
                      flexWrap: "wrap",
                      fontSize: 17,
                      color: "#304049",
                    }}
                  >
                    1bdm Apartment and some long desription or title. Hahaha, i
                    don't even know what I'm saying 1bdm Apartment and some long
                    desription or title. Hahaha, i don't even know what I'm
                    saying
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <View
                      style={{
                        marginRight: 10,
                        backgroundColor: "#ebf1f7",
                        padding: 5,
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "#304049", fontWeight: "500" }}>
                        Ghanain Used
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 10,
                        backgroundColor: "#ebf1f7",
                        padding: 5,
                        borderRadius: 3,
                      }}
                    >
                      <Text style={{ color: "#304049", fontWeight: "500" }}>
                        Automatic
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 5,
                      flexDirection: "row",
                      marginTop: 10,
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Image
                        source={require("../assets/home.png")}
                        style={{ height: 10, width: 10, tintColor: "#8f8f8f" }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#8f8f8f",
                          fontSize: 14,
                          fontWeight: "500",
                          marginLeft: 5,
                        }}
                      >
                        Volta Region, Nkwanta South
                      </Text>
                    </View>
                  </View>
                  <View style={{ padding: 5 }}>
                    <Text
                      style={{
                        color: "#19a868",
                        fontSize: 18,
                        fontWeight: "700",
                        marginTop: 5,
                      }}
                    >
                      GH₵18,000
                    </Text>
                  </View>
                </View>
              </View>

              {/* chat or call person */}
              <View
                style={{
                  height: 38,

                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#00b6ef",
                    borderBottomWidth: 4,

                    height: "100%",
                    flex: 1,
                  }}
                >
                  <Image
                    source={require("../assets/message.png")}
                    style={{ height: 22, width: 22 }}
                  />
                  <Text>Chat</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#00b6ef",
                    borderBottomWidth: 4,

                    height: "100%",
                    flex: 1,
                  }}
                >
                  <Image
                    source={require("../assets/message.png")}
                    style={{ height: 24, width: 24 }}
                  />
                  <Text>Chat</Text>
                </View>
              </View>
            </View>
            <View style={{ height: 200 }} />
          </ScrollView>
        );
      }}
    />
  </View>
);
const Home = ({ scrollOffsetY }) => {
  const theme = useColorScheme();
  const navi = useNavigation();

  const navigateToScreen = () => {
    // navi.navigate("ScreenName");
  };

  return (
    <>
      <StatusBar style="light" />

      <View
        style={{
          overflow: "hidden",
          flex: 1,
          paddingBottom: 90,
        }}
      >
        <CategoryItems
          scrollOffsetY={scrollOffsetY}
          navigateToScreen={navigateToScreen}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "blue",
    height: 100, // Fixed height for the header
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "white",
  },
  flatListContainer: {
    flex: 1,
    // backgroundColor: "#f7ffff",
    // backgroundColor: "blue",
  },
  flatList: {
    flex: 1,
    margin: 5,
    // backgroundColor: "blue",
  },
  emptyItem: {
    flex: 1,
    backgroundColor: "transparent",
    margin: 5,
  },
  gridItem: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#f5f5f5",
    margin: 5,
    height: WIDTH / numColumns,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    flexWrap: "wrap",
    width: "100%",

    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    color: "#5c5c5c",
  },
  categoryItemImage: {
    height: 60,
    width: 60,
  },
});
export default Home;
