import { TouchableOpacity as TO } from "react-native-gesture-handler";
import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";

import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Home(props) {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home {count}</Text>
      <TO
        style={{ height: 200, width: 100, backgroundColor: "red" }}
        onPress={() => setCount((c) => c + 1)}
      >
        <View />
      </TO>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("lol");
        }}
      >
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

function Lol() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Lol</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator detachInactiveScreens>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="lol" component={Lol} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
