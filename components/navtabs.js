import { View, Text, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import NewAD from "../screens/NewAD";
import Messages from "../screens/Messages";
import Profile from "../screens/Profile";
import BottomNavItem from "./bottomNavItem";
import { COLORS } from "../constants";
import { useColorScheme } from "react-native";
import DynamicHeader from "./DynamicHeader";
import { useRef } from "react";
const Tab = createBottomTabNavigator();
function getColor(comp, theme, style) {
  return COLORS[comp]?.[theme]?.[style] ?? null;
}

export default function NavigationTabs() {
  const theme = useColorScheme();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          height: 100,
          backgroundColor: "green",
        },
        tabBarStyle: {
          position: "absolute",
          height: 100,
          bottom: -10,
          justifyContent: "center",
          backgroundColor: getColor("bottomnav", theme, "backgroundColor"),
          borderTopColor: getColor("bottomnav", theme, "borderTopColor"),
        },
        tabBarShowLabel: false,
        // headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        // component={() => <Home scrollOffsetY={scrollOffsetY} />}
        options={{
          header: () => <DynamicHeader animHeaderValue={scrollOffsetY} />,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <BottomNavItem
              label={"Home"}
              focused={focused}
              iconName={"homeIcon"}
              theme={theme}
            />
          ),
        }}
      >
        {() => <Home scrollOffsetY={scrollOffsetY} />}
      </Tab.Screen>

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          header: () => (
            <View>
              <Text>Custom Header for Home</Text>
            </View>
          ),
          tabBarLabel: "Favorites",
          tabBarIcon: ({ focused }) => (
            <BottomNavItem
              label={"Favorites"}
              focused={focused}
              iconName={"favIcon"}
              theme={theme}
            />
          ),
        }}
      />

      <Tab.Screen
        name="NewAd"
        component={NewAD}
        options={{
          tabBarLabel: "New Ad",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "#31a72d",
                borderRadius: "50%",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  height: "100%",
                  width: 6,
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  backgroundColor: "white",
                  height: 6,
                  width: "100%",
                  borderRadius: 8,
                  position: "absolute",
                  bottom: 22,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ focused }) => (
            <BottomNavItem
              label={"Messages"}
              focused={focused}
              iconName={"messageIcon"}
              notifications={20}
              theme={theme}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <BottomNavItem
              label={"Profile"}
              focused={focused}
              iconName={"profileIcon"}
              notifications={145}
              theme={theme}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
